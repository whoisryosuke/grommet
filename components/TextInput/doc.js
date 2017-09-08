'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (TextInput) {
  return (0, _reactDesc.schema)(TextInput, {
    description: 'A text input field with optional suggestions.',
    usage: 'import { TextInput } from \'grommet\';\n  <TextInput id=\'item\' name=\'item\' />',
    props: {
      defaultValue: [_reactDesc.PropTypes.string, 'What text to start with in the input.'],
      id: [_reactDesc.PropTypes.string, 'The id attribute of the input.'],
      name: [_reactDesc.PropTypes.string, 'The name attribute of the input.'],
      onInput: [_reactDesc.PropTypes.func, 'Function that will be called when the user types in the input.'],
      onSelect: [_reactDesc.PropTypes.func, 'Function that will be called when the user selects a suggestion.\n      The suggestion contains the object chosen from the supplied suggestions.'],
      placeholder: [_reactDesc.PropTypes.string, 'Placeholder text to use when the input is empty.'],
      suggestions: [_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.shape({
        label: _reactDesc.PropTypes.node,
        value: _reactDesc.PropTypes.any
      }), _reactDesc.PropTypes.string])), 'Suggestions to show. It is recommended to avoid showing too many\n      suggestions and instead rely on the user to type more.'],
      value: [_reactDesc.PropTypes.string, 'What text to put in the input.']
    }
  });
};