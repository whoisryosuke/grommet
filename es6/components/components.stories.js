var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Grommet from './Grommet/Grommet';
import Anchor from './Anchor/Anchor';
import Box from './Box/Box';
import Button from './Button/Button';
import Calendar from './Calendar/Calendar';
import Chart from './Chart/Chart';
import CheckBox from './CheckBox/CheckBox';
import Clock from './Clock/Clock';
import Diagram from './Diagram/Diagram';
import Distribution from './Distribution/Distribution';
import FormField from './FormField/FormField';
import Grid from './Grid/Grid';
import Heading from './Heading/Heading';
import Menu from './Menu/Menu';
import Meter from './Meter/Meter';
import Paragraph from './Paragraph/Paragraph';
import RadioButton from './RadioButton/RadioButton';
import RangeInput from './RangeInput/RangeInput';
import Select from './Select/Select';
import Stack from './Stack/Stack';
import Text from './Text/Text';
import TextArea from './TextArea/TextArea';
import TextInput from './TextInput/TextInput';

var Node = function Node(_ref) {
  var id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['id']);

  return React.createElement(Box, _extends({
    id: id,
    basis: 'xxsmall',
    margin: 'small',
    pad: 'medium',
    round: 'small',
    background: 'light-4'
  }, rest));
};

var connection = function connection(fromTarget, toTarget) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var color = _ref2.color,
      rest = _objectWithoutProperties(_ref2, ['color']);

  return _extends({
    fromTarget: fromTarget,
    toTarget: toTarget,
    color: color || 'accent-1',
    thickness: 'xsmall',
    round: true,
    type: 'rectilinear'
  }, rest);
};

var Components = function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    _classCallCheck(this, Components);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Components.prototype.render = function render() {
    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Box,
        { pad: 'medium', background: 'light-2' },
        React.createElement(
          Grid,
          {
            fill: true,
            rows: 'medium',
            columns: 'small',
            gap: 'small'
          },
          React.createElement(
            Box,
            null,
            React.createElement(
              Heading,
              { margin: { top: 'none' } },
              'Heading'
            ),
            React.createElement(
              Paragraph,
              null,
              'Paragraph'
            ),
            React.createElement(
              Text,
              null,
              'Text'
            ),
            React.createElement(
              Anchor,
              { href: '' },
              'Anchor'
            ),
            React.createElement(Menu, { label: 'Menu', items: ['One', 'Two'] }),
            React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
          ),
          React.createElement(
            Box,
            { gap: 'small' },
            React.createElement(Select, { label: 'Select', options: ['One', 'Two'], onChange: function onChange() {} }),
            React.createElement(CheckBox, { checked: true, label: 'CheckBox' }),
            React.createElement(RadioButton, { checked: true, label: 'RadioButton' }),
            React.createElement(TextInput, { placeholder: 'TextInput' }),
            React.createElement(TextArea, { placeholder: 'TextArea' }),
            React.createElement(RangeInput, null),
            React.createElement(
              FormField,
              { label: 'FormField' },
              React.createElement(TextInput, { placeholder: 'TextInput' })
            )
          ),
          React.createElement(
            Box,
            { gap: 'medium' },
            React.createElement(Calendar, { size: 'small' }),
            React.createElement(Clock, { type: 'digital' }),
            React.createElement(Clock, null)
          ),
          React.createElement(
            Box,
            { gap: 'medium' },
            React.createElement(Chart, {
              type: 'bar',
              round: true,
              size: 'small',
              values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
            }),
            React.createElement(Meter, {
              type: 'bar',
              round: true,
              size: 'small',
              background: 'light-3',
              values: [{ value: 30 }]
            })
          ),
          React.createElement(
            Box,
            { gap: 'small' },
            React.createElement(
              Distribution,
              {
                basis: 'small',
                values: [{ value: 50, color: 'light-3' }, { value: 30, color: 'accent-1' }, { value: 20, color: 'light-4' }, { value: 10, color: 'light-3' }, { value: 5, color: 'light-4' }]
              },
              function (value) {
                return React.createElement(
                  Box,
                  { pad: 'xsmall', background: value.color, fill: true },
                  React.createElement(
                    Text,
                    { size: 'large' },
                    value.value
                  )
                );
              }
            ),
            React.createElement(
              Stack,
              null,
              React.createElement(
                Box,
                null,
                React.createElement(
                  Box,
                  { direction: 'row' },
                  [1, 2].map(function (id) {
                    return React.createElement(Node, { key: id, id: id });
                  })
                ),
                React.createElement(
                  Box,
                  { direction: 'row' },
                  [3, 4].map(function (id) {
                    return React.createElement(Node, { key: id, id: id });
                  })
                )
              ),
              React.createElement(Diagram, {
                connections: [connection('1', '4')]
              })
            )
          )
        )
      )
    );
  };

  return Components;
}(Component);

storiesOf('Components', module).add('All', function () {
  return React.createElement(Components, null);
});