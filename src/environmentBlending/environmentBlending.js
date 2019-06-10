// @flow

import matchUserPreference from '../matchUserPreference';

import availableDisplayBlends, { type DisplayBlend } from './availableDisplayBlends';

// See https://github.com/magica11y/magica11y/issues/1
const displayBlendValues: Array<DisplayBlend> = [
  availableDisplayBlends.OPAQUE,
  availableDisplayBlends.ADDITIVE,
  availableDisplayBlends.SUBTRACTIVE,
];

const environmentBlendingMediaQuery = 'environment-blending';

/**
 * Detects the characteristics of the user’s display
 * using CSS3 Media Queries level 5 specification for `'environment-blending'`.
 *
 * @returns Either 'opaque', 'additive', 'subtractive' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#environment-blending
 */
const environmentBlending = (): ?DisplayBlend => {
  const matchedDisplayBlend: ?DisplayBlend = displayBlendValues.find((displayBlendValue: DisplayBlend) =>
    matchUserPreference(environmentBlendingMediaQuery, displayBlendValue),
  );

  if (matchedDisplayBlend) {
    return matchedDisplayBlend;
  }

  return null;
};

export default environmentBlending;
