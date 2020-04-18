import React, { Fragment } from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';

const Wrapper = styled.div`
  padding: 6rem 0;
  text-align: center;
  height: calc(100vh - 10rem);
`;

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <Wrapper>
      <h1>404</h1>
    </Wrapper>
  </Fragment>
);

export default NotFoundPage;
