/**
 * Wonder Nudge Color Palette
 * 
 * A calm, contemplative palette inspired by thresholds and liminal moments.
 * Designed to fade into the background while drawing attention outward.
 */

export const colors = {
  // Primary - soft warm white
  background: '#FDFCFA',
  backgroundDim: '#F5F3EF',
  
  // Text hierarchy
  text: {
    primary: '#2C2C2C',
    secondary: '#6B6B6B',
    muted: '#9B9B9B',
    inverse: '#FDFCFA',
  },
  
  // Accent - golden hour inspired
  accent: {
    dawn: '#E8B87D',      // Early morning warmth
    dusk: '#C49A6C',      // Evening gold
    twilight: '#8B7355',  // Deeper threshold moment
  },
  
  // Atmospheric
  atmosphere: {
    mist: '#E5E3DF',
    cloud: '#D8D5CF',
    shadow: '#B5B2AC',
  },
  
  // Functional
  functional: {
    success: '#7D9B76',
    subtle: '#E0DDD7',
  },
} as const;

export type ColorKey = keyof typeof colors;
