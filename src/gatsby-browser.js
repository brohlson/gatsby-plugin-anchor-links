import { checkHash, isBrowser, scroller } from './utils';

export const onRouteUpdate = (
  { location },
  { offset = 0, duration = 1000 }
) => {
  let windowHash;

  if (isBrowser) {
    window.gatsby_scroll_offset = offset;
    window.gatsby_scroll_duration = duration;
    windowHash = window.gatsby_scroll_hash;
  }

  windowHash ? scroller(windowHash, offset) : checkHash(location, offset);

  if (isBrowser && windowHash) {
    window.gatsby_scroll_hash = undefined;
  }
};
