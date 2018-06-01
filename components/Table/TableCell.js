'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box');

var _hocs = require('../hocs');

var _TableContext = require('./TableContext');

var _TableContext2 = _interopRequireDefault(_TableContext);

var _StyledTable = require('./StyledTable');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TableCell = function TableCell(_ref) {
  var children = _ref.children,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      theme = _ref.theme,
      verticalAlign = _ref.verticalAlign,
      rest = _objectWithoutProperties(_ref, ['children', 'plain', 'scope', 'size', 'theme', 'verticalAlign']);

  var Cell = scope ? _StyledTable.StyledTableCell.withComponent('th') : _StyledTable.StyledTableCell;
  return _react2.default.createElement(
    _TableContext2.default.Consumer,
    null,
    function (tableContext) {
      return _react2.default.createElement(
        Cell,
        {
          scope: scope,
          size: size,
          tableContext: tableContext,
          theme: theme,
          verticalAlign: verticalAlign
        },
        plain ? children : _react2.default.createElement(
          _Box.Box,
          rest,
          children
        )
      );
    }
  );
};

TableCell.defaultProps = {
  align: 'start',
  pad: { horizontal: 'small', vertical: 'xsmall' }
};

if (process.env.NODE_ENV !== 'production') {
  (0, _doc.docTableCell)(TableCell);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(TableCell);