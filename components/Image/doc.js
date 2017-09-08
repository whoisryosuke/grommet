'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Image) {
  return (0, _reactDesc.schema)(Image, {
    description: 'An image.',
    usage: 'import { Image } from \'grommet\';\n  <Image/>',
    props: {
      fit: [_reactDesc.PropTypes.oneOf(['cover', 'contain']), 'How the image fills its container.']
    }
  });
};