'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Text) {
  return (0, _reactDesc.schema)(Text, {
    description: 'Arbitrary text.',
    usage: 'import { Text } from \'grommet\';\n  <Text/>',
    props: {
      margin: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
        bottom: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']),
        top: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
      })]), 'The amount of margin above and/or below the heading. An object can be\n      specified to distinguish top margin and bottom margin.'],
      size: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge']), 'The font size is primarily driven by the chosen tag. But, it can\n      be adjusted via this size property. The tag should be set for semantic\n      correctness and accessibility. This size property allows for stylistic\n      adjustments.'],
      tag: [_reactDesc.PropTypes.string, 'The DOM tag to use for the element. Defaults to span.'],
      textAlign: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end']), 'How to align the text inside the heading.'],
      truncate: [_reactDesc.PropTypes.bool, 'Restrict the text to a single line and truncate with ellipsis if it\n      is too long to all fit. Defaults to false.']
    }
  });
};