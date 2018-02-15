'use strict';

exports.__esModule = true;
exports.docTableCell = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var docTableCell = exports.docTableCell = function docTableCell(TableCell) {
  var DocumentedTableCell = (0, _reactDesc.describe)(TableCell).availableAt((0, _utils.getAvailableAtBadge)('Table')).description('A cell of data in a table.').usage('import { TableCell } from \'grommet\';\n<TableCell />');

  DocumentedTableCell.propTypes = {
    plain: _reactDesc.PropTypes.bool.description('Whether default styling context should be removed.'),
    scope: _reactDesc.PropTypes.oneOf(['col', 'row']).description('For header cells, what scope the header is for.\n        Typically, the cells in a TableHeader have \'col\' scope and\n        the primary cell in each row in the TableBody has \'row\' scope.'),
    size: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', '1/2', '1/3', '2/3', '1/4', '3/4']).description('What size the cell should be. Typically, this is not needed\n      unless you are trying to align multiple tables.')
  };

  return DocumentedTableCell;
};

exports.default = function (Table) {
  var DocumentedTable = (0, _reactDesc.describe)(Table).availableAt((0, _utils.getAvailableAtBadge)('Table')).description('A table of data organized in cells.').usage('import { Table, TableHeader, TableFooter, TableBody, TableRow } from \'grommet\';\n<Table />');

  DocumentedTable.propTypes = {
    caption: _reactDesc.PropTypes.string.description('One line description.')
  };

  return DocumentedTable;
};