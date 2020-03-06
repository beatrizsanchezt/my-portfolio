/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { EuiBasicTable } from '@elastic/eui';

const CustomTable = ({
  sorting, onChange, ...rest
}) => {
  if (process.env.NODE_ENV === 'test') {
    return (
      <EuiBasicTable {...rest} />
    );
  }
  return (
    <EuiBasicTable
      sorting={sorting}
      onChange={onChange}
      {...rest}
    />
  );
};

CustomTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sorting: PropTypes.object,
  onChange: PropTypes.func,
};

CustomTable.defaultProps = {
  sorting: undefined,
  onChange: undefined,
};

export default CustomTable;
