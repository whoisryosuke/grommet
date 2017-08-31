var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

import { baseStyle, lapAndUp, palm } from '../utils';

var StyledLayer = styled.div.withConfig({
  displayName: 'StyledLayer'
})(['', ' position:relative;z-index:10;height:100vh;overflow:auto;background-color:', ';', ''], baseStyle, function (props) {
  return props.theme.layer.overlayBackgroundColor;
}, lapAndUp('\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n  '));

export var StyledCloser = styled.div.withConfig({
  displayName: 'StyledLayer__StyledCloser'
})(['position:absolute;top:0px;right:0px;z-index:1;padding:', ''], function (props) {
  return props.theme.global.edgeSize.small;
});

var leftAlignStyle = '\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n\n  animation: slide-left 0.2s ease-in-out forwards;\n  \n  @keyframes slide-left {\n    0% {\n      left: -100%;\n    }\n\n    100% {\n      left: 0px;\n    }\n  }\n';

var rightAlignStyle = '\n  top: 0px;\n  bottom: 0px;\n  right: 0px;\n\n  animation: slide-right 0.2s ease-in-out forwards;\n  \n  @keyframes slide-right {\n    0% {\n      right: -200px;\n    }\n\n    100% {\n      right: 0px;\n    }\n  }\n';

var topAlignStyle = '\n  left: 50%;\n  transform: translateX(-50%);\n\n  animation: slide-down 0.2s ease-in-out forwards;\n  \n  @keyframes slide-down {\n    0% {\n      top: -100vh;\n    }\n  \n    100% {\n      top: 0px;\n    }\n  }\n';

var bottomAlignStyle = '\n  bottom: 0px;\n  right: 50%;\n  transform: translateX(50%);\n\n  animation: slide-up 0.2s ease-in-out forwards;\n  \n  @keyframes slide-up {\n    0% {\n      margin-bottom: -200px;\n    }\n  \n    100% {\n      margin-bottom: 0px;\n    }\n  }\n';

function getAlignStyle(props) {
  var ALIGN_MAP = {
    'center': '\n      bottom: 50%;\n      right: 50%;\n      transform: translate(50%, 50%);\n      max-height: calc(100vh - ' + props.theme.global.edgeSize.large + ');\n      max-width: calc(100vw - ' + props.theme.global.edgeSize.large + ');\n    ',
    'left': leftAlignStyle,
    'right': rightAlignStyle,
    'top': topAlignStyle,
    'bottom': bottomAlignStyle
  };
  return ALIGN_MAP[props.align] || '';
}

export var StyledContainer = styled.div.withConfig({
  displayName: 'StyledLayer__StyledContainer'
})(['display:flex;flex-direction:column;background-color:', ';', ' ', ''], function (props) {
  return props.theme.layer.backgroundColor;
}, palm('\n    min-height: 100%;\n    min-width: 100%;\n  '), function (props) {
  return lapAndUp('\n    position: absolute;\n    max-height: 100%;\n    max-width: 100%;\n    overflow: auto;\n    border-radius: ' + props.theme.layer.border.radius + ';\n\n    ' + getAlignStyle(props) + '\n  ');
});

export default StyledLayer.extend(_templateObject, function (props) {
  return props.theme.layer && props.theme.layer.extend;
});