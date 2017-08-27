import { schema, PropTypes } from 'react-desc';

export default (function (Meter) {
  return schema(Meter, {
    description: 'A graphical meter.',
    usage: 'import { Meter } from \'grommet\';\n  <Meter/>',
    props: {
      background: [PropTypes.string, 'A color identifier to use for the background color. For example:\n      \'light-1\'.'],
      round: [PropTypes.bool, 'Whether to round the line ends'],
      size: [PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), 'The size of the Meter. Defaults to medium.'],
      thickness: [PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), 'The size of the Meter. Defaults to medium.'],
      type: [PropTypes.oneOf(['bar', 'circle']), 'The visual type of meter.'],
      values: [PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string,
        highlight: PropTypes.bool,
        label: PropTypes.string.isRequired, // for accessibility
        onClick: PropTypes.func,
        onHover: PropTypes.func,
        value: PropTypes.number.isRequired
      })), 'Array of value objects describing the data.\n      \'value\' is the actual numeric value.\n      \'label\' is a text string describing it.\n      \'color\' indicates the color name to use. If not specified a default one\n      will be chosen.\n      \'onClick\' will be called when the user clicks on it.\n      Set \'highlight\' to call attention to it.\n      \'onHover\' will be called with a boolean argument indicating when the\n      user hovers onto or away from it.']
    }
  });
});