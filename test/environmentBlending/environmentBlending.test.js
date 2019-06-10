// @flow

import { environmentBlending, availableDisplayBlends, type DisplayBlend } from '../../src';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('environmentBlending()', () => {
  it('returns an available display blend when media-query matches', () => {
    type TestParameter = {|
      testInput: DisplayBlend,
      expectedOutput: DisplayBlend,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: availableDisplayBlends.OPAQUE,
        expectedOutput: 'opaque',
      },
      {
        testInput: availableDisplayBlends.ADDITIVE,
        expectedOutput: 'additive',
      },
      {
        testInput: availableDisplayBlends.SUBTRACTIVE,
        expectedOutput: 'subtractive',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(environment-blending: ${testParameter.testInput})`));

      const availableDisplayBlend = environmentBlending();

      expect(availableDisplayBlend).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const availableDisplayBlend = environmentBlending();

    expect(availableDisplayBlend).toEqual(null);
  });
});
