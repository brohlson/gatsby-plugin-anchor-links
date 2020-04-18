import React from 'react';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import { seoTypes } from '../types/propTypes';

const SEO = ({ meta }) => {
  return <HelmetDatoCms seo={meta} />;
};

SEO.propTypes = seoTypes;

export default SEO;
