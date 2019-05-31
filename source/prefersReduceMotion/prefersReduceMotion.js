// @flow

export const motionPreferences = Object.freeze({
  REDUCE: 'reduce',
  NO_PREFERENCE: 'no-preference',
});

export type MotionPreference = $Values<typeof motionPreferences>;

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
const prefersReduceMotion = (): ?MotionPreference => {
  const reducedMediaQueryString = getMediaQueryString(motionPreferences.REDUCE);
  const reducedMediaQuery = window.matchMedia(reducedMediaQueryString);
  if (reducedMediaQuery.media === reducedMediaQueryString && reducedMediaQuery.matches) {
    return motionPreferences.REDUCE;
  }

  const noPreferenceMediaQueryString = getMediaQueryString(motionPreferences.NO_PREFERENCE);
  const noPreferenceMediaQuery = window.matchMedia(noPreferenceMediaQueryString);
  if (noPreferenceMediaQuery.media === noPreferenceMediaQueryString && noPreferenceMediaQuery.matches) {
    return motionPreferences.NO_PREFERENCE;
  }

  return null;
};

export default prefersReduceMotion;
