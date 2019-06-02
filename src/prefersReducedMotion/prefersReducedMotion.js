// @flow

import matchUserPreference from '../matchUserPreference';

import { type MotionPreference } from './motionPreferences';

// See https://github.com/magica11y/magica11y/issues/1
const motionPreferencesArray: Array<MotionPreference> = ['reduce', 'no-preference'];

const prefersReducedMotionMediaQuery = 'prefers-reduced-motion';

/**
 * Detects user’s preferences for reduced motion
 * using CSS3 Media Queries level 5 specification for `'prefers-reduce-motion'`.
 *
 * @returns Either 'reduce', 'no-preference' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion
 */
const prefersReducedMotion = (): ?MotionPreference => {
  const matchedMotionPreference: ?MotionPreference = motionPreferencesArray.find((motionPreference: MotionPreference) =>
    matchUserPreference(prefersReducedMotionMediaQuery, motionPreference),
  );

  if (matchedMotionPreference) {
    return matchedMotionPreference;
  }

  return null;
};

export default prefersReducedMotion;
