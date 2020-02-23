import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { EuiLink } from '@elastic/eui';
import './CustomLink.css';

// Source: https://github.com/elastic/eui/blob/master/wiki/react-router.md
const isModifiedEvent = (event) => !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const isLeftClickEvent = (event) => event.button === 0;

const CustomLink = ({ to, ...props }) => {
  const history = useHistory();

  const onClick = (event) => {
    if (event.defaultPrevented) {
      return;
    }

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    if (event.target.getAttribute('target')) {
      return;
    }

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return;
    }

    // Prevent regular link behavior, which causes a browser refresh.
    event.preventDefault();

    // Push the route to the history.
    history.push(to);
  };

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <EuiLink {...props} href={to} onClick={onClick} />;
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default CustomLink;
