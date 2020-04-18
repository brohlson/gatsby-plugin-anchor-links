import React, { useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import { colors } from '../consts/style';
import { spin } from '../style/animations';
import { headerTypes } from '../types/propTypes';

const Wrapper = styled.div`
  background: ${colors.purple};
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(Img)`
  width: 4rem;
  margin: auto;
  animation: ${spin} 10s linear infinite;
`;

const headerQuery = graphql`
  {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default function Header({ location }) {
  const data = useStaticQuery(headerQuery);

  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  useEffect(() => console.log(location), [location]);

  return (
    <Wrapper>
      <Image fluid={data.logo.childImageSharp.fluid} />
    </Wrapper>
  );
}

Header.propTypes = headerTypes;
