"""
Unified Flask Server for Photo Prompt Generator
Serves both frontend and API endpoints
Optimized for handling thousands of records
With user authentication, gallery, and lists features
"""

from flask import Flask, request, jsonify, send_file, g, session, redirect, url_for
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from dotenv import load_dotenv
import sqlite3
import os
import json
import secrets
from datetime import datetime, timedelta
from functools import wraps

# Load environment variables from .env file
load_dotenv()

# ==================== APP CONFIGURATION ====================

app = Flask(__name__, static_folder='.', static_url_path='')
app.secret_key = os.getenv('SECRET_KEY', secrets.token_hex(32))
CORS(app, supports_credentials=True)

# Configuration from environment
ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'ni.choban@gmail.com')
GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID', '')
HOST = os.getenv('HOST', '0.0.0.0')
PORT = int(os.getenv('PORT', 5001))

# Database configuration
DB_PATH = os.path.join(os.path.dirname(__file__), os.getenv('DATABASE_PATH', 'data/prompts.db'))

# Ensure data directory exists
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

# ==================== DATABASE LAYER ====================

def get_db():
    """Get database connection with optimizations for performance"""
    if 'db' not in g:
        g.db = sqlite3.connect(
            DB_PATH,
            detect_types=sqlite3.PARSE_DECLTYPES | sqlite3.PARSE_COLNAMES
        )
        g.db.row_factory = sqlite3.Row
        # Performance optimizations for SQLite
        g.db.execute('PRAGMA journal_mode=WAL')  # Write-Ahead Logging for better concurrency
        g.db.execute('PRAGMA synchronous=NORMAL')  # Balance between safety and speed
        g.db.execute('PRAGMA cache_size=10000')  # Larger cache for better performance
        g.db.execute('PRAGMA temp_store=MEMORY')  # Store temp tables in memory
    return g.db

@app.teardown_appcontext
def close_db(exception):
    """Close database connection at end of request"""
    db = g.pop('db', None)
    if db is not None:
        db.close()

def init_db():
    """Initialize the database with optimized schema and indexes"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Enable WAL mode for better concurrency
    cursor.execute('PRAGMA journal_mode=WAL')
    
    # Main prompts table with proper data types
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS prompts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            prompt_type TEXT NOT NULL DEFAULT 'photo',
            prompt_text TEXT,
            prompt_data TEXT,
            mode TEXT DEFAULT 'photo',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            ip_address TEXT,
            user_agent TEXT,
            session_id TEXT,
            user_id INTEGER,
            is_public BOOLEAN DEFAULT 1
        )
    ''')
    
    # Create indexes for fast queries
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_prompts_type ON prompts(prompt_type)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_prompts_mode ON prompts(mode)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_prompts_created ON prompts(created_at DESC)')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_prompts_date ON prompts(DATE(created_at))')
    
    # Daily stats table for aggregated statistics
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS daily_stats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            stat_date DATE UNIQUE NOT NULL,
            total_prompts INTEGER DEFAULT 0,
            photo_prompts INTEGER DEFAULT 0,
            prd_prompts INTEGER DEFAULT 0,
            llm_prompts INTEGER DEFAULT 0,
            unique_ips INTEGER DEFAULT 0
        )
    ''')
    
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_daily_stats_date ON daily_stats(stat_date DESC)')
    
    # Global stats table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS global_stats (
            stat_name TEXT PRIMARY KEY,
            stat_value INTEGER DEFAULT 0,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Initialize global stats
    cursor.execute('''
        INSERT OR IGNORE INTO global_stats (stat_name, stat_value) 
        VALUES ('total_prompts', 0), ('total_sessions', 0)
    ''')
    
    # Users table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT DEFAULT '',
            name TEXT,
            role TEXT DEFAULT 'user',
            is_active BOOLEAN DEFAULT 1,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            last_login TIMESTAMP,
            google_id TEXT,
            picture TEXT
        )
    ''')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)')
    
    # Add google columns if not exists
    cursor.execute("PRAGMA table_info(users)")
    user_columns = [col[1] for col in cursor.fetchall()]
    if 'google_id' not in user_columns:
        cursor.execute('ALTER TABLE users ADD COLUMN google_id TEXT')
    if 'picture' not in user_columns:
        cursor.execute('ALTER TABLE users ADD COLUMN picture TEXT')
    
    # User lists table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS user_lists (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            description TEXT,
            is_public BOOLEAN DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
        )
    ''')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_user_lists_user ON user_lists(user_id)')
    
    # List items table (prompts in lists) - NO CASCADE on prompt_id so items persist after prompt deletion
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS list_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            list_id INTEGER NOT NULL,
            prompt_id INTEGER,
            added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            notes TEXT,
            prompt_snapshot TEXT,
            FOREIGN KEY (list_id) REFERENCES user_lists(id) ON DELETE CASCADE
        )
    ''')
    cursor.execute('CREATE INDEX IF NOT EXISTS idx_list_items_list ON list_items(list_id)')
    
    # Check if list_items needs migration (remove CASCADE on prompt_id)
    cursor.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name='list_items'")
    result = cursor.fetchone()
    if result and 'prompt_id' in result[0] and 'ON DELETE CASCADE' in result[0] and result[0].count('ON DELETE CASCADE') > 1:
        # Old table has CASCADE on prompt_id - need to migrate
        cursor.execute('ALTER TABLE list_items RENAME TO list_items_old')
        cursor.execute('''
            CREATE TABLE list_items (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                list_id INTEGER NOT NULL,
                prompt_id INTEGER,
                added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                notes TEXT,
                prompt_snapshot TEXT,
                FOREIGN KEY (list_id) REFERENCES user_lists(id) ON DELETE CASCADE
            )
        ''')
        cursor.execute('''
            INSERT INTO list_items (id, list_id, prompt_id, added_at, notes, prompt_snapshot)
            SELECT id, list_id, prompt_id, added_at, notes, prompt_snapshot FROM list_items_old
        ''')
        cursor.execute('DROP TABLE list_items_old')
        cursor.execute('CREATE INDEX IF NOT EXISTS idx_list_items_list ON list_items(list_id)')
        print("✅ Migrated list_items table - removed CASCADE on prompt_id")
    
    # Add user_id column to prompts if not exists
    cursor.execute("PRAGMA table_info(prompts)")
    columns = [col[1] for col in cursor.fetchall()]
    if 'user_id' not in columns:
        cursor.execute('ALTER TABLE prompts ADD COLUMN user_id INTEGER')
    if 'is_public' not in columns:
        cursor.execute('ALTER TABLE prompts ADD COLUMN is_public BOOLEAN DEFAULT 1')
    
    # Create admin user if not exists
    cursor.execute('SELECT id FROM users WHERE email = ?', (ADMIN_EMAIL,))
    if not cursor.fetchone():
        admin_hash = generate_password_hash('admin123')  # Default password - should be changed!
        cursor.execute('''
            INSERT INTO users (email, password_hash, name, role) VALUES (?, ?, ?, ?)
        ''', (ADMIN_EMAIL, admin_hash, 'Admin', 'admin'))
        print(f"👤 Admin user created: {ADMIN_EMAIL} (password: admin123 - CHANGE THIS!)")
    
    conn.commit()
    conn.close()
    
    print("✅ Database initialized with optimized schema")

# ==================== AUTH HELPERS ====================

def get_current_user():
    """Get current logged in user from session"""
    user_id = session.get('user_id')
    if not user_id:
        return None
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, email, name, role FROM users WHERE id = ? AND is_active = 1', (user_id,))
    user = cursor.fetchone()
    return dict(user) if user else None

def login_required(f):
    """Decorator to require login for a route"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not get_current_user():
            return jsonify({'error': 'Login required'}), 401
        return f(*args, **kwargs)
    return decorated_function

def admin_required(f):
    """Decorator to require admin role for a route"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        user = get_current_user()
        if not user or user['role'] != 'admin':
            return jsonify({'error': 'Admin access required'}), 403
        return f(*args, **kwargs)
    return decorated_function

# ==================== STATIC FILE ROUTES ====================

@app.route('/')
def index():
    """Serve the prompt generator - public access"""
    return send_file('index.html')

@app.route('/login')
def login_page():
    """Serve login page"""
    return send_file('login.html')

@app.route('/presets.js')
def presets():
    """Serve the presets JavaScript file"""
    return send_file('presets.js')

@app.route('/favicon.svg')
def favicon():
    """Serve the favicon"""
    return send_file('favicon.svg')

@app.route('/gallery')
def gallery_page():
    """Serve the gallery page (requires login)"""
    return send_file('gallery.html')

# ==================== AUTH API ROUTES ====================

@app.route('/api/auth/google', methods=['POST'])
def google_auth():
    """Authenticate with Google OAuth token"""
    try:
        data = request.get_json()
        credential = data.get('credential', '')
        
        if not credential:
            return jsonify({'error': 'No credential provided'}), 400
        
        # Decode Google JWT token (we trust the token from Google Sign-In)
        import base64
        # Split the JWT and decode payload
        parts = credential.split('.')
        if len(parts) != 3:
            return jsonify({'error': 'Invalid token format'}), 400
        
        # Decode payload (add padding if needed)
        payload = parts[1]
        payload += '=' * (4 - len(payload) % 4)
        decoded = json.loads(base64.urlsafe_b64decode(payload))
        
        email = decoded.get('email', '').lower()
        name = decoded.get('name', '')
        picture = decoded.get('picture', '')
        google_id = decoded.get('sub', '')
        
        if not email:
            return jsonify({'error': 'No email in token'}), 400
        
        db = get_db()
        cursor = db.cursor()
        
        # Check if user exists
        cursor.execute('SELECT id, email, name, role FROM users WHERE email = ?', (email,))
        user = cursor.fetchone()
        
        if user:
            # Update existing user
            cursor.execute('UPDATE users SET last_login = CURRENT_TIMESTAMP, name = ? WHERE id = ?', 
                          (name or user['name'], user['id']))
            db.commit()
            user_id = user['id']
            role = user['role']
        else:
            # Create new user
            role = 'admin' if email == ADMIN_EMAIL else 'user'
            cursor.execute('''
                INSERT INTO users (email, password_hash, name, role, google_id, picture) 
                VALUES (?, ?, ?, ?, ?, ?)
            ''', (email, '', name or email.split('@')[0], role, google_id, picture))
            db.commit()
            user_id = cursor.lastrowid
        
        # Set session
        session['user_id'] = user_id
        
        return jsonify({
            'success': True,
            'user': {
                'id': user_id, 
                'email': email, 
                'name': name or email.split('@')[0], 
                'role': role,
                'picture': picture
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    """Logout user"""
    session.pop('user_id', None)
    return jsonify({'success': True}), 200

@app.route('/api/auth/me', methods=['GET'])
def get_me():
    """Get current user info"""
    user = get_current_user()
    if user:
        return jsonify({'user': user}), 200
    return jsonify({'user': None}), 200

@app.route('/api/auth/change-password', methods=['POST'])
@login_required
def change_password():
    """Change user password"""
    try:
        data = request.get_json()
        current_password = data.get('current_password', '')
        new_password = data.get('new_password', '')
        
        if len(new_password) < 6:
            return jsonify({'error': 'New password must be at least 6 characters'}), 400
        
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('SELECT password_hash FROM users WHERE id = ?', (user['id'],))
        result = cursor.fetchone()
        
        if not check_password_hash(result['password_hash'], current_password):
            return jsonify({'error': 'Current password is incorrect'}), 401
        
        new_hash = generate_password_hash(new_password)
        cursor.execute('UPDATE users SET password_hash = ? WHERE id = ?', (new_hash, user['id']))
        db.commit()
        
        return jsonify({'success': True}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ==================== GALLERY API ROUTES ====================

@app.route('/api/gallery', methods=['GET'])
@login_required
def get_gallery():
    """Get public prompts for gallery with pagination"""
    try:
        limit = min(int(request.args.get('limit', 20)), 100)
        offset = int(request.args.get('offset', 0))
        mode = request.args.get('mode', None)
        search = request.args.get('search', '')
        
        db = get_db()
        cursor = db.cursor()
        
        query = 'SELECT id, prompt_type, prompt_text, prompt_data, mode, created_at FROM prompts WHERE is_public = 1'
        params = []
        
        if mode:
            query += ' AND mode = ?'
            params.append(mode)
        
        if search:
            query += ' AND (prompt_text LIKE ? OR prompt_data LIKE ?)'
            params.extend([f'%{search}%', f'%{search}%'])
        
        query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'
        params.extend([limit, offset])
        
        cursor.execute(query, params)
        prompts = [dict(row) for row in cursor.fetchall()]
        
        # Get total count
        count_query = 'SELECT COUNT(*) as count FROM prompts WHERE is_public = 1'
        count_params = []
        if mode:
            count_query += ' AND mode = ?'
            count_params.append(mode)
        if search:
            count_query += ' AND (prompt_text LIKE ? OR prompt_data LIKE ?)'
            count_params.extend([f'%{search}%', f'%{search}%'])
        
        cursor.execute(count_query, count_params)
        total = cursor.fetchone()['count']
        
        return jsonify({
            'prompts': prompts,
            'total': total,
            'limit': limit,
            'offset': offset
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/gallery/<int:prompt_id>', methods=['GET'])
def get_gallery_prompt(prompt_id):
    """Get a single prompt details - accessible for public prompts or owner's prompts"""
    try:
        db = get_db()
        cursor = db.cursor()
        user = get_current_user()
        
        # Get prompt - allow if public OR if user owns it
        if user:
            cursor.execute('SELECT * FROM prompts WHERE id = ? AND (is_public = 1 OR user_id = ?)', (prompt_id, user['id']))
        else:
            cursor.execute('SELECT * FROM prompts WHERE id = ? AND is_public = 1', (prompt_id,))
        
        prompt = cursor.fetchone()
        
        if not prompt:
            return jsonify({'error': 'Prompt not found'}), 404
        
        return jsonify({'prompt': dict(prompt)}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ==================== USER PROMPTS API ROUTES ====================

@app.route('/api/my-prompts', methods=['GET'])
@login_required
def get_my_prompts():
    """Get current user's prompts"""
    try:
        user = get_current_user()
        limit = min(int(request.args.get('limit', 20)), 100)
        offset = int(request.args.get('offset', 0))
        
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('''
            SELECT id, prompt_type, prompt_text, prompt_data, mode, created_at, is_public 
            FROM prompts 
            WHERE user_id = ? 
            ORDER BY created_at DESC 
            LIMIT ? OFFSET ?
        ''', (user['id'], limit, offset))
        
        prompts = [dict(row) for row in cursor.fetchall()]
        
        # Get total count
        cursor.execute('SELECT COUNT(*) as count FROM prompts WHERE user_id = ?', (user['id'],))
        total = cursor.fetchone()['count']
        
        return jsonify({
            'prompts': prompts,
            'total': total,
            'limit': limit,
            'offset': offset
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/my-prompts/<int:prompt_id>/visibility', methods=['PUT'])
@login_required
def toggle_my_prompt_visibility(prompt_id):
    """Toggle public/private for user's own prompt"""
    try:
        user = get_current_user()
        data = request.get_json()
        is_public = data.get('is_public', False)
        
        db = get_db()
        cursor = db.cursor()
        
        # Verify ownership
        cursor.execute('SELECT id FROM prompts WHERE id = ? AND user_id = ?', (prompt_id, user['id']))
        if not cursor.fetchone():
            return jsonify({'error': 'Prompt not found or not yours'}), 404
        
        cursor.execute('UPDATE prompts SET is_public = ? WHERE id = ?', (is_public, prompt_id))
        db.commit()
        
        return jsonify({'success': True, 'is_public': is_public}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/my-prompts/<int:prompt_id>', methods=['DELETE'])
@login_required
def delete_my_prompt(prompt_id):
    """Delete user's own prompt"""
    try:
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        # Verify ownership
        cursor.execute('SELECT id FROM prompts WHERE id = ? AND user_id = ?', (prompt_id, user['id']))
        if not cursor.fetchone():
            return jsonify({'error': 'Prompt not found or not yours'}), 404
        
        cursor.execute('DELETE FROM prompts WHERE id = ?', (prompt_id,))
        db.commit()
        
        return jsonify({'success': True}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ==================== USER LISTS API ROUTES ====================

@app.route('/api/lists', methods=['GET'])
@login_required
def get_user_lists():
    """Get current user's lists"""
    try:
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('''
            SELECT ul.*, COUNT(li.id) as item_count 
            FROM user_lists ul 
            LEFT JOIN list_items li ON ul.id = li.list_id 
            WHERE ul.user_id = ? 
            GROUP BY ul.id 
            ORDER BY ul.created_at DESC
        ''', (user['id'],))
        
        lists = [dict(row) for row in cursor.fetchall()]
        return jsonify({'lists': lists}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/lists', methods=['POST'])
@login_required
def create_list():
    """Create a new list"""
    try:
        data = request.get_json()
        name = data.get('name', '').strip()
        description = data.get('description', '').strip()
        
        if not name:
            return jsonify({'error': 'List name required'}), 400
        
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('''
            INSERT INTO user_lists (user_id, name, description) VALUES (?, ?, ?)
        ''', (user['id'], name, description))
        
        db.commit()
        list_id = cursor.lastrowid
        
        return jsonify({
            'success': True,
            'list': {'id': list_id, 'name': name, 'description': description}
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/lists/<int:list_id>', methods=['GET'])
@login_required
def get_list(list_id):
    """Get a list with its prompts"""
    try:
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        # Get list info
        cursor.execute('SELECT * FROM user_lists WHERE id = ? AND user_id = ?', (list_id, user['id']))
        list_info = cursor.fetchone()
        
        if not list_info:
            return jsonify({'error': 'List not found'}), 404
        
        # Get list items with prompt data (LEFT JOIN to keep items even if prompt deleted)
        cursor.execute('''
            SELECT li.*, p.prompt_type, p.prompt_text, p.prompt_data, p.mode, p.created_at as prompt_created_at
            FROM list_items li
            LEFT JOIN prompts p ON li.prompt_id = p.id
            WHERE li.list_id = ?
            ORDER BY li.added_at DESC
        ''', (list_id,))
        
        items = []
        for row in cursor.fetchall():
            item = dict(row)
            # If prompt was deleted, use snapshot
            if item.get('prompt_data') is None and item.get('prompt_snapshot'):
                import json
                try:
                    snapshot = json.loads(item['prompt_snapshot'])
                    item['prompt_type'] = snapshot.get('prompt_type', 'unknown')
                    item['prompt_text'] = snapshot.get('prompt_text', '')
                    item['prompt_data'] = item['prompt_snapshot']
                    item['mode'] = snapshot.get('mode', 'photo')
                    item['prompt_deleted'] = True
                except:
                    pass
            items.append(item)
        
        return jsonify({
            'list': dict(list_info),
            'items': items
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/lists/<int:list_id>', methods=['PUT'])
@login_required
def update_list(list_id):
    """Update a list"""
    try:
        data = request.get_json()
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('SELECT id FROM user_lists WHERE id = ? AND user_id = ?', (list_id, user['id']))
        if not cursor.fetchone():
            return jsonify({'error': 'List not found'}), 404
        
        cursor.execute('''
            UPDATE user_lists SET name = ?, description = ? WHERE id = ?
        ''', (data.get('name', ''), data.get('description', ''), list_id))
        
        db.commit()
        return jsonify({'success': True}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/lists/<int:list_id>', methods=['DELETE'])
@login_required
def delete_list(list_id):
    """Delete a list"""
    try:
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('SELECT id FROM user_lists WHERE id = ? AND user_id = ?', (list_id, user['id']))
        if not cursor.fetchone():
            return jsonify({'error': 'List not found'}), 404
        
        cursor.execute('DELETE FROM user_lists WHERE id = ?', (list_id,))
        db.commit()
        
        return jsonify({'success': True}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/lists/<int:list_id>/items', methods=['POST'])
@login_required
def add_to_list(list_id):
    """Add a prompt to a list"""
    try:
        data = request.get_json()
        prompt_id = data.get('prompt_id')
        notes = data.get('notes', '')
        
        if not prompt_id:
            return jsonify({'error': 'Prompt ID required'}), 400
        
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        # Verify list ownership
        cursor.execute('SELECT id FROM user_lists WHERE id = ? AND user_id = ?', (list_id, user['id']))
        if not cursor.fetchone():
            return jsonify({'error': 'List not found'}), 404
        
        # Get prompt data for snapshot
        cursor.execute('SELECT prompt_type, prompt_text, prompt_data, mode FROM prompts WHERE id = ?', (prompt_id,))
        prompt = cursor.fetchone()
        if not prompt:
            return jsonify({'error': 'Prompt not found'}), 404
        
        # Create snapshot of prompt data
        import json
        snapshot = json.dumps({
            'prompt_type': prompt['prompt_type'],
            'prompt_text': prompt['prompt_text'],
            'prompt_data': prompt['prompt_data'],
            'mode': prompt['mode']
        })
        
        # Add to list with snapshot
        cursor.execute('''
            INSERT OR IGNORE INTO list_items (list_id, prompt_id, notes, prompt_snapshot) VALUES (?, ?, ?, ?)
        ''', (list_id, prompt_id, notes, snapshot))
        
        db.commit()
        return jsonify({'success': True}), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/lists/<int:list_id>/items/<int:prompt_id>', methods=['DELETE'])
@login_required
def remove_from_list(list_id, prompt_id):
    """Remove a prompt from a list"""
    try:
        user = get_current_user()
        db = get_db()
        cursor = db.cursor()
        
        cursor.execute('SELECT id FROM user_lists WHERE id = ? AND user_id = ?', (list_id, user['id']))
        if not cursor.fetchone():
            return jsonify({'error': 'List not found'}), 404
        
        cursor.execute('DELETE FROM list_items WHERE list_id = ? AND prompt_id = ?', (list_id, prompt_id))
        db.commit()
        
        return jsonify({'success': True}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ==================== ADMIN API ROUTES ====================

@app.route('/api/admin/users', methods=['GET'])
@admin_required
def get_all_users():
    """Get all users (admin only)"""
    try:
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT id, email, name, role, is_active, created_at, last_login FROM users ORDER BY created_at DESC')
        users = [dict(row) for row in cursor.fetchall()]
        return jsonify({'users': users}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/users/<int:user_id>', methods=['DELETE'])
@admin_required
def delete_user(user_id):
    """Delete a user (admin only)"""
    try:
        user = get_current_user()
        if user['id'] == user_id:
            return jsonify({'error': 'Cannot delete yourself'}), 400
        
        db = get_db()
        cursor = db.cursor()
        cursor.execute('DELETE FROM users WHERE id = ?', (user_id,))
        db.commit()
        
        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/prompts/<int:prompt_id>', methods=['DELETE'])
@admin_required
def admin_delete_prompt(prompt_id):
    """Delete any prompt (admin only)"""
    try:
        db = get_db()
        cursor = db.cursor()
        cursor.execute('DELETE FROM prompts WHERE id = ?', (prompt_id,))
        db.commit()
        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/admin/prompts/<int:prompt_id>/visibility', methods=['PUT'])
@admin_required
def toggle_prompt_visibility(prompt_id):
    """Toggle prompt public/private (admin only)"""
    try:
        data = request.get_json()
        is_public = data.get('is_public', True)
        
        db = get_db()
        cursor = db.cursor()
        cursor.execute('UPDATE prompts SET is_public = ? WHERE id = ?', (is_public, prompt_id))
        db.commit()
        
        return jsonify({'success': True}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ==================== API ROUTES ====================

@app.route('/api/prompts', methods=['POST'])
def save_prompt():
    """Save a generated prompt to the database"""
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        db = get_db()
        cursor = db.cursor()
        
        mode = data.get('mode', 'photo')
        prompt_type = data.get('type', mode)
        
        # Get current user if logged in
        user = get_current_user()
        user_id = user['id'] if user else None
        
        # Determine if prompt should be public
        # - Not logged in: always public (default behavior)
        # - Logged in: user chooses (default: private, unless explicitly set to public)
        if user_id:
            is_public = data.get('is_public', False)
        else:
            is_public = True  # Anonymous users always public
        
        # Duplicate check - prevent saving identical prompts
        prompt_data_json = json.dumps(data)
        natural_prompt = data.get('natural_prompt', '')
        
        if user_id:
            # For logged-in users, check by user_id and natural_prompt
            cursor.execute('''
                SELECT id FROM prompts 
                WHERE user_id = ? AND prompt_text = ?
                ORDER BY created_at DESC LIMIT 1
            ''', (user_id, natural_prompt))
        else:
            # For anonymous users, check by IP and natural_prompt (last 5 minutes)
            cursor.execute('''
                SELECT id FROM prompts 
                WHERE ip_address = ? AND prompt_text = ? 
                AND created_at > datetime('now', '-5 minutes')
                ORDER BY created_at DESC LIMIT 1
            ''', (request.remote_addr, natural_prompt))
        
        existing = cursor.fetchone()
        if existing:
            return jsonify({
                'success': False,
                'duplicate': True,
                'message': 'This prompt already exists in your gallery'
            }), 200  # Return 200 so frontend doesn't show error
        
        # Save the prompt
        cursor.execute('''
            INSERT INTO prompts (prompt_type, prompt_text, prompt_data, mode, ip_address, user_agent, session_id, user_id, is_public)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', (
            prompt_type,
            data.get('natural_prompt', data.get('prompt_text', '')),
            json.dumps(data),
            mode,
            request.remote_addr,
            request.headers.get('User-Agent', '')[:500],
            data.get('session_id', ''),
            user_id,
            is_public
        ))
        
        # Update global stats
        cursor.execute('''
            INSERT INTO global_stats (stat_name, stat_value, updated_at) 
            VALUES ('total_prompts', 1, CURRENT_TIMESTAMP)
            ON CONFLICT(stat_name) DO UPDATE SET 
                stat_value = stat_value + 1,
                updated_at = CURRENT_TIMESTAMP
        ''')
        
        # Update daily stats
        today = datetime.now().strftime('%Y-%m-%d')
        cursor.execute('''
            INSERT INTO daily_stats (stat_date, total_prompts, photo_prompts, prd_prompts, llm_prompts)
            VALUES (?, 1, ?, ?, ?)
            ON CONFLICT(stat_date) DO UPDATE SET 
                total_prompts = total_prompts + 1,
                photo_prompts = photo_prompts + ?,
                prd_prompts = prd_prompts + ?,
                llm_prompts = llm_prompts + ?
        ''', (
            today,
            1 if mode == 'photo' else 0,
            1 if mode == 'prd' else 0,
            1 if mode == 'llm' else 0,
            1 if mode == 'photo' else 0,
            1 if mode == 'prd' else 0,
            1 if mode == 'llm' else 0
        ))
        
        db.commit()
        prompt_id = cursor.lastrowid
        
        return jsonify({
            'success': True,
            'id': prompt_id,
            'message': 'Prompt saved successfully'
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/prompts', methods=['GET'])
def get_prompts():
    """Get recent prompts with pagination"""
    try:
        limit = min(int(request.args.get('limit', 20)), 100)
        offset = int(request.args.get('offset', 0))
        mode = request.args.get('mode', None)
        
        db = get_db()
        cursor = db.cursor()
        
        if mode:
            cursor.execute('''
                SELECT id, prompt_type, mode, created_at FROM prompts 
                WHERE mode = ?
                ORDER BY created_at DESC LIMIT ? OFFSET ?
            ''', (mode, limit, offset))
        else:
            cursor.execute('''
                SELECT id, prompt_type, mode, created_at FROM prompts 
                ORDER BY created_at DESC LIMIT ? OFFSET ?
            ''', (limit, offset))
        
        prompts = [dict(row) for row in cursor.fetchall()]
        
        # Get total count for pagination
        if mode:
            cursor.execute('SELECT COUNT(*) as count FROM prompts WHERE mode = ?', (mode,))
        else:
            cursor.execute('SELECT COUNT(*) as count FROM prompts')
        total = cursor.fetchone()['count']
        
        return jsonify({
            'prompts': prompts,
            'total': total,
            'limit': limit,
            'offset': offset
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get usage statistics - optimized for large datasets"""
    try:
        db = get_db()
        cursor = db.cursor()
        
        # Get total prompts from global_stats (fast)
        cursor.execute('SELECT stat_value FROM global_stats WHERE stat_name = ?', ('total_prompts',))
        result = cursor.fetchone()
        total_prompts = result['stat_value'] if result else 0
        
        # Get prompts by mode (uses index)
        cursor.execute('''
            SELECT mode, COUNT(*) as count 
            FROM prompts 
            GROUP BY mode
        ''')
        by_mode = {row['mode']: row['count'] for row in cursor.fetchall()}
        
        # Get today's count from daily_stats (fast) or calculate
        today = datetime.now().strftime('%Y-%m-%d')
        cursor.execute('SELECT total_prompts FROM daily_stats WHERE stat_date = ?', (today,))
        result = cursor.fetchone()
        today_count = result['total_prompts'] if result else 0
        
        # Get last 7 days trend
        cursor.execute('''
            SELECT stat_date, total_prompts FROM daily_stats 
            ORDER BY stat_date DESC LIMIT 7
        ''')
        weekly_trend = [dict(row) for row in cursor.fetchall()]
        
        return jsonify({
            'total_prompts': total_prompts,
            'prompts_by_mode': by_mode,
            'today_count': today_count,
            'weekly_trend': weekly_trend,
            'status': 'online'
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e), 'status': 'error'}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    }), 200

# ==================== ERROR HANDLERS ====================

@app.errorhandler(404)
def not_found(e):
    """Handle 404 errors - try to serve static files"""
    return jsonify({'error': 'Not found'}), 404

@app.errorhandler(429)
def rate_limited(e):
    """Handle rate limit errors"""
    return jsonify({'error': 'Too many requests. Please slow down.'}), 429

# ==================== CONFIG API ====================

@app.route('/api/config', methods=['GET'])
def get_config():
    """Get public configuration for frontend"""
    return jsonify({
        'google_client_id': GOOGLE_CLIENT_ID
    }), 200

# ==================== MAIN ====================

if __name__ == '__main__':
    # Initialize database
    init_db()
    
    # Run the server
    debug_mode = os.getenv('FLASK_DEBUG', 'true').lower() == 'true'
    print("🚀 Starting Prompt Generator Server...")
    print(f"📍 Open http://localhost:{PORT} in your browser")
    print("=" * 50)
    
    app.run(
        host=HOST,
        port=PORT,
        debug=debug_mode
    )
