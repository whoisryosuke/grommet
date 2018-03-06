'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StyledTable = require('./StyledTable');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(props) {
  return _react2.default.createElement(_StyledTable.StyledTableRow, props);
};

if (process.env.NODE_ENV !== 'production') {
  (0, _doc.docTableRow)(TableRow);
}

exports.default = TableRow;