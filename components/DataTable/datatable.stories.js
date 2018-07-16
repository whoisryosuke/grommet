'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _DataTable = require('./DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Meter = require('../Meter/Meter');

var _Meter2 = _interopRequireDefault(_Meter);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

var columns = [{
  property: 'name',
  header: _react2.default.createElement(
    _Text2.default,
    null,
    'Name with extra'
  ),
  primary: true,
  footer: 'Total'
}, {
  property: 'location',
  header: 'Location'
}, {
  property: 'date',
  header: 'Date',
  render: function render(datum) {
    return new Date(datum.date).toLocaleDateString('en-US');
  },
  align: 'end'
}, {
  property: 'percent',
  header: 'Percent Complete',
  render: function render(datum) {
    return _react2.default.createElement(
      _Box2.default,
      { pad: { vertical: 'xsmall' } },
      _react2.default.createElement(_Meter2.default, { values: [{ value: datum.percent }], thickness: 'small', size: 'small' })
    );
  }
}, {
  property: 'paid',
  header: 'Paid',
  render: function render(datum) {
    return amountFormatter.format(datum.paid / 100);
  },
  align: 'end',
  aggregate: 'sum',
  footer: { aggregate: true }
}];

var locations = ['Boise', 'Fort Collins', 'Los Gatos', 'Palo Alto', 'San Francisco'];
var data = [];
for (var i = 0; i < 40; i += 1) {
  data.push({
    name: 'Name ' + (i + 1),
    location: locations[i % locations.length],
    date: '2018-07-' + (i % 30 + 1),
    percent: i % 11 * 10,
    paid: (i + 1) * 17 % 1000
  });
}
var DATA = [{ name: 'Alan', location: 'Los Gatos', date: '2018-06-11', percent: 20, paid: 2345 }, { name: 'Bryan', location: 'Fort Collins', date: '2018-06-10', percent: 30, paid: 1234 }, { name: 'Chris', location: 'Palo Alto', date: '2018-06-09', percent: 40, paid: 2345 }, { name: 'Eric', location: 'Palo Alto', date: '2018-06-11', percent: 80, paid: 3456 }, { name: 'Doug', location: 'Fort Collins', date: '2018-06-10', percent: 60, paid: 1234 }, { name: 'Jet', location: 'Palo Alto', date: '2018-06-09', percent: 40, paid: 3456 }, { name: 'Michael', location: 'Boise', date: '2018-06-11', percent: 50, paid: 1234 }, { name: 'Tracy', location: 'San Francisco', date: '2018-06-10', percent: 10, paid: 2345 }];

var SimpleDataTable = function (_Component) {
  _inherits(SimpleDataTable, _Component);

  function SimpleDataTable() {
    _classCallCheck(this, SimpleDataTable);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleDataTable.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_DataTable2.default, { columns: columns, data: DATA })
    );
  };

  return SimpleDataTable;
}(_react.Component);

var SizedDataTable = function (_Component2) {
  _inherits(SizedDataTable, _Component2);

  function SizedDataTable() {
    _classCallCheck(this, SizedDataTable);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  SizedDataTable.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_DataTable2.default, { columns: columns, data: data, size: 'medium' })
    );
  };

  return SizedDataTable;
}(_react.Component);

var TunableDataTable = function (_Component3) {
  _inherits(TunableDataTable, _Component3);

  function TunableDataTable() {
    _classCallCheck(this, TunableDataTable);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  TunableDataTable.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_DataTable2.default, {
        columns: columns.map(function (c) {
          return _extends({}, c, { search: c.property === 'name' || c.property === 'location' });
        }),
        data: DATA,
        sortable: true,
        resizeable: true
      })
    );
  };

  return TunableDataTable;
}(_react.Component);

var groupColumns = [].concat(columns);
var first = groupColumns[0];
groupColumns[0] = _extends({}, groupColumns[1]);
groupColumns[1] = _extends({}, first);
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;

var GroupedDataTable = function (_Component4) {
  _inherits(GroupedDataTable, _Component4);

  function GroupedDataTable() {
    _classCallCheck(this, GroupedDataTable);

    return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
  }

  GroupedDataTable.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_DataTable2.default, {
        columns: groupColumns,
        data: DATA,
        groupBy: 'location',
        sortable: true
      })
    );
  };

  return GroupedDataTable;
}(_react.Component);

(0, _react3.storiesOf)('DataTable', module).add('Simple DataTable', function () {
  return _react2.default.createElement(SimpleDataTable, null);
}).add('Sized DataTable', function () {
  return _react2.default.createElement(SizedDataTable, null);
}).add('Tunable DataTable', function () {
  return _react2.default.createElement(TunableDataTable, null);
}).add('Grouped DataTable', function () {
  return _react2.default.createElement(GroupedDataTable, null);
});