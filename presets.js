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
        name: "Cyberpunk Rebel", icon: "🦾", category: "portrait",
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
    "brutalist_concrete": {
        name: "Brutalist", icon: "🔲", category: "architecture",
        description: "Bold brutalist architecture",
        data: { subject_type: "architecture", building_type: "museum", arch_style: "brutalist", lighting: "overcast", color_palette: "monochrome" }
    },
    "futuristic_building": {
        name: "Futuristic Building", icon: "🚀", category: "architecture",
        description: "Futuristic architecture",
        data: { subject_type: "architecture", building_type: "tower", arch_style: "futuristic", lighting: "neon", time_of_day: "night" }
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
	    
	    "starter_pack": {
	        name: "Starter Pack (Boxed Figure)", icon: "📦", category: "trending",
	        description: "Viral ‘starter pack’ packaging: boxed figure + themed accessories",
	        credit: "anntoine.com, FelloAI (prompt template)",
	        data: {
	            subject_type: "product", style: "3D render", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "smiling", pose: "standing", clothing_style: "casual" }],
	            lighting: "studio lighting", mood: "playful", color_palette: "vibrant",
	            style_modifiers: "collectible starter pack packaging, clean minimalist cardboard backing, clear plastic blister front, hanging hole, boxed toy product shot, crisp studio reflections, generic packaging, no brand logos",
	            _sceneObjects: [
	                { label: "Cardboard backing", category: "props", location: "background", prominence: "primary", color: "bold solid color", material: "matte cardboard" },
	                { label: "Plastic blister", category: "props", location: "foreground", prominence: "primary", color: "clear", material: "transparent plastic" },
	                { label: "Accessory compartments", category: "props", location: "right side", prominence: "secondary", state: "custom-fit molds" },
	                { label: "Hanging hole", category: "props", location: "top", prominence: "detail", state: "retail hook slot" }
	            ],
	            _semanticRelationships: [
	                { subject: "Figure", action: "sealed inside", object: "blister packaging" },
	                { subject: "Accessories", action: "organized in", object: "separate compartments" }
	            ]
	        }
	    },
	    "figurine_desk_zbrush": {
	        name: "3D Figurine on Desk (Behind-the-Scenes)", icon: "🖥️", category: "trending",
	        description: "Viral ‘3D figure’ trend: figurine on desk + packaging + modeling screen",
	        credit: "cyberlink.com (Gemini AI figure prompt)",
	        data: {
	            subject_type: "product", style: "photorealistic",
	            lighting: "studio lighting", mood: "professional", color_palette: "clean",
	            style_modifiers: "realistic 1/7 scale PVC figurine on a round display base, computer desk scene, monitor showing 3D sculpting software interface, glossy commercial packaging box with rounded corners, transparent window, blister insert, collectible figure photography, realistic depth and materials",
	            _sceneObjects: [
	                { label: "PVC figurine", category: "props", location: "center", prominence: "primary", material: "painted PVC", state: "on display base" },
	                { label: "Round display base", category: "props", location: "under figure", prominence: "secondary", material: "plastic", color: "neutral" },
	                { label: "Computer monitor", category: "props", location: "background", prominence: "secondary", state: "shows 3D modeling UI" },
	                { label: "Packaging box", category: "props", location: "beside figure", prominence: "secondary", material: "glossy cardboard", state: "transparent window" }
	            ]
	        }
	    },
	    "decade_rewind": {
	        name: "Decade Rewind", icon: "🕰️", category: "trending",
	        description: "Viral nostalgia edit: see yourself in a different decade",
	        credit: "godofprompt.ai (Nano Banana prompts)",
	        data: {
	            subject_type: "portrait", style: "vintage", era: "1980s", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "candid", clothing_style: "vintage" }],
	            lighting: "natural light", mood: "nostalgic", color_palette: "warm tones",
	            style_modifiers: "authentic decade styling, period-correct wardrobe and hair, film grain, slightly faded colors, analog photo texture, era-accurate props and background"
	        }
	    },
	    "tv_show_cameo": {
	        name: "TV Show Cameo", icon: "📺", category: "trending",
	        description: "Viral edit: place yourself into a TV show scene",
	        credit: "godofprompt.ai (Nano Banana prompts)",
	        data: {
	            subject_type: "documentary", style: "cinematic", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "natural", pose: "standing", clothing_style: "casual" }],
	            lighting: "natural light", mood: "playful", color_palette: "warm tones",
	            style_modifiers: "seamlessly inserted into a TV show scene, matching lighting and camera angle, consistent film grain, realistic depth of field, believable background integration"
	        }
	    },
	    "famous_art_integration": {
	        name: "Inside a Famous Painting", icon: "🖼️", category: "trending",
	        description: "Viral art remix: integrate subject into a classic painting",
	        credit: "godofprompt.ai (Nano Banana prompts)",
	        data: {
	            subject_type: "fine art", style: "oil painting",
	            lighting: "soft", mood: "whimsical", color_palette: "warm tones",
	            style_modifiers: "insert subject into a classic painting composition, oil paint texture, visible brushstrokes, canvas grain, painterly lighting, maintain original artwork perspective and color harmony"
	        }
	    },
	    "landmark_postcard": {
	        name: "Landmark Postcard", icon: "🌍", category: "trending",
	        description: "Viral travel edit: place subject at a famous landmark",
	        credit: "godofprompt.ai (Nano Banana prompts)",
	        data: {
	            subject_type: "landscape", style: "photorealistic",
	            lighting: "golden hour", mood: "adventurous", color_palette: "vibrant",
	            style_modifiers: "photorealistic travel postcard, subject naturally integrated in front of a famous landmark, consistent shadows, realistic atmospheric perspective, crisp detail, subtle postcard color grade"
	        }
	    },
	    "ghibli_style": {
	        name: "Ghibli Makeover", icon: "🌸", category: "trending",
	        description: "Cozy storybook anime look with soft watercolor textures",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "anime", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "gentle smile", pose: "candid", clothing_style: "casual" }],
	            lighting: "soft", mood: "dreamy", color_palette: "pastel",
	            style_modifiers: "storybook anime illustration, soft watercolor textures, warm nostalgic atmosphere, detailed background art, whimsical nature elements",
	            _sceneObjects: [
	                { label: "Soft clouds", category: "atmosphere", location: "sky", prominence: "background", color: "white", state: "gently drifting" },
	                { label: "Wildflowers", category: "natural", location: "foreground", prominence: "secondary", color: "pastel" },
	                { label: "Distant hills", category: "landscape", location: "background", prominence: "background", color: "soft greens" }
	            ]
	        }
	    },
	    "action_figure_box": {
	        name: "Action Figure Box", icon: "🧩", category: "trending",
	        description: "Viral toy box edit: turn subject into a boxed action figure",
	        credit: "FelloAI (prompt examples), Mashable (trend coverage)",
	        data: {
	            subject_type: "product", style: "3D render", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "confident", pose: "action pose", clothing_style: "casual" }],
	            lighting: "studio lighting", mood: "playful", color_palette: "vibrant",
	            style_modifiers: "boxed action figure in blister packaging, clear plastic shell, cardboard backing, 2-4 accessories in separate compartments, realistic toy plastic sheen, generic packaging, no brand marks",
	            _sceneObjects: [
	                { label: "Blister shell", category: "props", location: "foreground", prominence: "primary", material: "transparent plastic" },
	                { label: "Cardboard backing", category: "props", location: "background", prominence: "primary", material: "cardboard", color: "bold" },
	                { label: "Accessory compartments", category: "props", location: "right side", prominence: "secondary", state: "separate slots" }
	            ]
	        }
	    },
	    "cyberpunk_portrait": {
	        name: "Cyberpunk Glow-Up", icon: "🌆", category: "trending",
	        description: "Neon sci-fi portrait with glow, rain, and holograms",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "sci-fi", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "intense", pose: "profile view", clothing_style: "futuristic" }],
	            lighting: "neon", mood: "intense", color_palette: "neon", time_of_day: "night",
	            style_modifiers: "cyberpunk aesthetic, neon glow, rain-soaked streets, holographic elements, LED accents, high contrast, cinematic sci-fi portrait",
	            _sceneObjects: [
	                { label: "Neon signs", category: "background", location: "background", prominence: "primary", state: "glowing" },
	                { label: "Rain droplets", category: "atmosphere", location: "throughout", prominence: "secondary", state: "catching neon light" },
	                { label: "Holographic ads", category: "background", location: "midground", prominence: "secondary", material: "light projection" }
	            ]
	        }
	    },
	    "oil_painting_portrait": {
	        name: "Oil Painting Filter", icon: "🎨", category: "trending",
	        description: "Timeless oil painting look with canvas texture",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "oil painting", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "contemplative", pose: "three-quarter view" }],
	            lighting: "soft", mood: "serene", color_palette: "warm tones",
	            style_modifiers: "classical oil painting, visible brushstrokes, rich textures, canvas grain, museum quality, painterly lighting"
	        }
	    },
	    "magazine_cover": {
	        name: "Magazine Cover Edit", icon: "📰", category: "trending",
	        description: "Editorial cover with pro retouch + bold layout feel",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "fashion", style: "photorealistic", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "confident", pose: "formal pose", clothing_style: "haute couture" }],
	            lighting: "studio lighting", mood: "glamorous", color_palette: "high contrast",
	            style_modifiers: "editorial magazine cover, high-end retouching, luxury branding aesthetic, sharp studio lighting, glossy finish, clean typography feel (no real brand logos)"
	        }
	    },
	    "surreal_dreamscape": {
	        name: "Surreal Dream Filter", icon: "🌙", category: "trending",
	        description: "Dreamlike surreal distortions with soft pastel mood",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "surreal", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "peaceful", pose: "floating" }],
	            lighting: "soft", mood: "dreamy", color_palette: "pastel",
	            style_modifiers: "surreal dreamcore aesthetic, impossible geometry, floating objects, soft pastel haze, ethereal atmosphere",
	            _sceneObjects: [
	                { label: "Floating islands", category: "surreal", location: "background", prominence: "secondary", state: "defying gravity" },
	                { label: "Oversized flowers", category: "surreal", location: "foreground", prominence: "secondary" },
	                { label: "Liquid sky", category: "atmosphere", location: "sky", prominence: "background", state: "melting" }
	            ]
	        }
	    },
	    "anime_action_scene": {
	        name: "Anime Scene Overlay", icon: "⚡", category: "trending",
	        description: "Dynamic anime still with motion lines and energy aura",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "anime", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "teenager", expression: "determined", pose: "action pose", clothing_style: "casual" }],
	            lighting: "dramatic", mood: "intense", color_palette: "vibrant",
	            style_modifiers: "anime illustration, bold outlines, cel shading, speed lines, dramatic shading, action aura"
	        }
	    },
	    "film_noir": {
	        name: "Noir Lighting Treatment", icon: "🎬", category: "trending",
	        description: "Black-and-white noir with hard shadows and smoke",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "noir", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "mysterious", pose: "profile view", clothing_style: "vintage" }],
	            lighting: "chiaroscuro", mood: "mysterious", color_palette: "black and white",
	            style_modifiers: "film noir, high contrast black and white, venetian blind shadows, cigarette smoke haze, detective movie vibe"
	        }
	    },
	    "3d_sculpture_marble": {
	        name: "3D Marble Sculpture", icon: "🗿", category: "trending",
	        description: "Classical marble statue look with museum lighting",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "3D render", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "stoic", pose: "heroic" }],
	            lighting: "studio lighting", mood: "epic", color_palette: "monochrome",
	            style_modifiers: "marble statue sculpture, chiseled details, Carrara marble texture, museum display, pedestal, dramatic lighting"
	        }
	    },
	    "golden_hour_glow": {
	        name: "Golden Hour Filter", icon: "🌅", category: "trending",
	        description: "Warm sunset glow with soft lens flare",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "cinematic", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "peaceful", pose: "candid", clothing_style: "bohemian" }],
	            lighting: "golden hour", mood: "romantic", color_palette: "warm tones", time_of_day: "sunset",
	            style_modifiers: "golden hour photography, warm sunlight, natural glow, lens flare, soft film grain, sun-kissed skin"
	        }
	    },
	    "polaroid_retro": {
	        name: "Retro Polaroid", icon: "📸", category: "trending",
	        description: "Instant film look with border frame + light leaks",
	        credit: "LightX, community trend",
	        data: {
	            subject_type: "portrait", style: "vintage", era: "1980s", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "candid", pose: "candid", clothing_style: "vintage" }],
	            lighting: "natural light", mood: "nostalgic", color_palette: "vintage",
	            style_modifiers: "Polaroid instant photo, white border frame, slightly faded colors, subtle light leaks, analog grain, warm vintage tones"
	        }
	    },
	    "vaporwave_aesthetic": {
	        name: "Vaporwave Dream", icon: "🌴", category: "trending",
	        description: "Neon pink/cyan vaporwave with VHS glitch feel",
	        credit: "vaporwave aesthetic trend",
	        data: {
	            subject_type: "portrait", style: "digital art", era: "1980s", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "mysterious", clothing_style: "retro" }],
	            lighting: "neon", mood: "dreamy", color_palette: "neon",
	            style_modifiers: "vaporwave aesthetic, pink and cyan neon, sunset gradients, palm trees, retro 80s synthwave, VHS scanlines, subtle chromatic aberration",
	            _sceneObjects: [
	                { label: "Palm trees", category: "natural", location: "sides", prominence: "secondary" },
	                { label: "Gradient sunset", category: "background", location: "sky", prominence: "background" },
	                { label: "Grid floor", category: "background", location: "ground", prominence: "background", state: "neon perspective grid" }
	            ]
	        }
	    },
	    "disney_pixar_character": {
	        name: "Pixar-Style Character", icon: "🎭", category: "trending",
	        description: "Cute 3D animated character with cinematic softness",
	        credit: "godofprompt.ai",
	        data: {
	            subject_type: "portrait", style: "3D render", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "smiling", pose: "expressive", clothing_style: "casual" }],
	            lighting: "soft", mood: "joyful", color_palette: "vibrant",
	            style_modifiers: "Pixar-style 3D animation, big expressive eyes, smooth subsurface skin, stylized proportions, polished render, cinematic softness"
	        }
	    },
	    "comic_book_hero": {
	        name: "Comic Book Panel", icon: "💥", category: "trending",
	        description: "Bold comic look with ink outlines + halftone texture",
	        credit: "comic aesthetic trend",
	        data: {
	            subject_type: "portrait", style: "digital art", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "determined", pose: "heroic" }],
	            lighting: "dramatic", mood: "epic", color_palette: "vibrant",
	            style_modifiers: "comic book illustration, bold ink outlines, halftone dots, dynamic panel composition, punchy flat colors, speech bubble style (no text)"
	        }
	    },
	    "watercolor_portrait": {
	        name: "Soft Watercolor", icon: "💧", category: "trending",
	        description: "Watercolor wash with paper texture and soft edges",
	        credit: "illustration trend",
	        data: {
	            subject_type: "portrait", style: "watercolor", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "peaceful", pose: "relaxed" }],
	            lighting: "soft", mood: "serene", color_palette: "pastel",
	            style_modifiers: "watercolor painting, wet edges, paper texture, pigment blooms, delicate brush strokes"
	        }
	    },
	    "baroque_portrait": {
	        name: "Baroque Masterpiece", icon: "👑", category: "trending",
	        description: "Ornate baroque portrait with dramatic chiaroscuro",
	        credit: "FelloAI, classical art trend",
	        data: {
	            subject_type: "portrait", style: "baroque", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "regal", pose: "formal pose", clothing_style: "traditional" }],
	            lighting: "chiaroscuro", mood: "dramatic", color_palette: "jewel tones",
	            style_modifiers: "baroque painting, dramatic chiaroscuro, rich velvet textures, ornate details, museum-quality portrait, warm highlights"
	        }
	    },
	    "double_exposure": {
	        name: "Double Exposure", icon: "🌳", category: "trending",
	        description: "Portrait silhouette filled with nature overlay",
	        credit: "photography trend",
	        data: {
	            subject_type: "portrait", style: "cinematic", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "peaceful", pose: "profile view" }],
	            lighting: "soft", mood: "dreamy", color_palette: "monochrome",
	            style_modifiers: "double exposure photography, silhouette filled with forest, soft blend, atmospheric haze, film grain",
	            _sceneObjects: [
	                { label: "Forest overlay", category: "overlay", location: "inside silhouette", prominence: "primary" },
	                { label: "Bird silhouettes", category: "overlay", location: "scattered", prominence: "detail" }
	            ]
	        }
	    },
	    "lo_fi_album_cover": {
	        name: "Lo-Fi Album Cover", icon: "🎧", category: "trending",
	        description: "Cozy lo-fi anime room with rainy window vibe",
	        credit: "lo-fi trend",
	        data: {
	            subject_type: "portrait", style: "anime", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "teenager", expression: "focused", pose: "sitting", clothing_style: "casual" }],
	            lighting: "soft", mood: "peaceful", color_palette: "warm tones", time_of_day: "night",
	            style_modifiers: "lo-fi hip hop aesthetic, cozy room, warm desk lamp, headphones, books, rainy window, soft shading, album cover framing",
	            _sceneObjects: [
	                { label: "Desk lamp", category: "props", location: "desk", prominence: "secondary", color: "warm" },
	                { label: "Coffee cup", category: "props", location: "desk", prominence: "detail", state: "steaming" },
	                { label: "Rainy window", category: "background", location: "behind", prominence: "secondary" }
	            ]
	        }
	    },
	    "ukiyo_e_japanese": {
	        name: "Ukiyo-e Print", icon: "🗾", category: "trending",
	        description: "Japanese woodblock print look with flat color areas",
	        credit: "classical art trend",
	        data: {
	            subject_type: "portrait", style: "minimalist", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", expression: "serene", clothing_style: "traditional" }],
	            lighting: "flat", mood: "serene", color_palette: "muted",
	            style_modifiers: "ukiyo-e woodblock print, flat color areas, crisp black outlines, paper texture, traditional Japanese composition"
	        }
	    },
	    "synthwave_retrowave": {
	        name: "Synthwave Driver", icon: "🚗", category: "trending",
	        description: "Retro-futuristic neon car scene with outrun palette",
	        credit: "synthwave aesthetic trend",
	        data: {
	            subject_type: "landscape", style: "digital art",
	            lighting: "neon", mood: "intense", color_palette: "neon", time_of_day: "night",
	            style_modifiers: "synthwave aesthetic, neon grid road, sunset gradient sky, chrome sports car, palm silhouettes, outrun, retrowave",
	            _sceneObjects: [
	                { label: "Chrome sports car", category: "vehicle", location: "center", prominence: "primary" },
	                { label: "Neon grid road", category: "background", location: "ground", prominence: "secondary" },
	                { label: "Gradient sky", category: "background", location: "sky", prominence: "background" }
	            ]
	        }
	    },
	    "glitch_art": {
	        name: "Glitch Art Effect", icon: "📺", category: "trending",
	        description: "RGB split + scanlines + digital distortion",
	        credit: "digital art trend",
	        data: {
	            subject_type: "portrait", style: "digital art", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "young adult", expression: "neutral", clothing_style: "futuristic" }],
	            lighting: "harsh", mood: "intense", color_palette: "high contrast",
	            style_modifiers: "glitch art, RGB split, scan lines, VHS distortion, databending, chromatic aberration, digital corruption"
	        }
	    },
	    "miniature_diorama": {
	        name: "Miniature World", icon: "🔍", category: "trending",
	        description: "Tilt-shift miniature diorama effect",
	        credit: "photography trend",
	        data: {
	            subject_type: "landscape", style: "photorealistic",
	            lighting: "natural light", mood: "whimsical", color_palette: "vibrant",
	            style_modifiers: "tilt-shift photography, miniature diorama, tiny world effect, selective focus, toy-like scale, realistic lighting"
	        }
	    },
	    "receipt_meme": {
	        name: "Receipt Life Summary", icon: "🧾", category: "trending",
	        description: "Receipt-style personality summary aesthetic",
	        credit: "viral X/Twitter trend",
	        data: {
	            subject_type: "still life", style: "minimalist",
	            lighting: "flat", mood: "humorous", color_palette: "monochrome",
	            style_modifiers: "thermal receipt paper texture, dot matrix printed look, itemized list layout, black text on white paper, slight crumple, realistic paper grain"
	        }
	    },
	    "cosmic_astronaut": {
	        name: "Cosmic Astronaut", icon: "🧑‍🚀", category: "trending",
	        description: "Astronaut portrait with nebula colors and starfield",
	        credit: "sci-fi art trend",
	        data: {
	            subject_type: "portrait", style: "sci-fi", person_count: 1,
	            persons: [{ gender: "neutral", age_group: "adult", clothing_style: "futuristic", clothing_type: "uniform" }],
	            lighting: "dramatic", mood: "epic", color_palette: "cosmic",
	            style_modifiers: "astronaut in space, nebula clouds, stars and galaxies, reflective helmet visor, cinematic sci-fi lighting",
	            _sceneObjects: [
	                { label: "Nebula clouds", category: "background", location: "background", prominence: "primary" },
	                { label: "Starfield", category: "background", location: "throughout", prominence: "background" },
	                { label: "Distant planets", category: "background", location: "scattered", prominence: "secondary" }
	            ]
	        }
	    },
	    "phone_popout_fashion": {
	        name: "Phone Pop-out OOTD", icon: "📱", category: "trending",
	        description: "Hyper-realistic optical illusion - model stepping out of smartphone screen with fashion breakdown",
	        credit: "https://x.com/underwoodxie96",
	        data: {
	            // Subject
	            subject: {
	                description: "A hyper-realistic optical illusion photograph. A young Caucasian woman appears to be stepping out of a smartphone screen held in a hand. The screen displays the camera interface, capturing her boots, while her real upper body extends out of the phone into reality.",
	                mirror_rules: "Ensure the phone screen clearly shows the iOS Camera UI (shutter button, mode text). Handwritten annotations must be legible and not mirrored.",
	                age: "20s",
	                expression: {
	                    eyes: {
	                        look: "Alluring and playful",
	                        energy: "Confident, direct",
	                        direction: "Looking at the viewer"
	                    },
	                    mouth: {
	                        position: "Blowing a kiss or pouting",
	                        energy: "Chic and charming"
	                    },
	                    overall: "Lifelike, engaging interaction"
	                },
	                face: {
	                    preserve_original: false,
	                    makeup: "Natural glam, matte foundation, defined European features",
	                    features: "High nose bridge, double eyelids, defined jawline"
	                },
	                hair: {
	                    color: "Dark brown",
	                    style: "Long, loose waves, voluminous",
	                    effect: "Realistic shine, wind-blown effect"
	                },
	                body: {
	                    frame: "Petite but proportionally realistic",
	                    waist: "Defined",
	                    chest: "Covered by turtleneck",
	                    legs: "Visible INSIDE the phone screen interface wearing boots",
	                    skin: {
	                        visible_areas: "Face, hands",
	                        tone: "Fair Caucasian skin",
	                        texture: "Ultra-realistic skin texture, visible pores, natural imperfections",
	                        lighting_effect: "Soft daylight"
	                    }
	                },
	                pose: {
	                    position: "Torso and head emerging vertically from the phone, legs displayed on the screen",
	                    base: "Dynamic standing pose",
	                    overall: "Energetic random pose, full of vitality"
	                },
	                clothing: {
	                    top: {
	                        effect: "Refined outfit, High-quality textile photography"
	                    },
	                    bottom: {
	                        type: "Mini Skirt and Leather Boots",
	                        color: "Dark Grey (skirt), Brown (boots)",
	                        details: "Boots visible on the screen beneath the UI elements"
	                    }
	                }
	            },
	            // Accessories
	            accessories: {
	                jewelry: "Gold rings on the photographer's hand (foreground)",
	                device: "Smartphone with burgundy case. The screen is ACTIVE and DETAILED: it displays the IOS Camera App Interface (white circular shutter button at bottom, 'PHOTO' text).",
	                prop: "On the phone screen: White handwritten-style text overlays with arrows pointing to the outfit elements (e.g., text 'suede jacket' with arrow, 'leather boots' with arrow)."
	            },
	            // Photography
	            photography: {
	                camera_style: "DSLR photography, Macro lens for phone details",
	                angle: "POV, High angle looking down at hand",
	                shot_type: "Composite photography",
	                aspect_ratio: "3:4",
	                texture: "Sharp screen pixels, fingerprint smudges on screen, realistic fabric texture",
	                lighting: "Overcast soft natural light",
	                depth_of_field: "Background bench blurred (Bokeh), Phone screen UI and subject sharp"
	            },
	            // Background
	            background: {
	                setting: "Parisian Park in Autumn",
	                wall_color: "Green bench, grey ground",
	                elements: [
	                    "Green park bench with text 'Le silence'",
	                    "Autumn leaves"
	                ],
	                atmosphere: "Cinematic, realistic",
	                lighting: "Natural ambient light"
	            },
	            // The Vibe
	            the_vibe: {
	                energy: "Sophisticated, viral social media content",
	                mood: "Fashion forward",
	                aesthetic: "OOTD breakdown, creative edit",
	                authenticity: "Photorealistic texture, not CGI",
	                intimacy: "POV",
	                story: "Fashion styling breakdown",
	                caption_energy: "Styling brown suede & leather"
	            },
	            // Constraints
	            constraints: {
	                must_keep: [
	                    "Caucasian ethnicity",
	                    "Photorealistic skin",
	                    "Camera UI elements on screen (shutter button)",
	                    "Handwritten text annotations on screen",
	                    "Pop-out effect"
	                ],
	                avoid: [
	                    "Transparent phone screen",
	                    "Blank screen",
	                    "3D render style",
	                    "Cartoon",
	                    "Plastic skin"
	                ]
	            },
	            // Negative Prompt
	            negative_prompt: [
	                "transparent screen",
	                "blank screen",
	                "glass phone",
	                "3d",
	                "render",
	                "cartoon",
	                "anime",
	                "plastic",
	                "drawing",
	                "illustration"
	            ]
	        }
	    }
	};

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DEFAULT_PRESETS;
}
