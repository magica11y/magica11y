magica11y
=========
> A suite of utility functions to detect accessibility features desired by the user

[![Travis](https://img.shields.io/travis/magica11y/magica11y.svg?style=for-the-badge "Build status")](https://travis-ci.org/magica11y/magica11y)
[![npm](https://img.shields.io/npm/v/magica11y.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/magica11y)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/magica11y.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=magica11y)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/magica11y.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=magica11y)
[![Coveralls](https://img.shields.io/coveralls/magica11y/magica11y.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/magica11y)
[![David](https://img.shields.io/david/magica11y/magica11y.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/magica11y)
[![David](https://img.shields.io/david/dev/magica11y/magica11y.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/magica11y?type=dev)
[![node](https://img.shields.io/node/v/magica11y.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/magica11y)
[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)
![Greenkeeper](https://badges.greenkeeper.io/magica11y/magica11y.svg?style=flat-square "Greenkeeper")

## 🚀 Getting started

### 🏗 Installation

Install `magica11y` using `yarn` or `npm`…

```
$ yarn add magica11y  # OR
$ npm install --save magica11y
```

You can also install `magica11y` from a CDN, such as [jsDelivr](https://www.jsdelivr.com/package/npm/magica11y) or [unpkg](https://unpkg.com/magica11y@0.2.6/).

```html
<!-- Loads all the Magica11y modules -->
<script src="https://cdn.jsdelivr.net/npm/magica11y@latest/dist/magica11y.all.js"></script>
<!-- Loads only a single Magica11y module -->
<script src="https://cdn.jsdelivr.net/npm/magica11y@latest/dist/magica11y.prefersReducedMotion.js"></script>
```

### ⚗️ Usage

Import all `magica11y` modules in your JavaScript code…

```js
import { prefersReducedMotion, motionPreferences } from 'magica11y';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

If you installed `magica11y` via a `<script>` tag, then…

```html
<script>
  // If you installed all the Magica11y modules via `magica11y.all.js`, then…
  const motionPreference = window.magica11y.all.prefersReducedMotion();

  // If you installed only a single Magica11y module via `magica11y.prefersReducedMotion.js`, then…
  const motionPreference = window.magica11y.prefersReducedMotion();
</script>
```

For complete usage examples, view the [Magica11y homepage](https://magica11y.github.io)’s [source code](https://github.com/magica11y/magica11y.github.io).

## 🗼 API

**Magica11y** includes the following modules…

* [`prefersReducedMotion()`](#-prefersreducedmotion)
* [`lightLevel()`](#-lightlevel)


### 🎢 `prefersReducedMotion()`

> The [`prefers-reduced-motion`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) media feature is used to detect if the user has requested the system minimize the amount of animation or motion it uses.

#### Usage

Detects user’s preferences for reduced motion using the [`'prefers-reduce-motion'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

```js
import prefersReducedMotion, { motionPreferences } from 'magica11y/prefersReducedMotion';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

The `motionPreferences` object contains all the possible values supported by the `'prefers-reduce-motion'` media query…

* `motionPreferences.NO_PREFERENCE` (spec: [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-no-preference))
  > Indicates that the user has made no preference known to the system.
* `motionPreferences.REDUCE` (spec: [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-motion-reduce))
  > Indicates that user has notified the system that they prefer an interface that minimizes the amount of movement or animation, preferably to the point where all non-essential movement is removed.
* `null`
  > The user’s preference could not be determined.

#### Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import prefersReducedMotion, { type MotionPreference } from 'magica11y/prefersReducedMotion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
```

🎩 **Note**: `prefersReducedMotion()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `MotionPreference` type. So using `?MotionPreference` is recommended.

#### Further reading

* [macOS](https://support.apple.com/guide/mac-help/unac089/mac)
* [iOS](https://support.apple.com/en-lamr/HT202655)

---

### 🕯 `lightLevel()`

> The [`'light-level'`](https://drafts.csswg.org/mediaqueries-5/#light-level) media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response.

#### ️️Usage

Detects user’s available light level using the [`'light-level'`](https://drafts.csswg.org/mediaqueries-5/#light-level) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

```js
import lightLevel, { availableLightLevels } from 'magica11y/lightLevel';

const availableLightLevel = lightLevel();
const darkMode = availableLightLevel === availableLightLevels.DIM;
```

The `availableLightLevels` object contains all the possible values supported by the `'light-level'` media query…

* `availableLightLevels.NORMAL` (spec: [`'normal'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-normal))
  > The device is used in a environment with a light level in the ideal range for the screen, and which does not necessitate any particular adjustment.
* `availableLightLevels.DIM` (spec: [`'dim'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-dim))
  > The device is used in a dim environment, where excessive contrast and brightness would be distracting or uncomfortable to the reader. For example: night time, or a dimly illuminated indoor environment.
* `availableLightLevels.WASHED` (spec: [`'washed'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-washed))
  > The device is used in an exceptionally bright environment, causing the screen to be washed out and difficult to read. For example: bright daylight.
* `null`
  > The user’s preference could not be determined.

#### Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import lightLevel, { type LightLevel } from 'magica11y/lightLevel';

const availableLightLevel: ?LightLevel = lightLevel();
```

🎩 **Note**: `lightLevel()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `LightLevel` type. So using `?LightLevel` is recommended.

---

## :scroll: License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with ❤️ by [Rishabh Rao](https://github.com/rishabhsrao).

[![Twitter](https://img.shields.io/twitter/follow/rishabhsrao.svg?style=social)](https://twitter.com/rishabhsrao)
