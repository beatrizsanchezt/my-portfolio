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
import Sidebar from "../navigation/sidebar";

const Layout = ({children}) => (
  <Fragment>
    <EuiHeader>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo href="#">
            Beatriz Sanchez - Full Stack Developer
          </EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
    <EuiPage>
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>{children}</EuiPageBody>
    </EuiPage>
  </Fragment>
);

export default Layout;
