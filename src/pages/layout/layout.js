import React, {Fragment} from "react";
import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo
} from "@elastic/eui";
import Sidebar from "../../navigation/sidebar";
import "./layout.css";

const Layout = ({children}) => (
  <Fragment>
    <EuiHeader className={'container'}>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo href="/about">
            Beatriz Sanchez - Full Stack Developer
          </EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
    <EuiPage className={'container'}>
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>{children}</EuiPageBody>
    </EuiPage>
  </Fragment>
);

export default Layout;
