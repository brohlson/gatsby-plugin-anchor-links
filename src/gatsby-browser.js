import { checkHash, isBrowser, scroller } from "./utils";

export const onRouteUpdate = ({ location }, { offset = 0 }) => {
  let windowHash;

  if (isBrowser) {
    window.gatsby_scroll_offset = offset;
    windowHash = window.gatsby_scroll_hash;
  }

  Boolean(windowHash)
    ? scroller(windowHash, offset)
    : checkHash(location, offset);

  if (isBrowser && windowHash) {
    window.gatsby_scroll_hash = undefined;
  }
};
