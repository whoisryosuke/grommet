var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { storiesOf } from '@storybook/react';

import FormField from '../FormField/FormField';
import Grommet from '../Grommet/Grommet';
import TextInput from '../TextInput/TextInput';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import CheckBox from '../CheckBox/CheckBox';
import Box from '../Box/Box';

var FormFieldTextInput = function FormFieldTextInput(props) {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      FormField,
      _extends({ label: 'Label' }, props),
      React.createElement(TextInput, { placeholder: 'placeholder' })
    )
  );
};

var FormFieldTextArea = function FormFieldTextArea(props) {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      FormField,
      _extends({ label: 'Label' }, props),
      React.createElement(TextArea, { placeholder: 'placeholder' })
    )
  );
};

var FormFieldCheckBox = function FormFieldCheckBox(props) {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      FormField,
      _extends({ label: 'Label' }, props),
      React.createElement(
        Box,
        { pad: { horizontal: 'small', vertical: 'xsmall' } },
        React.createElement(CheckBox, { label: 'CheckBox' })
      )
    )
  );
};

var FormFieldToggle = function FormFieldToggle(props) {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      FormField,
      _extends({ label: 'Label' }, props),
      React.createElement(
        Box,
        { pad: { horizontal: 'small', vertical: 'xsmall' } },
        React.createElement(CheckBox, { label: 'CheckBox', toggle: true })
      )
    )
  );
};

var FormFieldSelect = function FormFieldSelect(props) {
  return React.createElement(
    Grommet,
    null,
    React.createElement(
      FormField,
      _extends({ label: 'Label' }, props),
      React.createElement(Select, { placeholder: 'placeholder', options: ['one', 'two'] })
    )
  );
};

storiesOf('FormField', module).add('TextInput', function () {
  return React.createElement(FormFieldTextInput, null);
}).add('TextArea', function () {
  return React.createElement(FormFieldTextArea, null);
}).add('Select', function () {
  return React.createElement(FormFieldSelect, null);
}).add('CheckBox', function () {
  return React.createElement(FormFieldCheckBox, null);
}).add('Toggle', function () {
  return React.createElement(FormFieldToggle, null);
});