'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _FormField = require('../FormField/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _TextInput = require('../TextInput/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _TextArea = require('../TextArea/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _Select = require('../Select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _CheckBox = require('../CheckBox/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormFieldTextInput = function FormFieldTextInput(props) {
  return _react2.default.createElement(
    _Grommet2.default,
    null,
    _react2.default.createElement(
      _FormField2.default,
      _extends({ label: 'Label' }, props),
      _react2.default.createElement(_TextInput2.default, { placeholder: 'placeholder' })
    )
  );
};

var FormFieldTextArea = function FormFieldTextArea(props) {
  return _react2.default.createElement(
    _Grommet2.default,
    null,
    _react2.default.createElement(
      _FormField2.default,
      _extends({ label: 'Label' }, props),
      _react2.default.createElement(_TextArea2.default, { placeholder: 'placeholder' })
    )
  );
};

var FormFieldCheckBox = function FormFieldCheckBox(props) {
  return _react2.default.createElement(
    _Grommet2.default,
    null,
    _react2.default.createElement(
      _FormField2.default,
      _extends({ label: 'Label' }, props),
      _react2.default.createElement(
        _Box2.default,
        { pad: { horizontal: 'small', vertical: 'xsmall' } },
        _react2.default.createElement(_CheckBox2.default, { label: 'CheckBox' })
      )
    )
  );
};

var FormFieldToggle = function FormFieldToggle(props) {
  return _react2.default.createElement(
    _Grommet2.default,
    null,
    _react2.default.createElement(
      _FormField2.default,
      _extends({ label: 'Label' }, props),
      _react2.default.createElement(
        _Box2.default,
        { pad: { horizontal: 'small', vertical: 'xsmall' } },
        _react2.default.createElement(_CheckBox2.default, { label: 'CheckBox', toggle: true })
      )
    )
  );
};

var FormFieldSelect = function FormFieldSelect(props) {
  return _react2.default.createElement(
    _Grommet2.default,
    null,
    _react2.default.createElement(
      _FormField2.default,
      _extends({ label: 'Label' }, props),
      _react2.default.createElement(_Select2.default, { placeholder: 'placeholder', options: ['one', 'two'] })
    )
  );
};

(0, _react3.storiesOf)('FormField', module).add('TextInput', function () {
  return _react2.default.createElement(FormFieldTextInput, null);
}).add('TextArea', function () {
  return _react2.default.createElement(FormFieldTextArea, null);
}).add('Select', function () {
  return _react2.default.createElement(FormFieldSelect, null);
}).add('CheckBox', function () {
  return _react2.default.createElement(FormFieldCheckBox, null);
}).add('Toggle', function () {
  return _react2.default.createElement(FormFieldToggle, null);
});