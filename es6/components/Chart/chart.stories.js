function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Chart from '../Chart/Chart';
import Grommet from '../Grommet/Grommet';

var BarChart = function (_Component) {
  _inherits(BarChart, _Component);

  function BarChart() {
    _classCallCheck(this, BarChart);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BarChart.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(Chart, {
        type: 'bar',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return BarChart;
}(Component);

var LineChart = function (_Component2) {
  _inherits(LineChart, _Component2);

  function LineChart() {
    _classCallCheck(this, LineChart);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  LineChart.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(Chart, {
        type: 'line',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return LineChart;
}(Component);

var AreaChart = function (_Component3) {
  _inherits(AreaChart, _Component3);

  function AreaChart() {
    _classCallCheck(this, AreaChart);

    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
  }

  AreaChart.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(Chart, {
        type: 'area',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      })
    );
  };

  return AreaChart;
}(Component);

storiesOf('Chart', module).add('Bar Chart', function () {
  return React.createElement(BarChart, null);
}).add('Line Chart', function () {
  return React.createElement(LineChart, null);
}).add('Area Chart', function () {
  return React.createElement(AreaChart, null);
});