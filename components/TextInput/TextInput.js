'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = require('recompose');

var _StyledTextInput = require('./StyledTextInput');

var _StyledTextInput2 = _interopRequireDefault(_StyledTextInput);

var _Box = require('../Box');

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

function renderLabel(suggestion) {
  if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
    return suggestion.label || suggestion.value;
  }
  return suggestion;
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeSuggestionIndex: -1,
      announceChange: false,
      showDrop: false
    }, _this.resetSuggestions = function () {
      var suggestions = _this.props.suggestions;


      if (suggestions && suggestions.length) {
        _this.setState({
          activeSuggestionIndex: -1,
          announceChange: true,
          showDrop: true,
          selectedSuggestionIndex: -1
        });
      }
    }, _this.getSelectedSuggestionIndex = function () {
      var _this$props = _this.props,
          suggestions = _this$props.suggestions,
          value = _this$props.value;

      var suggestionValues = suggestions.map(function (suggestion) {
        if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
          return suggestion.value;
        }
        return suggestion;
      });
      return suggestionValues.indexOf(value);
    }, _this.onShowSuggestions = function () {
      // Get values of suggestions, so we can highlight selected suggestion
      var selectedSuggestionIndex = _this.getSelectedSuggestionIndex();

      _this.setState({
        showDrop: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      });
    }, _this.onNextSuggestion = function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state = _this.state,
          activeSuggestionIndex = _this$state.activeSuggestionIndex,
          showDrop = _this$state.showDrop;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this.onShowSuggestions();
        } else {
          event.preventDefault();
          var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);
          _this.setState({ activeSuggestionIndex: index });
          // this.setState({ activeSuggestionIndex: index },
          //   this._announceSuggestion.bind(this, index));
        }
      }
    }, _this.onPreviousSuggestion = function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state2 = _this.state,
          activeSuggestionIndex = _this$state2.activeSuggestionIndex,
          showDrop = _this$state2.showDrop;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        var index = Math.max(activeSuggestionIndex - 1, 0);
        _this.setState({ activeSuggestionIndex: index });
        // this.setState({ activeSuggestionIndex: index },
        //   this._announceSuggestion.bind(this, index));
      }
    }, _this.onClickSuggestion = function (suggestion) {
      var onSelect = _this.props.onSelect;

      _this.setState({ value: suggestion, showDrop: false });
      if (onSelect) {
        onSelect({
          target: _this.componentRef, suggestion: suggestion
        });
      }
    }, _this.onSuggestionSelect = function (event) {
      var _this$props2 = _this.props,
          onSelect = _this$props2.onSelect,
          suggestions = _this$props2.suggestions;
      var activeSuggestionIndex = _this.state.activeSuggestionIndex;

      _this.setState({ showDrop: false });
      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        var suggestion = suggestions[activeSuggestionIndex];
        _this.setState({ value: suggestion });
        // this.setState({ value: suggestion }, () => {
        //   const suggestionMessage = this._renderLabel(suggestion);
        //   const selectedMessage = Intl.getMessage(intl, 'Selected');
        //   announce(`${suggestionMessage} ${selectedMessage}`);
        // });
        if (onSelect) {
          onSelect({
            target: _this.componentRef, suggestion: suggestion
          });
        }
      }
    }, _this.onDropClose = function () {
      _this.setState({ showDrop: false });
    }, _this.renderSuggestions = function () {
      var _this$props3 = _this.props,
          suggestions = _this$props3.suggestions,
          theme = _this$props3.theme;
      var _this$state3 = _this.state,
          activeSuggestionIndex = _this$state3.activeSuggestionIndex,
          selectedSuggestionIndex = _this$state3.selectedSuggestionIndex;

      var items = void 0;
      if (suggestions && suggestions.length > 0) {
        items = suggestions.map(function (suggestion, index) {
          return _react2.default.createElement(
            'li',
            { key: renderLabel(suggestion) },
            _react2.default.createElement(
              _Button.Button,
              {
                active: activeSuggestionIndex === index,
                fill: true,
                hoverIndicator: 'background',
                onClick: function onClick() {
                  return _this.onClickSuggestion(suggestion);
                }
              },
              _react2.default.createElement(
                _Box.Box,
                {
                  align: 'start',
                  pad: 'small',
                  background: selectedSuggestionIndex === index ? theme.global.selected.backgroundColor : undefined
                },
                renderLabel(suggestion)
              )
            )
          );
        });
      }

      return _react2.default.createElement(
        _StyledTextInput.StyledSuggestions,
        { theme: theme },
        items
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // announceSuggestion(index) {
  //   const { suggestions } = this.props;
  //   if (suggestions && suggestions.length > 0) {
  //     const labelMessage = this._renderLabel(suggestions[index]);
  //     const enterSelectMessage = Intl.getMessage(intl, 'Enter Select');
  //     announce(`${labelMessage} ${enterSelectMessage}`);
  //   }
  // }

  TextInput.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        defaultValue = _props.defaultValue,
        focus = _props.focus,
        plain = _props.plain,
        value = _props.value,
        _onInput = _props.onInput,
        onKeyDown = _props.onKeyDown,
        rest = _objectWithoutProperties(_props, ['defaultValue', 'focus', 'plain', 'value', 'onInput', 'onKeyDown']);

    delete rest.onInput; // se we can manage in onInputChange()
    var showDrop = this.state.showDrop;
    // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var drop = void 0;
    if (showDrop) {
      drop = _react2.default.createElement(
        _Drop.Drop,
        {
          align: { top: 'bottom', left: 'left' },
          responsive: false,
          control: this.componentRef,
          onClose: function onClose() {
            return _this2.setState({ showDrop: false });
          }
        },
        this.renderSuggestions()
      );
    }
    return _react2.default.createElement(
      _StyledTextInput.StyledTextInputContainer,
      { plain: plain },
      _react2.default.createElement(
        _Keyboard.Keyboard,
        {
          onEnter: this.onSuggestionSelect,
          onEsc: this.onDropClose,
          onTab: this.onDropClose,
          onUp: this.onPreviousSuggestion,
          onDown: this.onNextSuggestion,
          onKeyDown: onKeyDown
        },
        _react2.default.createElement(_StyledTextInput2.default, _extends({
          ref: function ref(_ref) {
            _this2.componentRef = _ref;
          },
          autoComplete: 'off',
          plain: plain
        }, rest, {
          focus: !plain && focus,
          defaultValue: renderLabel(defaultValue),
          value: renderLabel(value),
          onInput: function onInput(event) {
            _this2.resetSuggestions();
            if (_onInput) {
              _onInput(event);
            }
          }
        }))
      ),
      drop
    );
  };

  return TextInput;
}(_react.Component);

TextInput.contextTypes = {
  grommet: _propTypes2.default.object,
  theme: _propTypes2.default.object
};


if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(TextInput);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(TextInput);