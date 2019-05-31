// @flow

import prefersReducedMotion, { motionPreferences } from '../../src/prefersReducedMotion';

import mockWindowMatchMedia from '../mockWindowMatchMedia';

describe('prefersReducedMotion()', () => {
  it('returns "no-preference" when users has not set preference for reduced motion', () => {
    window.matchMedia = jest
      .fn()
      .mockImplementation(() => mockWindowMatchMedia(true, '(prefers-reduced-motion: no-preference)'));

    const motionPreference = prefersReducedMotion();

    expect(motionPreference).toEqual(motionPreferences.NO_PREFERENCE);
  });

  it('returns "reduce" when users has set preference for reduced motion', () => {
    window.matchMedia = jest
      .fn()
      .mockImplementation(() => mockWindowMatchMedia(true, '(prefers-reduced-motion: reduce)'));

    const motionPreference = prefersReducedMotion();

    expect(motionPreference).toEqual(motionPreferences.REDUCE);
  });

  it('returns "null" when preference cannot be determined', () => {
    window.matchMedia = jest.fn().mockImplementation(() => mockWindowMatchMedia(false, 'not all'));

    const motionPreference = prefersReducedMotion();

    expect(motionPreference).toEqual(null);
  });
});
