import { describe, PropTypes } from 'react-desc';

export default (function (DropButton) {
  var DocumentedDropButton = describe(DropButton).description('A control that when clicked will render its children in a drop layer.\n    When open the drop will control the focus so that the contents behind it are not focusable.\n    ').usage('import { DropButton } from \'grommet\';\n    <DropButton control={element}>{dropContents...}</DropButton>');

  DocumentedDropButton.propTypes = {
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
      color: PropTypes.string,
      opacity: PropTypes.oneOfType([PropTypes.oneOf(['weak', 'medium', 'strong']), PropTypes.bool])
    })]).description('Background color when drop is active'),
    control: PropTypes.element.description('React node to open/close the drop content.').isRequired,
    messages: PropTypes.shape({
      openDrop: PropTypes.string
    }).description('Custom messages for DropButton. Used for accessibility by screen readers.'),
    open: PropTypes.bool.description('Whether the drop should be open or not.')
  };

  return DocumentedDropButton;
});