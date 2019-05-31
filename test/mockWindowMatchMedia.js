// @flow

type MediaQueryListType = {
  matches: boolean,
  media: string,
};

const mockWindowMatchMedia = (matches: boolean, mediaQuery: string): MediaQueryListType => ({
  matches,
  media: mediaQuery,
});

export default mockWindowMatchMedia;
