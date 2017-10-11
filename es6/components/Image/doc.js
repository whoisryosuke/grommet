import { describe, PropTypes } from 'react-desc';

export default (function (Image) {
  var DocumentedImage = describe(Image).description('An image.').usage('import { Image } from \'grommet\';\n    <Image/>');

  DocumentedImage.propTypes = {
    fit: PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.')
  };

  return DocumentedImage;
});