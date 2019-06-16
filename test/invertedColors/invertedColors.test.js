// @flow

import { invertedColors, colorPreferences, type ColorPreference } from '../../src';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('invertedColors()', () => {
  it('returns a color preference when media-query matches', () => {
    type TestParameter = {|
      testInput: ColorPreference,
      expectedOutput: ColorPreference,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: colorPreferences.NONE,
        expectedOutput: 'none',
      },
      {
        testInput: colorPreferences.INVERTED,
        expectedOutput: 'inverted',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(inverted-colors: ${testParameter.testInput})`));

      const colorPreference = invertedColors();

      expect(colorPreference).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const colorPreference = invertedColors();

    expect(colorPreference).toEqual(null);
  });
});
