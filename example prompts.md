{
  "image_request": {
    "style": "Cinematic black and white noir portrait",
    "subject": {
      "description": "Man",
      "attire": [
        "fedora",
        "trench coat"
      ]
    },
    "lighting": [
      "sliced light from blinds",
      "deep shadows"
    ],
    "atmosphere": "grainy vintage",
    "technical_specs": {
      "resolution": "4K"
    }
  }
}


{
  "project_constraints": {
    "facial_rendering": "100% original facial features (Do not edit the face)",
    "resolution": "1200x1200px",
    "output_quality": "Photo-realistic, 8K resolution"
  },
  "camera_and_style": {
    "device_emulation": "Y2k-era digital camera (Canon IXUS / Sony Cyber-shot)",
    "perspective": "Low-angle, shot from behind at a 3/4 angle",
    "visual_aesthetic": "Cinematic, nostalgic",
    "post_processing": {
      "grain": "Thin film grain",
      "depth_of_field": "Shallow",
      "color_grading": "Bright overall tone with a slight pinkish-purple hue"
    }
  },
  "subject_details": {
    "demographics": "Beautiful young woman",
    "physique": "Hourglass figure, fair dewy skin",
    "hair": "Long, wavy, thick milk-brown hair, spiral curls reaching waist",
    "makeup": {
      "base": "Light brown nude",
      "eyes": "Aussie eyeliner",
      "finish": "Glossy cheek and lip color"
    },
    "nails": "Long, polished in shiny wine red"
  },
  "pose_and_action": {
    "position": "Sitting sideways in passenger seat",
    "hands": "Right hand gripping steering wheel, left hand lifting hair up",
    "expression": "Looking back over shoulder, seductive and confident"
  },
  "fashion_and_accessories": {
    "top": "Shiny white tube top with open back and delicate crisscross detail",
    "bottom": "Light blue high-waisted jeans (fitted)",
    "jewelry": "Several gold rings, matching bracelet",
    "bag": "Small Chanel Vanity bag with black gold chain (on armrest)"
  },
  "environment": {
    "location": "Interior of luxury SUV (Mercedes-Benz style)",
    "interior_elements": "Wooden trim, light beige leather seats",
    "time_of_day": "Night"
  },
  "lighting": {
    "technique": "Direct flash photography",
    "sources": [
      "Soft warm interior lighting",
      "Cool blue dashboard light",
      "City light bokeh through windows"
    ],
    "characteristics": "High contrast, pronounced flash shadows, realistic cinematic lighting"
  }
}

{
  "customInputs": {
    "landmark": "{INSERT_LANDMARK_NAME}",
    "aspectRatio": "{INSERT_ASPECT_RATIO}",
    "timeOfDay": "{INSERT_TIME_OF_DAY}",
    "weather": "{INSERT_WEATHER_CONDITION}"
  },

  "promptDetails": {
    "description": "A completely real, ultra high resolution aerial photograph of {INSERT_LANDMARK_NAME} captured exactly as it exists today, with no fictional changes or hallucinated elements. The image must look exactly like a true professional aerial photograph taken by the world’s most elite drone photographer. All lighting, geography, environment, structures and materials must remain fully accurate to real life. The landmark must be photographed from the most iconic, naturally beautiful, physically achievable aerial angle that a real drone pilot would intentionally select, highlighting the landmark’s form, scale, symmetry and character in a striking yet believable way. Every pixel must follow photographic physics, optical truth and real environmental behavior.",
    
    "defaultLogic": {
      "aspectRatio": "If {INSERT_ASPECT_RATIO} is empty, default to 3:2.",
      "timeOfDay": "If {INSERT_TIME_OF_DAY} is empty, default to golden hour daytime.",
      "weather": "If {INSERT_WEATHER_CONDITION} is empty, default to a perfect golden hour sunset atmosphere with clear skies, warm tones and maximum natural visibility."
    },

    "timeOfDayInterpretation": "Day must use true golden hour sunlight, with physically accurate color temperature, soft directional illumination, natural shadow geometry and correct falloff. Night must follow true photometric nighttime behavior, including realistic luminance, believable building lights, natural color casts and correct highlight discipline. If empty, default to golden hour daylight which offers maximum realism and beauty.",
    
    "weatherInterpretation": "Sunny conditions must replicate real sunset character. The sky must exhibit warm golden hour gradients transitioning into soft cooler tones at higher elevations. Cloud patterns, if manually selected, must be meteorologically correct and follow natural diffusion. Rainy or snowy options must behave exactly like real weather, with physically correct reflections, wetness levels, snow accumulation and reduced visibility. If empty, default to clear golden hour sunset for the best realism and beauty.",
    
    "angleAndComposition": "The camera angle must be a physically real, legally flyable, aesthetically optimal oblique aerial angle that emphasizes the landmark as the primary subject. The perspective must reveal the landmark’s defining shape, symmetry, scale and relationship to its environment. Use real world framing principles such as rule of thirds, true horizon placement, natural leading lines and authentic depth cues. No impossible angles or exaggerated elevation.",
    
    "realisticSunPhysics": "Sun position must follow real-world solar physics. Golden hour sunlight must have a real azimuth between 15° and 35° above the horizon, depending on latitude and season. The sun’s direction must match shadow orientation, material reflectivity and illumination falloff exactly as it would in true photography. Sky gradients must follow atmospheric Rayleigh scattering rather than artistic effects. No impossible sun directions or inconsistent shadows.",

    "realisticDroneAltitude": "The drone altitude must stay within realistic flight limits. The camera viewpoint must represent a real, legal flight height between 30 meters and 150 meters depending on landscape and airspace restrictions. The horizon line, perspective compression, and foreground scale relationships must reflect a real, physically achievable drone altitude. No satellite-level views. No helicopter-level height unless legally plausible. Only real drone flight envelopes.",
    
    "realisticSensorModeling": "Camera behavior must follow real sensor physics. Shutter speed must remain fast enough to freeze motion without unnatural sharpness. ISO must remain within clean native ranges to avoid artificial noise. Dynamic range must reflect real-world limits, preserving highlights and shadows without synthetic tone mapping. Color science must follow true RAW-to-Log interpretation with natural rolloff and realistic luminance values. No AI artifacts, HDR surrealism or synthetic enhancement.",
    
    "detailLevel": "Detail must follow real optical behavior. Sharpness must be natural, not artificial. Surface textures must match real materials exactly as they appear from drone altitude. No invented micro details. No procedural textures. Foliage, rooftops, road markings and water surfaces must behave exactly like true aerial photographs.",
    
    "stylization": "Zero stylization. Only real-life photographic tonality. Natural color reproduction. True dynamic range. Physically accurate exposure. No cinematic fantasy, no painterly effects, no stylized grades. Pure documentary-level realism.",
    
    "camera": {
      "equipment": "Professional cinema drone such as DJI Inspire 3 with Zenmuse X9 8K Air full frame camera.",
      "lens": "DL 24mm F2.8 LS ASPH rectilinear wide-angle lens with zero distortion and real-world optical behavior.",
      "perspective": "A physically achievable elevated oblique angle showcasing {INSERT_LANDMARK_NAME} as the central subject with perfect compositional clarity.",
      "settings": "8K RAW-equivalent clarity, real-world shutter behavior for crisp motion freeze, native ISO for clean shadows and balanced exposure respecting real dynamic range without artificial enhancement."
    },

    "lighting": "Lighting must follow physical laws. Golden hour must produce soft warm light, long shadows and real color temperature transitions. Night lighting must follow authentic ambient and artificial light patterns from the actual location.",
    
    "cloudsAndAtmosphere": "Clouds must be physically plausible, meteorologically correct and visually consistent with light direction. Atmospheric perspective must follow real distance-based contrast falloff, with no surreal haze or fantasy gradients.",
    
    "background": "All geography, architecture and environment must match real-world present-day reality. No imagined buildings, no altered street layouts, no fictional coastline shapes. Everything must remain precisely authentic to the true location."
  },

  "negativePrompt": "hallucinated architecture, invented buildings, fictional modifications, impossible angles, unrealistic lighting, incorrect shadow direction, surreal clouds, neon skies, artificial bloom, painterly textures, CGI artifacts, false reflections, oversharpened edges, incorrect sun position, unrealistic altitude, warped geometry, incorrect city layout, fantasy weather"
}




{
  "subject": {
    "description": "A young woman taking a car selfie with her hand resting on her forehead, smiling gently",
    "age": "young adult",
    "expression": "relaxed, candid, slight smile, hand casually touching forehead",
    "hair": {
      "color": "dark brown",
      "style": "slicked back tight low bun with a precise middle part"
    },
    "clothing": {
      "top": {
        "type": "oversized hoodie",
        "color": "light heather grey",
        "details": "soft fleece fabric, relaxed fit, hood falling back”
    },
    "face": {
      "preserve_original": true,
      "makeup": "fresh natural 'clean girl' aesthetic, sun-kissed skin with visible freckles across nose, rosy blush, glossy pink lips, groomed brows"
  },
  "accessories": {
    "eyewear": {
      "type": "tortoise shell glasses",
      "details": "oval/round acetate frames, stylish and intellectual vibe"
    },
    "earrings": {
      "type": "gold ear stack",
      "details": "multiple small gold huggie hoops and studs on the lobe and helix"
    },
    "jewelry": {
      "necklace": "dainty gold chain with a tiny pendant",
      "ring": "thin gold band on the ring finger"
    }
  },
  "photography": {
    "camera_style": "modern smartphone selfie",
    "angle": "eye-level to slightly low angle",
    "shot_type": "close-up portrait composition",
    “aspect_ratio”: “9:16 vertical”,
    "texture": "natural daylight, sharp focus on face, soft skin texture, bright window lighting, no grain"
  },
  "background": {
    "setting": "interior of a car",
    "elements": [
      "dark car ceiling / panoramic sunroof",
      "car seat headrest",
      "seatbelt",
      "car window showing bright daylight",
      "blurred trees and buildings outside"
    ],
    "atmosphere": "casual daily life, on-the-go, bright daytime vibe",
    "lighting": "soft natural window light illuminating the face"
  }
}
