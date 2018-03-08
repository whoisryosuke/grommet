import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

export default (function (FormField) {
  var DocumentedFormField = describe(FormField).availableAt(getAvailableAtBadge('FormField')).description('A field in a form.').usage('import { FormField } from \'grommet\';\n<FormField />');

  DocumentedFormField.propTypes = {
    border: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
      color: PropTypes.string,
      position: PropTypes.oneOf(['outer', 'inner']),
      side: PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('What sort of border to use. Setting this to false\n      will not show any border and will leave the focus indicator to\n      the children.').defaultValue({ color: 'border', position: 'inner', side: 'bottom' }),
    error: PropTypes.string.description('Any error text describing issues with the field'),
    help: PropTypes.string.description('Any help text describing how the field works'),
    label: PropTypes.string.description('A short label describing the field')
  };

  return DocumentedFormField;
});