'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Grommet = require('./Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Accordion = require('./Accordion/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _AccordionPanel = require('./Accordion/AccordionPanel');

var _AccordionPanel2 = _interopRequireDefault(_AccordionPanel);

var _Anchor = require('./Anchor/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Box = require('./Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('./Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Calendar = require('./Calendar/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _Chart = require('./Chart/Chart');

var _Chart2 = _interopRequireDefault(_Chart);

var _CheckBox = require('./CheckBox/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Clock = require('./Clock/Clock');

var _Clock2 = _interopRequireDefault(_Clock);

var _DataTable = require('./DataTable/DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Diagram = require('./Diagram/Diagram');

var _Diagram2 = _interopRequireDefault(_Diagram);

var _Distribution = require('./Distribution/Distribution');

var _Distribution2 = _interopRequireDefault(_Distribution);

var _FormField = require('./FormField/FormField');

var _FormField2 = _interopRequireDefault(_FormField);

var _Grid = require('./Grid/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Heading = require('./Heading/Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Menu = require('./Menu/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Meter = require('./Meter/Meter');

var _Meter2 = _interopRequireDefault(_Meter);

var _Paragraph = require('./Paragraph/Paragraph');

var _Paragraph2 = _interopRequireDefault(_Paragraph);

var _RadioButton = require('./RadioButton/RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

var _RangeInput = require('./RangeInput/RangeInput');

var _RangeInput2 = _interopRequireDefault(_RangeInput);

var _RangeSelector = require('./RangeSelector/RangeSelector');

var _RangeSelector2 = _interopRequireDefault(_RangeSelector);

var _Select = require('./Select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Stack = require('./Stack/Stack');

var _Stack2 = _interopRequireDefault(_Stack);

var _Tab = require('./Tabs/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Tabs = require('./Tabs/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Text = require('./Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _TextArea = require('./TextArea/TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _TextInput = require('./TextInput/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Video = require('./Video/Video');

var _Video2 = _interopRequireDefault(_Video);

var _themes = require('../themes');

var _base = require('../themes/base');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Node = function Node(_ref) {
  var id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['id']);

  return _react2.default.createElement(_Box2.default, _extends({
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

var themes = {
  dark: _themes.dark,
  grommet: _themes.grommet,
  hpe: _themes.hpe
};

var Components = function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    var _temp, _this, _ret;

    _classCallCheck(this, Components);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      baseSize: 24,
      checkBox: true,
      radioButton: true,
      rangeSelector: [1, 2],
      themeName: 'grommet'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Components.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        baseSize = _state.baseSize,
        checkBox = _state.checkBox,
        radioButton = _state.radioButton,
        rangeSelector = _state.rangeSelector,
        tabIndex = _state.tabIndex,
        themeName = _state.themeName;

    var theme = (0, _utils.deepMerge)((0, _base.generate)(baseSize), themes[themeName]);

    var content = [_react2.default.createElement(
      _Box2.default,
      { key: 'type', align: 'start' },
      _react2.default.createElement(
        _Heading2.default,
        { margin: { top: 'none' } },
        'Heading'
      ),
      _react2.default.createElement(
        _Paragraph2.default,
        null,
        'Paragraph'
      ),
      _react2.default.createElement(
        _Text2.default,
        null,
        'Text'
      ),
      _react2.default.createElement(
        _Anchor2.default,
        { href: '' },
        'Anchor'
      ),
      _react2.default.createElement(_Menu2.default, {
        label: 'Menu',
        items: [{ label: 'One', onClick: function onClick() {} }, { label: 'Two' }]
      }),
      _react2.default.createElement(_Button2.default, { label: 'Button', onClick: function onClick() {} })
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'input', gap: 'small' },
      _react2.default.createElement(_Select2.default, { placeholder: 'Select', options: ['One', 'Two'], onChange: function onChange() {} }),
      _react2.default.createElement(_CheckBox2.default, {
        checked: checkBox,
        label: 'CheckBox',
        onChange: function onChange(event) {
          return _this2.setState({ checkBox: event.target.checked });
        }
      }),
      _react2.default.createElement(_CheckBox2.default, {
        toggle: true,
        checked: checkBox,
        label: 'CheckBox toggle',
        onChange: function onChange(event) {
          return _this2.setState({ checkBox: event.target.checked });
        }
      }),
      _react2.default.createElement(_RadioButton2.default, {
        checked: radioButton,
        label: 'RadioButton',
        onChange: function onChange(event) {
          return _this2.setState({ radioButton: event.target.checked });
        }
      }),
      _react2.default.createElement(_TextInput2.default, { placeholder: 'TextInput' }),
      _react2.default.createElement(_TextArea2.default, { placeholder: 'TextArea' }),
      _react2.default.createElement(_RangeInput2.default, { value: 24, onChange: function onChange() {} }),
      _react2.default.createElement(
        _Stack2.default,
        null,
        _react2.default.createElement(
          _Box2.default,
          { direction: 'row', justify: 'between' },
          [0, 1, 2, 3].map(function (value) {
            return _react2.default.createElement(
              _Box2.default,
              { key: value, pad: 'small', border: false },
              _react2.default.createElement(
                _Text2.default,
                { style: { fontFamily: 'monospace' } },
                value
              )
            );
          })
        ),
        _react2.default.createElement(_RangeSelector2.default, {
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
      _react2.default.createElement(
        _FormField2.default,
        { label: 'FormField' },
        _react2.default.createElement(_TextInput2.default, { placeholder: 'TextInput' })
      )
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'time', gap: 'medium' },
      _react2.default.createElement(_Calendar2.default, { size: 'small' }),
      _react2.default.createElement(_Clock2.default, { type: 'digital' }),
      _react2.default.createElement(_Clock2.default, null)
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'measure', gap: 'medium' },
      _react2.default.createElement(_Chart2.default, {
        type: 'bar',
        round: true,
        size: 'small',
        values: [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }]
      }),
      _react2.default.createElement(_Meter2.default, {
        type: 'bar',
        round: true,
        size: 'small',
        background: 'light-3',
        values: [{ value: 30 }]
      })
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'visualize', gap: 'small' },
      _react2.default.createElement(
        _Distribution2.default,
        {
          basis: 'small',
          values: [{ value: 50, color: 'light-3' }, { value: 30, color: 'accent-1' }, { value: 20, color: 'light-4' }, { value: 10, color: 'light-3' }, { value: 5, color: 'light-4' }]
        },
        function (value) {
          return _react2.default.createElement(
            _Box2.default,
            { pad: 'xsmall', background: value.color, fill: true },
            _react2.default.createElement(
              _Text2.default,
              { size: 'large' },
              value.value
            )
          );
        }
      ),
      _react2.default.createElement(
        _Stack2.default,
        null,
        _react2.default.createElement(
          _Box2.default,
          null,
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row' },
            [1, 2].map(function (id) {
              return _react2.default.createElement(Node, { key: id, id: id });
            })
          ),
          _react2.default.createElement(
            _Box2.default,
            { direction: 'row' },
            [3, 4].map(function (id) {
              return _react2.default.createElement(Node, { key: id, id: id });
            })
          )
        ),
        _react2.default.createElement(_Diagram2.default, {
          connections: [connection('1', '4')]
        })
      )
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'dataTable', alignSelf: 'start' },
      _react2.default.createElement(_DataTable2.default, {
        columns: [{ property: 'name', header: 'Name' }, { property: 'color', header: 'Color' }],
        data: [{ name: 'Alan', color: 'blue' }, { name: 'Chris', color: 'purple' }, { name: 'Eric', color: 'orange' }],
        sortable: true
      })
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'accordion' },
      _react2.default.createElement(
        _Accordion2.default,
        null,
        _react2.default.createElement(
          _AccordionPanel2.default,
          { label: 'Accordion Panel 1' },
          _react2.default.createElement(
            _Box2.default,
            { pad: 'small' },
            _react2.default.createElement(
              _Text2.default,
              null,
              'Accordion panel 1 content'
            )
          )
        ),
        _react2.default.createElement(
          _AccordionPanel2.default,
          { label: 'Accordion Panel 2' },
          _react2.default.createElement(
            _Box2.default,
            { pad: 'small' },
            _react2.default.createElement(
              _Text2.default,
              null,
              'Accordion panel 2 content'
            )
          )
        )
      )
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'tabs' },
      _react2.default.createElement(
        _Tabs2.default,
        {
          activeIndex: tabIndex,
          onActive: function onActive(index) {
            return _this2.setState({ tabIndex: index });
          }
        },
        _react2.default.createElement(
          _Tab2.default,
          { title: 'Tab 1' },
          _react2.default.createElement(
            _Box2.default,
            { pad: 'small' },
            _react2.default.createElement(
              _Text2.default,
              null,
              'Tab 1 content'
            )
          )
        ),
        _react2.default.createElement(
          _Tab2.default,
          { title: 'Tab 2' },
          _react2.default.createElement(
            _Box2.default,
            { pad: 'small' },
            _react2.default.createElement(
              _Text2.default,
              null,
              'Tab 2 content'
            )
          )
        )
      )
    ), _react2.default.createElement(
      _Box2.default,
      { key: 'video', alignSelf: 'start' },
      _react2.default.createElement(
        _Video2.default,
        null,
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.webm', type: 'video/webm' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.ogv', type: 'video/ogg' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.mp4', type: 'video/mp4' }),
        _react2.default.createElement('source', { src: 'http://techslides.com/demos/sample-videos/small.3gp', type: 'video/3gp' })
      )
    )];

    return _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        _Grommet2.default,
        { theme: _themes.grommet },
        _react2.default.createElement(
          _Box2.default,
          {
            direction: 'row-responsive',
            gap: 'medium',
            justify: 'end',
            align: 'center',
            margin: 'small'
          },
          _react2.default.createElement(
            _Box2.default,
            { basis: 'small' },
            _react2.default.createElement(_Select2.default, {
              plain: true,
              size: 'small',
              options: ['grommet', 'dark', 'hpe'],
              value: themeName,
              onChange: function onChange(event) {
                return _this2.setState({ themeName: event.option });
              }
            })
          ),
          _react2.default.createElement(
            _Box2.default,
            { basis: 'small' },
            _react2.default.createElement(_RangeInput2.default, {
              min: 16,
              max: 36,
              step: 2,
              value: baseSize,
              onChange: function onChange(event) {
                return _this2.setState({ baseSize: parseInt(event.target.value, 10) });
              }
            })
          ),
          _react2.default.createElement(
            _Text2.default,
            { size: 'small' },
            baseSize,
            'px base spacing'
          )
        )
      ),
      _react2.default.createElement(
        _Grommet2.default,
        { theme: theme },
        _react2.default.createElement(
          _Box2.default,
          {
            pad: 'medium',
            background: theme.global.colors.background || theme.global.colors.white
          },
          _Grid2.default.available ? _react2.default.createElement(
            _Grid2.default,
            { fill: true, columns: 'small', gap: 'medium' },
            content
          ) : _react2.default.createElement(
            _Box2.default,
            { direction: 'row', wrap: true, align: 'start', gap: 'large' },
            content
          )
        )
      )
    );
  };

  return Components;
}(_react.Component);

(0, _react3.storiesOf)('Components', module).add('All', function () {
  return _react2.default.createElement(Components, null);
});