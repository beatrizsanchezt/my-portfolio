import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  EuiButton,
} from '@elastic/eui';

const CustomIconButton = ({
  iconType, href, target, label,
}) => {
  if (process.env.NODE_ENV === 'test') {
    return (
      <EuiButton
        href={href}
        target={target}
      />
    );
  }
  return (
    <EuiButton
      iconType={iconType}
      href={href}
      target={target}
    >
      {label}
    </EuiButton>
  );
};

CustomIconButton.propTypes = {
  href: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomIconButton;
