import scrollToElement from "scroll-to-element";

export function scroller(target, offset = 0) {
  scrollToElement(target, {
    offset
  });
}

export function handleMenuLinkClick(to, e) {
  if (typeof window !== "undefined" && to.includes("#")) {
    const [anchorPath, anchor] = to.split("#");
    if (window.location.pathname === anchorPath) {
      e.preventDefault();
      scroller(`#${anchor}`, -80);
    }
  }
}

export function checkHash(location, offset) {
  const { hash } = location;
  if (hash) scroller(hash, offset);
}
