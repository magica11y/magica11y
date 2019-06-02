// @flow

export const motionPreferences: {|
  REDUCE: string,
  NO_PREFERENCE: string,
|} = Object.freeze({
  REDUCE: 'reduce',
  NO_PREFERENCE: 'no-preference',
});

export type MotionPreference = $Values<typeof motionPreferences>;

// See https://github.com/magica11y/magica11y/issues/1
const motionPreferencesArray: Array<MotionPreference> = ['reduce', 'no-preference'];

const getMediaQueryString = (motionPreference: MotionPreference): string => {
  return `(prefers-reduced-motion: ${motionPreference})`;
};

/**
 * Detects user’s preferences for reduced motion
 * using CSS3 Media Queries level 5 specification for `'prefers-reduce-motion'`.
 *
 * @returns Either 'reduce', 'no-preference' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion
 */
const prefersReducedMotion = (): ?MotionPreference => {
  const matchedMotionPreference: ?MotionPreference = motionPreferencesArray.find(
    (motionPreference: MotionPreference) => {
      const mediaQueryString = getMediaQueryString(motionPreference);
      const mediaQuery: MediaQueryList = window.matchMedia(mediaQueryString);

      return mediaQuery.media === mediaQueryString && mediaQuery.matches;
    },
  );

  if (matchedMotionPreference) {
    return matchedMotionPreference;
  }

  return null;
};

export default prefersReducedMotion;
