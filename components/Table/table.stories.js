'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Table = require('../Table/Table');

var _Table2 = _interopRequireDefault(_Table);

var _TableBody = require('../Table/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableCell = require('../Table/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _TableFooter = require('../Table/TableFooter');

var _TableFooter2 = _interopRequireDefault(_TableFooter);

var _TableHeader = require('../Table/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableRow = require('../Table/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Always should store amount in cents to avoid precision errors
var DATA = [{
  id: 1, name: 'Eric', email: 'eric@local', amount: 3775
}, {
  id: 2, name: 'Chris', email: 'chris@local', amount: 5825
}, {
  id: 3, name: 'Alan', email: 'alan@local', amount: 4300
}];

var TOTAL = 0;
DATA.forEach(function (datum) {
  TOTAL += datum.amount;
});

var amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

var COLUMNS = [{
  property: 'name',
  label: 'Name',
  dataScope: 'row',
  format: function format(datum) {
    return _react2.default.createElement(
      'strong',
      null,
      datum.name
    );
  }
}, {
  property: 'email',
  label: 'Email'
}, {
  property: 'amount',
  label: 'Amount',
  align: 'end',
  footer: amountFormatter.format(TOTAL / 100),
  format: function format(datum) {
    return amountFormatter.format(datum.amount / 100);
  }
}];

var SimpleTable = function (_Component) {
  _inherits(SimpleTable, _Component);

  function SimpleTable() {
    _classCallCheck(this, SimpleTable);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleTable.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Table2.default,
        { caption: 'Simple Table' },
        _react2.default.createElement(
          _TableHeader2.default,
          null,
          _react2.default.createElement(
            _TableRow2.default,
            null,
            COLUMNS.map(function (c) {
              return _react2.default.createElement(
                _TableCell2.default,
                { key: c.property, scope: 'col', border: 'bottom', align: c.align },
                _react2.default.createElement(
                  _Text2.default,
                  null,
                  c.label
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          _TableBody2.default,
          null,
          DATA.map(function (datum) {
            return _react2.default.createElement(
              _TableRow2.default,
              { key: datum.id },
              COLUMNS.map(function (c) {
                return _react2.default.createElement(
                  _TableCell2.default,
                  { key: c.property, scope: c.dataScope, align: c.align },
                  _react2.default.createElement(
                    _Text2.default,
                    null,
                    c.format ? c.format(datum) : datum[c.property]
                  )
                );
              })
            );
          })
        ),
        _react2.default.createElement(
          _TableFooter2.default,
          null,
          _react2.default.createElement(
            _TableRow2.default,
            null,
            COLUMNS.map(function (c) {
              return _react2.default.createElement(
                _TableCell2.default,
                { key: c.property, border: 'top', align: c.align },
                _react2.default.createElement(
                  _Text2.default,
                  null,
                  c.footer
                )
              );
            })
          )
        )
      )
    );
  };

  return SimpleTable;
}(_react.Component);

(0, _react3.storiesOf)('Table', module).add('Simple Table', function () {
  return _react2.default.createElement(SimpleTable, null);
});