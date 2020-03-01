import React from 'react';
import PropTypes from 'prop-types';
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

const Layout = ({ children }) => (
  <>
    <EuiHeader>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem>
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

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
