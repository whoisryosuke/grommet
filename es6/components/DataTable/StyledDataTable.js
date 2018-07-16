import styled from 'styled-components';

export var StyledDataTable = styled.table.withConfig({
  displayName: 'StyledDataTable'
})(['border-spacing:0;border-collapse:collapse;height:100%;']);

export var StyledDataTableRow = styled.tr.withConfig({
  displayName: 'StyledDataTable__StyledDataTableRow'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ';
});

export var StyledDataTableBody = styled.tbody.withConfig({
  displayName: 'StyledDataTable__StyledDataTableBody'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: block;\n    width: 100%;\n    max-height: ' + props.theme.global.size[props.size] + ';\n    overflow: auto;\n  ';
});

export var StyledDataTableHeader = styled.thead.withConfig({
  displayName: 'StyledDataTable__StyledDataTableHeader'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ';
});

export var StyledDataTableFooter = styled.tfoot.withConfig({
  displayName: 'StyledDataTable__StyledDataTableFooter'
})(['height:100%;', ''], function (props) {
  return props.size && '\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n  ';
});

export default {};