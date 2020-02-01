import React from "react";
import { Link } from "gatsby";

import { handleMenuLinkClick } from "../utils";
import { anchorLinkTypes } from "../types";
import * as errorTypes from "../errors";

export function AnchorLink({ to, title, children }) {
  /**
   * Check props are valid
   */
  const improperFormatting = !to.includes("/") || !to.includes("#");
  if (improperFormatting) console.warn(errorTypes.IMPROPPER_FORMATTING);

  const linkProps = {
    to,
    title,
    onClick: e => handleMenuLinkClick(to, e)
  };
  return <Link {...linkProps}>{Boolean(children) ? children : title}</Link>;
}

AnchorLink.propTypes = anchorLinkTypes;
