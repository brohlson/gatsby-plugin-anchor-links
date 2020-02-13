import React from "react";
import { Link } from "gatsby";

import {
  handleLinkClick,
  stripHashedLocation,
  handleStrippedLinkClick
} from "../utils";
import { anchorLinkTypes } from "../types";

export function AnchorLink({
  to,
  title,
  children,
  className,
  stripHash = false
}) {
  const linkProps = {
    to: stripHash ? stripHashedLocation(to) : to,
    onClick: e =>
      stripHash ? handleStrippedLinkClick(to, e) : handleLinkClick(to, e)
  };

  /**
   * Optional props
   */
  if (title) linkProps.title = title;
  if (className) linkProps.className = className;

  return <Link {...linkProps}>{Boolean(children) ? children : title}</Link>;
}

AnchorLink.propTypes = anchorLinkTypes;
