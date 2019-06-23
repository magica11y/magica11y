// @flow

const transparencyPreferences: {|
  NO_PREFERENCE: string,
  REDUCE: string,
|} = Object.freeze({
  NO_PREFERENCE: 'no-preference',
  REDUCE: 'reduce',
});

export type TransparencyPreference = $Values<typeof transparencyPreferences>;

export default transparencyPreferences;
