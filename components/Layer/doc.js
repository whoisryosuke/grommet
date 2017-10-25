'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Layer) {
  var DocumentedLayer = (0, _reactDesc.describe)(Layer).availableAt((0, _utils.getAvailableAtBadge)('Layer')).description('A modal overlay. It is the caller\'s responsibility to provide a control for\n      the user to close the layer.').usage('import { Layer } from \'grommet\';\n<Layer />');

  DocumentedLayer.propTypes = {
    align: _reactDesc.PropTypes.oneOf(['center', 'top', 'bottom', 'left', 'right']).description('Which direction the layer contents should emanate from.').defaultValue('center'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the Layer.'),
    size: _reactDesc.PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge', 'full']).description('Size for the Layer.')
  };

  return DocumentedLayer;
};