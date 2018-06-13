'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _hocs = require('../hocs');

var _StyledButton = require('./StyledButton');

var _StyledButton2 = _interopRequireDefault(_StyledButton);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnchorStyledButton = _StyledButton2.default.withComponent('a');

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    var children = props.children,
        icon = props.icon,
        label = props.label;

    if ((icon || label) && children) {
      console.warn('Button should not have children if icon or label is provided');
    }
    return _this;
  }

  Button.prototype.render = function render() {
    var _props = this.props,
        a11yTitle = _props.a11yTitle,
        forwardRef = _props.forwardRef,
        children = _props.children,
        icon = _props.icon,
        fill = _props.fill,
        focus = _props.focus,
        href = _props.href,
        label = _props.label,
        onClick = _props.onClick,
        plain = _props.plain,
        reverse = _props.reverse,
        theme = _props.theme,
        type = _props.type,
        rest = _objectWithoutProperties(_props, ['a11yTitle', 'forwardRef', 'children', 'icon', 'fill', 'focus', 'href', 'label', 'onClick', 'plain', 'reverse', 'theme', 'type']);

    var Tag = href ? AnchorStyledButton : _StyledButton2.default;

    var buttonLabel = typeof label === 'string' ? _react2.default.createElement(
      _Text2.default,
      null,
      _react2.default.createElement(
        'strong',
        null,
        label
      )
    ) : label;

    var first = reverse ? buttonLabel : icon;
    var second = reverse ? icon : buttonLabel;

    var disabled = !href && !onClick && ['reset', 'submit'].indexOf(type) === -1;

    return _react2.default.createElement(
      Tag,
      _extends({}, rest, {
        innerRef: forwardRef,
        'aria-label': a11yTitle,
        disabled: disabled,
        icon: icon,
        fillContainer: fill,
        focus: focus,
        href: href,
        label: label,
        onClick: onClick,
        plain: typeof plain !== 'undefined' ? plain : _react.Children.count(children) > 0 || icon && !label,
        theme: theme,
        type: !href ? type : undefined
      }),
      first || second ? _react2.default.createElement(
        _Box2.default,
        { direction: 'row', align: 'center', gap: 'small' },
        first,
        second
      ) : children
    );
  };

  return Button;
}(_react.Component);

Button.defaultProps = {
  type: 'button',
  focusIndicator: true
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Button);
}

exports.default = (0, _recompose.compose)(_hocs.withFocus, _hocs.withTheme, _hocs.withForwardRef)(Button);