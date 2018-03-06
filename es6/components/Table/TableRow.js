import React from 'react';

import { StyledTableRow } from './StyledTable';
import { docTableRow } from './doc';

var TableRow = function TableRow(props) {
  return React.createElement(StyledTableRow, props);
};

if (process.env.NODE_ENV !== 'production') {
  docTableRow(TableRow);
}

export default TableRow;