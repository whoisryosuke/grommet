'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Heading) {
  return (0, _reactDesc.schema)(Heading, {
    description: 'A box.',
    usage: 'import { Heading } from \'grommet\';\n  <Heading/>',
    props: {
      level: [_reactDesc.PropTypes.oneOf([1, 2, 3, 4]), 'The heading level. It corresponds to the number after the \'H\' for\n      the DOM tag. Set the level for semantic accuracy and accessibility.\n      The sizing can be further adjusted using the size property.'],
      margin: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
        bottom: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']),
        top: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
      })]), 'The amount of margin above and/or below the heading. An object can be\n      specified to distinguish top margin and bottom margin.'],
      size: [_reactDesc.PropTypes.oneOf(['small', 'medium', 'large']), 'The font size is primarily driven by the chosen tag. But, it can\n      be adjusted via this size property. The tag should be set for semantic\n      correctness and accessibility. This size property allows for stylistic\n      adjustments.'],
      textAlign: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end']), 'How to align the text inside the heading.'],
      truncate: [_reactDesc.PropTypes.bool, 'Restrict the text to a single line and truncate with ellipsis if it\n      is too long to all fit. Defaults to false.']
    }
  });
};