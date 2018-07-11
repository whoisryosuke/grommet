var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button';
import { Box } from '../Box';

var SorterButton = styled(Button).withConfig({
  displayName: 'Sorter__SorterButton'
})(['flex-shrink:1;']);

var Sorter = function Sorter(_ref) {
  var align = _ref.align,
      children = _ref.children,
      onSort = _ref.onSort,
      property = _ref.property,
      sort = _ref.sort,
      theme = _ref.theme;

  var icon = void 0;
  if (sort && sort.property === property) {
    var Icon = theme.dataTable.icons[sort.ascending ? 'ascending' : 'descending'];
    icon = React.createElement(Icon, null);
  }
  var content = React.createElement(
    Box,
    _extends({
      flex: true,
      direction: 'row',
      justify: align,
      align: 'center',
      gap: 'xsmall',
      fill: 'vertical'
    }, theme.dataTable.header, {
      border: undefined,
      background: undefined
    }),
    children,
    icon
  );
  if (onSort) {
    content = React.createElement(
      SorterButton,
      {
        fill: true,
        hoverIndicator: true,
        onClick: onSort(property),
        style: { flexShrink: 1 }
      },
      content
    );
  }

  return content;
};

export default Sorter;