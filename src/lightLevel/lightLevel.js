// @flow

export const availableLightLevels: {|
  NORMAL: string,
  DIM: string,
  WASHED: string,
|} = Object.freeze({
  NORMAL: 'normal',
  DIM: 'dim',
  WASHED: 'washed',
});

export type LightLevel = $Values<typeof availableLightLevels>;

// See https://github.com/magica11y/magica11y/issues/1
const lightLevelsValues: Array<LightLevel> = ['normal', 'dim', 'washed'];

const getMediaQueryString = (lightLevel: LightLevel): string => {
  return `(light-level: ${lightLevel})`;
};

/**
 * Detects user’s preferences for light level
 * using CSS3 Media Queries level 5 specification for `'light-level'`.
 *
 * @returns Either 'normal', 'dim', 'washed' or `null`
 * @see https://drafts.csswg.org/mediaqueries-5/#light-level
 */
const lightLevel = (): ?LightLevel => {
  const matchedLightLevel: ?LightLevel = lightLevelsValues.find((lightLevelValue: LightLevel) => {
    const mediaQueryString = getMediaQueryString(lightLevelValue);
    const mediaQuery: MediaQueryList = window.matchMedia(mediaQueryString);

    return mediaQuery.media === mediaQueryString && mediaQuery.matches;
  });

  if (matchedLightLevel) {
    return matchedLightLevel;
  }

  return null;
};

export default lightLevel;
