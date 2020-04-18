import 'typeface-inter';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`

html { font-family: 'Inter', sans-serif; font-feature-settings: 'dlig', 'zero', 'ss01', 'cv05', 'cv10';}

@supports (font-variation-settings: normal) {
  html { font-family: 'Inter var', sans-serif; }
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;

export default Global;
