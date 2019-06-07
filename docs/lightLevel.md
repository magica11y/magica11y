# 🕯 `lightLevel()`

> The [`'light-level'`](https://drafts.csswg.org/mediaqueries-5/#light-level) media feature is used to query about the ambient light-level in which the device is used, to allow the author to adjust style of the document in response.

## ️️Usage

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

## Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import lightLevel, { type LightLevel } from 'magica11y/lightLevel';

const availableLightLevel: ?LightLevel = lightLevel();
```

🎩 **Note**: `lightLevel()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `LightLevel` type. So using `?LightLevel` is recommended.
