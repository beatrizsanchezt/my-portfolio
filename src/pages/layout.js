import React from "react";
import Sidebar from "../navigation/sidebar";

import {
  EuiPage,
  EuiPageBody,
  EuiPageSideBar,
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
} from "@elastic/eui";

const Layout = props => (
  <React.Fragment>
    <EuiHeader>
      <EuiHeaderSection grow={false}>
      <EuiHeaderSectionItem border="right">
          <EuiHeaderLogo href="#">Beatriz Sanchez - Full Stack Developer</EuiHeaderLogo>
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
    <EuiPage>
      <EuiPageSideBar>
        <Sidebar />
      </EuiPageSideBar>
      <EuiPageBody>{props.children}</EuiPageBody>
    </EuiPage>
  </React.Fragment>
);

export default Layout;
