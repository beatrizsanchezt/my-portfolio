import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { EuiButton } from '@elastic/eui';

const CustomIconButton = ({
  iconType, href, target, label,
}) => {
  if (process.env.NODE_ENV === 'test') {
    return (
      <EuiButton
        href={href}
        target={target}
      >
        {label}
      </EuiButton>
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
  iconType: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CustomIconButton.defaultProps = {
  href: undefined,
  target: undefined,
};

export default CustomIconButton;
