# 🎢 `prefersReducedMotion()`

> The [`prefers-reduced-motion`](https://drafts.csswg.org/mediaqueries-5/#prefers-reduced-motion) media feature is used to detect if the user has requested the system minimize the amount of animation or motion it uses.

## Usage

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

## Typechecking

You can import the [Flow](https://flow.org) types from the provided [libdefs](https://flow.org/en/docs/libdefs) in `/lib`…

```js
// @flow
import prefersReducedMotion, { type MotionPreference } from 'magica11y/prefersReducedMotion';

const motionPreference: ?MotionPreference = prefersReducedMotion();
```

🎩 **Note**: `prefersReducedMotion()` returns a [`nullable`](https://flow.org/en/docs/types/primitives/#toc-null-and-void) `MotionPreference` type. So using `?MotionPreference` is recommended.

## Further reading

* [macOS](https://support.apple.com/guide/mac-help/unac089/mac)
* [iOS](https://support.apple.com/en-lamr/HT202655)
