'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (RadioButton) {
  return (0, _reactDesc.schema)(RadioButton, {
    description: 'A radio button control.',
    usage: 'import { RadioButton } from \'grommet\';\n  <RadioButton />',
    props: {
      checked: [_reactDesc.PropTypes.bool, 'Same as React <input checked={} />'],
      defaultChecked: [_reactDesc.PropTypes.bool, 'Same as React <input defaultChecked={} />'],
      disabled: [_reactDesc.PropTypes.bool, 'Same as React <input disabled={} />. Also adds a hidden input element\n      with the same name so form submissions work.'],
      id: [_reactDesc.PropTypes.string, 'The DOM id attribute value to use for the underlying <input/> element.'],
      label: [_reactDesc.PropTypes.node, 'Label text to place next to the control.'],
      name: [_reactDesc.PropTypes.string, 'The DOM name attribute value to use for the underlying <input/> element.'],
      onChange: [_reactDesc.PropTypes.func, 'Same as React <input onChange={} />']
    }
  });
};