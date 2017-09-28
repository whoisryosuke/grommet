'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Chart) {
  return (0, _reactDesc.schema)(Chart, {
    description: 'A graphical chart.',
    usage: 'import { Chart } from \'grommet\';\n  <Chart/>',
    props: {
      bounds: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)), 'The limits for the values, specified as a two dimensional array.\n      If not specified, the bounds will automatically be set to fit\n      the provided values.'],
      color: [_reactDesc.PropTypes.string, 'A color identifier to use for the graphic color. Defaults to\n      \'accent-1\'.'],
      round: [_reactDesc.PropTypes.bool, 'Whether to round the line ends'],
      size: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.shape({
        height: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full']),
        width: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'full'])
      })]), 'The size of the Chart. Defaults to { width: "medium", height: "small" }.'],
      thickness: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), 'The width of the stroke. Defaults to medium.'],
      title: [_reactDesc.PropTypes.string, // .isRequired isn't working?
      'Accessible title of the chart.'],
      type: [_reactDesc.PropTypes.oneOf(['bar', 'line', 'area']), 'The visual type of meter. The default is bar'],
      values: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
        label: _reactDesc.PropTypes.string, // for accessibility of bars
        value: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number).isRequired
      })), 'Array of value objects describing the data.\n      \'value\' is a tuple indicating the coordinate of the value or a triple\n      indicating the x coordinate and a range of two y coordinates.\n      \'label\' is a text string describing it.']
    }
  });
};