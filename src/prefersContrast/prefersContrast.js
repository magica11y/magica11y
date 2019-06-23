// @flow

import matchUserPreference from '../matchUserPreference';

import contrastPreferences, { type ContrastPreference } from './contrastPreferences';

// See https://github.com/magica11y/magica11y/issues/1
const contrastPreferenceValues: Array<ContrastPreference> = [
  contrastPreferences.NO_PREFERENCE,
  contrastPreferences.HIGH,
  contrastPreferences.LOW,
];

/**
 * Detects user’s preferences for contrast
 * using CSS3 Media Queries level 5 specification for `'prefers-contrast'`.
 *
 * @returns Either 'no-preference', 'high', 'low' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-contrast
 */
const prefersContrast = (): ?ContrastPreference => {
  const matchedContrastPreference: ?ContrastPreference = contrastPreferenceValues.find(
    (contrastPreferenceValue: ContrastPreference) =>
      matchUserPreference('prefers-contrast', contrastPreferenceValue),
  );

  if (matchedContrastPreference) {
    return matchedContrastPreference;
  }

  return null;
};

export default prefersContrast;
