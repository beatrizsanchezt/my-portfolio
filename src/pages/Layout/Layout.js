import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
} from '@elastic/eui';
import Sidebar from '../../navigation/SideBar/SideBar';

import './Layout.css';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <>
    <EuiHeader className="container">
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo href="/about">
            Beatriz Sanchez - Full Stack Developer
          </EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
    <EuiPage className="container">
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>{children}</EuiPageBody>
    </EuiPage>
  </>
);

export default Layout;
