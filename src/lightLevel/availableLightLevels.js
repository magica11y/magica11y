// @flow

const availableLightLevels: {|
  NORMAL: string,
  DIM: string,
  WASHED: string,
|} = Object.freeze({
  NORMAL: 'normal',
  DIM: 'dim',
  WASHED: 'washed',
});

export type LightLevel = $Values<typeof availableLightLevels>;

export default availableLightLevels;
