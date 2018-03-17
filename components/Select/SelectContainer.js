'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _utils = require('../../utils');

var _Box = require('../Box');

var _Button = require('../Button');

var _Keyboard = require('../Keyboard');

var _Text = require('../Text');

var _TextInput = require('../TextInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectContainer = function (_Component) {
  _inherits(SelectContainer, _Component);

  function SelectContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, SelectContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeIndex: -1, // for tracking keyboard interaction
      search: ''
    }, _this.optionsRef = {}, _this.onInput = function (event) {
      _this.setState({ search: event.target.value, selected: undefined }, function () {
        return _this.onSearch(_this.state.search);
      });
    }, _this.onSearch = (0, _utils.debounce)(function (search) {
      return _this.props.onSearch(search);
    }, 150), _this.selectOption = function (option, index) {
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          onChange = _this$props.onChange,
          options = _this$props.options,
          selected = _this$props.selected;


      if (onChange) {
        var nextValue = option;
        var nextSelected = index;
        if (multiple) {
          nextValue = [];
          nextSelected = [];
          var removed = false;
          (selected || []).forEach(function (selectedIndex) {
            if (selectedIndex === index) {
              removed = true;
            } else {
              nextValue.push(options[selectedIndex]);
              nextSelected.push(selectedIndex);
            }
          });
          if (!removed) {
            nextValue.push(option);
            nextSelected.push(index);
          }
        }

        onChange({
          target: (0, _reactDom.findDOMNode)(_this.inputRef),
          option: option,
          value: nextValue,
          selected: nextSelected
        });
      }
    }, _this.onNextOption = function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      event.preventDefault();
      var index = Math.min(activeIndex + 1, options.length - 1);
      _this.setState({ activeIndex: index });
    }, _this.onPreviousOption = function (event) {
      var activeIndex = _this.state.activeIndex;

      event.preventDefault();
      var index = Math.max(activeIndex - 1, 0);
      _this.setState({ activeIndex: index });
    }, _this.onSelectOption = function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      if (activeIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        _this.selectOption(options[activeIndex], activeIndex);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SelectContainer.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var onSearch = this.props.onSearch;
    // timeout need to send the operation through event loop and allow time to the portal
    // to be available

    setTimeout(function () {
      if (onSearch) {
        (0, _reactDom.findDOMNode)(_this2.searchRef).querySelector('input').focus();
      } else {
        (0, _reactDom.findDOMNode)(_this2.selectRef).focus();
      }
    }, 0);
  };

  SelectContainer.prototype.componentDidUpdate = function componentDidUpdate() {
    var activeIndex = this.state.activeIndex;

    var buttonNode = (0, _reactDom.findDOMNode)(this.optionsRef[activeIndex]);
    if (activeIndex >= 0 && buttonNode && buttonNode.scrollIntoView) {
      buttonNode.scrollIntoView();
    }
  };

  SelectContainer.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        dropBackground = _props.dropBackground,
        dropSize = _props.dropSize,
        id = _props.id,
        name = _props.name,
        onKeyDown = _props.onKeyDown,
        onSearch = _props.onSearch,
        options = _props.options,
        searchPlaceholder = _props.searchPlaceholder,
        selected = _props.selected,
        value = _props.value;
    var _state = this.state,
        activeIndex = _state.activeIndex,
        search = _state.search;


    return _react2.default.createElement(
      _Keyboard.Keyboard,
      {
        onEnter: this.onSelectOption,
        onUp: this.onPreviousOption,
        onDown: this.onNextOption,
        onKeyDown: onKeyDown
      },
      _react2.default.createElement(
        _Box.Box,
        {
          id: id ? id + '__select-drop' : undefined,
          background: dropBackground
        },
        onSearch ? _react2.default.createElement(
          _Box.Box,
          { pad: 'xsmall' },
          _react2.default.createElement(_TextInput.TextInput, {
            focusIndicator: true,
            plain: true,
            size: 'small',
            ref: function ref(_ref) {
              _this3.searchRef = _ref;
            },
            type: 'search',
            value: search,
            placeholder: searchPlaceholder,
            onInput: this.onInput
          })
        ) : undefined,
        _react2.default.createElement(
          _Box.Box,
          { basis: dropSize, overflow: 'auto' },
          _react2.default.createElement(
            _Box.Box,
            {
              flex: false,
              role: 'menubar',
              tabIndex: '-1',
              ref: function ref(_ref3) {
                _this3.selectRef = _ref3;
              }
            },
            options.map(function (option, index) {
              return _react2.default.createElement(
                _Button.Button,
                {
                  role: 'menuitem',
                  ref: function ref(_ref2) {
                    _this3.optionsRef[index] = _ref2;
                  },
                  active: selected === index || Array.isArray(selected) && selected.indexOf(index) !== -1 || activeIndex === index || option && option === value || option && Array.isArray(value) && value.indexOf(option) !== -1,
                  key: 'option_' + (name || '') + '_' + index,
                  onClick: function onClick() {
                    return _this3.selectOption(option, index);
                  },
                  hoverIndicator: 'background'
                },
                children ? children(option, index, options) : _react2.default.createElement(
                  _Box.Box,
                  { align: 'start', pad: 'small' },
                  _react2.default.createElement(
                    _Text.Text,
                    { margin: 'none' },
                    option ? option.toString() : undefined
                  )
                )
              );
            })
          )
        )
      )
    );
  };

  return SelectContainer;
}(_react.Component);

SelectContainer.defaultProps = {
  value: ''
};
exports.default = SelectContainer;