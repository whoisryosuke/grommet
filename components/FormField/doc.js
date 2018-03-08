'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (FormField) {
  var DocumentedFormField = (0, _reactDesc.describe)(FormField).availableAt((0, _utils.getAvailableAtBadge)('FormField')).description('A field in a form.').usage('import { FormField } from \'grommet\';\n<FormField />');

  DocumentedFormField.propTypes = {
    border: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      position: _reactDesc.PropTypes.oneOf(['outer', 'inner']),
      side: _reactDesc.PropTypes.oneOf(['top', 'left', 'bottom', 'right', 'horizontal', 'vertical', 'all']),
      size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large'])
    })]).description('What sort of border to use. Setting this to false\n      will not show any border and will leave the focus indicator to\n      the children.').defaultValue({ color: 'border', position: 'inner', side: 'bottom' }),
    error: _reactDesc.PropTypes.string.description('Any error text describing issues with the field'),
    help: _reactDesc.PropTypes.string.description('Any help text describing how the field works'),
    label: _reactDesc.PropTypes.string.description('A short label describing the field')
  };

  return DocumentedFormField;
};