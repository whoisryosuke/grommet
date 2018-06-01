'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableContext = require('./TableContext');

var _TableContext2 = _interopRequireDefault(_TableContext);

var _StyledTable = require('./StyledTable');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(props) {
  return _react2.default.createElement(
    _TableContext2.default.Provider,
    { value: 'body' },
    _react2.default.createElement(_StyledTable.StyledTableBody, props)
  );
};

if (process.env.NODE_ENV !== 'production') {
  (0, _doc.docTableBody)(TableBody);
}

exports.default = TableBody;