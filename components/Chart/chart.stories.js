'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Chart = require('../Chart/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart() {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BarChart.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Chart2.default, {
        type: 'bar',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return BarChart;
}(_react.Component);

var LineChart = function (_Component2) {
  _inherits(LineChart, _Component2);

  function LineChart() {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  LineChart.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Chart2.default, {
        type: 'line',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return LineChart;
}(_react.Component);

var AreaChart = function (_Component3) {
  _inherits(AreaChart, _Component3);

  function AreaChart() {
    _classCallCheck(this, AreaChart);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  AreaChart.prototype.render = function render() {
    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Chart2.default, {
        type: 'area',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return AreaChart;
}(_react.Component);

(0, _react3.storiesOf)('Chart', module).add('Bar Chart', function () {
  return _react2.default.createElement(BarChart, null);
}).add('Line Chart', function () {
  return _react2.default.createElement(LineChart, null);
}).add('Area Chart', function () {
  return _react2.default.createElement(AreaChart, null);
});