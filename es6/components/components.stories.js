var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import Grommet from './Grommet/Grommet';
import Accordion from './Accordion/Accordion';
import AccordionPanel from './Accordion/AccordionPanel';
import Anchor from './Anchor/Anchor';
import Box from './Box/Box';
import Button from './Button/Button';
import Calendar from './Calendar/Calendar';
import Chart from './Chart/Chart';
import CheckBox from './CheckBox/CheckBox';
import Clock from './Clock/Clock';
import DataTable from './DataTable/DataTable';
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
import RangeSelector from './RangeSelector/RangeSelector';
import Select from './Select/Select';
import Stack from './Stack/Stack';
import Tab from './Tabs/Tab';
import Tabs from './Tabs/Tabs';
import Text from './Text/Text';
import TextArea from './TextArea/TextArea';
import TextInput from './TextInput/TextInput';
import Video from './Video/Video';
import { grommet } from '../themes';
import { generate } from '../themes/base';
import { deepMerge } from '../utils';

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
    var _temp, _this, _ret;

    _classCallCheck(this, Components);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { baseSize: 24, checkBox: true, radioButton: true, rangeSelector: [1, 2] }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Components.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        baseSize = _state.baseSize,
        checkBox = _state.checkBox,
        radioButton = _state.radioButton,
        rangeSelector = _state.rangeSelector,
        tabIndex = _state.tabIndex;

    var theme = deepMerge(generate(baseSize), grommet);

    var content = [React.createElement(
      Box,
      { key: 'type', align: 'start' },
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
      React.createElement(Menu, {
        label: 'Menu',
        items: [{ label: 'One', onClick: function onClick() {} }, { label: 'Two' }]
      }),
      React.createElement(Button, { label: 'Button', onClick: function onClick() {} })
    ), React.createElement(
      Box,
      { key: 'input', gap: 'small' },
      React.createElement(Select, { placeholder: 'Select', options: ['One', 'Two'], onChange: function onChange() {} }),
      React.createElement(CheckBox, {
        checked: checkBox,
        label: 'CheckBox',
        onChange: function onChange(event) {
          return _this2.setState({ checkBox: event.target.checked });
        }
      }),
      React.createElement(CheckBox, {
        toggle: true,
        checked: checkBox,
        label: 'CheckBox toggle',
        onChange: function onChange(event) {
          return _this2.setState({ checkBox: event.target.checked });
        }
      }),
      React.createElement(RadioButton, {
        checked: radioButton,
        label: 'RadioButton',
        onChange: function onChange(event) {
          return _this2.setState({ radioButton: event.target.checked });
        }
      }),
      React.createElement(TextInput, { placeholder: 'TextInput' }),
      React.createElement(TextArea, { placeholder: 'TextArea' }),
      React.createElement(RangeInput, { value: 24, onChange: function onChange() {} }),
      React.createElement(
        Stack,
        null,
        React.createElement(
          Box,
          { direction: 'row', justify: 'between' },
          [0, 1, 2, 3].map(function (value) {
            return React.createElement(
              Box,
              { key: value, pad: 'small', border: false },
              React.createElement(
                Text,
                { style: { fontFamily: 'monospace' } },
                value
              )
            );
          })
        ),
        React.createElement(RangeSelector, {
          direction: 'horizontal',
          invert: false,
          min: 0,
          max: 3,
          size: 'full',
          round: 'small',
          values: rangeSelector,
          onChange: function onChange(values) {
            return _this2.setState({ rangeSelector: values });
          }
        })
      ),
      React.createElement(
        FormField,
        { label: 'FormField' },
        React.createElement(TextInput, { placeholder: 'TextInput' })
      )
    ), React.createElement(
      Box,
      { key: 'time', gap: 'medium' },
      React.createElement(Calendar, { size: 'small' }),
      React.createElement(Clock, { type: 'digital' }),
      React.createElement(Clock, null)
    ), React.createElement(
      Box,
      { key: 'measure', gap: 'medium' },
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
    ), React.createElement(
      Box,
      { key: 'visualize', gap: 'small' },
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
    ), React.createElement(
      Box,
      { key: 'dataTable', alignSelf: 'start' },
      React.createElement(DataTable, {
        columns: [{ property: 'name', header: 'Name' }, { property: 'color', header: 'Color' }],
        data: [{ name: 'Alan', color: 'blue' }, { name: 'Chris', color: 'purple' }, { name: 'Eric', color: 'orange' }],
        sortable: true
      })
    ), React.createElement(
      Box,
      { key: 'accordion' },
      React.createElement(
        Accordion,
        null,
        React.createElement(
          AccordionPanel,
          { label: 'Accordion Panel 1' },
          React.createElement(
            Box,
            { pad: 'small' },
            React.createElement(
              Text,
              null,
              'Accordion panel 1 content'
            )
          )
        ),
        React.createElement(
          AccordionPanel,
          { label: 'Accordion Panel 2' },
          React.createElement(
            Box,
            { pad: 'small' },
            React.createElement(
              Text,
              null,
              'Accordion panel 2 content'
            )
          )
        )
      )
    ), React.createElement(
      Box,
      { key: 'tabs' },
      React.createElement(
        Tabs,
        {
          activeIndex: tabIndex,
          onActive: function onActive(index) {
            return _this2.setState({ tabIndex: index });
          }
        },
        React.createElement(
          Tab,
          { title: 'Tab 1' },
          React.createElement(
            Box,
            { pad: 'small' },
            React.createElement(
              Text,
              null,
              'Tab 1 content'
            )
          )
        ),
        React.createElement(
          Tab,
          { title: 'Tab 2' },
          React.createElement(
            Box,
            { pad: 'small' },
            React.createElement(
              Text,
              null,
              'Tab 2 content'
            )
          )
        )
      )
    ), React.createElement(
      Box,
      { key: 'video', alignSelf: 'start' },
      React.createElement(
        Video,
        null,
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.webm', type: 'video/webm' }),
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.ogv', type: 'video/ogg' }),
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.mp4', type: 'video/mp4' }),
        React.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.3gp', type: 'video/3gp' })
      )
    )];

    return React.createElement(
      React.Fragment,
      null,
      React.createElement(
        Grommet,
        { theme: grommet },
        React.createElement(
          Box,
          {
            direction: 'row-responsive',
            gap: 'medium',
            justify: 'end',
            align: 'center',
            margin: 'small'
          },
          React.createElement(
            Box,
            { basis: 'small' },
            React.createElement(RangeInput, {
              min: 16,
              max: 36,
              step: 2,
              value: baseSize,
              onChange: function onChange(event) {
                return _this2.setState({ baseSize: parseInt(event.target.value, 10) });
              }
            })
          ),
          React.createElement(
            Text,
            null,
            baseSize,
            'px base spacing'
          )
        )
      ),
      React.createElement(
        Grommet,
        { theme: theme },
        React.createElement(
          Box,
          { pad: 'medium', background: 'white' },
          Grid.available ? React.createElement(
            Grid,
            { fill: true, columns: 'small', gap: 'medium' },
            content
          ) : React.createElement(
            Box,
            { direction: 'row', wrap: true, align: 'start', gap: 'large' },
            content
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