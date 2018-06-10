var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var fillStyle = '\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  flex-grow: 1;\n  display: flex;\n';

var StyledStack = styled.div.withConfig({
  displayName: 'StyledStack'
})(['position:relative;', ''], function (props) {
  return props.fillContainer && fillStyle;
});

export default StyledStack.extend(_templateObject, function (props) {
  return props.theme.stack && props.theme.stack.extend;
});

var styleMap = {
  'fill': '\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  ',
  'center': '\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  ',
  'left': '\n    top: 50%;\n    left: 0;\n    transform: translateY(-50%);\n  ',
  'right': '\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n  ',
  'top': '\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ',
  'bottom': '\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  ',
  'top-left': '\n    top: 0;\n    left: 0;\n  ',
  'bottom-left': '\n    bottom: 0;\n    left: 0;\n  ',
  'top-right': '\n    top: 0;\n    right: 0;\n  ',
  'bottom-right': '\n    bottom: 0;\n    right: 0;\n  '
};

export var StyledStackLayer = styled.div.withConfig({
  displayName: 'StyledStack__StyledStackLayer'
})(['position:', ';', ' ', ''], function (props) {
  return props.guiding ? 'relative' : 'absolute';
}, function (props) {
  return props.guiding && 'display: block;';
}, function (props) {
  return !props.guiding && styleMap[props.anchor || 'fill'] + ';';
});