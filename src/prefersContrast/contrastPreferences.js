// @flow

const contrastPreferences: {|
  NO_PREFERENCE: string,
  HIGH: string,
  LOW: string,
|} = Object.freeze({
  NO_PREFERENCE: 'no-preference',
  HIGH: 'high',
  LOW: 'low',
});

export type ContrastPreference = $Values<typeof contrastPreferences>;

export default contrastPreferences;
