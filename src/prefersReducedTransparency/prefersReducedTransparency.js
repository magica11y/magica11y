// @flow

import matchUserPreference from '../matchUserPreference';

import transparencyPreferences, { type TransparencyPreference } from './transparencyPreferences';

// See https://github.com/magica11y/magica11y/issues/1
const transparencyPreferenceValues: Array<TransparencyPreference> = [
  transparencyPreferences.NO_PREFERENCE,
  transparencyPreferences.REDUCE,
];

/**
 * Detects user’s preferences for reduced transparency
 * using CSS3 Media Queries level 5 specification for `'prefers-reduce-transparency'`.
 *
 * @returns Either 'no-preference', 'reduce' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency
 */
const prefersReducedTransparency = (): ?TransparencyPreference => {
  const matchedTransparencyPreference: ?TransparencyPreference = transparencyPreferenceValues.find(
    (transparencyPreferenceValue: TransparencyPreference) =>
      matchUserPreference('prefers-reduced-transparency', transparencyPreferenceValue),
  );

  if (matchedTransparencyPreference) {
    return matchedTransparencyPreference;
  }

  return null;
};

export default prefersReducedTransparency;
