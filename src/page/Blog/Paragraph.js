import React, { Fragment } from "./node_modules/react";
import { EuiTitle, EuiSpacer, EuiText } from "@elastic/eui";

import "./Blog.css";

const Paragraph = ({ title, content }) => (
  <Fragment>
    <EuiTitle size="s">
      <h3>{title}</h3>
    </EuiTitle>
    <EuiText className="textBlog">{content}</EuiText>
    <EuiSpacer />
  </Fragment>
);

export default Paragraph;
