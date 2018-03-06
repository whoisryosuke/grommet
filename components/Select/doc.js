'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Select) {
  var DocumentedSelect = (0, _reactDesc.describe)(Select).availableAt((0, _utils.getAvailableAtBadge)('Select')).description('An select-like field with optional search capability.').usage('import { Select } from \'grommet\';\n<Select />');

  DocumentedSelect.propTypes = {
    a11yTitle: _utils.a11yTitlePropType,
    activeOptionIndex: _reactDesc.PropTypes.number.description('Highlight a given option at the provided index.'),
    children: _reactDesc.PropTypes.func.description('Function that will be called when each option is rendered.'),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      bottom: _reactDesc.PropTypes.oneOf(['top', 'bottom']),
      right: _reactDesc.PropTypes.oneOf(['left', 'right']),
      left: _reactDesc.PropTypes.oneOf(['left', 'right'])
    }).description('How to align the drop.').defaultValue({
      top: 'top',
      left: 'left'
    }),
    dropBackground: _utils.backgroundPropType,
    dropSize: _reactDesc.PropTypes.string.description('Size of the options container inside the Select drop.'),
    dropTarget: _reactDesc.PropTypes.object.description('Target where the options drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the Select itself by default.'),
    focusIndicator: _reactDesc.PropTypes.bool.description('Whether when \'plain\' it should receive a focus outline.'),
    onChange: _reactDesc.PropTypes.func.description('Function that will be called when the user selects an option.'),
    onClose: _reactDesc.PropTypes.func.description('Function that will be called when the Select drop closes.'),
    onSearch: _reactDesc.PropTypes.func.description('Function that will be called when the user types in the search input.\nIf this property is not provided, no search field will be rendered.'),
    options: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object])).description('Options can be either a string or an object. If an object is used, use children callback\nin order to render anything based on the current item.').isRequired,
    placeholder: _reactDesc.PropTypes.string.description('Placeholder text to use when no value is provided.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Select input with no border or padding.'),
    searchPlaceholder: _reactDesc.PropTypes.string.description('Placeholder text to use in the search box when the search input is empty.'),
    value: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.element, _reactDesc.PropTypes.object]).description('Currently selected value.')
  };

  return DocumentedSelect;
};