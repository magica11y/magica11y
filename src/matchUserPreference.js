// @flow

import type { MotionPreference } from './prefersReducedMotion/motionPreferences';
import type { LightLevel } from './lightLevel/availableLightLevels';

type MediaQueryValue = MotionPreference | LightLevel;

const matchUserPreference = (mediaQueryKey: string, mediaQueryValue: MediaQueryValue): ?boolean => {
  const mediaQueryString = `(${mediaQueryKey}: ${mediaQueryValue})`;
  const mediaQuery: MediaQueryList = window.matchMedia(mediaQueryString);

  return mediaQuery.media === mediaQueryString && mediaQuery.matches;
};

export default matchUserPreference;
