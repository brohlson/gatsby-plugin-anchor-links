import React, { Fragment } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import _map from 'lodash/map';

import SEO from '../components/SEO';
import {
  PageWrapper,
  PageInner,
  PageTitle,
  PostLink,
} from '../components/Elements';

const blogQuery = graphql`
  {
    page: datoCmsBlogPage {
      title
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    posts: allDatoCmsBlogPost(
      sort: { fields: [meta___createdAt], order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`;

export default function Blog() {
  const data = useStaticQuery(blogQuery);
  const { title, seoMetaTags } = data.page;
  const { edges } = data.posts;
  return (
    <Fragment>
      <SEO meta={seoMetaTags} />
      <PageWrapper>
        <PageInner>
          <PageTitle>{title}</PageTitle>
          {_map(edges, post => (
            <PostLink key={post.node.id}>
              <Link to={`/blog/${post.node.slug}/`}>{post.node.title}</Link>
            </PostLink>
          ))}
          <Link to="/">
            <button css={{ marginLeft: '.5em' }}>Go Home</button>
          </Link>
        </PageInner>
      </PageWrapper>
    </Fragment>
  );
}
