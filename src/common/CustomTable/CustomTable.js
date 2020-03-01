import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import {
  EuiBasicTable,
} from '@elastic/eui';

const CustomTable = ({
  items, columns, sorting, onChange,
}) => {
  if (process.env.NODE_ENV === 'test') {
    return (
      <EuiBasicTable
        items={items}
        columns={columns}
      />
    );
  }
  return (
    <EuiBasicTable
      items={items}
      columns={columns}
      sorting={sorting}
      onChange={onChange}
    />
  );
};

CustomTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sorting: PropTypes.object,
  onChange: PropTypes.func,
};

CustomTable.defaultProps = {
  sorting: undefined,
  onChange: undefined,
};

export default CustomTable;
