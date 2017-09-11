'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Layer) {
  return (0, _reactDesc.schema)(Layer, {
    description: 'A modal overlay. It is the caller\'s responsibility to provide a control for\n  the user to close the layer.',
    usage: 'import { Layer } from \'grommet\';\n  <Layer/>',
    props: {
      align: [_reactDesc.PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']), 'Which direction the layer contents should emanate from.', {
        defaultProp: 'center'
      }],
      context: [_reactDesc.PropTypes.object, 'Object with the context variables to be passed to the Layer.'],
      onEsc: [_reactDesc.PropTypes.func, 'Function that will be called when the user presses the escape key inside the Layer.'],
      size: [_reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'full']), 'Optional size for the Layer.']
    }
  });
};