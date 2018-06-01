import React from 'react';

import TableContext from './TableContext';
import { StyledTableBody } from './StyledTable';
import { docTableBody } from './doc';

var TableBody = function TableBody(props) {
  return React.createElement(
    TableContext.Provider,
    { value: 'body' },
    React.createElement(StyledTableBody, props)
  );
};

if (process.env.NODE_ENV !== 'production') {
  docTableBody(TableBody);
}

export default TableBody;