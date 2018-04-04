function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';

import { Box } from '../Box';
import { withTheme } from '../hocs';

import { StyledTableCell } from './StyledTable';
import { docTableCell } from './doc';

var TableCell = function TableCell(_ref, _ref2) {
  var grommet = _ref2.grommet;

  var children = _ref.children,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      verticalAlign = _ref.verticalAlign,
      rest = _objectWithoutProperties(_ref, ['children', 'plain', 'scope', 'size', 'verticalAlign']);

  var Cell = scope ? StyledTableCell.withComponent('th') : StyledTableCell;
  return React.createElement(
    Cell,
    {
      scope: scope,
      size: size,
      tableContext: (grommet || {}).tableContext,
      theme: rest.theme,
      verticalAlign: verticalAlign
    },
    plain ? children : React.createElement(
      Box,
      rest,
      children
    )
  );
};

TableCell.contextTypes = {
  grommet: PropTypes.object
};

TableCell.defaultProps = {
  align: 'start',
  pad: { horizontal: 'small', vertical: 'xsmall' }
};

if (process.env.NODE_ENV !== 'production') {
  docTableCell(TableCell);
}

export default compose(withTheme)(TableCell);