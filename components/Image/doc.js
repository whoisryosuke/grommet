'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Image) {
  var DocumentedImage = (0, _reactDesc.describe)(Image).description('An image.').usage('import { Image } from \'grommet\';\n    <Image/>');

  DocumentedImage.propTypes = {
    fit: _reactDesc.PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.')
  };

  return DocumentedImage;
};