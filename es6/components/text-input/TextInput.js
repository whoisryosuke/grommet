var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { compose } from 'recompose';

import StyledTextInput, { StyledSuggestion, StyledSuggestions } from './StyledTextInput';

import { withFocus, withTheme } from '../hocs';
import { Drop, KeyboardAccelerators } from '../utils';

import doc from './doc';

function renderLabel(suggestion) {
  if (suggestion && (typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
    return suggestion.label || suggestion.value;
  }
  return suggestion;
}

var TextInput = function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput() {
    _classCallCheck(this, TextInput);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      activeSuggestionIndex: -1,
      announceChange: false,
      dropActive: false
    };

    _this.onRemoveDrop = _this.onRemoveDrop.bind(_this);
    _this.onNextSuggestion = _this.onNextSuggestion.bind(_this);
    _this.onPreviousSuggestion = _this.onPreviousSuggestion.bind(_this);
    _this.onEnter = _this.onEnter.bind(_this);
    return _this;
  }

  TextInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var theme = this.props.theme;
    var _state = this.state,
        dropActive = _state.dropActive,
        focused = _state.focused;
    // Set up keyboard listeners appropriate to the current state.

    var activeKeyboardHandlers = {
      esc: this.onRemoveDrop,
      tab: this.onRemoveDrop,
      up: this.onPreviousSuggestion,
      down: this.onNextSuggestion,
      enter: this.onEnter
    };
    var focusedKeyboardHandlers = {
      down: this.onAddDrop
    };

    // the order here is important, need to turn off keys before turning on
    if (!focused && prevState.focused) {
      KeyboardAccelerators.stopListeningToKeyboard(this, focusedKeyboardHandlers);
    }

    if (!dropActive && prevState.dropActive) {
      document.removeEventListener('click', this.onRemoveDrop);
      KeyboardAccelerators.stopListeningToKeyboard(this, activeKeyboardHandlers);
      if (this.drop) {
        this.drop.remove();
        this.drop = undefined;
      }
    }

    if (focused && !prevState.focused) {
      KeyboardAccelerators.startListeningToKeyboard(this, focusedKeyboardHandlers);
    }

    if (dropActive && !prevState.dropActive) {
      document.addEventListener('click', this.onRemoveDrop);
      KeyboardAccelerators.startListeningToKeyboard(this, activeKeyboardHandlers);

      // If this is inside a FormField, place the drop in reference to it.
      // TODO: fix form field
      // findAncestor(this.componentRef, FORM_FIELD)
      var control = this.componentRef;
      this.drop = new Drop(findDOMNode(control), this.renderDropContent(), {
        align: { top: 'bottom', left: 'left' },
        responsive: false, // so suggestion changes don't re-align
        theme: theme
      });
    } else if (dropActive && prevState.dropActive) {
      this.drop.render(this.renderDropContent());
    }

    // TODO: handle announce changes after we have Layer component
    // if (announceChange && suggestions) {
    //   const matchResultsMessage = Intl.getMessage(
    //     intl, 'Match Results', {
    //       count: suggestions.length
    //     }
    //   );
    //   let navigationHelpMessage = '';
    //   if (suggestions.length) {
    //     navigationHelpMessage = `(${Intl.getMessage(intl, 'Navigation Help')})`;
    //   }
    //   announce(`${matchResultsMessage} ${navigationHelpMessage}`);
    //   this.setState({ announceChange: false });
    // }
  };

  TextInput.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.onRemoveDrop);
    if (this.drop) {
      this.drop.remove();
    }
  };

  TextInput.prototype.onInputChange = function onInputChange() {
    var suggestions = this.props.suggestions;


    if (suggestions && suggestions.length) {
      this.setState({
        activeSuggestionIndex: -1, announceChange: true, dropActive: true
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

  TextInput.prototype.onAddDrop = function onAddDrop(event) {
    var _props = this.props,
        suggestions = _props.suggestions,
        value = _props.value;
    // Get values of suggestions, so we can highlight selected suggestion

    if (suggestions) {
      event.preventDefault();
      var suggestionValues = suggestions.map(function (suggestion) {
        if ((typeof suggestion === 'undefined' ? 'undefined' : _typeof(suggestion)) === 'object') {
          return suggestion.value;
        }
        return suggestion;
      });
      var activeSuggestionIndex = suggestionValues.indexOf(value);
      this.setState({
        dropActive: true,
        activeSuggestionIndex: activeSuggestionIndex
      });
    }
  };

  TextInput.prototype.onRemoveDrop = function onRemoveDrop() {
    this.setState({ dropActive: false });
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

  TextInput.prototype.onEnter = function onEnter(event) {
    var _props2 = this.props,
        onSelect = _props2.onSelect,
        suggestions = _props2.suggestions;
    var activeSuggestionIndex = this.state.activeSuggestionIndex;

    this.setState({ dropActive: false });
    if (activeSuggestionIndex >= 0) {
      event.preventDefault(); // prevent submitting forms
      var suggestion = suggestions[activeSuggestionIndex];
      this.setState({ value: suggestion });
      // this.setState({ value: suggestion }, () => {
      //   const suggestionMessage = this._renderLabel(suggestion);
      //   const selectedMessage = Intl.getMessage(intl, 'Selected');
      //   announce(`${suggestionMessage} ${selectedMessage}`);
      // });
      if (onSelect) {
        onSelect({
          target: this.componentRef, suggestion: suggestion
        });
      }
    }
  };

  TextInput.prototype.onClickSuggestion = function onClickSuggestion(suggestion) {
    var onSelect = this.props.onSelect;

    this.setState({ value: suggestion, dropActive: false });
    if (onSelect) {
      onSelect({
        target: this.componentRef, suggestion: suggestion
      });
    }
  };

  TextInput.prototype.renderDropContent = function renderDropContent() {
    var _this2 = this;

    var _props3 = this.props,
        suggestions = _props3.suggestions,
        theme = _props3.theme;
    var activeSuggestionIndex = this.state.activeSuggestionIndex;

    var items = void 0;
    if (suggestions) {
      // TODO: investigate removing onClick here and use button
      items = suggestions.map(function (suggestion, index) {
        return React.createElement(
          StyledSuggestion,
          {
            key: renderLabel(suggestion),
            active: activeSuggestionIndex === index,
            onClick: function onClick() {
              return _this2.onClickSuggestion(suggestion);
            },
            theme: theme
          },
          renderLabel(suggestion)
        );
      });
    }

    return React.createElement(
      StyledSuggestions,
      { onClick: this.onRemoveDrop, theme: theme },
      items
    );
  };

  TextInput.prototype.render = function render() {
    var _this3 = this;

    var _props4 = this.props,
        defaultValue = _props4.defaultValue,
        value = _props4.value,
        rest = _objectWithoutProperties(_props4, ['defaultValue', 'value']);
    // needed so that styled components does not invoke
    // onSelect when text input is clicked


    delete rest.onSelect;
    return React.createElement(StyledTextInput, _extends({
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
      },
      onFocus: function onFocus(event) {
        var onFocus = _this3.props.onFocus;


        _this3.setState({
          focused: true,
          activeSuggestionIndex: -1
        });

        if (onFocus) {
          onFocus(event);
        }
      },
      onKeyDown: function onKeyDown(event) {
        var _props5 = _this3.props,
            onKeyDown = _props5.onKeyDown,
            suggestions = _props5.suggestions;
        var dropActive = _this3.state.dropActive;

        if (suggestions) {
          var up = 38;
          var down = 40;
          var tab = 9;
          if (event.keyCode === up || event.keyCode === down) {
            // stop the input to move the cursor when suggestions are present
            event.preventDefault();

            if (event.keyCode === down && !dropActive) {
              _this3.onAddDrop(event);
            }
          }

          if (event.keyCode === tab) {
            _this3.setState({ focused: false });
          }
        }

        if (onKeyDown) {
          onKeyDown(event);
        }
      }
    }));
  };

  return TextInput;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(TextInput);
}

export default compose(withFocus, withTheme)(TextInput);