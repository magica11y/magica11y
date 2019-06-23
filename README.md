![Magica11y](assets/img/Magica11y-cover.jpg "Magica11y cover")

Magica11y
=========
> A suite of utility functions to detect "user-preference" and "environment" media features.

[![Travis](https://img.shields.io/travis/com/magica11y/magica11y.svg?style=for-the-badge)](https://travis-ci.com/magica11y/magica11y)
[![npm](https://img.shields.io/npm/v/magica11y.svg?style=for-the-badge "NPM")](https://www.npmjs.com/package/magica11y)
[![Bundlephobia](https://img.shields.io/bundlephobia/min/magica11y.svg?style=for-the-badge "Bundle size (minified)")](https://bundlephobia.com/result?p=magica11y)
[![Bundlephobia](https://img.shields.io/bundlephobia/minzip/magica11y.svg?style=for-the-badge "Bundle size (minified+gzipped)")](https://bundlephobia.com/result?p=magica11y)
[![Coveralls](https://img.shields.io/coveralls/magica11y/magica11y.svg?style=for-the-badge "Test coverage status")](https://coveralls.io/r/magica11y/magica11y)
[![David](https://img.shields.io/david/magica11y/magica11y.svg?style=for-the-badge "Dependencies")](https://david-dm.org/magica11y/magica11y)
[![David](https://img.shields.io/david/dev/magica11y/magica11y.svg?style=for-the-badge "Dev Dependencies")](https://david-dm.org/magica11y/magica11y?type=dev)
[![node](https://img.shields.io/node/v/magica11y.svg?style=for-the-badge "Node engine")](https://www.npmjs.com/package/magica11y)
[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)
![Greenkeeper](https://badges.greenkeeper.io/magica11y/magica11y.svg?style=flat-square "Greenkeeper")

---

# ✨ Introduction

**Magica11y** provides a suite of utility functions to detect "user-preference" and "environment" media features.

**Magica11y** is awesome because…
  * It has zero dependencies
  * It’s lightweight, just under [1KB (minified and gzipped)](https://bundlephobia.com/result?p=magica11y)
  * It uses the [`window.matchMedia`](https://developer.mozilla.org/docs/Web/API/Window/matchMedia) API underneath
  * It’s optimized for performance; all the module functions are designed in such a way that they exit early
  * It provides a clean, well-documented and semantic API to work with

**Magica11y** includes the following utility functions…
  * 🎢 [`prefersReducedMotion()`](#-prefersreducedmotion)
  * 🕯 [`lightLevel()`](#-lightlevel)
  * 📺 [`environmentBlending()`](#-environmentblending)
  * 🌗 [`invertedColors()`](#-invertedcolors)
  * 💎 [`prefersReducedTransparency()`](#-prefersreducedtransparency)
  * 🔆 [`prefersContrast()`](#-preferscontrast)

# 🚀 Getting started

## 🏗 Installation

Install **Magica11y** using `yarn` or `npm`…

```
$ yarn add magica11y  # OR
$ npm install --save magica11y
```

You can also install **Magica11y** from a CDN, such as [jsDelivr](https://www.jsdelivr.com/package/npm/magica11y) or [unpkg](https://unpkg.com/magica11y/).

```html
<script src="https://cdn.jsdelivr.net/npm/magica11y@latest/dist/magica11y.prefersReducedMotion.js"></script>
```

## ⚗️ Usage

Import **Magica11y** module in your JavaScript…

```js
import prefersReducedMotion, { motionPreferences } from 'magica11y/prefersReducedMotion';

const motionPreference = prefersReducedMotion();
const disableAnimations = motionPreference === motionPreferences.REDUCE;
```

If you installed **Magica11y** via a `<script>` tag, then `magica11y` is available on the `window` object…

```html
<script>
  const motionPreference = window.magica11y.prefersReducedMotion();
  const disableAnimations = motionPreference === motionPreferences.REDUCE;
</script>
```

---

# 🗼 API documentation

## 🎢 `prefersReducedMotion()`

Detects user’s preferences for reduced motion using the [`'prefers-reduce-motion'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

> The [`prefers-reduced-motion`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) media feature is used to detect if the user has requested the system minimize the amount of animation or motion it uses.

### ⚗️ Usage

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

### 📚 Further reading

* [macOS](https://support.apple.com/guide/mac-help/unac089/mac)
* [iOS](https://support.apple.com/en-lamr/HT202655)

---

## 🕯 `lightLevel()`

Detects the ambient light-level of the user’s device using [`'light-level'`](https://drafts.csswg.org/mediaqueries-5/#light-level) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

> The [`'light-level'`](https://drafts.csswg.org/mediaqueries-5/#light-level) media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response.

### ⚗️ ️️Usage

```js
import lightLevel, { availableLightLevels } from 'magica11y/lightLevel';

const availableLightLevel = lightLevel();
const enableDarkMode = availableLightLevel === availableLightLevels.DIM;
```

The `availableLightLevels` object contains all the possible values supported by the `'light-level'` media query…

* `availableLightLevels.NORMAL` (spec: [`'normal'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-normal))
  > The device is used in a environment with a light level in the ideal range for the screen, and which does not necessitate any particular adjustment.
* `availableLightLevels.DIM` (spec: [`'dim'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-dim))
  > The device is used in a dim environment, where excessive contrast and brightness would be distracting or uncomfortable to the reader. For example: night time, or a dimly illuminated indoor environment.
* `availableLightLevels.WASHED` (spec: [`'washed'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-light-level-washed))
  > The device is used in an exceptionally bright environment, causing the screen to be washed out and difficult to read. For example: bright daylight.
* `null`
  > The device’s ambient light-level could not be determined.

---

## 📺 `environmentBlending()`

Detects the characteristics of the user’s display using [`'environment-blending'`](https://drafts.csswg.org/mediaqueries-5/#environment-blending) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

> The [`'environment-blending'`](https://drafts.csswg.org/mediaqueries-5/#environment-blending) media feature is used to query the characteristics of the user’s display so the author can adjust the style of the document. An author might choose to adjust the visuals and/or layout of the page depending on the display technology to increase the appeal or improve legibility.

### ⚗️ ️️Usage

```js
import environmentBlending, { availableDisplayBlends } from 'magica11y/environmentBlending';

const availableDisplayBlend = environmentBlending();
const enableDarkMode = availableDisplayBlend === availableDisplayBlends.ADDITIVE;
```

The `availableDisplayBlends` object contains all the possible values supported by the `'environment-blending'` media query…

* `availableDisplayBlends.OPAQUE` (spec: [`'opaque'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-environment-blending-opaque))
  > The document is rendered on an opaque medium, such as a traditional monitor or paper. Black is dark and white is 100% light.
* `availableDisplayBlends.ADDITIVE` (spec: [`'additive'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-environment-blending-additive))
  > The display blends the colors of the canvas with the real world using additive mixing. Black is fully transparent and white is 100% light. For example: a head-up display in a car.
* `availableDisplayBlends.SUBTRACTIVE` (spec: [`'subtractive'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-environment-blending-subtractive))
  > The display blends the colors of the canvas with the real world using subtractive mixing. White is fully transparent and dark colors have the most contrast. For example: an LCD display embedded in a bathroom mirror.
* `null`
  > The display characteristics could not be determined.

---

## 🌗 `invertedColors()`

Detects the user’s preferences for inverted colors using [`'inverted-colors'`](https://drafts.csswg.org/mediaqueries-5/#inverted-colors) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

> The [`'inverted-colors'`](https://drafts.csswg.org/mediaqueries-5/#inverted-colors) media feature indicates whether the content is displayed normally, or whether colors have been inverted.

### ⚗️ ️️Usage

```js
import invertedColors, { colorPreferences } from 'magica11y/invertedColors';

const colorPreference = invertedColors();
const invertColors = colorPreference === colorPreferences.INVERTED;
```

The `colorPreferences` object contains all the possible values supported by the `'environment-blending'` media query…

* `colorPreferences.NONE` (spec: [`'none'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-inverted-colors-none))
  > Colors are displayed normally.
* `colorPreferences.INVERTED` (spec: [`'inverted'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-inverted-colors-inverted))
  > All pixels within the displayed area have been inverted.
* `null`
  > The user’s preference could not be determined.

---

## 💎 `prefersReducedTransparency()`

Detects user’s preferences for reduced transparency using the [`'prefers-reduce-transparency'`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

> The [`prefers-reduced-transparency`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-transparency) media feature is used to detect if the user has requested the system minimize the amount of transparent or translucent layer effects it uses.

### ⚗️ Usage

```js
import prefersReducedTransparency, { transparencyPreferences } from 'magica11y/prefersReducedTransparency';

const transparencyPreference = prefersReducedTransparency();
const reduceTransparency = transparencyPreference === transparencyPreferences.REDUCE;
```

The `transparencyPreferences` object contains all the possible values supported by the `'prefers-reduce-transparency'` media query…

* `transparencyPreferences.NO_PREFERENCE` (spec: [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-no-preference))
  > Indicates that the user has made no preference known to the system.
* `transparencyPreferences.REDUCE` (spec: [`'reduce'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-reduced-transparency-reduce))
  > Indicates that user has notified the system that they prefer an interface that minimizes the amount of transparent or translucent layer effects.
* `null`
  > The user’s preference could not be determined.

---

## 💎 `prefersContrast()`

Detects user’s preferences for contrast using the [`'prefers-contrast'`](https://drafts.csswg.org/mediaqueries-5/#prefers-contrast) [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3) [level 5](https://drafts.csswg.org/mediaqueries-5) [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries).

> The [`prefers-contrast`](https://drafts.csswg.org/mediaqueries-5/#prefers-contrast) media feature is used to detect if the user has requested the system increase or decrease the amount of contrast between adjacent colors. For example, many users have difficulty reading text that has a small difference in contrast to the text background and would prefer a larger contrast.

### ⚗️ Usage

```js
import prefersContrast, { contrastPreferences } from 'magica11y/prefersContrast';

const contrastPreference = prefersContrast();
const useHighContrastColorScheme = contrastPreference === contrastPreferences.HIGH;
```

The `contrastPreferences` object contains all the possible values supported by the `'prefers-contrast'` media query…

* `contrastPreferences.NO_PREFERENCE` (spec: [`'no-preference'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-no-preference))
  > Indicates that the user has made no preference known to the system.
* `contrastPreferences.HIGH` (spec: [`'high'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-high))
  > Indicates that user has notified the system that they prefer an interface that has a higher level of contrast.
* `contrastPreferences.LOW` (spec: [`'low'`](https://drafts.csswg.org/mediaqueries-5/#valdef-media-prefers-contrast-low))
  > Indicates that user has notified the system that they prefer an interface that has a lower level of contrast.
* `null`
  > The user’s preference could not be determined.

---

# 🏁 Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib` by configuring them in your `.flowconfig`…

```
[libs]
node_modules/magica11y/lib
```

Now, you can use **Magica11y**’s Flow types as usual. Here’s an example with **Magica11y**’s `prefersReducedMotion` module…

```js
// @flow
import prefersReducedMotion, { type MotionPreference } from 'magica11y/prefersReducedMotion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
```

🎩 **Note**: All the **Magica11y** module functions (e.g. `prefersReducedMotion()`) return a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) type (e.g. `MotionPreference`). So using the `?` prefix to indicate nullable types is recommended (e.g. `?MotionPreference`).

---

# 📜 License

[![License](https://img.shields.io/github/license/magica11y/magica11y.svg?style=for-the-badge "MIT license")](LICENSE.md)

See [LICENSE.md](LICENSE.md) for more details.

Handcrafted with ❤️ by [Rishabh Rao](https://github.com/rishabhsrao).

[![Twitter](https://img.shields.io/twitter/follow/rishabhsrao.svg?style=social)](https://twitter.com/rishabhsrao)
