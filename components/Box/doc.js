'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

exports.default = function (Box) {
  return (0, _reactDesc.schema)(Box, {
    description: 'A flexible box that lays out its contents along a single\n    direction.',
    usage: 'import { Box } from \'grommet\';\n  <Box/>',
    props: {
      align: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'baseline', 'stretch']), 'How to align the contents along the cross axis.'],
      alignContent: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']), 'How to align the contents when there is extra space in the cross axis.\n      Defaults to stretch'],
      alignSelf: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']), 'How to align along the cross axis when contained in a Box or along\n      the column axis when contained in a Grid.'],
      background: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
        color: _reactDesc.PropTypes.string,
        dark: _reactDesc.PropTypes.bool,
        image: _reactDesc.PropTypes.string,
        opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
      })]), 'Either a color identifier to use for the background color. For example:\n      \'neutral-1\'. Or, a \'url()\' for an image. Dark is not needed if color is provided.'],
      basis: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4']), 'A fixed or relative size along its container\'s main axis.'],
      border: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']), _reactDesc.PropTypes.shape({
        color: _reactDesc.PropTypes.string,
        side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
        size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
      })]), 'Include a border.'],
      direction: [_reactDesc.PropTypes.oneOf(['row', 'column']), 'The orientation to layout the child components in. Defaults to column.'],
      flex: [_reactDesc.PropTypes.oneOf(['grow', 'shrink', true, false]), 'Whether flex-grow and/or flex-shrink is true.'],
      full: [_reactDesc.PropTypes.oneOf(['horizontal', 'vertical', true, false, 'grow']), 'Whether the width and/or height should take the full viewport size.'],
      gridArea: [_reactDesc.PropTypes.string, 'The name of the area to place this Box in inside a parent Grid.'],
      justify: [_reactDesc.PropTypes.oneOf(['start', 'center', 'between', 'end']), 'How to align the contents along the main axis.'],
      justifySelf: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']), 'How to align along the row axis when contained in a Grid.'],
      margin: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
        bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
      })]), 'The amount of margin around the box. An object can be specified to\n      distinguish horizontal margin, vertical margin, and margin on a\n      particular side of the box'],
      pad: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
        bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
        vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
      })]), 'The amount of padding around the box contents. An object can be specified to\n      distinguish horizontal padding, vertical padding, and padding on a\n      particular side of the box'],
      responsive: [_reactDesc.PropTypes.bool, 'Whether children laid out in a row direction should be switched to a\n      column layout when the display area narrows.'],
      reverse: [_reactDesc.PropTypes.bool, 'Whether to reverse the order of the child components.'],
      round: [_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'full']), 'How much to round the corners.'],
      tag: [_reactDesc.PropTypes.string, 'The DOM tag to use for the element. Defaults to div.'],
      textAlign: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end']), 'How to align the text inside the box.'],
      wrap: [_reactDesc.PropTypes.bool, 'Whether children can wrap if they can\'t all fit. Defaults to false.']
    }
  });
};