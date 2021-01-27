import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import {
  handleLinkClick,
  stripHashedLocation,
  handleStrippedLinkClick,
} from '../utils';

AnchorLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  stripHash: PropTypes.bool,
  gatsbyLinkProps: PropTypes.object,
  onAnchorLinkClick: PropTypes.func,
  children: PropTypes.node,
};

export function AnchorLink({
  to,
  title,
  children,
  className,
  stripHash = false,
  gatsbyLinkProps = {},
  onAnchorLinkClick,
}) {
  const onClickHandler = stripHash ? handleStrippedLinkClick : handleLinkClick;
  const linkProps = {
    ...gatsbyLinkProps,
    /**
     * Spread optional gatsbyLinkProps object in fist, so our specific props will override
     */
    to: stripHash ? stripHashedLocation(to) : to,
    onClick: (e) => onClickHandler(to, e, onAnchorLinkClick),
  };

  /**
   * Optional props
   */
  if (title) linkProps.title = title;
  if (className) linkProps.className = className;

  return <Link {...linkProps}>{children ? children : title}</Link>;
}
