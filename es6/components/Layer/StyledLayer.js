var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css, keyframes } from 'styled-components';

import { baseStyle, lapAndUp, palm } from '../../utils';

var growBoxKeyframe = /*#__PURE__*/keyframes(['0%{transform:translate(50%,50%) scale(0.8);}100%{transform:translate(50%,50%) scale(1);}']);

var slideUpKeyframe = /*#__PURE__*/keyframes(['0%{margin-bottom:-200px;}100%{margin-bottom:0px;}']);

var slideLeftKeyframe = /*#__PURE__*/keyframes(['0%{left:-100%;}100%{left:0px;}']);

var slideRightKeyframe = /*#__PURE__*/keyframes(['0%{right:-200px;}100%{right:0px;}']);

var slideDownKeyframe = /*#__PURE__*/keyframes(['0%{top:-100vh;}100%{top:0px;}']);

var hiddenPositionStyle = /*#__PURE__*/css(['left:-100%;right:100%;z-index:-1;position:fixed;']);

var StyledLayer = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledLayer'
})(['', ' position:relative;z-index:10;height:100vh;overflow:auto;background-color:', ';', ''], baseStyle, function (props) {
  return props.plain ? 'transparent' : props.theme.layer.overlayBackgroundColor;
}, function (props) {
  return props.position === 'hidden' ? hiddenPositionStyle : lapAndUp('\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n  ');
});

var leftPositionStyle = '\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n\n  animation: ' + slideLeftKeyframe + ' 0.2s ease-in-out forwards;\n';

var rightPositionStyle = '\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n\n  animation: ' + slideRightKeyframe + ' 0.2s ease-in-out forwards;\n';

var topPositionStyle = '\n  left: 50%;\n  transform: translateX(-50%);\n  animation: ' + slideDownKeyframe + ' 0.2s ease-in-out forwards;\n';

var bottomPositionStyle = '\n  bottom: 0px;\n  right: 50%;\n  transform: translateX(50%);\n  animation: ' + slideUpKeyframe + ' 0.2s ease-in-out forwards;\n';

var centerPositionStyle = /*#__PURE__*/css(['bottom:50%;right:50%;animation:', ' 0.1s forwards;'], growBoxKeyframe);

function getPositionStyle(props) {
  var POSITION_MAP = {
    'bottom': bottomPositionStyle,
    'center': centerPositionStyle,
    'left': leftPositionStyle,
    'right': rightPositionStyle,
    'top': topPositionStyle
  };
  return POSITION_MAP[props.position] || '';
}

export var StyledContainer = /*#__PURE__*/styled.div.withConfig({
  displayName: 'StyledLayer__StyledContainer'
})(['display:flex;flex-direction:column;min-height:', ';outline:none;background-color:', ';', ' ', ''], function (props) {
  return props.theme.global.size.xxsmall;
}, function (props) {
  return props.plain ? 'transparent' : props.theme.layer.backgroundColor;
}, palm('\n    min-height: 100%;\n    min-width: 100%;\n  '), function (props) {
  return lapAndUp('\n    position: absolute;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: auto;\n    border-radius: ' + (props.plain ? 'none' : props.theme.layer.border.radius) + ';\n\n    ' + getPositionStyle(props) + '\n  ');
});

export default StyledLayer.extend(_templateObject, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});