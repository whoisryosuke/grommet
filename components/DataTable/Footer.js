'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Table = require('../Table');

var _Box = require('../Box');

var _hocs = require('../hocs');

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

var _StyledDataTable = require('./StyledDataTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = function Footer(_ref) {
  var columns = _ref.columns,
      footerValues = _ref.footerValues,
      groups = _ref.groups,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['columns', 'footerValues', 'groups', 'theme']);

  return _react2.default.createElement(
    _StyledDataTable.StyledDataTableFooter,
    rest,
    _react2.default.createElement(
      _Table.TableRow,
      null,
      groups && _react2.default.createElement(
        _Table.TableCell,
        { size: 'xxsmall', plain: true, verticalAlign: 'top' },
        _react2.default.createElement(_Box.Box, theme.dataTable.footer)
      ),
      columns.map(function (column) {
        return _react2.default.createElement(_Cell2.default, {
          key: column.property,
          context: 'footer',
          column: column,
          datum: footerValues,
          theme: theme
        });
      })
    )
  );
};

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Footer);