import React from 'react';
import { ModalProvider } from './src/store/modalContext';

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <ModalProvider>{element}</ModalProvider>;
};
