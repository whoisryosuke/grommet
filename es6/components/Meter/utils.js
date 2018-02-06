var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import { colorForName } from '../../utils';

export var backgroundProps = function backgroundProps(background, theme) {
  var result = {};
  if (background) {
    if ((typeof background === 'undefined' ? 'undefined' : _typeof(background)) === 'object') {
      result.stroke = colorForName(background.color, theme);
      if (background.opacity) {
        result.strokeOpacity = background.opacity === true ? theme.global.opacity.medium : theme.global.opacity[background.opacity];
      }
    } else {
      result.stroke = colorForName(background, theme);
    }
  }
  return result;
};

export default { backgroundProps: backgroundProps };