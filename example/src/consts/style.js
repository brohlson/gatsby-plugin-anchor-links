/* eslint-disable quotes */
import bp from './breakpoints';

const mQueryPoint = {
  mobile: `${bp.mobile}px`,
  tabletSmall: `${bp.tabletSmall}px`,
  tablet: `${bp.tablet}px`,
  desktop: `${bp.desktop}px`,
};

export const bz = `
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  `;

export const font = {
  h1: `
        font-size: 5rem;
        font-weight: 900;
        @media screen and (max-width: ${mQueryPoint.tablet}) {
            font-size: 4rem;
        }
    `,
  button: `
        font-weight: 700;
    `,
};

export const colors = {
  dark: '#222',
  light: '#fafafa',
  purple: '#9135AD',
};

export const z = {
  modalBackground: `z-index: 100000;`,
  modal: `z-index: 200000;`,
};

import { css } from 'styled-components';

// Creates up & down media queries for your breakpoints
// *** Usage ***
// import { mq } from "**/style.js"
// export const StyledComponent = styled.div`
// ${media.tablet`
//   display: flex;
// `}
// ${media.mobile_up`
//   display: none;
// `}
//`

export const mq = Object.keys(bp).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (max-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  acc[`${label}_up`] = (...args) => css`
    @media screen and (min-width: ${bp[label]}px) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
