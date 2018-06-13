'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

exports.default = function (Layer) {
  var DocumentedLayer = (0, _reactDesc.describe)(Layer).availableAt((0, _utils.getAvailableAtBadge)('Layer')).description('A modal overlay. It is the caller\'s responsibility to provide a control for\n      the user to close the layer.').usage('import { Layer } from \'grommet\';\n<Layer />');

  DocumentedLayer.propTypes = {
    full: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.oneOf(['vertical', 'horizontal'])]).description('Whether the width and/or height should fill the current viewport size.'),
    margin: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['none'].concat(PAD_SIZES)), _reactDesc.PropTypes.shape({
      bottom: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      horizontal: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      left: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      right: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      top: _reactDesc.PropTypes.oneOf(PAD_SIZES),
      vertical: _reactDesc.PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of margin around the Layer. An object can be specified to\ndistinguish horizontal margin, vertical margin, and margin on a\nparticular side of the layer'),
    modal: _reactDesc.PropTypes.bool.description('Whether there should be an overlay preventing interaction underneath the layer.').defaultValue(true),
    onClickOutside: _reactDesc.PropTypes.bool.description('Function that will be invoked when the user clicks outside the layer.'),
    onEsc: _reactDesc.PropTypes.func.description('Function that will be called when the user presses the escape key inside the layer.'),
    plain: _reactDesc.PropTypes.bool.description('Whether this is a plain Layer with no background color or border.'),
    position: _reactDesc.PropTypes.oneOf(['bottom', 'center', 'hidden', 'left', 'right', 'top']).description('Position of the layer content.').defaultValue('center'),
    responsive: _reactDesc.PropTypes.bool.description('Whether the layer should take full width and height on mobile').defaultValue(true)
  };

  return DocumentedLayer;
};