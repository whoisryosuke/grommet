import { schema, PropTypes } from 'react-desc';

export default (function (Image) {
  return schema(Image, {
    description: 'An image.',
    usage: 'import { Image } from \'grommet\';\n  <Image/>',
    props: {
      fit: [PropTypes.oneOf(['cover', 'contain']), 'How the image fills its container.']
    }
  });
});