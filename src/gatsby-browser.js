import { checkHash } from "./utils";

export const onRouteUpdate = ({ location }, { offset = 0 }) => {
  if (typeof window !== "undefined") window.gatsby_scroll_offset = offset;
  checkHash(location, offset);
};
