var _templateObject = _taggedTemplateLiteral(['\n    font-size: ', ';\n    line-height: ', ';\n  '], ['\n    font-size: ', ';\n    line-height: ', ';\n  ']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import { css } from 'styled-components';

import { parseMetricToInt } from './utils';

var lapStart = '481px';

export function fontSize(size, lineHeight) {
  return css(_templateObject, function (props) {
    return parseMetricToInt(size) / parseMetricToInt(props.theme.brand.font.size) * 1 + 'rem';
  }, function (props) {
    return lineHeight || Math.ceil(parseMetricToInt(size) / parseMetricToInt(props.theme.brand.lineHeight)) * (parseMetricToInt(props.theme.brand.lineHeight) / parseMetricToInt(size)) + 'px';
  });
}

export function lapAndUp(content) {
  return '\n    @media only screen and (min-width:' + lapStart + ') { ' + content + '; }\n  ';
}

export default { lapAndUp: lapAndUp };