import { css } from 'styled-components';

export function parseMetricToInt(fontAsString) {
  return parseInt(fontAsString.replace(/[^0-9]/g, ''), 10);
}

export var focusStyle = css(['border-color:', ';box-shadow:0 0 1px 1px ', ';'], function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
}, function (props) {
  return props.theme.global.focus.border.color || props.theme.global.colors.accent[0];
});

export var inputStyle = css(['padding:', 'px;border:', ' solid ', ';border-radius:', ';outline:none;background-color:transparent;color:inherit;font:inherit;margin:0;', ''], function (props) {
  return parseMetricToInt(props.theme.global.spacing) / 2 - parseMetricToInt(props.theme.global.input.border.width);
}, function (props) {
  return props.theme.global.input.border.width;
}, function (props) {
  return props.theme.global.input.border.color;
}, function (props) {
  return props.theme.global.input.border.radius;
}, function (props) {
  return props.focus && focusStyle;
});

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

export function fontSize(size, lineHeight) {
  return css(['font-size:', ';line-height:', ';'], function (props) {
    return parseMetricToInt(size) / parseMetricToInt(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToInt(size) / parseMetricToInt(props.theme.global.lineHeight)) * (parseMetricToInt(props.theme.global.lineHeight) / parseMetricToInt(size)) + 'px';
  });
}

var lapStart = '481px';
export function lapAndUp(content) {
  return '\n    @media only screen and (min-width:' + lapStart + ') { ' + content + '; }\n  ';
}

export default {
  inputStyle: inputStyle,
  findAllByType: findAllByType,
  focusStyle: focusStyle,
  fontSize: fontSize,
  lapAndUp: lapAndUp,
  parseMetricToInt: parseMetricToInt
};