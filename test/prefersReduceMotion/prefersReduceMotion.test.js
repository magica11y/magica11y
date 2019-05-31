// @flow

import prefersReduceMotion, { motionPreferences } from '../../src/prefersReduceMotion';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('prefersReduceMotion()', () => {
  it('returns "no-preference" when users has not set preference for reduced motion', () => {
    window.matchMedia = jest
      .fn()
      .mockImplementation(() => mockWindowMatchMedia(true, '(prefers-reduced-motion: no-preference)'));

    const motionPreference = prefersReduceMotion();

    expect(motionPreference).toEqual(motionPreferences.NO_PREFERENCE);
  });

  it('returns "reduce" when users has set preference for reduced motion', () => {
    window.matchMedia = jest
      .fn()
      .mockImplementation(() => mockWindowMatchMedia(true, '(prefers-reduced-motion: reduce)'));

    const motionPreference = prefersReduceMotion();

    expect(motionPreference).toEqual(motionPreferences.REDUCE);
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const motionPreference = prefersReduceMotion();

    expect(motionPreference).toEqual(null);
  });
});
