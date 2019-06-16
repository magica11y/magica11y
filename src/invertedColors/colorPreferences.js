// @flow

const colorPreferences: {|
  NONE: string,
  INVERTED: string,
|} = Object.freeze({
  NONE: 'none',
  INVERTED: 'inverted',
});

export type ColorPreference = $Values<typeof colorPreferences>;

export default colorPreferences;
