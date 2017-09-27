'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _recompose = require('recompose');

var _grommetIcons = require('grommet-icons');

var _Button = require('../Button');

var _Keyboard = require('../Keyboard');

var _Drop = require('../Drop');

var _hocs = require('../hocs');

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    var _temp, _this, _ret;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeItemIndex: -1,
      showDrop: false
    }, _this.buttonRefs = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Menu.prototype.onDropClose = function onDropClose() {
    this.setState({
      activeItemIndex: -1,
      showDrop: false
    });
  };

  Menu.prototype.onSelectMenuItem = function onSelectMenuItem() {
    var activeItemIndex = this.state.activeItemIndex;

    (0, _reactDom.findDOMNode)(this.buttonRefs[activeItemIndex]).click();
  };

  Menu.prototype.onNextMenuItem = function onNextMenuItem() {
    var _state = this.state,
        showDrop = _state.showDrop,
        activeItemIndex = _state.activeItemIndex;

    if (!showDrop) {
      this.setState({
        showDrop: true,
        activeItemIndex: -1
      });
    } else {
      var items = this.props.items;

      var index = Math.min(activeItemIndex + 1, items.length - 1);
      this.setState({ activeItemIndex: index });
      // this.setState({ activeSuggestionIndex: index },
      //   this._announceSuggestion.bind(this, index));
    }
  };

  Menu.prototype.onPreviousMenuItem = function onPreviousMenuItem() {
    var _state2 = this.state,
        showDrop = _state2.showDrop,
        activeItemIndex = _state2.activeItemIndex;

    if (!showDrop) {
      this.setState({
        showDrop: true,
        activeItemIndex: -1
      });
    } else {
      var items = this.props.items;

      var index = activeItemIndex === -1 ? items.length - 1 : Math.max(activeItemIndex - 1, 0);
      this.setState({ activeItemIndex: index });
      // this.setState({ activeSuggestionIndex: index },
      //   this._announceSuggestion.bind(this, index));
    }
  };

  Menu.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        background = _props.background,
        dropAlign = _props.dropAlign,
        icon = _props.icon,
        items = _props.items,
        label = _props.label,
        _props$messages = _props.messages,
        messages = _props$messages === undefined ? {} : _props$messages,
        onKeyDown = _props.onKeyDown,
        theme = _props.theme,
        rest = _objectWithoutProperties(_props, ['background', 'dropAlign', 'icon', 'items', 'label', 'messages', 'onKeyDown', 'theme']);

    var _state3 = this.state,
        activeItemIndex = _state3.activeItemIndex,
        showDrop = _state3.showDrop;


    var menuIcon = icon || _react2.default.createElement(_grommetIcons.FormDown, null);

    var controlMirror = _react2.default.createElement(_Button.Button, {
      justify: dropAlign.right ? 'end' : 'start',
      fill: true,
      a11yTitle: messages.closeMenu || 'Close Menu',
      box: true,
      reverse: true,
      icon: menuIcon,
      label: label,
      direction: 'row',
      pad: 'small',
      onClick: function onClick() {
        return _this2.onDropClose();
      }
    });

    var drop = void 0;
    if (showDrop) {
      drop = _react2.default.createElement(
        _Drop.Drop,
        {
          align: dropAlign,
          background: background,
          ref: function ref(_ref2) {
            _this2.dropRef = _ref2;
          },
          context: _extends({}, this.context),
          control: this.componentRef,
          onClose: function onClose() {
            return _this2.onDropClose();
          }
        },
        dropAlign.top === 'top' ? controlMirror : undefined,
        items.map(function (item, index) {
          return _react2.default.createElement(_Button.Button, _extends({
            ref: function ref(_ref) {
              _this2.buttonRefs[index] = _ref;
            },
            active: activeItemIndex === index,
            box: true,
            pad: 'small',
            key: 'menuItem_' + index,
            fill: true,
            align: 'start',
            hoverIndicator: 'background'
          }, item, {
            onClick: item.onClick ? function () {
              item.onClick.apply(item, arguments);
              if (item.close !== false) {
                _this2.onDropClose();
              }
            } : undefined
          }));
        }),
        dropAlign.bottom === 'bottom' ? controlMirror : undefined
      );
    }

    var clickHandler = function clickHandler(event) {
      if (activeItemIndex >= 0) {
        event.preventDefault();
        event.stopPropagation();
        _this2.onSelectMenuItem();
      }
    };

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      {
        onEnter: clickHandler,
        onSpace: clickHandler,
        onDown: function onDown(event) {
          event.preventDefault();
          _this2.onNextMenuItem();
        },
        onUp: function onUp(event) {
          event.preventDefault();
          _this2.onPreviousMenuItem();
        },
        onEsc: function onEsc() {
          return _this2.onDropClose();
        },
        onTab: function onTab() {
          return _this2.onDropClose();
        },
        onKeyDown: onKeyDown
      },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Button.Button, _extends({
          ref: function ref(_ref3) {
            _this2.componentRef = _ref3;
          },
          a11yTitle: messages.openMenu || 'Open Menu',
          align: 'start',
          box: true,
          reverse: true,
          icon: menuIcon,
          label: label,
          onClick: function onClick() {
            return _this2.setState({ activeItemIndex: -1, showDrop: !_this2.state.showDrop });
          },
          direction: 'row',
          pad: 'small'
        }, rest)),
        drop
      )
    );
  };

  return Menu;
}(_react.Component);

Menu.contextTypes = {
  grommet: _propTypes2.default.object,
  theme: _propTypes2.default.object,
  router: _propTypes2.default.any
};
Menu.defaultProps = {
  dropAlign: { top: 'top', left: 'left' }
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Menu);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Menu);