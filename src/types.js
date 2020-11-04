import PropTypes from "prop-types";

export const anchorLinkTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  stripHash: PropTypes.bool,
  gatsbyLinkProps: PropTypes.object,
  children: PropTypes.node,
};
