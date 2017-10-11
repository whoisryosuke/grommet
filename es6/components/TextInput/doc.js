import { describe, PropTypes } from 'react-desc';

export default (function (TextInput) {
  var DocumentedTextInput = describe(TextInput).description('A text input field with optional suggestions.').usage('import { TextInput } from \'grommet\';\n    <TextInput id=\'item\' name=\'item\' />');

  DocumentedTextInput.propTypes = {
    defaultValue: PropTypes.string.description('What text to start with in the input.'),
    id: PropTypes.string.description('The id attribute of the input.'),
    name: PropTypes.string.description('The name attribute of the input.'),
    onInput: PropTypes.func.description('Function that will be called when the user types in the input.'),
    onSelect: PropTypes.func.description('Function that will be called when the user selects a suggestion.\n      The suggestion contains the object chosen from the supplied suggestions.'),
    placeholder: PropTypes.string.description('Placeholder text to use when the input is empty.'),
    plain: PropTypes.bool.description('Whether this is a plain input with no border or padding.\n      Only use this when the containing context provides sufficient affordance'),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).description('The size of the TextInput.'),
    suggestions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape({
      label: PropTypes.node,
      value: PropTypes.any
    }), PropTypes.string])).description('Suggestions to show. It is recommended to avoid showing too many\n      suggestions and instead rely on the user to type more.'),
    value: PropTypes.string.description('What text to put in the input.')
  };

  return DocumentedTextInput;
});