// @flow

const availableDisplayBlends: {|
  OPAQUE: string,
  ADDITIVE: string,
  SUBTRACTIVE: string,
|} = Object.freeze({
  OPAQUE: 'opaque',
  ADDITIVE: 'additive',
  SUBTRACTIVE: 'subtractive',
});

export type DisplayBlend = $Values<typeof availableDisplayBlends>;

export default availableDisplayBlends;
