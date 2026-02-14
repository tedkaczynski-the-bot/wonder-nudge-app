/**
 * Wonder Nudge Typography
 * 
 * Clean, readable, contemplative.
 * Using system fonts for now - can add custom fonts later.
 */

import { Platform, TextStyle } from 'react-native';

const fontFamily = Platform.select({
  ios: 'Georgia',
  android: 'serif',
  default: 'Georgia',
});

const fontFamilySans = Platform.select({
  ios: 'System',
  android: 'sans-serif',
  default: 'System',
});

export const typography = {
  // The nudge itself - large, contemplative
  nudge: {
    fontFamily,
    fontSize: 28,
    lineHeight: 42,
    letterSpacing: -0.3,
    fontWeight: '400' as const,
  } as TextStyle,
  
  // Section headers
  heading: {
    fontFamily: fontFamilySans,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1.5,
    fontWeight: '500' as const,
    textTransform: 'uppercase' as const,
  } as TextStyle,
  
  // Body text
  body: {
    fontFamily: fontFamilySans,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
    fontWeight: '400' as const,
  } as TextStyle,
  
  // Small text, captions
  caption: {
    fontFamily: fontFamilySans,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontWeight: '400' as const,
  } as TextStyle,
  
  // Buttons and actions
  action: {
    fontFamily: fontFamilySans,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: '500' as const,
  } as TextStyle,
} as const;
