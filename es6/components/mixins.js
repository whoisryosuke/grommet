import { css } from 'styled-components';

import { focusStyle, parseMetricToInt } from './utils';

var lapStart = '481px';

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

export function fontSize(size, lineHeight) {
  return css(['font-size:', ';line-height:', ';'], function (props) {
    return parseMetricToInt(size) / parseMetricToInt(props.theme.global.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToInt(size) / parseMetricToInt(props.theme.global.lineHeight)) * (parseMetricToInt(props.theme.global.lineHeight) / parseMetricToInt(size)) + 'px';
  });
}

export function lapAndUp(content) {
  return '\n    @media only screen and (min-width:' + lapStart + ') { ' + content + '; }\n  ';
}

export default { inputStyle: inputStyle, fontSize: fontSize, lapAndUp: lapAndUp };