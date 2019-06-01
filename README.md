magica11y
=========
> A suite of utility functions to detect accessibility features desired by the user

[![Travis](https://img.shields.io/travis/magica11y/magica11y.svg?style=for-the-badge "Build status")](https://travis-ci.org/magica11y/magica11y)
[![npm](https://img.shields.io/npm/v/magica11y.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/magica11y)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/magica11y.svg?style=for-the-badge "Bundle size")](https://bundlephobia.com/result?p=magica11y)
[![Coveralls](https://img.shields.io/coveralls/magica11y/magica11y.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/magica11y)
[![David](https://img.shields.io/david/magica11y/magica11y.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/magica11y)
[![David](https://img.shields.io/david/dev/magica11y/magica11y.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/magica11y?type=dev)
[![node](https://img.shields.io/node/v/magica11y.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/magica11y)
[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

## 🚀 Getting started

Install `magica11y` using `yarn` or `npm`…

```
$ yarn add magica11y  # OR
$ npm install --save magica11y
```

Import `magica11y` utility functions in your JavaScript code…

```js
import prefersReducedMotion, { motionPreferences } from 'magica11y/prefersReducedMotion';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

You can also install `magica11y` from a CDN, such as [jsDelivr](https://www.jsdelivr.com/package/npm/magica11y) or [unpkg](https://unpkg.com/magica11y@0.2.6/).

Load the `magica11y` via a `<script>` tag…

```html
<script src="https://cdn.jsdelivr.net/npm/magica11y@latest/dist/prefersReducedMotion.min.js"></script>
```

… and use it in JavaScript as…

```js
const motionPreference = window.magica11y.prefersReducedMotion();
```


## 🗼 API

### 🎢 `prefersReducedMotion()`

> Detects user’s preferences for reduced motion using CSS3 Media Queries level 5 specification for [`'prefers-reduce-motion'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion).

#### Usage

```js
import prefersReducedMotion, { motionPreferences } from 'magica11y/prefersReducedMotion';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

| Return value                      | Media query value                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `motionPreferences.NO_PREFERENCE` | [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference) |
| `motionPreferences.REDUCE`        | [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce)               |
| `null`                            | Preference could not be determined.                                                                             |

#### ☔️ Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import prefersReducedMotion, { type MotionPreference } from 'magica11y/prefersReducedMotion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
```

🎩 **Note**: `prefersReducedMotion()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `MotionPreference` type. So using `?MotionPreference` is recommended.

#### 📝 Documentation

* [macOS](https://support.apple.com/guide/mac-help/unac089/mac)
* [iOS](https://support.apple.com/en-lamr/HT202655)

## :scroll: License

See [LICENSE.md](LICENSE.md).
