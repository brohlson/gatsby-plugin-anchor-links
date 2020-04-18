import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { colors } from '../consts/style';

const Wrapper = styled.div`
  background: ${colors.red};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">gatsby-plugin-anchor-links</Link>
    </Wrapper>
  );
}
