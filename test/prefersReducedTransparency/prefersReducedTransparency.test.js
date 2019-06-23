// @flow

import { prefersReducedTransparency, transparencyPreferences, type TransparencyPreference } from '../../src';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('prefersReducedTransparency()', () => {
  it('returns a transparency preference when media-query matches', () => {
    type TestParameter = {|
      testInput: TransparencyPreference,
      expectedOutput: TransparencyPreference,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: transparencyPreferences.REDUCE,
        expectedOutput: 'reduce',
      },
      {
        testInput: transparencyPreferences.NO_PREFERENCE,
        expectedOutput: 'no-preference',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() =>
          mockWindowMatchMedia(true, `(prefers-reduced-transparency: ${testParameter.testInput})`),
        );

      const transparencyPreference = prefersReducedTransparency();

      expect(transparencyPreference).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const transparencyPreference = prefersReducedTransparency();

    expect(transparencyPreference).toEqual(null);
  });
});
