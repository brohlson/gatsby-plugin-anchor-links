import React, { Fragment } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 6rem 0;
  text-align: center;
  height: calc(100vh - 10rem);
`;

const NotFoundPage = () => (
  <Fragment>
    <Wrapper>
      <h1>404</h1>
    </Wrapper>
  </Fragment>
);

export default NotFoundPage;
