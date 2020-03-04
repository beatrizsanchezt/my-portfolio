/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { EuiButton } from '@elastic/eui';

const CustomIconButton = ({ iconType, ...rest }) => {
  if (process.env.NODE_ENV === 'test') {
    return (
      <EuiButton {...rest} />
    );
  }
  return (
    <EuiButton iconType={iconType} {...rest} />
  );
};

CustomIconButton.propTypes = {
  iconType: PropTypes.string.isRequired,
};

export default CustomIconButton;
