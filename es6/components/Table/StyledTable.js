var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';

var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var sizeStyle = css(['width:', ';max-width:', ';overflow:hidden;'], function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
}, function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
});

export var StyledTableCell = styled.td.withConfig({
  displayName: 'StyledTable__StyledTableCell'
})(['margin:0;padding:0;font-weight:inherit;text-align:inherit;', ' ', ' ', ''], function (props) {
  return props.size && sizeStyle;
}, function (props) {
  return props.tableContext === 'header' && 'vertical-align: bottom;';
}, function (props) {
  return props.tableContext === 'footer' && 'vertical-align: top;';
});

export var StyledTableDataCaption = styled.caption.withConfig({
  displayName: 'StyledTable__StyledTableDataCaption'
})(['display:none;']);

export var StyledTableRow = styled.tr.withConfig({
  displayName: 'StyledTable__StyledTableRow'
})(['']);

export var StyledTableBody = styled.tbody.withConfig({
  displayName: 'StyledTable__StyledTableBody'
})(['']);

export var StyledTableHeader = styled.thead.withConfig({
  displayName: 'StyledTable__StyledTableHeader'
})(['']);

export var StyledTableFooter = styled.tfoot.withConfig({
  displayName: 'StyledTable__StyledTableFooter'
})(['']);

var StyledTable = styled.table.withConfig({
  displayName: 'StyledTable'
})(['border-spacing:0;border-collapse:collapse;']);

export default StyledTable.extend(_templateObject, function (props) {
  return props.theme.table && props.theme.table.extend;
});