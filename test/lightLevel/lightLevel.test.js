// @flow

import { lightLevel, availableLightLevels, type LightLevel } from '../../src';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('lightLevel()', () => {
  it('returns a light-level preference when preference matches', () => {
    type TestParameter = {|
      testInput: LightLevel,
      expectedOutput: LightLevel,
    |};

    const testParameters: Array<TestParameter> = [
      {
        testInput: availableLightLevels.NORMAL,
        expectedOutput: 'normal',
      },
      {
        testInput: availableLightLevels.DIM,
        expectedOutput: 'dim',
      },
      {
        testInput: availableLightLevels.WASHED,
        expectedOutput: 'washed',
      },
    ];

    testParameters.forEach((testParameter: TestParameter) => {
      window.matchMedia = jest
        .fn()
        .mockImplementation(() => mockWindowMatchMedia(true, `(light-level: ${testParameter.testInput})`));

      const availableLightLevel = lightLevel();

      expect(availableLightLevel).toEqual(testParameter.expectedOutput);

      window.matchMedia.mockClear();
    });
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const lightLevelPreference = lightLevel();

    expect(lightLevelPreference).toEqual(null);
  });
});
