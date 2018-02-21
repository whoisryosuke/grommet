'use strict';

exports.__esModule = true;
exports.StyledContainer = exports.StyledOverlay = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var hiddenPositionStyle = /*#__PURE__*/(0, _styledComponents.css)(['left:-100%;right:100%;z-index:-1;position:fixed;']);

var StyledLayer = /*#__PURE__*/_styledComponents2.default.div.withConfig({
  displayName: 'StyledLayer'
})(['', ' position:relative;z-index:10;width:100vw;height:100vh;overflow:auto;pointer-events:none;', ''], _utils.baseStyle, function (props) {
  return props.position === 'hidden' ? hiddenPositionStyle : (0, _utils.lapAndUp)('\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n  ');
});

var StyledOverlay = /*#__PURE__*/exports.StyledOverlay = _styledComponents2.default.div.withConfig({
  displayName: 'StyledLayer__StyledOverlay'
})(['position:absolute;top:0px;left:0px;right:0px;bottom:0px;background-color:', ';pointer-events:all;'], function (props) {
  return props.theme.layer.overlayBackgroundColor;
});

var MARGINS = {
  top: function top(margin, theme) {
    return theme.global.edgeSize[margin.top || margin.vertical || margin] || 0;
  },
  bottom: function bottom(margin, theme) {
    return theme.global.edgeSize[margin.bottom || margin.vertical || margin] || 0;
  },
  left: function left(margin, theme) {
    return theme.global.edgeSize[margin.left || margin.horizontal || margin] || 0;
  },
  right: function right(margin, theme) {
    return theme.global.edgeSize[margin.right || margin.horizontal || margin] || 0;
  }
};

var KEYFRAMES = {
  center: {
    vertical: (0, _styledComponents.keyframes)(['0%{transform:translateX(-50%) scale(0.8);}100%{transform:translateX(-50%) scale(1);}']),
    horizontal: (0, _styledComponents.keyframes)(['0%{transform:translateY(-50%) scale(0.8);}100%{transform:translateY(-50) scale(1);}']),
    true: (0, _styledComponents.keyframes)(['0%{transform:scale(0.8);}100%{transform:scale(1);}']),
    false: (0, _styledComponents.keyframes)(['0%{transform:translate(-50%,-50%) scale(0.8);}100%{transform:translate(-50%,-50%) scale(1);}'])
  },
  top: {
    vertical: (0, _styledComponents.keyframes)(['0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}']),
    horizontal: (0, _styledComponents.keyframes)(['0%{transform:translateY(-100%);}100%{transform:translateY(0);}']),
    true: (0, _styledComponents.keyframes)(['0%{transform:translateY(-100%);}100%{transform:translateY(0);}']),
    false: (0, _styledComponents.keyframes)(['0%{transform:translate(-50%,-100%);}100%{transform:translate(-50%,0);}'])
  },
  bottom: {
    vertical: (0, _styledComponents.keyframes)(['0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}']),
    horizontal: (0, _styledComponents.keyframes)(['0%{transform:translateY(100%);}100%{transform:translateY(0);}']),
    true: (0, _styledComponents.keyframes)(['0%{transform:translateY(100%);}100%{transform:translateY(0);}']),
    false: (0, _styledComponents.keyframes)(['0%{transform:translate(-50%,100%);}100%{transform:translate(-50%,0);}'])
  },
  left: {
    vertical: (0, _styledComponents.keyframes)(['0%{transform:translateX(-100%);}100%{transform:translateX(0);}']),
    horizontal: (0, _styledComponents.keyframes)(['0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}']),
    true: (0, _styledComponents.keyframes)(['0%{transform:translateX(-100%);}100%{transform:translateX(0);}']),
    false: (0, _styledComponents.keyframes)(['0%{transform:translate(-100%,-50%);}100%{transform:translate(0,-50%);}'])
  },
  right: {
    vertical: (0, _styledComponents.keyframes)(['0%{transform:translateX(100%);}100%{transform:translateX(0);}']),
    horizontal: (0, _styledComponents.keyframes)(['0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}']),
    true: (0, _styledComponents.keyframes)(['0%{transform:translateX(100%);}100%{transform:translateX(0);}']),
    false: (0, _styledComponents.keyframes)(['0%{transform:translate(100%,-50%);}100%{transform:translate(0,-50%);}'])
  }
};

// POSITIONS combines 'position', 'full', and 'margin' properties, since
// they are all interdependent.
// Basically, non-full axes combine 50% position with -50% translation.
// full axes pin to the window edges offset by any margin.
// The keyframe animations are included as they are done via translations
// as well so they must take into account the non-animated positioning.
var POSITIONS = {
  center: {
    vertical: function vertical(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: 50%;\n      transform: translateX(-50%);\n      animation: ' + KEYFRAMES.center.vertical + ' 0.2s ease-in-out forwards;\n    ';
    },
    horizontal: function horizontal(margin, theme) {
      return '\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      top: 50%;\n      transform: translateY(-50%);\n      animation: ' + KEYFRAMES.center.horizontal + ' 0.2s ease-in-out forwards;\n    ';
    },
    true: function _true(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      animation: ' + KEYFRAMES.center.true + ' 0.2s ease-in-out forwards;\n    ';
    },
    false: function _false(margin, theme) {
      return '\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      animation: ' + KEYFRAMES.center.false + ' 0.2s ease-in-out forwards;\n      ' + (0, _utils.edgeStyle)('margin', margin, theme) + '\n    ';
    }
  },

  top: {
    vertical: function vertical(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: 50%;\n      transform: translate(-50%, 0%);\n      animation: ' + KEYFRAMES.top.vertical + ' 0.2s ease-in-out forwards;\n    ';
    },
    horizontal: function horizontal(margin, theme) {
      return '\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      top: ' + MARGINS.top(margin, theme) + ';\n      transform: translateY(0);\n      animation: ' + KEYFRAMES.top.horizontal + ' 0.2s ease-in-out forwards;\n    ';
    },
    true: function _true(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      transform: translateY(0);\n      animation: ' + KEYFRAMES.top.true + ' 0.2s ease-in-out forwards;\n    ';
    },
    false: function _false(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      left: 50%;\n      transform: translate(-50%, 0);\n      animation: ' + KEYFRAMES.top.false + ' 0.2s ease-in-out forwards;\n    ';
    }
  },

  bottom: {
    vertical: function vertical(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: 50%;\n      transform: translate(-50%, 0);\n      animation: ' + KEYFRAMES.bottom.vertical + ' 0.2s ease-in-out forwards;\n    ';
    },
    horizontal: function horizontal(margin, theme) {
      return '\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      transform: translateY(0);\n      animation: ' + KEYFRAMES.bottom.horizontal + ' 0.2s ease-in-out forwards;\n    ';
    },
    true: function _true(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      transform: translateY(0);\n      animation: ' + KEYFRAMES.bottom.true + ' 0.2s ease-in-out forwards;\n    ';
    },
    false: function _false(margin, theme) {
      return '\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: 50%;\n      transform: translate(-50%, 0);\n      animation: ' + KEYFRAMES.bottom.false + ' 0.2s ease-in-out forwards;\n    ';
    }
  },

  left: {
    vertical: function vertical(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: ' + MARGINS.left(margin, theme) + ';\n      transform: translateX(0);\n      animation: ' + KEYFRAMES.left.vertical + ' 0.2s ease-in-out forwards;\n    ';
    },
    horizontal: function horizontal(margin, theme) {
      return '\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      top: 50%;\n      transform: translate(0, -50%);\n      animation: ' + KEYFRAMES.left.horizontal + ' 0.2s ease-in-out forwards;\n    ';
    },
    true: function _true(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      transform: translateX(0);\n      animation: ' + KEYFRAMES.left.true + ' 0.2s ease-in-out forwards;\n    ';
    },
    false: function _false(margin, theme) {
      return '\n      left: ' + MARGINS.left(margin, theme) + ';\n      top: 50%;\n      transform: translate(0, -50%);\n      animation: ' + KEYFRAMES.left.false + ' 0.2s ease-in-out forwards;\n    ';
    }
  },

  right: {
    vertical: function vertical(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      transform: translateX(0);\n      animation: ' + KEYFRAMES.right.vertical + ' 0.2s ease-in-out forwards;\n    ';
    },
    horizontal: function horizontal(margin, theme) {
      return '\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      top: 50%;\n      transform: translate(0, -50%);\n      animation: ' + KEYFRAMES.right.horizontal + ' 0.2s ease-in-out forwards;\n    ';
    },
    true: function _true(margin, theme) {
      return '\n      top: ' + MARGINS.top(margin, theme) + ';\n      bottom: ' + MARGINS.bottom(margin, theme) + ';\n      left: ' + MARGINS.left(margin, theme) + ';\n      right: ' + MARGINS.right(margin, theme) + ';\n      transform: translateX(0);\n      animation: ' + KEYFRAMES.right.true + ' 0.2s ease-in-out forwards;\n    ';
    },
    false: function _false(margin, theme) {
      return '\n      right: ' + MARGINS.right(margin, theme) + ';\n      top: 50%;\n      transform: translate(0, -50%);\n      animation: ' + KEYFRAMES.right.false + ' 0.2s ease-in-out forwards;\n    ';
    }
  }
};

var StyledContainer = /*#__PURE__*/exports.StyledContainer = _styledComponents2.default.div.withConfig({
  displayName: 'StyledLayer__StyledContainer'
})(['', ' display:flex;flex-direction:column;min-height:', ';background-color:', ';outline:none;pointer-events:all;z-index:15;', ' ', ''], function (props) {
  return !props.modal ? _utils.baseStyle : '';
}, function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return props.plain ? 'transparent' : props.theme.layer.backgroundColor;
}, (0, _utils.palm)('\n    min-height: 100%;\n    min-width: 100%;\n  '), function (props) {
  return (0, _utils.lapAndUp)('\n    position: ' + (props.modal ? 'absolute' : 'fixed') + ';\n    max-height: 100%;\n    max-width: 100%;\n    overflow: auto;\n    border-radius: ' + (props.plain ? 'none' : props.theme.layer.border.radius) + ';\n    ' + (props.position !== 'hidden' && POSITIONS[props.position][props.full](props.margin, props.theme) || '') + '\n  ');
});

// ${props => props.full && fullStyle(props.full, props.margin, props.theme)}
// ${props => props.margin && edgeStyle('margin', props.margin, props.theme)}

exports.default = StyledLayer.extend(_templateObject, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});