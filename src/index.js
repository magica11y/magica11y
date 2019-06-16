// @flow

import lightLevel, { availableLightLevels, type LightLevel } from './lightLevel';
import prefersReducedMotion, { motionPreferences, type MotionPreference } from './prefersReducedMotion';
import environmentBlending, { availableDisplayBlends, type DisplayBlend } from './environmentBlending';
import invertedColors, { colorPreferences, type ColorPreference } from './invertedColors';

export {
  lightLevel,
  availableLightLevels,
  prefersReducedMotion,
  motionPreferences,
  environmentBlending,
  availableDisplayBlends,
  invertedColors,
  colorPreferences,
};

export type { LightLevel, MotionPreference, DisplayBlend, ColorPreference };
