'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Layer) {
  return (0, _reactDesc.schema)(Layer, {
    description: 'A modal overlay.',
    usage: 'import { Layer } from \'grommet\';\n  <Layer/>',
    props: {
      align: [_reactDesc.PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']), 'Which direction the layer contents should emanate from.', {
        defaultProp: 'center'
      }],
      closer: [_reactDesc.PropTypes.node, 'The node to be used as the close control.\n      If provided, it is the caller\'s responsibility to listen to events from the node'],
      messages: [_reactDesc.PropTypes.shape({
        closeLayer: _reactDesc.PropTypes.string
      }), 'Optional. Used to replace default messages used inside Layer \n      (e.g. provide the same message in another language).\n      '],
      onClose: [_reactDesc.PropTypes.func, 'Function that will be called when the user requests the Layer to close.\n      This function will only be invoked if closer prop is undefined,\n      or if the user pressed escape key.']
    }
  });
};