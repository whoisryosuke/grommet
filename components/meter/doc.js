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
        label: _reactDesc.PropTypes.string.isRequired, // for a11y
        onClick: _reactDesc.PropTypes.func,
        value: _reactDesc.PropTypes.number.isRequired
      })), 'Values to visualize']
    }
  });
};