import React, { useContext } from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Reboot from '../style/reboot';
import Global from '../style/global';
import ModalContext from '../store/modalContext';
import Modals from '../modals';
import { colors } from '../consts/style';
import { layoutTypes } from '../types/propTypes';

const SiteWrapper = styled.div`
  background: ${colors.light};
`;

const Layout = ({ children, location }) => {
  const { open } = useContext(ModalContext);

  function renderModal() {
    if (!open) return null;
    const ModalComponent = Modals[open];
    return <ModalComponent />;
  }
  return (
    <SiteWrapper>
      <Reboot />
      <Global />
      <Header location={location} />
      {children}
      {renderModal()}
      <Footer />
    </SiteWrapper>
  );
};

Layout.propTypes = layoutTypes;

export default Layout;
