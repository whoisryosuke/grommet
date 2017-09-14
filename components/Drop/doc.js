'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Drop) {
  return (0, _reactDesc.schema)(Drop, {
    description: 'A drop container that opens next to a target.',
    usage: 'import { Drop } from \'grommet\';\n  <Drop target={element}>...</Drop>',
    props: {
      align: [_reactDesc.PropTypes.shape({
        top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
        bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
        right: _reactDesc.PropTypes.oneOf(['left', 'right']),
        left: _reactDesc.PropTypes.oneOf(['left', 'right'])
      }), 'How to align the drop with respect to the target element.', {
        defaultProp: {
          top: 'top',
          left: 'left'
        }
      }],
      background: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
        dark: _reactDesc.PropTypes.bool,
        image: _reactDesc.PropTypes.string
      })]), 'Either a color identifier to use for the background color. For example:\n      \'neutral-1\'. Or, a \'url()\' for an image.'],
      context: [_reactDesc.PropTypes.object, 'Object with the context variables to be passed to the Drop.'],
      control: [_reactDesc.PropTypes.object, 'Target container where the drop will be aligned.', {
        required: true
      }],
      dir: [_reactDesc.PropTypes.oneOf(['rtl', 'ltr']), 'Whether text should be rendered right to left or not. Defaults to\n      inherit from the document context.'],
      onClose: [_reactDesc.PropTypes.func, 'Function that will be invoked when the user clicks outside the drop area.'],
      responsive: [_reactDesc.PropTypes.bool, 'Whether to dynamically re-place when resized.', {
        defaultProp: true
      }],
      theme: [_reactDesc.PropTypes.object, 'Custom styles for Drop component.']
    }
  });
};