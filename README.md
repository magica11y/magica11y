magica11y
=========
> A suite of utility functions to detect accessibility features desired by the user

[![Travis](https://img.shields.io/travis/magica11y/magica11y.svg?style=for-the-badge "Build status")](https://travis-ci.org/magica11y/magica11y)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/magica11y.svg?style=for-the-badge)](https://www.npmjs.com/package/magica11y)
[![Coveralls](https://img.shields.io/coveralls/magica11y/magica11y.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/magica11y)
[![David](https://img.shields.io/david/magica11y/magica11y.svg?style=for-the-badge)](https://david-dm.org/magica11y/magica11y)
[![David](https://img.shields.io/david/dev/magica11y/magica11y.svg?style=for-the-badge)](https://david-dm.org/magica11y/magica11y?type=dev)
[![node](https://img.shields.io/node/v/magica11y.svg?style=for-the-badge)](https://www.npmjs.com/package/magica11y)
[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge)](LICENSE.md)

## 🚀 Getting started

Install `magica11y` using `yarn` or `npm`…

```js
$ yarn add magica11y  # OR
$ npm install --save magica11y
```

Import `magica11y` utility functions in your JavaScript code…

```js
import prefersReducedMotion, { motionPreferences } from 'magica11y/prefersReducedMotion';
```

You can then use `prefersReducedMotion`…

```js
const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

## 🗼 API

### 🎢 `prefersReducedMotion()`

> Detects user’s preferences for reduced motion using CSS3 Media Queries level 5 specification for [`'prefers-reduce-motion'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion).

#### Usage

```js
// @flow
import prefersReducedMotion, { motionPreferences, type MotionPreference } from 'magica11y/prefersReducedMotion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

| Return value                      | Media query value                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `motionPreferences.NO_PREFERENCE` | [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference) |
| `motionPreferences.REDUCE`        | [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce)               |
| `null`                            | Preference could not be determined.                                                                             |

#### Flow types

```js

```

#### 📝 Documentation

* [macOS](https://support.apple.com/guide/mac-help/unac089/mac)
* [iOS](https://support.apple.com/en-lamr/HT202655)

## :scroll: License

See [LICENSE.md](LICENSE.md).
