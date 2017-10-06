'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (DropButton) {
  return (0, _reactDesc.schema)(DropButton, {
    description: 'A control that when clicked will render its children in a drop layer.\n  When open the drop will control the focus so that the contents behind it are not focusable.\n  ',
    usage: 'import { DropButton } from \'grommet\';\n  <DropButton control={element}>{dropContents...}</Drop>',
    props: {
      background: [_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
        color: _reactDesc.PropTypes.string,
        opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
      })]), 'Background color when drop is active'],
      control: [_reactDesc.PropTypes.element, 'React node to open/close the drop content.', {
        required: true
      }],
      messages: [_reactDesc.PropTypes.shape({
        openDrop: _reactDesc.PropTypes.string
      }), 'Custom messages for DropButton. Used for accessibility by screen readers.'],
      open: [_reactDesc.PropTypes.bool, 'Whether the drop should be open or not.']
    }
  });
};