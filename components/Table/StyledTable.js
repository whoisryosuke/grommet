'use strict';

exports.__esModule = true;
exports.StyledTableFooter = exports.StyledTableHeader = exports.StyledTableBody = exports.StyledTableRow = exports.StyledTableDataCaption = exports.StyledTableCell = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n'], ['\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var SIZE_MAP = {
  '1/2': '50%',
  '1/4': '25%',
  '3/4': '75%',
  '1/3': '33.33%',
  '2/3': '66.66%'
};

var sizeStyle = (0, _styledComponents.css)(['width:', ';max-width:', ';overflow:hidden;'], function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
}, function (props) {
  return SIZE_MAP[props.size] || props.theme.global.size[props.size];
});

var StyledTableCell = exports.StyledTableCell = _styledComponents2.default.td.withConfig({
  displayName: 'StyledTable__StyledTableCell'
})(['margin:0;padding:0;font-weight:inherit;text-align:inherit;height:inherit;', ' ', ' ', ' ', ''], function (props) {
  return props.size && sizeStyle;
}, function (props) {
  return props.verticalAlign && 'vertical-align: ' + props.verticalAlign + ';';
}, function (props) {
  return !props.verticalAlign && props.tableContext === 'header' && 'vertical-align: bottom;';
}, function (props) {
  return !props.verticalAlign && props.tableContext === 'footer' && 'vertical-align: top;';
});

var StyledTableDataCaption = exports.StyledTableDataCaption = _styledComponents2.default.caption.withConfig({
  displayName: 'StyledTable__StyledTableDataCaption'
})(['display:none;']);

var StyledTableRow = exports.StyledTableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'StyledTable__StyledTableRow'
})(['']);

var StyledTableBody = exports.StyledTableBody = _styledComponents2.default.tbody.withConfig({
  displayName: 'StyledTable__StyledTableBody'
})(['']);

var StyledTableHeader = exports.StyledTableHeader = _styledComponents2.default.thead.withConfig({
  displayName: 'StyledTable__StyledTableHeader'
})(['']);

var StyledTableFooter = exports.StyledTableFooter = _styledComponents2.default.tfoot.withConfig({
  displayName: 'StyledTable__StyledTableFooter'
})(['']);

var StyledTable = _styledComponents2.default.table.withConfig({
  displayName: 'StyledTable'
})(['border-spacing:0;border-collapse:collapse;']);

exports.default = StyledTable.extend(_templateObject, function (props) {
  return props.theme.table && props.theme.table.extend;
});