// @flow

const motionPreferences: {|
  REDUCE: string,
  NO_PREFERENCE: string,
|} = Object.freeze({
  REDUCE: 'reduce',
  NO_PREFERENCE: 'no-preference',
});

export type MotionPreference = $Values<typeof motionPreferences>;

export default motionPreferences;
