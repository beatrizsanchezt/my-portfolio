import React from 'react';
import PropTypes from 'prop-types';
import { EuiTitle, EuiSpacer, EuiText } from '@elastic/eui';

import './Blog.css';

const Paragraph = ({ title, content }) => (
  <>
    <EuiTitle size="s">
      <h3>{title}</h3>
    </EuiTitle>
    <EuiText className="textBlog">{content}</EuiText>
    <EuiSpacer />
  </>
);

Paragraph.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
};

Paragraph.defaultProps = {
  title: '',
};

export default Paragraph;
