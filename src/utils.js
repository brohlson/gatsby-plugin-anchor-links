import scrollToElement from "scroll-to-element";
import { withPrefix } from "gatsby";
import * as errorTypes from "./errors";

export const isBrowser = typeof window !== "undefined";

export const isDevelopment = process.env.NODE_ENV !== "production";

export function scroller(target, offset = 0) {
  scrollToElement(target, {
    offset,
  });
}

export function handleLinkClick(to, e) {
  /**
   * Log warnings on click
   */
  const improperFormatting = !to.includes("/") || !to.includes("#");
  if (improperFormatting && isDevelopment)
    console.warn(errorTypes.IMPROPPER_FORMATTING);

  if (isBrowser && to.includes("#")) {
    const [anchorPath, anchor] = to.split("#");
    if (window.location.pathname === withPrefix(anchorPath)) {
      e.preventDefault();
      scroller(`#${anchor}`, window.gatsby_scroll_offset);
    }
  }
}

export function handleStrippedLinkClick(to, e) {
  /**
   * Log warnings on click
   */
  const improperFormatting = !to.includes("/") || !to.includes("#");
  if (improperFormatting && isDevelopment)
    console.warn(errorTypes.IMPROPPER_FORMATTING);

  const [anchorPath, anchor] = to.split("#");

  /**
   * Determine location, run scroller or set window variable
   */

  const isSamePage = isBrowser && window.location.pathname === anchorPath;
  const isDifferentPage = isBrowser && window.location.pathname !== anchorPath;

  if (isSamePage) {
    e.preventDefault();
    return scroller(`#${anchor}`, window.gatsby_scroll_offset);
  }

  if (isDifferentPage) {
    window.gatsby_scroll_hash = `#${anchor}`;
  }
}

export function stripHashedLocation(to) {
  return to.split("#")[0];
}

export function checkHash(location, offset) {
  const { hash } = location,
    selector = hash ? hash.substr(1) : null,
    validElement = selector ? document.getElementById(selector) : null;
  if (hash && Boolean(validElement)) scroller(hash, offset);
  else if (hash && selector && !validElement)
    console.warn(errorTypes.INVALID_HASH);
}
