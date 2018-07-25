'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var basicStyle = function basicStyle(props) {
  return (0, _styledComponents.css)(['border:', ' solid ', ';border-radius:', ';color:', ';'], props.theme.button.border.width, props.color ? (0, _utils.colorForName)(props.color, props.theme) : props.theme.button.border.color, props.theme.button.border.radius, props.theme.dark ? props.theme.global.colors.darkBackground.text : props.theme.button.colors.text);
};

var primaryStyle = function primaryStyle(props) {
  return (0, _styledComponents.css)(['', ' border-radius:', ';svg{fill:', ';stroke:', ';transition:none;}'], (0, _utils.backgroundStyle)(props.color || props.theme.button.colors.primary || 'brand', props.theme), props.theme.button.border.radius, (0, _utils.colorIsDark)((0, _utils.colorForName)('brand', props.theme)) ? props.theme.global.colors.darkBackground.text : props.theme.global.colors.lightBackground.text, (0, _utils.colorIsDark)((0, _utils.colorForName)('brand', props.theme)) ? props.theme.global.colors.darkBackground.text : props.theme.global.colors.lightBackground.text);
};

var disabledStyle = (0, _styledComponents.css)(['opacity:', ';cursor:default;'], function (props) {
  return props.theme.button.disabled.opacity;
});

function getHoverColor(props) {
  if (props.color) {
    return (0, _utils.colorForName)(props.color, props.theme);
  }
  return props.theme.button.border.color;
}

function getHoverIndicatorStyle(hoverIndicator, theme) {
  var backgroundColor = theme.global.hover.backgroundColor;
  if ((typeof hoverIndicator === 'undefined' ? 'undefined' : _typeof(hoverIndicator)) === 'object') {
    if (typeof hoverIndicator.background === 'string') {
      var colorGroup = hoverIndicator.background.split('-');
      var colorType = colorGroup[0];
      if (!theme.global.colors[colorType]) {
        console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
      } else if (colorGroup.length > 1) {
        // subtract one to use the array
        var colorIndex = colorGroup[1] - 1;
        if (theme.global.colors[colorType].length < colorGroup[1]) {
          console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
        } else {
          backgroundColor = (0, _polished.rgba)(theme.global.colors[colorType][colorIndex], 0.3) + ';';
        }
      } else if (typeof theme.global.colors[colorType] !== 'string') {
        console.warn('Invalid color ' + hoverIndicator.background + ', using ' + backgroundColor + ' instead');
      } else {
        backgroundColor = (0, _polished.rgba)(theme.global.colors[colorType], 0.3) + ';';
      }
    }
  }
  return (0, _styledComponents.css)(['background-color:', ';color:', ';'], backgroundColor, theme.global.hover.textColor);
}

var hoverStyle = (0, _styledComponents.css)(['&:hover{', ' ', ' ', '}'], function (props) {
  return props.hoverIndicator && getHoverIndicatorStyle(props.hoverIndicator, props.theme);
}, function (props) {
  return !props.plain && (0, _styledComponents.css)(['box-shadow:0px 0px 0px 2px ', ';'], getHoverColor(props));
}, function (props) {
  return !props.plain && !props.primary && (0, _styledComponents.css)(['svg{fill:', ';stroke:', ';transition:none;}'], props.theme.global.hover.textColor, props.theme.global.hover.textColor);
});

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex: 1 0 auto;\n';

var plainStyle = (0, _styledComponents.css)(['color:inherit;border:none;padding:0;text-align:inherit;']);

var StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'StyledButton'
})(['display:inline-block;box-sizing:border-box;cursor:pointer;outline:none;font:inherit;text-decoration:none;margin:0;background-color:transparent;overflow:visible;text-transform:none;', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ''], function (props) {
  return props.plain && plainStyle;
}, function (props) {
  return !props.plain && basicStyle(props);
}, function (props) {
  return props.primary && primaryStyle(props);
}, function (props) {
  return !props.disabled && !props.focus && hoverStyle;
}, function (props) {
  return !props.disabled && props.active && _utils.activeStyle;
}, function (props) {
  return props.disabled && disabledStyle;
}, function (props) {
  return !props.plain && 'padding: ' + props.theme.button.padding.vertical + ' ' + props.theme.button.padding.horizontal + ';';
}, function (props) {
  return props.focus && (!props.plain || props.focusIndicator) && _utils.focusStyle;
}, (0, _utils.lapAndUp)('\n    transition: 0.1s ease-in-out;\n  '), function (props) {
  return props.fillContainer && fillStyle;
}, function (props) {
  return props.icon && !props.label && !props.plain && '\n    padding: ' + props.theme.global.edgeSize.small + ';\n  ';
});

exports.default = StyledButton.extend(_templateObject, function (props) {
  return props.theme.button.extend;
});