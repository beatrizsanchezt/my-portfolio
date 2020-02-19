import React from 'react';
import { EuiTitle, EuiSpacer, EuiText } from '@elastic/eui';

import './Blog.css';

// eslint-disable-next-line react/prop-types
const Paragraph = ({ title, content }) => (
  <>
    <EuiTitle size="s">
      <h3>{title}</h3>
    </EuiTitle>
    <EuiText className="textBlog">{content}</EuiText>
    <EuiSpacer />
  </>
);

export default Paragraph;
