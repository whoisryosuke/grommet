'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '3/4', 'flex'];
var edgeSizes = ['small', 'medium', 'large', 'none'];

exports.default = function (Grid) {
  return (0, _reactDesc.schema)(Grid, {
    description: 'A grid system for laying out content. To use, define the\n  rows and columns, create area names for adjacent cells, and then\n  place Box components inside those areas using the Box.gridArea property.\n  See https://css-tricks.com/snippets/css/complete-guide-grid/.',
    usage: 'import { Grid } from \'grommet\';\n  <Grid/>',
    props: {
      align: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']), 'How to align the individual items inside the grid when there is extra\n      space in the column axis. Defaults to stretch'],
      alignContent: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']), 'How to align the contents along the column axis.'],
      areas: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
        name: _reactDesc.PropTypes.string,
        start: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number),
        end: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)
      })), 'Area names and column,row coordinates.'],
      columns: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)), 'Column sizes.'],
      gap: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.shape({
        horizontal: _reactDesc.PropTypes.oneOf(edgeSizes),
        vertical: _reactDesc.PropTypes.oneOf(edgeSizes)
      })]), 'Gap sizes between rows and/or columns.'],
      justify: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']), 'How to align the individual items inside the grid when there is extra\n      space in the row axis. Defaults to stretch'],
      justifyContent: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']), 'How to align the contents along the row axis.'],
      rows: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)), 'Row sizes.'],
      tag: [_reactDesc.PropTypes.string, 'The DOM tag to use for the element. Defaults to div.']
    }
  });
};