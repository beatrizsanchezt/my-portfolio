import React, { Fragment } from "react";
import { EuiTitle, EuiSpacer, EuiText } from "@elastic/eui";
import "./blog.css";

const Paragraph = ({ title, content }, props) => (
  <Fragment>
    <EuiTitle size="s">
      <h3>{title}</h3>
    </EuiTitle>
    <EuiText className="textBlog">{content}</EuiText>
    <EuiSpacer />
  </Fragment>
);

export default Paragraph;