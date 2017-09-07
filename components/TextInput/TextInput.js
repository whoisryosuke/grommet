'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _StyledTextInput = require('./StyledTextInput');

var _StyledTextInput2 = _interopRequireDefault(_StyledTextInput);

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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TextInput.prototype.onInputChange = function onInputChange() {
    var suggestions = this.props.suggestions;


    if (suggestions && suggestions.length) {
      this.setState({
        activeSuggestionIndex: -1,
        announceChange: true,
        showDrop: true,
        selectedSuggestionIndex: -1
      });
    }
  };

  // announceSuggestion(index) {
  //   const { suggestions } = this.props;
  //   if (suggestions && suggestions.length > 0) {
  //     const labelMessage = this._renderLabel(suggestions[index]);
  //     const enterSelectMessage = Intl.getMessage(intl, 'Enter Select');
  //     announce(`${labelMessage} ${enterSelectMessage}`);
  //   }
  // }

  TextInput.prototype.getSelectedSuggestionIndex = function getSelectedSuggestionIndex() {
    var _props = this.props,
        suggestions = _props.suggestions,
        value = _props.value;

    var suggestionValues = suggestions.map(function (suggestion) {
      if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
        return suggestion.value;
      }
      return suggestion;
    });
    return suggestionValues.indexOf(value);
  };

  TextInput.prototype.onShowSuggestions = function onShowSuggestions() {
    // Get values of suggestions, so we can highlight selected suggestion
    var selectedSuggestionIndex = this.getSelectedSuggestionIndex();

    this.setState({
      showDrop: true,
      activeSuggestionIndex: -1,
      selectedSuggestionIndex: selectedSuggestionIndex
    });
  };

  TextInput.prototype.onNextSuggestion = function onNextSuggestion() {
    var suggestions = this.props.suggestions;
    var activeSuggestionIndex = this.state.activeSuggestionIndex;

    var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);
    this.setState({ activeSuggestionIndex: index });
    // this.setState({ activeSuggestionIndex: index },
    //   this._announceSuggestion.bind(this, index));
  };

  TextInput.prototype.onPreviousSuggestion = function onPreviousSuggestion() {
    var activeSuggestionIndex = this.state.activeSuggestionIndex;

    var index = Math.max(activeSuggestionIndex - 1, 0);
    this.setState({ activeSuggestionIndex: index });
    // this.setState({ activeSuggestionIndex: index },
    //   this._announceSuggestion.bind(this, index));
  };

  TextInput.prototype.onClickSuggestion = function onClickSuggestion(suggestion) {
    var onSelect = this.props.onSelect;

    this.setState({ value: suggestion, showDrop: false });
    if (onSelect) {
      onSelect({
        target: this.componentRef, suggestion: suggestion
      });
    }
  };

  TextInput.prototype.renderSuggestions = function renderSuggestions() {
    var _this2 = this;

    var _props2 = this.props,
        suggestions = _props2.suggestions,
        theme = _props2.theme;
    var _state = this.state,
        activeSuggestionIndex = _state.activeSuggestionIndex,
        selectedSuggestionIndex = _state.selectedSuggestionIndex;

    var items = void 0;
    if (suggestions && suggestions.length > 0) {
      items = suggestions.map(function (suggestion, index) {
        return _react2.default.createElement(
          'li',
          { key: renderLabel(suggestion) },
          _react2.default.createElement(
            _Button.Button,
            {
              plain: true,
              fill: true,
              align: 'start',
              onClick: function onClick() {
                return _this2.onClickSuggestion(suggestion);
              },
              hoverIndicator: 'background'
            },
            _react2.default.createElement(
              _StyledTextInput.StyledSuggestion,
              {
                active: activeSuggestionIndex === index,
                selected: selectedSuggestionIndex === index,
                theme: theme
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
  };

  TextInput.prototype.render = function render() {
    var _this3 = this;

    var _props3 = this.props,
        defaultValue = _props3.defaultValue,
        value = _props3.value,
        onKeyDown = _props3.onKeyDown,
        rest = _objectWithoutProperties(_props3, ['defaultValue', 'value', 'onKeyDown']);

    var showDrop = this.state.showDrop;
    // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var previousSuggestionHandler = function previousSuggestionHandler(event) {
      var suggestions = _this3.props.suggestions;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        _this3.onPreviousSuggestion();
      }
    };
    var nextSuggestionHandler = function nextSuggestionHandler(event) {
      var suggestions = _this3.props.suggestions;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this3.onShowSuggestions();
        } else {
          event.preventDefault();
          _this3.onNextSuggestion();
        }
      }
    };
    var onEnterSuggestionHandler = function onEnterSuggestionHandler(event) {
      var _props4 = _this3.props,
          onSelect = _props4.onSelect,
          suggestions = _props4.suggestions;
      var activeSuggestionIndex = _this3.state.activeSuggestionIndex;

      _this3.setState({ showDrop: false });
      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms
        var suggestion = suggestions[activeSuggestionIndex];
        _this3.setState({ value: suggestion });
        // this.setState({ value: suggestion }, () => {
        //   const suggestionMessage = this._renderLabel(suggestion);
        //   const selectedMessage = Intl.getMessage(intl, 'Selected');
        //   announce(`${suggestionMessage} ${selectedMessage}`);
        // });
        if (onSelect) {
          onSelect({
            target: _this3.componentRef, suggestion: suggestion
          });
        }
      }
    };
    var drop = void 0;
    if (showDrop) {
      drop = _react2.default.createElement(
        _Drop.Drop,
        {
          align: { top: 'bottom', left: 'left' },
          responsive: false,
          theme: this.props.theme,
          control: this.componentRef,
          onClose: function onClose() {
            return _this3.setState({ showDrop: false });
          }
        },
        this.renderSuggestions()
      );
    }
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _Keyboard.Keyboard,
        {
          onEnter: onEnterSuggestionHandler,
          onEsc: function onEsc() {
            return _this3.setState({ showDrop: false });
          },
          onTab: function onTab() {
            return _this3.setState({ showDrop: false });
          },
          onUp: previousSuggestionHandler,
          onDown: nextSuggestionHandler,
          onKeyDown: onKeyDown
        },
        _react2.default.createElement(_StyledTextInput2.default, _extends({
          ref: function ref(_ref) {
            _this3.componentRef = _ref;
          },
          autoComplete: 'off'
        }, rest, {
          defaultValue: renderLabel(defaultValue),
          value: renderLabel(value),
          onInput: function onInput(event) {
            var onDOMChange = _this3.props.onDOMChange;


            _this3.onInputChange();

            if (onDOMChange) {
              onDOMChange(event);
            }
          }
        }))
      ),
      drop
    );
  };

  return TextInput;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(TextInput);
}

exports.default = (0, _recompose.compose)(_hocs.withFocus, _hocs.withTheme)(TextInput);