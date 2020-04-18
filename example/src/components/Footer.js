import React from 'react';
import styled from 'styled-components';

import { colors } from '../consts/style';

export const Wrapper = styled.div`
  display: flex;
  height: 4rem;
  color: white;
  background: ${colors.purple};
  justify-content: center;
  align-items: center;
  a {
    margin-left: 0.5em;
    color: white;
    font-weight: 700;
    &:hover {
      color: white;
    }
  }
`;

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Wrapper>
      It&apos;s {year} -{' '}
      <a href="https://github.com/brohlson/gatsby-datocms-starter">Source</a>
    </Wrapper>
  );
};

export default Footer;
