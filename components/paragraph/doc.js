'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Paragraph) {
  return (0, _reactDesc.schema)(Paragraph, {
    description: 'A box.',
    usage: 'import { Paragraph } from \'grommet\';\n  <Paragraph/>',
    props: {
      margin: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none', 'small', 'medium', 'large']), _reactDesc.PropTypes.shape({
        bottom: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large']),
        top: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
      })]), 'The amount of margin above and/or below the paragraph. An object can be\n      specified to distinguish top margin and bottom margin.'],
      size: [_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), 'The size of the Paragraph text. Defaults to medium.'],
      textAlign: [_reactDesc.PropTypes.oneOf(['start', 'center', 'end']), 'How to align the text inside the paragraph.']
    }
  });
};