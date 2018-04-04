'use strict';

exports.__esModule = true;
exports.docTableFooter = exports.docTableBody = exports.docTableHeader = exports.docTableRow = exports.docTableCell = undefined;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var docTableCell = exports.docTableCell = function docTableCell(TableCell) {
  var DocumentedTableCell = (0, _reactDesc.describe)(TableCell).description('A cell of data in a table.').usage('import { TableCell } from \'grommet\';\n<TableCell />');

  DocumentedTableCell.propTypes = {
    plain: _reactDesc.PropTypes.bool.description('Whether default styling context should be removed.'),
    scope: _reactDesc.PropTypes.oneOf(['col', 'row']).description('For header cells, what scope the header is for.\n        Typically, the cells in a TableHeader have \'col\' scope and\n        the primary cell in each row in the TableBody has \'row\' scope.'),
    size: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', '1/2', '1/3', '2/3', '1/4', '3/4']).description('What size the cell should be. Typically, this is not needed\n      unless you are trying to align multiple tables.'),
    verticalAlign: _reactDesc.PropTypes.oneOf(['top', 'middle', 'bottom']).description('How to align the contents vertically.')
  };

  return DocumentedTableCell;
};

var docTableRow = exports.docTableRow = function docTableRow(TableRow) {
  var DocumentedTableRow = (0, _reactDesc.describe)(TableRow).description('A row of cells in a table.').usage('import { TableRow } from \'grommet\';\n<TableRow />');

  return DocumentedTableRow;
};

var docTableHeader = exports.docTableHeader = function docTableHeader(TableHeader) {
  var DocumentedTableHeader = (0, _reactDesc.describe)(TableHeader).description('The header of a table.').usage('import { TableHeader } from \'grommet\';\n<TableHeader />');

  return DocumentedTableHeader;
};

var docTableBody = exports.docTableBody = function docTableBody(TableBody) {
  var DocumentedTableBody = (0, _reactDesc.describe)(TableBody).description('The body of a table.').usage('import { TableBody } from \'grommet\';\n<TableBody />');

  return DocumentedTableBody;
};

var docTableFooter = exports.docTableFooter = function docTableFooter(TableFooter) {
  var DocumentedTableFooter = (0, _reactDesc.describe)(TableFooter).description('The footer of a table.').usage('import { TableFooter } from \'grommet\';\n<TableFooter />');

  return DocumentedTableFooter;
};

exports.default = function (Table) {
  var DocumentedTable = (0, _reactDesc.describe)(Table).availableAt((0, _utils.getAvailableAtBadge)('Table')).description('A table of data organized in cells.').usage('import { Table, TableHeader, TableFooter, TableBody, TableRow } from \'grommet\';\n<Table />');

  DocumentedTable.propTypes = {
    caption: _reactDesc.PropTypes.string.description('One line description.')
  };

  return DocumentedTable;
};