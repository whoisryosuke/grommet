'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Meter) {
  return (0, _reactDesc.schema)(Meter, {
    description: 'A graphical meter.',
    usage: 'import { Meter } from \'grommet\';\n  <Meter/>',
    props: {
      background: [_reactDesc.PropTypes.string, 'A color identifier to use for the background color. For example:\n      \'light-1\'.'],
      cap: [_reactDesc.PropTypes.oneOf(['round', 'square']), 'The end of line cap. Defaults to square.'],
      size: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), 'The size of the Meter. Defaults to medium.'],
      thickness: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), 'The size of the Meter. Defaults to medium.'],
      type: [_reactDesc.PropTypes.oneOf(['bar', 'circle']), 'The visual type of meter.'],
      values: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
        color: _reactDesc.PropTypes.string,
        highlight: _reactDesc.PropTypes.bool,
        label: _reactDesc.PropTypes.string.isRequired, // for a11y
        onClick: _reactDesc.PropTypes.func,
        onHover: _reactDesc.PropTypes.func,
        value: _reactDesc.PropTypes.number.isRequired
      })), 'Array of value objects describing the data.\n      \'value\' is the actual numeric value.\n      \'label\' is a text string describing it.\n      \'color\' indicates the color name to use. If not specified a default one\n      will be chosen.\n      \'onClick\' will be called when the user clicks on it.\n      Set \'highlight\' to call attention to it.\n      \'onHover\' will be called with a boolean argument indicating when the\n      user hovers onto or away from it.']
    }
  });
};