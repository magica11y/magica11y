// @flow

import matchUserPreference from '../matchUserPreference';

import { type LightLevel } from './availableLightLevels';

// See https://github.com/magica11y/magica11y/issues/1
const lightLevelsValues: Array<LightLevel> = ['normal', 'dim', 'washed'];

const lightLevelMediaQuery = 'light-level';

/**
 * Detects user’s preferences for light level
 * using CSS3 Media Queries level 5 specification for `'light-level'`.
 *
 * @returns Either 'normal', 'dim', 'washed' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#light-level
 */
const lightLevel = (): ?LightLevel => {
  const matchedLightLevel: ?LightLevel = lightLevelsValues.find((lightLevelValue: LightLevel) =>
    matchUserPreference(lightLevelMediaQuery, lightLevelValue),
  );

  if (matchedLightLevel) {
    return matchedLightLevel;
  }

  return null;
};

export default lightLevel;