'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _Box = require('../Box');

var _hocs = require('../hocs');

var _StyledTable = require('./StyledTable');

var _doc = require('./doc');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TableCell = function TableCell(_ref, _ref2) {
  var grommet = _ref2.grommet;

  var children = _ref.children,
      plain = _ref.plain,
      scope = _ref.scope,
      size = _ref.size,
      rest = _objectWithoutProperties(_ref, ['children', 'plain', 'scope', 'size']);

  var Cell = scope ? _StyledTable.StyledTableCell.withComponent('th') : _StyledTable.StyledTableCell;
  return _react2.default.createElement(
    Cell,
    {
      scope: scope,
      size: size,
      tableContext: (grommet || {}).tableContext,
      theme: rest.theme
    },
    plain ? children : _react2.default.createElement(
      _Box.Box,
      rest,
      children
    )
  );
};

TableCell.contextTypes = {
  grommet: _propTypes2.default.object
};

TableCell.defaultProps = {
  align: 'start',
  pad: { horizontal: 'small', vertical: 'xsmall' }
};

if (process.env.NODE_ENV !== 'production') {
  (0, _doc.docTableCell)(TableCell);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(TableCell);