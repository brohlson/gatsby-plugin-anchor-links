import { css } from 'styled-components';
import bp from '../consts/breakpoints';

// Creates up & down media queries for your breakpoints
// *** Usage ***
// import media from "**/MediaQueries.js"
// export const StyledComponent = styled.div`
// ${media.tablet`
//   display: flex;
// `}
// ${media.mobile_up`
//   display: none;
// `}
//`

const mq = Object.keys(bp).reduce((acc, label) => {
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

export default mq;
