'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Box) {
  return (0, _reactDesc.schema)(Box, {
    description: 'A box.',
    usage: 'import { Box } from \'grommet\';\n  <Box/>',
    props: {
      align: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']), 'How to align the contents along the cross axis.'],
      alignContent: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']), 'How to align the contents when there is extra space in the cross axis.\n      Defaults to stretch'],
      alignSelf: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']), 'How to align within its container along the cross axis.'],
      basis: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4']), 'A fixed or relative size along its container\'s main axis.'],
      border: [_reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), 'Include a border.'],
      direction: [_reactDesc.PropTypes.oneOf(['row', 'column']), 'The orientation to layout the child components in. Defaults to column.'],
      justify: [_reactDesc.PropTypes.oneOf(['start', 'center', 'between', 'end']), 'How to align the contents along the main axis.'],
      reverse: [_reactDesc.PropTypes.bool, 'Whether to reverse the order of the child components.'],
      tag: [_reactDesc.PropTypes.string, 'The DOM tag to use for the element. Defaults to div.']
    }
  });
};