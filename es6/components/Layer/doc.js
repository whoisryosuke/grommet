import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge } from '../../utils';

var PAD_SIZES = ['xsmall', 'small', 'medium', 'large'];

export default (function (Layer) {
  var DocumentedLayer = describe(Layer).availableAt(getAvailableAtBadge('Layer')).description('A modal overlay. It is the caller\'s responsibility to provide a control for\n      the user to close the layer.').usage('import { Layer } from \'grommet\';\n<Layer />');

  DocumentedLayer.propTypes = {
    full: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['vertical', 'horizontal'])]).description('Whether the width and/or height should fill the current viewport size.'),
    margin: PropTypes.oneOfType([PropTypes.oneOf(['none'].concat(PAD_SIZES)), PropTypes.shape({
      bottom: PropTypes.oneOf(PAD_SIZES),
      horizontal: PropTypes.oneOf(PAD_SIZES),
      left: PropTypes.oneOf(PAD_SIZES),
      right: PropTypes.oneOf(PAD_SIZES),
      top: PropTypes.oneOf(PAD_SIZES),
      vertical: PropTypes.oneOf(PAD_SIZES)
    })]).description('The amount of margin around the Layer. An object can be specified to\ndistinguish horizontal margin, vertical margin, and margin on a\nparticular side of the layer'),
    onClickOutside: PropTypes.bool.description('Function that will be invoked when the user clicks outside the layer.'),
    onEsc: PropTypes.func.description('Function that will be called when the user presses the escape key inside the layer.'),
    plain: PropTypes.bool.description('Whether this is a plain Layer with no background color or border.'),
    position: PropTypes.oneOf(['bottom', 'center', 'hidden', 'left', 'right', 'top']).description('Position of the layer content.').defaultValue('center')
  };

  return DocumentedLayer;
});