'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('../Table');

var _Text = require('../Text');

var _Box = require('../Box');

var _Resizer = require('./Resizer');

var _Resizer2 = _interopRequireDefault(_Resizer);

var _Searcher = require('./Searcher');

var _Searcher2 = _interopRequireDefault(_Searcher);

var _Sorter = require('./Sorter');

var _Sorter2 = _interopRequireDefault(_Sorter);

var _ExpanderCell = require('./ExpanderCell');

var _ExpanderCell2 = _interopRequireDefault(_ExpanderCell);

var _StyledDataTable = require('./StyledDataTable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = function Header(_ref) {
  var columns = _ref.columns,
      filtering = _ref.filtering,
      filters = _ref.filters,
      groups = _ref.groups,
      groupState = _ref.groupState,
      onFilter = _ref.onFilter,
      onFiltering = _ref.onFiltering,
      onResize = _ref.onResize,
      onSort = _ref.onSort,
      onToggle = _ref.onToggle,
      sort = _ref.sort,
      theme = _ref.theme,
      widths = _ref.widths,
      rest = _objectWithoutProperties(_ref, ['columns', 'filtering', 'filters', 'groups', 'groupState', 'onFilter', 'onFiltering', 'onResize', 'onSort', 'onToggle', 'sort', 'theme', 'widths']);

  return _react2.default.createElement(
    _StyledDataTable.StyledDataTableHeader,
    rest,
    _react2.default.createElement(
      _StyledDataTable.StyledDataTableRow,
      null,
      groups && _react2.default.createElement(_ExpanderCell2.default, {
        context: 'header',
        expanded: Object.keys(groupState).filter(function (k) {
          return !groupState[k].expanded;
        }).length === 0,
        theme: theme,
        onToggle: onToggle
      }),
      columns.map(function (_ref2) {
        var property = _ref2.property,
            header = _ref2.header,
            align = _ref2.align,
            search = _ref2.search;
        return _react2.default.createElement(
          _Table.TableCell,
          {
            key: property,
            scope: 'col',
            plain: true,
            verticalAlign: 'bottom',
            style: widths && widths[property] ? { width: widths[property] } : undefined
          },
          _react2.default.createElement(
            _Resizer2.default,
            { property: property, onResize: onResize, theme: theme },
            _react2.default.createElement(
              _Box.Box,
              { flex: true },
              _react2.default.createElement(
                _Box.Box,
                _extends({
                  flex: true,
                  direction: 'row',
                  justify: 'between',
                  align: 'center'
                }, theme.dataTable.header, {
                  pad: undefined
                }),
                _react2.default.createElement(
                  _Sorter2.default,
                  {
                    align: align,
                    property: property,
                    onSort: onSort,
                    sort: sort,
                    theme: theme
                  },
                  typeof header === 'string' ? _react2.default.createElement(
                    _Text.Text,
                    null,
                    header
                  ) : header
                ),
                filters && search && _react2.default.createElement(_Searcher2.default, {
                  filtering: filtering,
                  filters: filters,
                  property: property,
                  onFilter: onFilter,
                  onFiltering: onFiltering
                })
              )
            )
          )
        );
      })
    )
  );
};

exports.default = Header;