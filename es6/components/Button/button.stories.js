var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Add } from 'grommet-icons';

import Button from '../Button/Button';
import Grommet from '../Grommet/Grommet';
import Box from '../Box/Box';
import Text from '../Text/Text';

var SimpleButton = function SimpleButton(props) {
  return React.createElement(
    Grommet,
    null,
    React.createElement(Button, _extends({ label: 'Submit', onClick: function onClick() {} }, props))
  );
};

var IconButton = function IconButton() {
  return React.createElement(
    Grommet,
    null,
    React.createElement(Button, { icon: React.createElement(Add, null), hoverIndicator: true, onClick: function onClick() {} })
  );
};

var PlainButton = function PlainButton() {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      Button,
      { hoverIndicator: true, onClick: function onClick() {} },
      React.createElement(
        Box,
        { pad: 'small', direction: 'row', align: 'center', gap: 'small' },
        React.createElement(Add, null),
        React.createElement(
          Text,
          null,
          'Add'
        )
      )
    )
  );
};

var customTheme = {
  button: {
    border: {
      radius: undefined,
      color: '#2196f3'
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    colors: {
      primary: '#2196f3'
    },
    extend: function extend(props) {
      var extraStyles = '';
      if (props.primary) {
        extraStyles = '\n          text-transform: uppercase;\n        ';
      }
      return '\n        color: white;\n\n        span {\n          font-size: 12px;\n        }\n\n        ' + extraStyles + '\n      ';
    }
  }
};

var CustomThemeButton = function CustomThemeButton() {
  return React.createElement(
    Grommet,
    { theme: customTheme },
    React.createElement(Button, { label: 'Submit', onClick: function onClick() {}, primary: true })
  );
};

storiesOf('Button', module).add('Default', function () {
  return React.createElement(SimpleButton, null);
}).add('Primary', function () {
  return React.createElement(SimpleButton, { primary: true });
}).add('Icon', function () {
  return React.createElement(IconButton, null);
}).add('Plain', function () {
  return React.createElement(PlainButton, null);
}).add('Custom theme', function () {
  return React.createElement(CustomThemeButton, null);
});