/**
 * Photo Prompt Generator - 100 Default Presets
 * Ready-to-use templates for various photography scenarios
 */

const DEFAULT_PRESETS = {
    // ==================== COUPLE & MULTI-PERSON PRESETS (1-20) ====================
    
    "romantic_couple": {
        name: "Romantic Couple", icon: "💑", category: "portrait",
        description: "Romantic couple portrait with soft lighting",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "mediterranean", age_group: "young adult", body_type: "slim", hair_style: "long flowing", hair_color: "dark brown", expression: "gentle smile", pose: "leaning", clothing_style: "elegant", clothing_type: "dress", clothing_color: "burgundy" },
                { gender: "male", ethnicity: "mediterranean", age_group: "young adult", body_type: "athletic", hair_style: "short cropped", hair_color: "black", expression: "smiling", pose: "standing", clothing_style: "formal", clothing_type: "suit", clothing_color: "navy blue" }
            ],
            lighting: "golden hour", mood: "romantic", color_palette: "warm tones", setting: "outdoor",
            _sceneObjects: [
                { label: "Red roses bouquet", category: "props", location: "foreground", prominence: "secondary", color: "deep red", material: "natural", state: "fresh blooming" },
                { label: "Vintage bench", category: "furniture", location: "center", prominence: "background", color: "weathered white", material: "wrought iron" }
            ],
            _semanticRelationships: [
                { subject: "Woman", action: "holding", object: "roses bouquet" },
                { subject: "Man", action: "embracing", object: "woman" }
            ]
        }
    },
    "fashion_duo": {
        name: "Fashion Duo", icon: "👯", category: "fashion",
        description: "High fashion editorial with two models",
        data: {
            subject_type: "fashion", style: "photorealistic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "east asian", age_group: "young adult", body_type: "model physique", hair_style: "bob cut", hair_color: "black", expression: "serious", pose: "action pose", clothing_style: "haute couture", clothing_type: "gown", clothing_color: "white", makeup_style: "editorial" },
                { gender: "female", ethnicity: "african", age_group: "young adult", body_type: "model physique", hair_style: "afro", hair_color: "black", expression: "confident", pose: "formal pose", clothing_style: "avant-garde", clothing_type: "jacket", clothing_color: "black", makeup_style: "bold lip" }
            ],
            lighting: "studio lighting", mood: "intense", color_palette: "monochrome",
            _sceneObjects: [
                { label: "Designer handbag", category: "props", location: "foreground", prominence: "secondary", color: "metallic silver", material: "leather", state: "pristine" },
                { label: "Studio backdrop", category: "background", location: "background", prominence: "background", color: "pure white", texture: "seamless" }
            ],
            _semanticRelationships: [
                { subject: "Model 1", action: "posing with", object: "designer handbag" },
                { subject: "Models", action: "standing", object: "back to back" }
            ]
        }
    },
    "family_portrait": {
        name: "Family Portrait", icon: "👨‍👩‍👧", category: "portrait",
        description: "Warm family portrait with parents and child",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 3,
            persons: [
                { gender: "female", ethnicity: "caucasian", age_group: "adult", body_type: "average", hair_style: "shoulder length", hair_color: "auburn", expression: "smiling", pose: "sitting", clothing_style: "casual", clothing_type: "sweater", clothing_color: "cream" },
                { gender: "male", ethnicity: "caucasian", age_group: "adult", body_type: "average", hair_style: "short cropped", hair_color: "medium brown", expression: "smiling", pose: "sitting", clothing_style: "casual", clothing_type: "shirt", clothing_color: "navy blue" },
                { gender: "female", ethnicity: "caucasian", age_group: "child", body_type: "petite", hair_style: "braided", hair_color: "light brown", expression: "laughing", pose: "candid", clothing_style: "casual", clothing_type: "dress", clothing_color: "pink" }
            ],
            lighting: "natural light", mood: "joyful", setting: "cozy cafe",
            _sceneObjects: [
                { label: "Plush teddy bear", category: "props", location: "foreground", prominence: "secondary", color: "light brown", material: "soft fabric" },
                { label: "Cozy sofa", category: "furniture", location: "center", prominence: "primary", color: "beige", material: "linen" }
            ],
            _semanticRelationships: [
                { subject: "Child", action: "sitting between", object: "parents" },
                { subject: "Child", action: "holding", object: "teddy bear" }
            ]
        }
    },
    "business_team": {
        name: "Business Team", icon: "💼", category: "portrait",
        description: "Professional corporate team photo",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 4,
            persons: [
                { gender: "male", ethnicity: "south asian", age_group: "middle-aged", hair_style: "short cropped", hair_color: "black", expression: "confident", clothing_style: "business", clothing_type: "suit", clothing_color: "grey" },
                { gender: "female", ethnicity: "east asian", age_group: "adult", hair_style: "tight low bun", hair_color: "black", expression: "confident", clothing_style: "business", clothing_type: "blazer", clothing_color: "navy blue" },
                { gender: "male", ethnicity: "african", age_group: "adult", hair_style: "bald", expression: "smiling", clothing_style: "business", clothing_type: "suit", clothing_color: "black" },
                { gender: "female", ethnicity: "caucasian", age_group: "young adult", hair_style: "ponytail", hair_color: "golden blonde", expression: "smiling", clothing_style: "business", clothing_type: "blouse", clothing_color: "white" }
            ],
            lighting: "studio lighting", mood: "professional", setting: "modern office"
        }
    },
    "wedding_portrait": {
        name: "Wedding Portrait", icon: "💒", category: "portrait",
        description: "Elegant wedding couple portrait",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "caucasian", age_group: "young adult", body_type: "slim", hair_style: "half up half down", hair_color: "light brown", expression: "gentle smile", clothing_style: "elegant", clothing_type: "gown", clothing_color: "white", makeup_style: "soft glam" },
                { gender: "male", ethnicity: "caucasian", age_group: "young adult", body_type: "athletic", hair_style: "slicked back", hair_color: "dark brown", expression: "smiling", clothing_style: "formal", clothing_type: "suit", clothing_color: "black" }
            ],
            lighting: "golden hour", mood: "romantic", setting: "japanese garden",
            _sceneObjects: [
                { label: "Bridal bouquet", category: "props", location: "hands", prominence: "secondary", color: "white and blush", material: "fresh flowers" },
                { label: "Wedding rings", category: "props", location: "hands", prominence: "detail", color: "gold", material: "precious metal" },
                { label: "Flowing veil", category: "clothing", location: "bride", prominence: "secondary", color: "ivory", material: "delicate lace" }
            ],
            _semanticRelationships: [
                { subject: "Bride", action: "holding", object: "bridal bouquet" },
                { subject: "Groom", action: "holding hands with", object: "bride" }
            ]
        }
    },
    "street_friends": {
        name: "Street Friends", icon: "🚶", category: "street",
        description: "Urban street photography with friends",
        data: {
            subject_type: "street", style: "photorealistic", person_count: 3,
            persons: [
                { gender: "male", ethnicity: "latin american", age_group: "teenager", hair_style: "curly", hair_color: "black", expression: "laughing", clothing_style: "streetwear", clothing_type: "hoodie", clothing_color: "red" },
                { gender: "female", ethnicity: "mixed ethnicity", age_group: "teenager", hair_style: "space buns", hair_color: "ombre", expression: "smiling", clothing_style: "streetwear", clothing_type: "jacket", clothing_color: "denim blue" },
                { gender: "male", ethnicity: "east asian", age_group: "teenager", hair_style: "messy", hair_color: "black", expression: "candid", clothing_style: "streetwear", clothing_type: "t-shirt", clothing_color: "white" }
            ],
            lighting: "natural light", mood: "energetic", street_type: "busy downtown", geographic_region: "tokyo japan"
        }
    },
    "elderly_couple": {
        name: "Elderly Couple", icon: "👴", category: "portrait",
        description: "Heartwarming portrait of elderly couple",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "caucasian", age_group: "elderly", hair_style: "short cropped", hair_color: "silver grey", expression: "gentle smile", clothing_style: "elegant", clothing_type: "cardigan", clothing_color: "lavender" },
                { gender: "male", ethnicity: "caucasian", age_group: "elderly", hair_style: "short cropped", hair_color: "white", expression: "smiling", clothing_style: "casual", clothing_type: "sweater", clothing_color: "brown" }
            ],
            lighting: "soft", mood: "peaceful", setting: "countryside"
        }
    },
    "fitness_couple": {
        name: "Fitness Couple", icon: "💪", category: "portrait",
        description: "Athletic couple in workout setting",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "african", age_group: "young adult", body_type: "athletic", hair_style: "high ponytail", hair_color: "black", expression: "determined", clothing_style: "sporty", clothing_type: "athletic wear", clothing_color: "coral" },
                { gender: "male", ethnicity: "african", age_group: "young adult", body_type: "muscular", hair_style: "bald", expression: "determined", clothing_style: "sporty", clothing_type: "tank top", clothing_color: "black" }
            ],
            lighting: "dramatic", mood: "energetic", setting: "urban"
        }
    },
    "bohemian_sisters": {
        name: "Bohemian Sisters", icon: "🌸", category: "portrait",
        description: "Two sisters in bohemian style",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "caucasian", age_group: "young adult", hair_style: "long flowing", hair_color: "strawberry blonde", expression: "peaceful", clothing_style: "bohemian", clothing_type: "dress", clothing_color: "cream" },
                { gender: "female", ethnicity: "caucasian", age_group: "young adult", hair_style: "beach waves", hair_color: "golden blonde", expression: "smiling", clothing_style: "bohemian", clothing_type: "blouse", clothing_color: "white" }
            ],
            lighting: "golden hour", mood: "dreamy", setting: "forest clearing", season: "summer"
        }
    },
    "vintage_couple_1950s": {
        name: "1950s Retro Couple", icon: "🎸", category: "portrait",
        description: "Couple in 1950s retro style",
        data: {
            subject_type: "portrait", style: "vintage", era: "1950s retro", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "caucasian", age_group: "young adult", hair_style: "vintage waves", hair_color: "auburn", expression: "smiling", clothing_style: "vintage", clothing_type: "dress", clothing_color: "red", clothing_era: "1950s rockabilly" },
                { gender: "male", ethnicity: "caucasian", age_group: "young adult", hair_style: "slicked back", hair_color: "dark brown", expression: "confident", clothing_style: "vintage", clothing_type: "jacket", clothing_color: "black" }
            ],
            lighting: "soft", mood: "nostalgic", color_palette: "sepia"
        }
    },
    "indian_wedding": {
        name: "Indian Wedding", icon: "🎊", category: "portrait",
        description: "Traditional Indian wedding couple",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "south asian", age_group: "young adult", hair_style: "tight low bun", hair_color: "black", expression: "peaceful", clothing_style: "traditional", clothing_type: "dress", clothing_color: "red", makeup_style: "full glam", earrings: "chandelier earrings", necklace: "statement necklace" },
                { gender: "male", ethnicity: "south asian", age_group: "young adult", hair_style: "short cropped", hair_color: "black", expression: "smiling", clothing_style: "traditional", clothing_type: "suit", clothing_color: "cream" }
            ],
            lighting: "golden hour", mood: "romantic", color_palette: "jewel tones"
        }
    },
    "dance_partners": {
        name: "Dance Partners", icon: "💃", category: "portrait",
        description: "Elegant dance couple in motion",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "latin american", age_group: "adult", body_type: "slim", hair_style: "tight low bun", hair_color: "black", expression: "intense", pose: "dancing", clothing_style: "elegant", clothing_type: "dress", clothing_color: "red" },
                { gender: "male", ethnicity: "latin american", age_group: "adult", body_type: "athletic", hair_style: "slicked back", hair_color: "black", expression: "confident", pose: "dancing", clothing_style: "formal", clothing_type: "suit", clothing_color: "black" }
            ],
            lighting: "dramatic", mood: "intense", camera_settings: "motion blur"
        }
    },
    "graduation_friends": {
        name: "Graduation Friends", icon: "🎓", category: "portrait",
        description: "Group of friends at graduation",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 4,
            persons: [
                { gender: "female", ethnicity: "east asian", age_group: "young adult", hair_style: "straight", hair_color: "black", expression: "laughing", clothing_style: "formal", clothing_type: "gown", clothing_color: "black" },
                { gender: "male", ethnicity: "african", age_group: "young adult", hair_style: "short cropped", expression: "smiling", clothing_style: "formal", clothing_type: "gown", clothing_color: "black" },
                { gender: "female", ethnicity: "caucasian", age_group: "young adult", hair_style: "wavy", hair_color: "golden blonde", expression: "laughing", clothing_style: "formal", clothing_type: "gown", clothing_color: "black" },
                { gender: "male", ethnicity: "latin american", age_group: "young adult", hair_style: "curly", hair_color: "dark brown", expression: "smiling", clothing_style: "formal", clothing_type: "gown", clothing_color: "black" }
            ],
            lighting: "natural light", mood: "joyful", setting: "outdoor"
        }
    },
    "music_band": {
        name: "Music Band", icon: "🎤", category: "portrait",
        description: "Rock band promotional photo",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 4,
            persons: [
                { gender: "male", ethnicity: "caucasian", age_group: "young adult", hair_style: "long flowing", hair_color: "black", expression: "intense", clothing_style: "punk", clothing_type: "jacket", clothing_color: "black" },
                { gender: "female", ethnicity: "mixed ethnicity", age_group: "young adult", hair_style: "pixie cut", hair_color: "pink", expression: "confident", clothing_style: "punk", clothing_type: "t-shirt", clothing_color: "black" },
                { gender: "male", ethnicity: "east asian", age_group: "young adult", hair_style: "mohawk", hair_color: "blue", expression: "serious", clothing_style: "punk", clothing_type: "vest", clothing_color: "denim blue" },
                { gender: "male", ethnicity: "african", age_group: "young adult", hair_style: "dreadlocks", expression: "mysterious", clothing_style: "punk", clothing_type: "hoodie", clothing_color: "grey" }
            ],
            lighting: "dramatic", mood: "intense", color_palette: "high contrast"
        }
    },
    "beach_couple": {
        name: "Beach Couple", icon: "🏖️", category: "portrait",
        description: "Romantic couple on the beach",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "pacific islander", age_group: "young adult", body_type: "athletic", hair_style: "beach waves", hair_color: "dark brown", expression: "laughing", clothing_style: "casual", clothing_type: "swimwear", clothing_color: "coral" },
                { gender: "male", ethnicity: "pacific islander", age_group: "young adult", body_type: "muscular", hair_style: "short cropped", hair_color: "black", expression: "smiling", clothing_style: "casual", clothing_type: "shorts", clothing_color: "navy blue" }
            ],
            lighting: "golden hour", mood: "romantic", setting: "beach", time_of_day: "sunset"
        }
    },
    "best_friends": {
        name: "Best Friends", icon: "👭", category: "portrait",
        description: "Two best friends candid moment",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "african", age_group: "teenager", hair_style: "braided", hair_color: "black", expression: "laughing", clothing_style: "casual", clothing_type: "hoodie", clothing_color: "yellow" },
                { gender: "female", ethnicity: "caucasian", age_group: "teenager", hair_style: "ponytail", hair_color: "auburn", expression: "laughing", clothing_style: "casual", clothing_type: "sweater", clothing_color: "green" }
            ],
            lighting: "natural light", mood: "joyful", pose: "candid"
        }
    },
    "coffee_date": {
        name: "Coffee Date", icon: "☕", category: "portrait",
        description: "Couple on a coffee date",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 2,
            persons: [
                { gender: "female", ethnicity: "east asian", age_group: "adult", hair_style: "bob cut", hair_color: "dark brown", expression: "smiling", pose: "sitting", clothing_style: "casual", clothing_type: "sweater", clothing_color: "beige" },
                { gender: "male", ethnicity: "caucasian", age_group: "adult", hair_style: "messy", hair_color: "medium brown", expression: "smiling", pose: "sitting", clothing_style: "casual", clothing_type: "shirt", clothing_color: "white" }
            ],
            lighting: "soft", mood: "peaceful", setting: "cozy cafe",
            _sceneObjects: [
                { label: "Latte art cups", category: "props", location: "table", prominence: "secondary", color: "white ceramic", material: "porcelain" },
                { label: "Croissants", category: "props", location: "table", prominence: "detail", color: "golden brown", state: "freshly baked" },
                { label: "Rustic wooden table", category: "furniture", location: "center", prominence: "primary", color: "natural wood" }
            ],
            _semanticRelationships: [
                { subject: "Couple", action: "sitting at", object: "rustic table" },
                { subject: "Woman", action: "holding", object: "latte cup" }
            ]
        }
    },
    "yoga_class": {
        name: "Yoga Class", icon: "🧘", category: "portrait",
        description: "Women in yoga session",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 3,
            persons: [
                { gender: "female", ethnicity: "caucasian", age_group: "adult", body_type: "slim", hair_style: "ponytail", hair_color: "golden blonde", expression: "peaceful", clothing_style: "sporty", clothing_type: "athletic wear", clothing_color: "purple" },
                { gender: "female", ethnicity: "south asian", age_group: "adult", body_type: "slim", hair_style: "tight low bun", hair_color: "black", expression: "peaceful", clothing_style: "sporty", clothing_type: "athletic wear", clothing_color: "teal" },
                { gender: "female", ethnicity: "african", age_group: "adult", body_type: "athletic", hair_style: "braided", hair_color: "black", expression: "peaceful", clothing_style: "sporty", clothing_type: "athletic wear", clothing_color: "coral" }
            ],
            lighting: "soft", mood: "serene", setting: "indoor"
        }
    },
    "hiking_adventure": {
        name: "Hiking Adventure", icon: "🥾", category: "portrait",
        description: "Couple hiking in mountains",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 2,
            persons: [
                { gender: "male", ethnicity: "caucasian", age_group: "adult", body_type: "athletic", hair_style: "short cropped", hair_color: "medium brown", expression: "smiling", clothing_style: "rugged", clothing_type: "jacket", clothing_color: "olive" },
                { gender: "female", ethnicity: "east asian", age_group: "adult", body_type: "athletic", hair_style: "ponytail", hair_color: "black", expression: "smiling", clothing_style: "sporty", clothing_type: "jacket", clothing_color: "red" }
            ],
            lighting: "natural light", mood: "energetic", setting: "mountain peak", landscape_type: "mountain range"
        }
    },

    // ==================== SINGLE PORTRAIT PRESETS (21-35) ====================
    
    "dramatic_noir": {
        name: "Dramatic Noir", icon: "🎭", category: "portrait",
        description: "Film noir style dramatic portrait",
        data: {
            subject_type: "portrait", style: "noir", person_count: 1,
            persons: [{ gender: "female", ethnicity: "caucasian", age_group: "adult", hair_style: "vintage waves", hair_color: "black", expression: "mysterious", pose: "profile view", clothing_style: "elegant", clothing_type: "dress", clothing_color: "black", makeup_style: "bold lip" }],
            lighting: "chiaroscuro", mood: "mysterious", color_palette: "black and white"
        }
    },
    "cyberpunk_rebel": {
        name: "Cyberpunk Rebel", icon: "�️", category: "portrait",
        description: "Futuristic cyberpunk character",
        data: {
            subject_type: "portrait", style: "sci-fi", era: "cyberpunk future", person_count: 1,
            persons: [{ gender: "androgynous", ethnicity: "east asian", age_group: "young adult", hair_style: "mohawk", hair_color: "pink", expression: "intense", clothing_style: "futuristic", clothing_type: "jacket", clothing_color: "black", eyewear: "mirrored sunglasses" }],
            lighting: "neon", mood: "intense", setting: "futuristic city", time_of_day: "night",
            _sceneObjects: [
                { label: "Holographic display", category: "props", location: "foreground", prominence: "secondary", color: "cyan and magenta", material: "light projection" },
                { label: "Neon signs", category: "background", location: "background", prominence: "primary", color: "pink and blue", state: "glowing in rain" },
                { label: "Cybernetic arm", category: "props", location: "arm", prominence: "detail", color: "chrome and LED", material: "metal" },
                { label: "Wet streets", category: "background", location: "ground", prominence: "background", texture: "reflective puddles" }
            ],
            _semanticRelationships: [
                { subject: "Rebel", action: "interacting with", object: "holographic display" },
                { subject: "Neon lights", action: "reflecting off", object: "wet streets" }
            ]
        }
    },
    "classical_beauty": {
        name: "Classical Beauty", icon: "🏛️", category: "portrait",
        description: "Renaissance inspired portrait",
        data: {
            subject_type: "portrait", style: "renaissance", era: "renaissance", person_count: 1,
            persons: [{ gender: "female", ethnicity: "mediterranean", age_group: "young adult", hair_style: "long flowing", hair_color: "auburn", expression: "contemplative", pose: "three-quarter view", clothing_style: "traditional", clothing_type: "dress", clothing_color: "burgundy" }],
            lighting: "rembrandt lighting", mood: "serene", color_palette: "warm tones"
        }
    },
    "anime_character": {
        name: "Anime Character", icon: "✨", category: "portrait",
        description: "Anime style character",
        data: {
            subject_type: "portrait", style: "anime", person_count: 1,
            persons: [{ gender: "female", age_group: "teenager", hair_style: "long flowing", hair_color: "pink", expression: "smiling", clothing_style: "casual", clothing_type: "sweater", clothing_color: "pastel" }],
            lighting: "soft", mood: "whimsical", color_palette: "pastel"
        }
    },
    "executive_portrait": {
        name: "Executive Portrait", icon: "👔", category: "portrait",
        description: "Professional executive headshot",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 1,
            persons: [{ gender: "male", ethnicity: "caucasian", age_group: "middle-aged", hair_style: "short cropped", hair_color: "silver grey", expression: "confident", pose: "formal pose", clothing_style: "business", clothing_type: "suit", clothing_color: "navy blue" }],
            lighting: "butterfly lighting", mood: "professional", quality_modifiers: "professional"
        }
    },
    "fantasy_warrior": {
        name: "Fantasy Warrior", icon: "⚔️", category: "portrait",
        description: "Epic fantasy warrior",
        data: {
            subject_type: "portrait", style: "fantasy", era: "medieval", person_count: 1,
            persons: [{ gender: "female", ethnicity: "nordic", age_group: "adult", body_type: "athletic", hair_style: "braided", hair_color: "platinum blonde", expression: "determined", clothing_style: "fantasy armor", clothing_type: "uniform", clothing_color: "metallic" }],
            lighting: "dramatic", mood: "epic", setting: "mountain peak"
        }
    },
    "grunge_musician": {
        name: "Grunge Musician", icon: "🎸", category: "portrait",
        description: "90s grunge style musician",
        data: {
            subject_type: "portrait", style: "vintage", era: "1990s grunge", person_count: 1,
            persons: [{ gender: "male", ethnicity: "caucasian", age_group: "young adult", hair_style: "long flowing", hair_color: "medium brown", expression: "serious", clothing_style: "casual", clothing_type: "t-shirt", clothing_color: "grey" }],
            lighting: "natural light", mood: "melancholic", color_palette: "desaturated"
        }
    },
    "indian_bride": {
        name: "Indian Bride", icon: "👰", category: "portrait",
        description: "Traditional Indian bridal portrait",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 1,
            persons: [{ gender: "female", ethnicity: "south asian", age_group: "young adult", hair_style: "tight low bun", hair_color: "black", expression: "peaceful", clothing_style: "traditional", clothing_type: "dress", clothing_color: "red", makeup_style: "full glam", earrings: "chandelier earrings", necklace: "statement necklace" }],
            lighting: "golden hour", mood: "romantic", color_palette: "jewel tones"
        }
    },
    "hip_hop_artist": {
        name: "Hip Hop Artist", icon: "🎤", category: "portrait",
        description: "Modern hip hop artist",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 1,
            persons: [{ gender: "male", ethnicity: "african", age_group: "young adult", body_type: "athletic", hair_style: "dreadlocks", hair_color: "black", expression: "confident", clothing_style: "streetwear", clothing_type: "hoodie", clothing_color: "black", necklace: "layered chains" }],
            lighting: "dramatic", mood: "intense", color_palette: "high contrast"
        }
    },
    "geisha_portrait": {
        name: "Geisha Portrait", icon: "🎎", category: "portrait",
        description: "Traditional geisha style",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 1,
            persons: [{ gender: "female", ethnicity: "east asian", age_group: "young adult", hair_style: "tight low bun", hair_color: "black", expression: "peaceful", clothing_style: "traditional", clothing_type: "robe", clothing_color: "red", makeup_style: "vintage" }],
            lighting: "soft", mood: "serene", setting: "japanese garden"
        }
    },
    "fitness_model": {
        name: "Fitness Model", icon: "🏋️", category: "portrait",
        description: "Athletic fitness model",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 1,
            persons: [{ gender: "female", ethnicity: "latin american", age_group: "young adult", body_type: "athletic", hair_style: "high ponytail", hair_color: "dark brown", expression: "determined", clothing_style: "sporty", clothing_type: "athletic wear", clothing_color: "black" }],
            lighting: "dramatic", mood: "energetic"
        }
    },
    "elderly_wisdom": {
        name: "Elderly Wisdom", icon: "👴", category: "portrait",
        description: "Wise elderly portrait",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 1,
            persons: [{ gender: "male", ethnicity: "south asian", age_group: "elderly", hair_style: "bald", expression: "contemplative", clothing_style: "traditional", clothing_type: "robe", clothing_color: "orange" }],
            lighting: "rembrandt lighting", mood: "peaceful"
        }
    },
    "child_wonder": {
        name: "Child Wonder", icon: "👧", category: "portrait",
        description: "Innocent child portrait",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 1,
            persons: [{ gender: "female", ethnicity: "african", age_group: "child", hair_style: "braided", hair_color: "black", expression: "curious", pose: "candid", clothing_style: "casual", clothing_type: "dress", clothing_color: "yellow" }],
            lighting: "soft", mood: "whimsical"
        }
    },
    "gothic_beauty": {
        name: "Gothic Beauty", icon: "🖤", category: "portrait",
        description: "Dark gothic aesthetic",
        data: {
            subject_type: "portrait", style: "fantasy", person_count: 1,
            persons: [{ gender: "female", ethnicity: "caucasian", age_group: "young adult", hair_style: "long flowing", hair_color: "black", expression: "mysterious", clothing_style: "gothic", clothing_type: "dress", clothing_color: "black", makeup_style: "smoky eye" }],
            lighting: "dramatic", mood: "dark", color_palette: "monochrome"
        }
    },
    "surfer_lifestyle": {
        name: "Surfer Lifestyle", icon: "🏄", category: "portrait",
        description: "Beach surfer portrait",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 1,
            persons: [{ gender: "male", ethnicity: "pacific islander", age_group: "young adult", body_type: "athletic", hair_style: "beach waves", hair_color: "light brown", expression: "relaxed", clothing_style: "casual", clothing_type: "t-shirt", clothing_color: "white" }],
            lighting: "golden hour", mood: "peaceful", setting: "beach"
        }
    },

    // ==================== LANDSCAPE PRESETS (36-50) ====================
    
    "dramatic_mountain": {
        name: "Dramatic Mountain", icon: "🏔️", category: "landscape",
        description: "Epic mountain at golden hour",
        data: {
            subject_type: "landscape", style: "photorealistic", landscape_type: "mountain range", terrain: "rocky, snowy", natural_elements: "clouds, sun rays", time_of_day: "golden hour", lighting: "golden hour", mood: "epic",
            _sceneObjects: [
                { label: "Snow-capped peak", category: "natural", location: "center", prominence: "primary", color: "white and grey", texture: "rugged rock" },
                { label: "Alpine lake", category: "natural", location: "foreground", prominence: "secondary", color: "crystal blue", state: "mirror reflection" },
                { label: "Pine forest", category: "natural", location: "midground", prominence: "secondary", color: "deep green" },
                { label: "Golden sun rays", category: "lighting", location: "sky", prominence: "primary", color: "warm gold", state: "breaking through clouds" }
            ],
            _semanticRelationships: [
                { subject: "Mountain", action: "reflected in", object: "alpine lake" },
                { subject: "Sun rays", action: "illuminating", object: "mountain peak" }
            ]
        }
    },
    "misty_forest": {
        name: "Misty Forest", icon: "🌲", category: "landscape",
        description: "Ethereal misty forest",
        data: {
            subject_type: "landscape", style: "photorealistic", landscape_type: "misty forest", terrain: "moss covered, pine forest", natural_elements: "fog, sun rays", time_of_day: "early morning", lighting: "volumetric", mood: "mysterious",
            _sceneObjects: [
                { label: "Ancient pine trees", category: "natural", location: "throughout", prominence: "primary", color: "dark green silhouettes", state: "towering" },
                { label: "Morning mist", category: "atmosphere", location: "ground level", prominence: "primary", color: "ethereal white", state: "slowly drifting" },
                { label: "Moss-covered rocks", category: "natural", location: "foreground", prominence: "secondary", color: "emerald green", texture: "soft and damp" },
                { label: "Light rays", category: "lighting", location: "canopy", prominence: "secondary", color: "golden beams", state: "breaking through trees" },
                { label: "Forest path", category: "natural", location: "center", prominence: "secondary", color: "earthy brown", state: "winding into mist" }
            ],
            _semanticRelationships: [
                { subject: "Sunbeams", action: "piercing through", object: "forest canopy" },
                { subject: "Mist", action: "swirling around", object: "tree trunks" }
            ]
        }
    },
    "tropical_paradise": {
        name: "Tropical Paradise", icon: "🏝️", category: "landscape",
        description: "Tropical beach paradise",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "tropical paradise", terrain: ["sandy", "coral reef"], natural_elements: ["ocean waves"], time_of_day: "midday", lighting: "natural light", mood: "peaceful" }
    },
    "aurora_borealis": {
        name: "Northern Lights", icon: "🌌", category: "landscape",
        description: "Aurora borealis display",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "aurora borealis", terrain: ["snowy"], natural_elements: ["northern lights", "milky way"], time_of_day: "night", mood: "dreamy", camera_settings: "long exposure" }
    },
    "desert_sunset": {
        name: "Desert Sunset", icon: "🏜️", category: "landscape",
        description: "Dramatic desert sunset",
        data: { subject_type: "landscape", style: "cinematic", landscape_type: "sunset silhouette", terrain: ["sand dunes"], time_of_day: "sunset", lighting: "backlit", mood: "serene" }
    },
    "waterfall_majesty": {
        name: "Majestic Waterfall", icon: "💧", category: "landscape",
        description: "Powerful waterfall",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "waterfall", terrain: ["rocky", "moss covered"], natural_elements: ["waterfall", "mist", "rainbow"], camera_settings: "slow shutter" }
    },
    "autumn_foliage": {
        name: "Autumn Foliage", icon: "🍂", category: "landscape",
        description: "Vibrant autumn colors",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "autumn foliage", natural_elements: ["autumn leaves", "sun rays"], time_of_day: "golden hour", mood: "nostalgic", season: "autumn" }
    },
    "winter_wonderland": {
        name: "Winter Wonderland", icon: "❄️", category: "landscape",
        description: "Snowy winter landscape",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "winter wonderland", terrain: ["snowy", "pine forest"], natural_elements: ["frost", "icicles"], season: "winter" }
    },
    "stormy_seascape": {
        name: "Stormy Sea", icon: "🌊", category: "landscape",
        description: "Dramatic stormy seascape",
        data: { subject_type: "landscape", style: "cinematic", landscape_type: "stormy seascape", terrain: ["rocky", "cliff face"], natural_elements: ["ocean waves", "lightning"], weather: "thunderstorm", mood: "intense" }
    },
    "cherry_blossom": {
        name: "Cherry Blossom", icon: "🌸", category: "landscape",
        description: "Japanese cherry blossom",
        data: { subject_type: "landscape", style: "cinematic", landscape_type: "spring bloom", natural_elements: ["cherry blossoms", "reflections"], season: "spring", setting: "japanese garden", color_palette: "pastel" }
    },
    "canyon_sunrise": {
        name: "Canyon Sunrise", icon: "🌄", category: "landscape",
        description: "Grand canyon sunrise",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "canyon", terrain: ["rocky"], time_of_day: "sunrise", lighting: "golden hour", mood: "epic" }
    },
    "lake_reflection": {
        name: "Mirror Lake", icon: "🏞️", category: "landscape",
        description: "Perfect mirror reflection",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "lake reflection", terrain: ["grassy", "pine forest"], natural_elements: ["reflections"], time_of_day: "dawn", composition: "symmetrical" }
    },
    "volcanic_landscape": {
        name: "Volcanic Drama", icon: "🌋", category: "landscape",
        description: "Dramatic volcanic landscape",
        data: { subject_type: "landscape", style: "cinematic", landscape_type: "volcanic", terrain: ["volcanic rock"], natural_elements: ["clouds", "mist"], mood: "intense" }
    },
    "milky_way_sky": {
        name: "Milky Way", icon: "🌠", category: "landscape",
        description: "Stunning milky way",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "starry night sky", natural_elements: ["milky way", "shooting stars"], time_of_day: "midnight", camera_settings: "long exposure" }
    },
    "coastal_cliffs": {
        name: "Coastal Cliffs", icon: "🪨", category: "landscape",
        description: "Dramatic coastal scenery",
        data: { subject_type: "landscape", style: "photorealistic", landscape_type: "ocean coastline", terrain: ["cliff face", "grassy"], time_of_day: "golden hour", mood: "epic" }
    },

    // ==================== ARCHITECTURE PRESETS (51-60) ====================
    
    "gothic_cathedral": {
        name: "Gothic Cathedral", icon: "⛪", category: "architecture",
        description: "Majestic gothic cathedral",
        data: {
            subject_type: "architecture", building_type: "cathedral", arch_style: "gothic", arch_era: "medieval", lighting: "volumetric", mood: "mysterious",
            _sceneObjects: [
                { label: "Rose window", category: "architectural", location: "facade", prominence: "primary", color: "stained glass colors", material: "colored glass", state: "light streaming through" },
                { label: "Flying buttresses", category: "architectural", location: "sides", prominence: "secondary", color: "aged stone", material: "limestone" },
                { label: "Gothic spires", category: "architectural", location: "top", prominence: "primary", color: "dark stone", state: "reaching toward sky" },
                { label: "Gargoyles", category: "architectural", location: "corners", prominence: "detail", color: "weathered grey", material: "stone" }
            ],
            _semanticRelationships: [
                { subject: "Light", action: "streaming through", object: "rose window" },
                { subject: "Spires", action: "piercing", object: "cloudy sky" }
            ]
        }
    },
    "modern_skyscraper": {
        name: "Modern Skyscraper", icon: "🏙️", category: "architecture",
        description: "Sleek modern skyscraper",
        data: { subject_type: "architecture", building_type: "skyscraper", arch_style: "contemporary", lighting: "blue hour", camera_angle: "worm's eye" }
    },
    "japanese_temple": {
        name: "Japanese Temple", icon: "⛩️", category: "architecture",
        description: "Traditional Japanese temple",
        data: {
            subject_type: "architecture", building_type: "temple", arch_style: "japanese", lighting: "golden hour", setting: "japanese garden", season: "autumn",
            _sceneObjects: [
                { label: "Pagoda", category: "architectural", location: "center", prominence: "primary", color: "vermillion red", material: "wood" },
                { label: "Torii gate", category: "architectural", location: "entrance", prominence: "secondary", color: "bright red", material: "wood" },
                { label: "Maple trees", category: "natural", location: "surrounding", prominence: "secondary", color: "red and orange leaves", state: "autumn foliage" },
                { label: "Stone lantern", category: "props", location: "path", prominence: "detail", color: "moss-covered grey", material: "stone" },
                { label: "Koi pond", category: "natural", location: "foreground", prominence: "secondary", color: "clear water with orange koi" }
            ],
            _semanticRelationships: [
                { subject: "Maple leaves", action: "falling around", object: "temple" },
                { subject: "Koi", action: "swimming in", object: "pond" }
            ]
        }
    },
    "art_deco_building": {
        name: "Art Deco", icon: "🏛️", category: "architecture",
        description: "Classic Art Deco architecture",
        data: { subject_type: "architecture", building_type: "office tower", arch_style: "art deco", arch_era: "early 20th century", era: "1920s art deco" }
    },
    "brutalist_concrete": {
        name: "Brutalist", icon: "🔲", category: "architecture",
        description: "Bold brutalist architecture",
        data: { subject_type: "architecture", building_type: "museum", arch_style: "brutalist", lighting: "overcast", color_palette: "monochrome" }
    },
    "moroccan_palace": {
        name: "Moroccan Palace", icon: "🕌", category: "architecture",
        description: "Ornate Moroccan palace",
        data: { subject_type: "architecture", building_type: "palace", arch_style: "islamic", color_palette: "jewel tones" }
    },
    "scandinavian_minimal": {
        name: "Scandinavian Home", icon: "🏠", category: "architecture",
        description: "Minimalist Scandinavian",
        data: { subject_type: "architecture", building_type: "cottage", arch_style: "minimalist", mood: "peaceful" }
    },
    "futuristic_building": {
        name: "Futuristic Building", icon: "🚀", category: "architecture",
        description: "Futuristic architecture",
        data: { subject_type: "architecture", building_type: "tower", arch_style: "futuristic", lighting: "neon", time_of_day: "night" }
    },
    "ancient_ruins": {
        name: "Ancient Ruins", icon: "🏚️", category: "architecture",
        description: "Atmospheric ancient ruins",
        data: { subject_type: "architecture", building_type: "monument", arch_style: "classical", arch_era: "ancient", setting: "ancient ruins" }
    },
    "victorian_mansion": {
        name: "Victorian Mansion", icon: "🏰", category: "architecture",
        description: "Grand Victorian mansion",
        data: { subject_type: "architecture", building_type: "mansion", arch_style: "victorian", mood: "mysterious", era: "victorian era" }
    },

    // ==================== FOOD PRESETS (61-70) ====================
    
    "fine_dining": {
        name: "Fine Dining", icon: "🍽️", category: "food",
        description: "Elegant fine dining",
        data: {
            subject_type: "food", cuisine_type: "french", food_style: "fine dining", plating: "fine dining arrangement", lighting: "soft",
            _sceneObjects: [
                { label: "Gourmet main course", category: "food", location: "center", prominence: "primary", color: "artfully arranged", state: "steaming" },
                { label: "Crystal wine glass", category: "props", location: "right", prominence: "secondary", color: "clear with red wine", material: "crystal" },
                { label: "White porcelain plate", category: "props", location: "center", prominence: "primary", color: "pure white", material: "fine china" },
                { label: "Silver cutlery", category: "props", location: "sides", prominence: "secondary", color: "polished silver", material: "sterling silver" },
                { label: "Linen napkin", category: "props", location: "left", prominence: "detail", color: "cream", material: "linen", state: "elegantly folded" }
            ],
            _semanticRelationships: [
                { subject: "Main course", action: "presented on", object: "white porcelain plate" },
                { subject: "Sauce", action: "drizzled around", object: "dish" }
            ]
        }
    },
    "street_food_tokyo": {
        name: "Tokyo Street Food", icon: "🍜", category: "food",
        description: "Vibrant Tokyo street food",
        data: { subject_type: "food", cuisine_type: "japanese", food_style: "street food", geographic_region: "tokyo japan", mood: "energetic" }
    },
    "italian_feast": {
        name: "Italian Feast", icon: "🍝", category: "food",
        description: "Traditional Italian meal",
        data: { subject_type: "food", cuisine_type: "italian", food_style: "comfort food", plating: "family style" }
    },
    "sushi_art": {
        name: "Sushi Art", icon: "🍣", category: "food",
        description: "Artistic sushi presentation",
        data: {
            subject_type: "food", cuisine_type: "japanese", food_style: "sushi", plating: "minimalist plating",
            _sceneObjects: [
                { label: "Assorted nigiri sushi", category: "food", location: "center", prominence: "primary", color: "salmon pink, tuna red, white fish", state: "freshly prepared" },
                { label: "Wooden serving board", category: "props", location: "center", prominence: "primary", color: "natural wood", material: "hinoki cypress" },
                { label: "Wasabi mound", category: "food", location: "corner", prominence: "detail", color: "vibrant green" },
                { label: "Pickled ginger", category: "food", location: "corner", prominence: "detail", color: "pale pink" },
                { label: "Soy sauce dish", category: "props", location: "side", prominence: "secondary", color: "black ceramic", material: "ceramic" },
                { label: "Chopsticks", category: "props", location: "side", prominence: "secondary", color: "lacquered black", material: "bamboo" }
            ],
            _semanticRelationships: [
                { subject: "Sushi pieces", action: "arranged on", object: "wooden board" },
                { subject: "Chef's knife", action: "resting beside", object: "cutting board" }
            ]
        }
    },
    "dessert_heaven": {
        name: "Dessert Heaven", icon: "🍰", category: "food",
        description: "Decadent dessert showcase",
        data: { subject_type: "food", cuisine_type: "french", food_style: "dessert", plating: "artistic drizzle", color_palette: "pastel" }
    },
    "morning_breakfast": {
        name: "Morning Breakfast", icon: "🥐", category: "food",
        description: "Cozy morning breakfast",
        data: {
            subject_type: "food", food_style: "breakfast", plating: "rustic presentation", time_of_day: "morning",
            _sceneObjects: [
                { label: "Stack of pancakes", category: "food", location: "center", prominence: "primary", color: "golden brown", state: "dripping with maple syrup" },
                { label: "Fresh berries", category: "food", location: "top", prominence: "secondary", color: "red and blue", state: "fresh" },
                { label: "Coffee cup", category: "props", location: "side", prominence: "secondary", color: "white ceramic", state: "steaming" },
                { label: "Linen napkin", category: "props", location: "side", prominence: "detail", color: "cream", material: "linen" },
                { label: "Morning sunlight", category: "lighting", location: "window", prominence: "background", color: "warm golden", state: "streaming in" }
            ],
            _semanticRelationships: [
                { subject: "Maple syrup", action: "dripping down", object: "pancake stack" },
                { subject: "Steam", action: "rising from", object: "coffee cup" }
            ]
        }
    },
    "indian_spices": {
        name: "Indian Spices", icon: "🍛", category: "food",
        description: "Vibrant Indian cuisine",
        data: { subject_type: "food", cuisine_type: "indian", color_palette: "jewel tones" }
    },
    "cocktail_bar": {
        name: "Cocktail Bar", icon: "🍸", category: "food",
        description: "Elegant cocktail",
        data: { subject_type: "food", food_style: "cocktails", lighting: "dramatic", time_of_day: "evening" }
    },
    "mexican_fiesta": {
        name: "Mexican Fiesta", icon: "🌮", category: "food",
        description: "Colorful Mexican food",
        data: { subject_type: "food", cuisine_type: "mexican", food_style: "street food", color_palette: "vibrant" }
    },
    "cheese_board": {
        name: "Cheese Board", icon: "🧀", category: "food",
        description: "Artisanal cheese board",
        data: { subject_type: "food", plating: "cheese board", color_palette: "earth tones" }
    },

    // ==================== WILDLIFE PRESETS (71-80) ====================
    
    "african_safari": {
        name: "African Safari", icon: "🦁", category: "wildlife",
        description: "Majestic lion on savanna",
        data: {
            subject_type: "wildlife", animal_type: "big cat", habitat: "african savanna", animal_behavior: "alert", time_of_day: "golden hour",
            _sceneObjects: [
                { label: "Male lion", category: "animal", location: "center", prominence: "primary", color: "golden mane", state: "majestic stance" },
                { label: "Acacia tree", category: "natural", location: "background", prominence: "secondary", color: "dark silhouette" },
                { label: "Tall savanna grass", category: "natural", location: "foreground", prominence: "secondary", color: "golden dry grass" },
                { label: "African sunset", category: "background", location: "horizon", prominence: "background", color: "orange and red", state: "blazing" }
            ],
            _semanticRelationships: [
                { subject: "Lion", action: "surveying", object: "savanna territory" },
                { subject: "Sun", action: "setting behind", object: "acacia tree" }
            ]
        }
    },
    "underwater_world": {
        name: "Underwater World", icon: "🐠", category: "wildlife",
        description: "Vibrant coral reef",
        data: {
            subject_type: "wildlife", animal_type: "sea turtle", habitat: "coral reef", animal_behavior: "swimming", location: "underwater",
            _sceneObjects: [
                { label: "Green sea turtle", category: "animal", location: "center", prominence: "primary", color: "olive green shell", state: "gracefully swimming" },
                { label: "Coral reef", category: "natural", location: "background", prominence: "secondary", color: "vibrant multicolor", state: "teeming with life" },
                { label: "Tropical fish school", category: "animal", location: "around", prominence: "secondary", color: "yellow, blue, orange" },
                { label: "Sunbeams", category: "lighting", location: "above", prominence: "detail", color: "golden rays", state: "penetrating water" }
            ],
            _semanticRelationships: [
                { subject: "Sea turtle", action: "gliding through", object: "coral reef" },
                { subject: "Fish", action: "swimming around", object: "turtle" }
            ]
        }
    },
    "arctic_expedition": {
        name: "Arctic Wildlife", icon: "🐻‍❄️", category: "wildlife",
        description: "Polar bear in arctic",
        data: { subject_type: "wildlife", animal_type: "bear", habitat: "arctic tundra", weather: "snow" }
    },
    "rainforest_birds": {
        name: "Rainforest Birds", icon: "🦜", category: "wildlife",
        description: "Colorful parrot",
        data: { subject_type: "wildlife", animal_type: "parrot", habitat: "amazon rainforest", animal_behavior: "flying" }
    },
    "mountain_eagle": {
        name: "Mountain Eagle", icon: "🦅", category: "wildlife",
        description: "Eagle soaring",
        data: { subject_type: "wildlife", animal_type: "bird of prey", habitat: "mountain peak", animal_behavior: "flying" }
    },
    "butterfly_garden": {
        name: "Butterfly Garden", icon: "🦋", category: "wildlife",
        description: "Macro butterfly",
        data: { subject_type: "wildlife", animal_type: "butterfly", camera_settings: "macro", mood: "peaceful" }
    },
    "wolf_pack": {
        name: "Wolf Pack", icon: "🐺", category: "wildlife",
        description: "Wolf in snowy forest",
        data: { subject_type: "wildlife", animal_type: "wolf", habitat: "temperate forest", weather: "snow", season: "winter" }
    },
    "ocean_giants": {
        name: "Ocean Giants", icon: "🐋", category: "wildlife",
        description: "Majestic whale",
        data: { subject_type: "wildlife", animal_type: "whale", habitat: "deep ocean", mood: "serene" }
    },
    "jungle_primate": {
        name: "Jungle Primate", icon: "🦍", category: "wildlife",
        description: "Gorilla in misty jungle",
        data: { subject_type: "wildlife", animal_type: "primate", habitat: "amazon rainforest", weather: "mist" }
    },
    "desert_fox": {
        name: "Desert Fox", icon: "🦊", category: "wildlife",
        description: "Fennec fox at sunset",
        data: { subject_type: "wildlife", animal_type: "fox", habitat: "desert", time_of_day: "sunset" }
    },

    // ==================== PRODUCT PRESETS (81-90) ====================
    
    "luxury_watch": {
        name: "Luxury Watch", icon: "⌚", category: "product",
        description: "Premium watch shot",
        data: {
            subject_type: "product", product_type: "watch", product_material: "gold", product_background: "reflective surface", quality_modifiers: "ultra detailed",
            _sceneObjects: [
                { label: "Luxury gold watch", category: "product", location: "center", prominence: "primary", color: "rose gold", material: "18k gold", state: "pristine" },
                { label: "Black velvet display", category: "background", location: "base", prominence: "background", color: "deep black", material: "velvet", texture: "soft" },
                { label: "Subtle light reflections", category: "lighting", location: "surface", prominence: "detail", color: "golden highlights" }
            ],
            _semanticRelationships: [
                { subject: "Watch", action: "resting on", object: "velvet display" },
                { subject: "Light", action: "reflecting off", object: "polished gold surface" }
            ]
        }
    },
    "perfume_bottle": {
        name: "Perfume Elegance", icon: "🧴", category: "product",
        description: "Elegant perfume bottle",
        data: {
            subject_type: "product", product_type: "perfume", product_material: "glass", product_background: "gradient", lighting: "dramatic",
            _sceneObjects: [
                { label: "Crystal perfume bottle", category: "product", location: "center", prominence: "primary", color: "amber liquid", material: "cut crystal", state: "catching light" },
                { label: "Rose petals", category: "props", location: "scattered", prominence: "secondary", color: "soft pink", material: "fresh petals" },
                { label: "Mist spray", category: "atmosphere", location: "air", prominence: "detail", color: "golden droplets", state: "frozen mid-spray" },
                { label: "Marble surface", category: "background", location: "base", prominence: "background", color: "white with grey veins", material: "marble" }
            ],
            _semanticRelationships: [
                { subject: "Perfume bottle", action: "standing on", object: "marble surface" },
                { subject: "Rose petals", action: "scattered around", object: "bottle base" }
            ]
        }
    },
    "sneaker_showcase": {
        name: "Sneaker Showcase", icon: "👟", category: "product",
        description: "Dynamic sneaker shot",
        data: {
            subject_type: "product", product_type: "shoes", product_background: "floating", mood: "energetic",
            _sceneObjects: [
                { label: "Limited edition sneakers", category: "product", location: "center", prominence: "primary", color: "white with neon accents", material: "leather and mesh", state: "brand new" },
                { label: "Floating dust particles", category: "atmosphere", location: "around", prominence: "secondary", color: "golden", state: "suspended in air" },
                { label: "Dramatic shadow", category: "lighting", location: "below", prominence: "detail", color: "dark" },
                { label: "Splash of paint", category: "props", location: "background", prominence: "secondary", color: "neon pink and blue", state: "frozen motion" }
            ],
            _semanticRelationships: [
                { subject: "Sneakers", action: "floating above", object: "dramatic shadow" },
                { subject: "Paint splash", action: "frozen behind", object: "sneakers" }
            ]
        }
    },
    "tech_gadget": {
        name: "Tech Gadget", icon: "📱", category: "product",
        description: "Modern tech product",
        data: { subject_type: "product", product_type: "tech gadgets", product_material: "brushed aluminum", product_background: "white seamless" }
    },
    "jewelry_display": {
        name: "Jewelry Display", icon: "💎", category: "product",
        description: "Sparkling jewelry",
        data: {
            subject_type: "product", product_type: "jewelry", product_material: "crystal", product_background: "black seamless", quality_modifiers: "8K",
            _sceneObjects: [
                { label: "Diamond necklace", category: "product", location: "center", prominence: "primary", color: "brilliant white diamonds", material: "platinum and diamonds", state: "catching light" },
                { label: "Velvet jewelry box", category: "props", location: "base", prominence: "secondary", color: "deep navy", material: "velvet" },
                { label: "Light sparkles", category: "lighting", location: "diamonds", prominence: "detail", color: "rainbow prisms", state: "dancing" },
                { label: "Mirror surface", category: "background", location: "below", prominence: "background", color: "black reflective" }
            ],
            _semanticRelationships: [
                { subject: "Diamonds", action: "refracting", object: "light into prisms" },
                { subject: "Necklace", action: "draped over", object: "velvet display" }
            ]
        }
    },
    "cosmetics_flat": {
        name: "Cosmetics Flat Lay", icon: "💄", category: "product",
        description: "Beauty products flat lay",
        data: { subject_type: "product", product_type: "cosmetics", product_background: "marble slab", camera_angle: "bird's eye", color_palette: "pastel" }
    },
    "leather_bag": {
        name: "Leather Bag", icon: "👜", category: "product",
        description: "Luxury leather bag",
        data: { subject_type: "product", product_type: "bags", product_material: "leather", color_palette: "earth tones" }
    },
    "sunglasses_shot": {
        name: "Sunglasses", icon: "🕶️", category: "product",
        description: "Stylish sunglasses",
        data: { subject_type: "product", product_type: "eyewear", product_material: "metal", product_background: "gradient" }
    },
    "wine_bottle": {
        name: "Wine Bottle", icon: "🍷", category: "product",
        description: "Elegant wine bottle",
        data: { subject_type: "product", product_type: "beverages", product_material: "glass", product_background: "wooden table", lighting: "dramatic" }
    },
    "headphones_hero": {
        name: "Headphones Hero", icon: "🎧", category: "product",
        description: "Premium headphones",
        data: { subject_type: "product", product_type: "electronics", product_material: "matte black", product_background: "black seamless", lighting: "rim light" }
    },

    // ==================== STREET PHOTOGRAPHY PRESETS (91-100) ====================
    
    "tokyo_neon": {
        name: "Tokyo Neon", icon: "🗼", category: "street",
        description: "Vibrant Tokyo night streets",
        data: {
            subject_type: "street", street_type: "busy downtown", geographic_region: "tokyo japan", time_of_day: "night", lighting: "neon", weather: "light rain",
            _sceneObjects: [
                { label: "Neon signs in Japanese", category: "background", location: "buildings", prominence: "primary", color: "pink, blue, yellow", state: "glowing brightly" },
                { label: "Wet pavement", category: "background", location: "ground", prominence: "secondary", color: "reflective", state: "reflecting neon lights" },
                { label: "Vending machines", category: "props", location: "sidewalk", prominence: "secondary", color: "illuminated", state: "glowing" },
                { label: "Umbrellas", category: "props", location: "crowd", prominence: "detail", color: "clear and colorful" },
                { label: "Steam from grates", category: "atmosphere", location: "street level", prominence: "detail", color: "white mist" }
            ],
            _semanticRelationships: [
                { subject: "Neon lights", action: "reflecting on", object: "wet pavement" },
                { subject: "People", action: "walking through", object: "rainy street" },
                { subject: "Steam", action: "rising from", object: "subway grates" }
            ]
        }
    },
    "paris_cafe": {
        name: "Paris Cafe", icon: "🗼", category: "street",
        description: "Parisian sidewalk cafe",
        data: {
            subject_type: "street", street_type: "sidewalk cafe", geographic_region: "paris france", time_of_day: "afternoon", mood: "romantic",
            _sceneObjects: [
                { label: "Bistro chairs", category: "furniture", location: "foreground", prominence: "primary", color: "classic rattan", material: "woven cane" },
                { label: "Marble cafe tables", category: "furniture", location: "foreground", prominence: "primary", color: "white marble tops", material: "marble and iron" },
                { label: "Espresso cups", category: "props", location: "tables", prominence: "detail", color: "white porcelain" },
                { label: "Striped awning", category: "background", location: "above", prominence: "secondary", color: "red and white stripes" },
                { label: "Haussmann building", category: "background", location: "background", prominence: "background", color: "cream stone", state: "classic Parisian" }
            ],
            _semanticRelationships: [
                { subject: "Cafe", action: "spilling onto", object: "Parisian sidewalk" },
                { subject: "Afternoon sun", action: "filtering through", object: "awning" }
            ]
        }
    },
    "new_york_hustle": {
        name: "New York Hustle", icon: "🗽", category: "street",
        description: "Busy New York streets",
        data: { subject_type: "street", street_type: "busy downtown", geographic_region: "new york usa", time_of_day: "morning", crowd: "busy crowd" }
    },
    "marrakech_souk": {
        name: "Marrakech Souk", icon: "🕌", category: "street",
        description: "Colorful Moroccan market",
        data: {
            subject_type: "street", street_type: "bazaar", geographic_region: "marrakech morocco", color_palette: "jewel tones",
            _sceneObjects: [
                { label: "Colorful spice mounds", category: "props", location: "stalls", prominence: "primary", color: "saffron yellow, paprika red, turmeric orange", state: "piled high" },
                { label: "Hanging brass lanterns", category: "props", location: "above", prominence: "secondary", color: "golden brass", material: "pierced metalwork" },
                { label: "Woven rugs", category: "props", location: "walls", prominence: "secondary", color: "rich reds and blues", material: "hand-woven wool" },
                { label: "Ceramic tagines", category: "props", location: "displays", prominence: "secondary", color: "colorful glazed", material: "painted ceramic" },
                { label: "Narrow alleyway", category: "background", location: "background", prominence: "background", state: "bustling with activity" }
            ],
            _semanticRelationships: [
                { subject: "Sunlight", action: "filtering through", object: "hanging fabrics" },
                { subject: "Merchants", action: "displaying", object: "colorful wares" }
            ]
        }
    },
    "london_rain": {
        name: "London Rain", icon: "☔", category: "street",
        description: "Rainy London streets",
        data: { subject_type: "street", street_type: "historic district", geographic_region: "london uk", weather: "light rain", mood: "melancholic" }
    },
    "hong_kong_density": {
        name: "Hong Kong Density", icon: "🏙️", category: "street",
        description: "Dense Hong Kong scene",
        data: { subject_type: "street", street_type: "shopping district", geographic_region: "hong kong", time_of_day: "night", lighting: "neon", crowd: "packed crowd" }
    },
    "havana_vintage": {
        name: "Havana Vintage", icon: "🚗", category: "street",
        description: "Colorful Havana streets",
        data: { subject_type: "street", street_type: "residential street", geographic_region: "havana cuba", time_of_day: "golden hour", mood: "nostalgic", color_palette: "vibrant" }
    },
    "amsterdam_canals": {
        name: "Amsterdam Canals", icon: "🚲", category: "street",
        description: "Picturesque Amsterdam",
        data: { subject_type: "street", geographic_region: "amsterdam netherlands", time_of_day: "afternoon", season: "spring" }
    },
    "istanbul_bazaar": {
        name: "Istanbul Bazaar", icon: "🕌", category: "street",
        description: "Historic Istanbul bazaar",
        data: { subject_type: "street", street_type: "bazaar", geographic_region: "istanbul turkey", lighting: "natural light", color_palette: "warm tones" }
    },
    "seoul_nightlife": {
        name: "Seoul Nightlife", icon: "🌃", category: "street",
        description: "Vibrant Seoul night scene",
        data: { subject_type: "street", street_type: "night market", geographic_region: "seoul korea", time_of_day: "night", lighting: "neon", mood: "energetic" }
    },

    // ==================== VIRAL TRENDING PRESETS (Twitter/X 2024-2025) ====================
    // Credits: @godofprompt, @JoshDance, @patife, @heyBarsee, @techhalla, LightX, FelloAI
    
    "ghibli_style": {
        name: "Studio Ghibli Style", icon: "🌸", category: "trending",
        description: "Viral Ghibli anime aesthetic - soft, dreamy, storybook vibes",
        credit: "@JoshDance, @heyBarsee on X",
        data: {
            subject_type: "portrait", style: "anime", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "long flowing", hair_color: "dark brown", expression: "gentle smile", pose: "candid", clothing_style: "casual", clothing_type: "dress", clothing_color: "soft blue" }],
            lighting: "soft", mood: "dreamy", color_palette: "pastel", setting: "countryside",
            style_modifiers: "Studio Ghibli style, hand-drawn anime aesthetic, soft watercolor textures, whimsical atmosphere, Hayao Miyazaki inspired, detailed background art, warm nostalgic feeling",
            _sceneObjects: [
                { label: "Floating clouds", category: "atmosphere", location: "sky", prominence: "background", color: "fluffy white", state: "gently drifting" },
                { label: "Wildflowers", category: "natural", location: "foreground", prominence: "secondary", color: "soft pastels", state: "swaying in breeze" },
                { label: "Distant hills", category: "landscape", location: "background", prominence: "background", color: "soft green and blue" }
            ]
        }
    },
    "action_figure_box": {
        name: "Action Figure Box", icon: "📦", category: "trending",
        description: "Viral toy packaging trend - turn into collectible action figure",
        credit: "@patife on X, LightX",
        data: {
            subject_type: "product", style: "photorealistic", person_count: 1,
            persons: [{ gender: "male", age_group: "adult", body_type: "athletic", hair_style: "short cropped", hair_color: "dark brown", expression: "confident", pose: "action pose", clothing_style: "casual", clothing_type: "jacket", clothing_color: "black" }],
            lighting: "studio lighting", mood: "playful", color_palette: "vibrant",
            style_modifiers: "packaged action figure toy, plastic blister packaging, cardboard backing with character name, toy accessories beside figure, retail toy store display, highly detailed miniature, collectible figurine, 1/6 scale figure",
            _sceneObjects: [
                { label: "Blister packaging", category: "props", location: "surrounding", prominence: "primary", color: "clear plastic", material: "transparent plastic" },
                { label: "Cardboard backing", category: "props", location: "background", prominence: "primary", color: "colorful printed", material: "glossy cardboard" },
                { label: "Toy accessories", category: "props", location: "beside figure", prominence: "secondary", color: "matching theme", state: "neatly arranged" },
                { label: "Price tag", category: "props", location: "corner", prominence: "detail", color: "white", state: "retail style" }
            ]
        }
    },
    "cyberpunk_portrait": {
        name: "Cyberpunk Glow-Up", icon: "🌆", category: "trending",
        description: "Neon-lit futuristic sci-fi portrait with glowing effects",
        credit: "@godofprompt, viral on X",
        data: {
            subject_type: "portrait", style: "sci-fi", era: "cyberpunk future", person_count: 1,
            persons: [{ gender: "female", ethnicity: "east asian", age_group: "young adult", hair_style: "bob cut", hair_color: "neon blue", expression: "intense", pose: "profile view", clothing_style: "futuristic", clothing_type: "jacket", clothing_color: "black with neon trim" }],
            lighting: "neon", mood: "intense", color_palette: "neon", setting: "futuristic city", time_of_day: "night",
            style_modifiers: "cyberpunk aesthetic, neon glow effects, rain-soaked streets, holographic elements, LED accents, futuristic HUD overlay, blade runner inspired, high contrast lighting",
            _sceneObjects: [
                { label: "Neon signs", category: "background", location: "background", prominence: "primary", color: "pink and cyan", state: "glowing intensely" },
                { label: "Rain droplets", category: "atmosphere", location: "throughout", prominence: "secondary", state: "falling, catching neon light" },
                { label: "Holographic ads", category: "background", location: "midground", prominence: "secondary", color: "blue and purple", material: "light projection" },
                { label: "Wet streets", category: "background", location: "ground", prominence: "background", texture: "reflective puddles with neon reflections" }
            ]
        }
    },
    "oil_painting_portrait": {
        name: "Classic Oil Painting", icon: "🎨", category: "trending",
        description: "Transform photo into timeless oil painting masterpiece",
        credit: "@godofprompt, viral art style",
        data: {
            subject_type: "portrait", style: "renaissance", person_count: 1,
            persons: [{ gender: "female", ethnicity: "caucasian", age_group: "adult", hair_style: "long flowing", hair_color: "auburn", expression: "contemplative", pose: "three-quarter view", clothing_style: "elegant", clothing_type: "dress", clothing_color: "deep burgundy" }],
            lighting: "rembrandt lighting", mood: "serene", color_palette: "warm tones",
            style_modifiers: "classical oil painting, visible brushstrokes, rich textures, old masters technique, museum quality, baroque lighting, canvas texture, gallery worthy, Rembrandt inspired chiaroscuro"
        }
    },
    "magazine_cover": {
        name: "Magazine Cover Edit", icon: "📰", category: "trending",
        description: "High-end editorial magazine cover aesthetic",
        credit: "@godofprompt, editorial trend",
        data: {
            subject_type: "fashion", style: "photorealistic", person_count: 1,
            persons: [{ gender: "female", ethnicity: "african", age_group: "young adult", body_type: "model physique", hair_style: "natural curls", hair_color: "black", expression: "confident", pose: "formal pose", clothing_style: "haute couture", clothing_type: "gown", clothing_color: "metallic gold", makeup_style: "editorial" }],
            lighting: "studio lighting", mood: "glamorous", color_palette: "high contrast",
            style_modifiers: "Vogue magazine cover, high fashion editorial, professional retouching, perfect skin, dramatic makeup, luxury branding aesthetic, glossy magazine quality, fashion photography"
        }
    },
    "surreal_dreamscape": {
        name: "Surreal Dream Filter", icon: "🌙", category: "trending",
        description: "Whimsical surrealist art with dreamlike distortions",
        credit: "@godofprompt, surrealist trend",
        data: {
            subject_type: "portrait", style: "fantasy", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "long flowing", hair_color: "silver", expression: "peaceful", pose: "floating", clothing_style: "ethereal", clothing_type: "dress", clothing_color: "white" }],
            lighting: "soft", mood: "dreamy", color_palette: "pastel",
            style_modifiers: "Salvador Dali inspired, melting elements, impossible geometry, floating objects, soft pastel colors, dreamcore aesthetic, ethereal atmosphere, clouds and stars mixed",
            _sceneObjects: [
                { label: "Floating islands", category: "surreal", location: "background", prominence: "secondary", state: "defying gravity" },
                { label: "Oversized flowers", category: "surreal", location: "foreground", prominence: "secondary", color: "soft pink and purple" },
                { label: "Liquid sky", category: "atmosphere", location: "sky", prominence: "background", color: "gradient pastels", state: "melting and flowing" }
            ]
        }
    },
    "anime_action_scene": {
        name: "Anime Action Scene", icon: "⚡", category: "trending",
        description: "Dynamic anime style with action effects and speed lines",
        credit: "@godofprompt, anime trend",
        data: {
            subject_type: "portrait", style: "anime", person_count: 1,
            persons: [{ gender: "male", age_group: "teenager", body_type: "athletic", hair_style: "spiky", hair_color: "black with highlights", expression: "determined", pose: "action pose", clothing_style: "casual", clothing_type: "jacket", clothing_color: "red" }],
            lighting: "dramatic", mood: "intense", color_palette: "vibrant",
            style_modifiers: "anime art style, dynamic action pose, speed lines, energy aura, dramatic shading, manga illustration, bold outlines, cel shading, shonen anime aesthetic"
        }
    },
    "film_noir": {
        name: "Film Noir Treatment", icon: "🎬", category: "trending",
        description: "Classic black and white noir with dramatic shadows",
        credit: "@godofprompt, noir aesthetic",
        data: {
            subject_type: "portrait", style: "noir", person_count: 1,
            persons: [{ gender: "male", ethnicity: "caucasian", age_group: "adult", hair_style: "slicked back", hair_color: "dark brown", expression: "mysterious", pose: "profile view", clothing_style: "vintage", clothing_type: "suit", clothing_color: "charcoal", hat: "fedora" }],
            lighting: "chiaroscuro", mood: "mysterious", color_palette: "black and white",
            style_modifiers: "1940s film noir, high contrast black and white, venetian blind shadows, cigarette smoke, moody atmosphere, detective movie aesthetic, dramatic lighting"
        }
    },
    "3d_sculpture_marble": {
        name: "3D Marble Sculpture", icon: "🗿", category: "trending",
        description: "Transform into classical marble statue sculpture",
        credit: "@godofprompt, sculpture trend",
        data: {
            subject_type: "portrait", style: "photorealistic", person_count: 1,
            persons: [{ gender: "male", ethnicity: "mediterranean", age_group: "adult", body_type: "athletic", hair_style: "curly", hair_color: "white marble", expression: "stoic", pose: "heroic" }],
            lighting: "museum lighting", mood: "epic", color_palette: "monochrome",
            style_modifiers: "classical marble sculpture, Michelangelo style, museum display, white Carrara marble, chiseled details, Greek god aesthetic, pedestal display, dramatic museum lighting, Renaissance sculpture"
        }
    },
    "golden_hour_glow": {
        name: "Golden Hour Magic", icon: "🌅", category: "trending",
        description: "Perfect sunset lighting with warm golden tones",
        credit: "@godofprompt, photography trend",
        data: {
            subject_type: "portrait", style: "cinematic", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "beach waves", hair_color: "golden blonde", expression: "peaceful", pose: "candid", clothing_style: "bohemian", clothing_type: "dress", clothing_color: "white" }],
            lighting: "golden hour", mood: "romantic", color_palette: "warm tones", time_of_day: "sunset",
            style_modifiers: "golden hour photography, warm sunlight, lens flare, backlit silhouette, sun-kissed skin, romantic atmosphere, natural outdoor lighting, Instagram aesthetic"
        }
    },
    "polaroid_retro": {
        name: "Retro Polaroid", icon: "📸", category: "trending",
        description: "Vintage Polaroid instant camera aesthetic",
        credit: "LightX, retro photography trend",
        data: {
            subject_type: "portrait", style: "vintage", era: "1980s", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "wavy", hair_color: "brown", expression: "candid", pose: "candid", clothing_style: "vintage", clothing_type: "sweater", clothing_color: "cream" }],
            lighting: "natural light", mood: "nostalgic", color_palette: "vintage",
            style_modifiers: "Polaroid instant photo, white border frame, slightly faded colors, light leak effects, vintage grain, 1980s aesthetic, analog photography look, warm vintage tones"
        }
    },
    "pixel_art_retro": {
        name: "8-Bit Pixel Art", icon: "👾", category: "trending",
        description: "Retro video game pixel art style",
        credit: "viral gaming aesthetic",
        data: {
            subject_type: "portrait", style: "pixel art", person_count: 1,
            persons: [{ gender: "male", age_group: "young adult", expression: "determined", clothing_style: "casual" }],
            lighting: "flat", mood: "playful", color_palette: "vibrant",
            style_modifiers: "16-bit pixel art, retro video game sprite, limited color palette, blocky pixels, NES/SNES era aesthetic, nostalgic gaming look, chiptune vibes"
        }
    },
    "vaporwave_aesthetic": {
        name: "Vaporwave Dream", icon: "🌴", category: "trending",
        description: "80s/90s aesthetic with neon pink and teal",
        credit: "vaporwave aesthetic trend",
        data: {
            subject_type: "portrait", style: "digital art", era: "1980s", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "long flowing", hair_color: "pink", expression: "mysterious", clothing_style: "retro", clothing_type: "jacket", clothing_color: "purple" }],
            lighting: "neon", mood: "dreamy", color_palette: "neon",
            style_modifiers: "vaporwave aesthetic, pink and cyan neon, Greek statue elements, palm trees, sunset gradients, retro 80s vibes, synthwave, lo-fi hip hop visual style, VHS glitch effects",
            _sceneObjects: [
                { label: "Greek columns", category: "props", location: "background", prominence: "secondary", color: "white marble with pink glow" },
                { label: "Palm trees", category: "natural", location: "sides", prominence: "secondary", color: "silhouette with neon outline" },
                { label: "Grid floor", category: "background", location: "ground", prominence: "background", color: "neon pink lines", state: "perspective grid" }
            ]
        }
    },
    "disney_pixar_character": {
        name: "Pixar Character Style", icon: "🎭", category: "trending",
        description: "3D animated character in Pixar/Disney style",
        credit: "@godofprompt, Pixar trend",
        data: {
            subject_type: "portrait", style: "3d cartoon", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", body_type: "average", hair_style: "ponytail", hair_color: "brown", expression: "smiling", pose: "expressive", clothing_style: "casual", clothing_type: "t-shirt", clothing_color: "teal" }],
            lighting: "soft", mood: "joyful", color_palette: "vibrant",
            style_modifiers: "Pixar 3D animation style, Disney character design, big expressive eyes, smooth 3D render, subsurface skin scattering, stylized proportions, Toy Story/Incredibles aesthetic, cute and appealing"
        }
    },
    "comic_book_hero": {
        name: "Comic Book Hero", icon: "💥", category: "trending",
        description: "Bold comic book illustration style",
        credit: "Marvel/DC comic aesthetic",
        data: {
            subject_type: "portrait", style: "comic book", person_count: 1,
            persons: [{ gender: "male", age_group: "adult", body_type: "muscular", hair_style: "short cropped", hair_color: "black", expression: "determined", pose: "heroic", clothing_style: "superhero", clothing_type: "uniform", clothing_color: "blue and red" }],
            lighting: "dramatic", mood: "epic", color_palette: "vibrant",
            style_modifiers: "Marvel comic book style, bold ink outlines, halftone dots, dynamic pose, action comic panel, vibrant flat colors, superhero aesthetic, Jim Lee inspired art"
        }
    },
    "watercolor_portrait": {
        name: "Soft Watercolor", icon: "💧", category: "trending",
        description: "Delicate watercolor painting with soft edges",
        credit: "artistic illustration trend",
        data: {
            subject_type: "portrait", style: "watercolor", person_count: 1,
            persons: [{ gender: "female", age_group: "adult", hair_style: "loose bun", hair_color: "auburn", expression: "peaceful", pose: "relaxed", clothing_style: "casual", clothing_type: "blouse", clothing_color: "soft blue" }],
            lighting: "soft", mood: "serene", color_palette: "pastel",
            style_modifiers: "watercolor painting, soft wet edges, paper texture, color bleeding effects, artistic brush strokes, loose illustration style, delicate and ethereal"
        }
    },
    "baroque_portrait": {
        name: "Baroque Masterpiece", icon: "👑", category: "trending",
        description: "Ornate baroque style with rich fabrics and drama",
        credit: "FelloAI, classical art trend",
        data: {
            subject_type: "portrait", style: "renaissance", era: "baroque", person_count: 1,
            persons: [{ gender: "female", ethnicity: "caucasian", age_group: "adult", hair_style: "elaborate updo", hair_color: "dark brown", expression: "regal", pose: "formal pose", clothing_style: "traditional", clothing_type: "gown", clothing_color: "deep red velvet", earrings: "pearl drop earrings", necklace: "pearl necklace" }],
            lighting: "rembrandt lighting", mood: "dramatic", color_palette: "jewel tones",
            style_modifiers: "baroque painting, Caravaggio lighting, rich velvet textures, gold leaf accents, dramatic chiaroscuro, royal portrait, museum masterpiece, ornate details"
        }
    },
    "double_exposure": {
        name: "Double Exposure Art", icon: "🌳", category: "trending",
        description: "Artistic double exposure with nature overlay",
        credit: "photography trend",
        data: {
            subject_type: "portrait", style: "artistic", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "long flowing", expression: "peaceful", pose: "profile view" }],
            lighting: "soft", mood: "dreamy", color_palette: "monochrome",
            style_modifiers: "double exposure photography, silhouette filled with forest, trees and nature overlay, ethereal blend, artistic portrait, two images merged, environmental portrait",
            _sceneObjects: [
                { label: "Forest trees", category: "overlay", location: "inside silhouette", prominence: "primary", state: "blending with portrait" },
                { label: "Birds flying", category: "overlay", location: "scattered", prominence: "secondary", state: "silhouettes" }
            ]
        }
    },
    "lo_fi_album_cover": {
        name: "Lo-Fi Album Cover", icon: "🎧", category: "trending",
        description: "Cozy lo-fi aesthetic for music/study vibes",
        credit: "lo-fi hip hop trend",
        data: {
            subject_type: "portrait", style: "anime", person_count: 1,
            persons: [{ gender: "female", age_group: "teenager", hair_style: "messy bun", hair_color: "dark brown", expression: "focused", pose: "sitting", clothing_style: "casual", clothing_type: "hoodie", clothing_color: "oversized grey" }],
            lighting: "soft", mood: "peaceful", color_palette: "warm tones", time_of_day: "night",
            style_modifiers: "lo-fi hip hop aesthetic, anime study girl, cozy room, warm lighting, headphones on, desk with books, rainy window, late night study vibes, chill beats aesthetic",
            _sceneObjects: [
                { label: "Desk lamp", category: "props", location: "desk", prominence: "secondary", color: "warm orange glow" },
                { label: "Coffee cup", category: "props", location: "desk", prominence: "detail", state: "steaming" },
                { label: "Rainy window", category: "background", location: "behind", prominence: "secondary", state: "rain droplets on glass" },
                { label: "Plants", category: "props", location: "windowsill", prominence: "detail", color: "green" }
            ]
        }
    },
    "ukiyo_e_japanese": {
        name: "Ukiyo-e Japanese Art", icon: "🗾", category: "trending",
        description: "Traditional Japanese woodblock print style",
        credit: "FelloAI, Japanese art trend",
        data: {
            subject_type: "portrait", style: "traditional", era: "edo period", person_count: 1,
            persons: [{ gender: "female", ethnicity: "east asian", age_group: "adult", hair_style: "traditional updo", hair_color: "black", expression: "serene", clothing_style: "traditional", clothing_type: "robe", clothing_color: "deep blue with patterns" }],
            lighting: "flat", mood: "serene", color_palette: "muted",
            style_modifiers: "ukiyo-e woodblock print, Hokusai inspired, flat color areas, black outlines, traditional Japanese art, Edo period aesthetic, wave patterns, cherry blossoms"
        }
    },
    "synthwave_retrowave": {
        name: "Synthwave Driver", icon: "🚗", category: "trending",
        description: "Retro-futuristic synthwave car scene",
        credit: "synthwave aesthetic trend",
        data: {
            subject_type: "landscape", style: "digital art",
            lighting: "neon", mood: "intense", color_palette: "neon", time_of_day: "night",
            style_modifiers: "synthwave aesthetic, 80s retro-futurism, neon grid, sunset gradient sky, chrome sports car, palm trees, outrun aesthetic, retrowave, neon pink and blue",
            _sceneObjects: [
                { label: "Chrome sports car", category: "vehicle", location: "center", prominence: "primary", color: "reflective chrome with neon glow" },
                { label: "Neon grid road", category: "background", location: "ground", prominence: "secondary", color: "glowing magenta lines" },
                { label: "Gradient sunset", category: "background", location: "sky", prominence: "background", color: "orange to purple to pink" },
                { label: "Palm tree silhouettes", category: "natural", location: "sides", prominence: "secondary", color: "black silhouette" },
                { label: "Distant city", category: "background", location: "horizon", prominence: "background", color: "neon skyline" }
            ]
        }
    },
    "glitch_art": {
        name: "Glitch Art Effect", icon: "📺", category: "trending",
        description: "Digital glitch aesthetic with RGB split",
        credit: "digital art trend",
        data: {
            subject_type: "portrait", style: "digital art", person_count: 1,
            persons: [{ gender: "androgynous", age_group: "young adult", hair_style: "short cropped", expression: "neutral", clothing_style: "futuristic" }],
            lighting: "harsh", mood: "intense", color_palette: "high contrast",
            style_modifiers: "glitch art, RGB color split, scan lines, digital corruption, VHS distortion, databending effect, cyberpunk aesthetic, broken pixels, chromatic aberration"
        }
    },
    "miniature_diorama": {
        name: "Miniature World", icon: "🔍", category: "trending",
        description: "Tilt-shift miniature diorama effect",
        credit: "photography trend",
        data: {
            subject_type: "landscape", style: "photorealistic",
            lighting: "natural light", mood: "whimsical", color_palette: "vibrant",
            style_modifiers: "tilt-shift photography, miniature diorama, tiny world effect, selective focus blur, toy-like appearance, model train aesthetic, miniature people and buildings"
        }
    },
    "stained_glass": {
        name: "Stained Glass Art", icon: "⛪", category: "trending",
        description: "Medieval stained glass window effect",
        credit: "artistic filter trend",
        data: {
            subject_type: "portrait", style: "artistic", person_count: 1,
            persons: [{ gender: "female", age_group: "adult", expression: "serene", clothing_style: "elegant" }],
            lighting: "backlit", mood: "spiritual", color_palette: "jewel tones",
            style_modifiers: "stained glass window art, lead line segments, translucent colored glass, cathedral window, Gothic art style, light shining through, religious art aesthetic, jewel tones"
        }
    },
    "pop_art_warhol": {
        name: "Pop Art Portrait", icon: "🎨", category: "trending",
        description: "Andy Warhol style pop art with bold colors",
        credit: "pop art trend",
        data: {
            subject_type: "portrait", style: "pop art", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "short cropped", expression: "confident", makeup_style: "bold lip" }],
            lighting: "flat", mood: "bold", color_palette: "vibrant",
            style_modifiers: "Andy Warhol pop art, bold flat colors, halftone dots, high contrast, screen print aesthetic, 1960s pop art, multiple color variations, celebrity portrait style"
        }
    },
    "knolling_photography": {
        name: "Knolling Flat Lay", icon: "📐", category: "trending",
        description: "Organized flat lay with items arranged perfectly",
        credit: "product photography trend",
        data: {
            subject_type: "product", style: "photorealistic",
            lighting: "studio lighting", mood: "organized", color_palette: "clean",
            style_modifiers: "knolling photography, flat lay arrangement, items at 90 degree angles, organized grid, top-down view, satisfying arrangement, minimalist aesthetic, clean background",
            _sceneObjects: [
                { label: "Everyday carry items", category: "props", location: "center", prominence: "primary", state: "neatly arranged at right angles" },
                { label: "Clean background", category: "background", location: "background", prominence: "background", color: "white or wood texture" }
            ]
        }
    },
    "receipt_meme": {
        name: "Receipt Life Summary", icon: "🧾", category: "trending",
        description: "Viral receipt-style life/personality summary",
        credit: "viral X/Twitter trend 2024",
        data: {
            subject_type: "graphic", style: "minimalist",
            lighting: "flat", mood: "humorous", color_palette: "monochrome",
            style_modifiers: "thermal receipt paper, dot matrix printed text, itemized list format, quirky life summary, personality traits as line items, total at bottom, store receipt aesthetic, black text on white paper"
        }
    },
    "pet_renaissance": {
        name: "Pet Renaissance", icon: "🐕", category: "trending",
        description: "Pet as royal renaissance portrait",
        credit: "LightX, pet portrait trend",
        data: {
            subject_type: "portrait", style: "renaissance", person_count: 0,
            lighting: "rembrandt lighting", mood: "regal", color_palette: "warm tones",
            style_modifiers: "renaissance pet portrait, dog or cat as noble, royal attire, ornate gold frame, oil painting style, aristocratic pose, Sir or Lady pet, velvet robes, crown or ruff collar"
        }
    },
    "cosmic_astronaut": {
        name: "Cosmic Astronaut", icon: "🧑‍🚀", category: "trending",
        description: "Astronaut in space with cosmic visuals",
        credit: "sci-fi art trend",
        data: {
            subject_type: "portrait", style: "sci-fi", person_count: 1,
            persons: [{ gender: "neutral", age_group: "adult", clothing_style: "futuristic", clothing_type: "uniform", clothing_color: "white space suit" }],
            lighting: "dramatic", mood: "epic", color_palette: "cosmic",
            style_modifiers: "astronaut in space, cosmic background, nebula colors, floating in zero gravity, Earth reflection in helmet visor, stars and galaxies, NASA aesthetic, space exploration",
            _sceneObjects: [
                { label: "Nebula clouds", category: "background", location: "background", prominence: "primary", color: "purple and blue cosmic gas" },
                { label: "Distant planets", category: "background", location: "scattered", prominence: "secondary", state: "orbiting" },
                { label: "Starfield", category: "background", location: "throughout", prominence: "background", state: "twinkling" }
            ]
        }
    },
    "art_nouveau": {
        name: "Art Nouveau Portrait", icon: "🌺", category: "trending",
        description: "Alphonse Mucha inspired decorative art",
        credit: "FelloAI, art nouveau trend",
        data: {
            subject_type: "portrait", style: "art nouveau", person_count: 1,
            persons: [{ gender: "female", age_group: "young adult", hair_style: "long flowing", hair_color: "auburn", expression: "serene", clothing_style: "elegant", clothing_type: "dress", clothing_color: "muted pastels" }],
            lighting: "soft", mood: "romantic", color_palette: "muted",
            style_modifiers: "Art Nouveau style, Alphonse Mucha inspired, decorative floral borders, flowing hair with flowers, ornate circular frame, pastel colors, elegant curves, poster art aesthetic"
        }
    }
};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEFAULT_PRESETS;
}
