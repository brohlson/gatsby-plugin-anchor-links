import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

import Reboot from '../style/reboot';
import Global from '../style/global';
import { colors } from '../consts/style';
import Helmet from 'react-helmet';

const SiteWrapper = styled.div`
  background: ${colors.light};
`;

const Layout = ({ children }) => {
  return (
    <SiteWrapper>
      <Helmet>
        <title>Example</title>
      </Helmet>
      <Reboot />
      <Global />
      <Header />
      {children}
    </SiteWrapper>
  );
};

export default Layout;
