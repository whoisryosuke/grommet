var _templateObject = _taggedTemplateLiteral(['\n  border-color: ', ';\n  box-shadow: 0 0 1px 1px ', ';\n'], ['\n  border-color: ', ';\n  box-shadow: 0 0 1px 1px ', ';\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

export var focusStyle = css(_templateObject, function (props) {
  return props.theme.brand.focus.border.color || props.theme.colors.accent[0];
}, function (props) {
  return props.theme.brand.focus.border.color || props.theme.colors.accent[0];
});

export function parseMetricToInt(fontAsString) {
  return parseInt(fontAsString.replace(/[^0-9]/g, ''), 10);
}

export function findAllByType(component, type) {
  var matches = [];

  if (component.type === type) {
    matches.push(component);
  }

  if (component.children) {
    component.children.forEach(function (child) {
      matches = matches.concat(findAllByType(child, type));
    });
  }

  return matches;
}

export default { findAllByType: findAllByType, focusStyle: focusStyle, parseMetricToInt: parseMetricToInt };