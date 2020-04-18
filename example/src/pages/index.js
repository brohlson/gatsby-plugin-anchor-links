import React, { Fragment, useContext } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { PageWrapper, PageInner, PageTitle } from '../components/Elements';
import * as modalTypes from '../types/modalTypes';
import ModalContext from '../store/modalContext';
import SEO from '../components/SEO';

const indexQuery = graphql`
  {
    datoCmsHomePage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default function IndexPage() {
  const data = useStaticQuery(indexQuery);
  const { openModal } = useContext(ModalContext);
  const { title, seoMetaTags } = data.datoCmsHomePage;
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{title}</PageTitle>
          <pre>
            gatsby new site https://github.com/brohlson/gatsby-datocms-starter
          </pre>
          <button onClick={() => openModal(modalTypes.BASIC)}>
            Open Modal
          </button>
          <Link to="/blog">
            <button css={{ marginLeft: '.5em' }}>Blog Page</button>
          </Link>
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}
