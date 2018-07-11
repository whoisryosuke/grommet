var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { compose } from 'recompose';

import { TableCell } from '../Table';
import { Button } from '../Button';
import { Box } from '../Box';
import { withTheme } from '../hocs';

var ExpanderCell = function ExpanderCell(_ref) {
  var context = _ref.context,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      theme = _ref.theme,
      rest = _objectWithoutProperties(_ref, ['context', 'expanded', 'onToggle', 'theme']);

  var ExpandIcon = theme.dataTable.icons[expanded ? 'contract' : 'expand'];
  if (onToggle) {
    return React.createElement(
      TableCell,
      {
        size: 'xxsmall',
        plain: true,
        verticalAlign: 'top'
      },
      React.createElement(
        Button,
        {
          fill: true,
          a11yTitle: expanded ? 'collapse' : 'expand',
          hoverIndicator: true,
          onClick: onToggle
        },
        React.createElement(
          Box,
          _extends({}, theme.dataTable[context], rest, { pad: 'xsmall' }),
          React.createElement(ExpandIcon, { color: 'border' })
        )
      )
    );
  }
  return React.createElement(TableCell, { size: 'xxsmall', verticalAlign: 'top' });
};

export default compose(withTheme)(ExpanderCell);