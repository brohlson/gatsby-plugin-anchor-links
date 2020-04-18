import React, { useState } from 'react';
import { providerTypes } from '../types/propTypes';

const defaultState = {
  open: null,
};

const ModalContext = React.createContext(defaultState);

const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(defaultState.open);
  const closeModal = () => setOpen(null);
  const openModal = m => setOpen(m);

  return (
    <ModalContext.Provider
      value={{
        open,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

ModalProvider.propTypes = providerTypes;

export default ModalContext;

export { ModalProvider };
