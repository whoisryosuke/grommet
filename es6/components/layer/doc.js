import { schema, PropTypes } from 'react-desc';

export default (function (Layer) {
  return schema(Layer, {
    description: 'A modal overlay.',
    usage: 'import { Layer } from \'grommet\';\n  <Layer/>',
    props: {
      align: [PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']), 'Which direction the layer contents should emanate from.', {
        defaultProp: 'center'
      }],
      closer: [PropTypes.node, 'The node to be used as the close control.\n      If provided, it is the caller\'s responsibility to listen to events from the node'],
      messages: [PropTypes.shape({
        closeLayer: PropTypes.string
      }), 'Optional. Used to replace default messages used inside Layer \n      (e.g. provide the same message in another language).\n      '],
      onClose: [PropTypes.func, 'Function that will be called when the user requests the Layer to close.\n      This function will only be invoked if closer prop is undefined,\n      or if the user pressed escape key.']
    }
  });
});