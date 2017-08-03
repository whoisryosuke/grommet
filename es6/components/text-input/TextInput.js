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
import { Button } from '../button';
import { Keyboard } from '../keyboard';

import { withFocus, withTheme } from '../hocs';
import { Drop } from '../utils';

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
    var _temp, _this, _ret;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      activeSuggestionIndex: -1,
      announceChange: false,
      dropActive: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TextInput.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this2 = this;

    var theme = this.props.theme;
    var dropActive = this.state.dropActive;


    if (!dropActive && prevState.dropActive) {
      document.removeEventListener('click', this.removeDrop);
      if (this.drop) {
        this.drop.remove();
        this.drop = undefined;
      }
    } else if (dropActive && !prevState.dropActive) {
      this.removeDrop = function (event) {
        if (!findDOMNode(_this2.componentRef).contains(event.target)) {
          // only close the drop if clicked outside it
          _this2.setState({ dropActive: false });
        }
      };
      document.addEventListener('click', this.removeDrop);

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
    if (this.drop) {
      this.drop.remove();
    }
  };

  TextInput.prototype.onInputChange = function onInputChange() {
    var suggestions = this.props.suggestions;


    if (suggestions && suggestions.length) {
      this.setState({
        activeSuggestionIndex: -1,
        announceChange: true,
        dropActive: true,
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

  TextInput.prototype.onAddDrop = function onAddDrop() {
    var suggestions = this.props.suggestions;
    // Get values of suggestions, so we can highlight selected suggestion

    if (suggestions && suggestions.length > 0) {
      var selectedSuggestionIndex = this.getSelectedSuggestionIndex();

      this.setState({
        dropActive: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      });
    }
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

    this.setState({ value: suggestion, dropActive: false });
    if (onSelect) {
      onSelect({
        target: this.componentRef, suggestion: suggestion
      });
    }
  };

  TextInput.prototype.renderDropContent = function renderDropContent() {
    var _this3 = this;

    var _props2 = this.props,
        suggestions = _props2.suggestions,
        theme = _props2.theme;
    var _state = this.state,
        activeSuggestionIndex = _state.activeSuggestionIndex,
        selectedSuggestionIndex = _state.selectedSuggestionIndex;

    var items = void 0;
    if (suggestions && suggestions.length > 0) {
      items = suggestions.map(function (suggestion, index) {
        return React.createElement(
          'li',
          { key: renderLabel(suggestion) },
          React.createElement(
            Button,
            {
              plain: true,
              fill: true,
              align: 'start',
              onClick: function onClick() {
                return _this3.onClickSuggestion(suggestion);
              },
              hoverIndicator: 'background'
            },
            React.createElement(
              StyledSuggestion,
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

    return React.createElement(
      StyledSuggestions,
      { theme: theme },
      items
    );
  };

  TextInput.prototype.render = function render() {
    var _this4 = this;

    var _props3 = this.props,
        defaultValue = _props3.defaultValue,
        value = _props3.value,
        onKeyDown = _props3.onKeyDown,
        rest = _objectWithoutProperties(_props3, ['defaultValue', 'value', 'onKeyDown']);
    // needed so that styled components does not invoke
    // onSelect when text input is clicked


    delete rest.onSelect;
    var previousSuggestionHandler = function previousSuggestionHandler(event) {
      var suggestions = _this4.props.suggestions;
      var dropActive = _this4.state.dropActive;

      if (suggestions && suggestions.length > 0 && dropActive) {
        event.preventDefault();
        _this4.onPreviousSuggestion();
      }
    };
    var nextSuggestionHandler = function nextSuggestionHandler(event) {
      var suggestions = _this4.props.suggestions;
      var dropActive = _this4.state.dropActive;

      if (suggestions && suggestions.length > 0) {
        if (!dropActive) {
          _this4.onAddDrop();
        } else {
          event.preventDefault();
          _this4.onNextSuggestion();
        }
      }
    };
    return React.createElement(
      Keyboard,
      {
        onEnter: function onEnter(event) {
          var _props4 = _this4.props,
              onSelect = _props4.onSelect,
              suggestions = _props4.suggestions;
          var activeSuggestionIndex = _this4.state.activeSuggestionIndex;

          _this4.setState({ dropActive: false });
          if (activeSuggestionIndex >= 0) {
            event.preventDefault(); // prevent submitting forms
            var suggestion = suggestions[activeSuggestionIndex];
            _this4.setState({ value: suggestion });
            // this.setState({ value: suggestion }, () => {
            //   const suggestionMessage = this._renderLabel(suggestion);
            //   const selectedMessage = Intl.getMessage(intl, 'Selected');
            //   announce(`${suggestionMessage} ${selectedMessage}`);
            // });
            if (onSelect) {
              onSelect({
                target: _this4.componentRef, suggestion: suggestion
              });
            }
          }
        },
        onEsc: function onEsc() {
          return _this4.setState({ dropActive: false });
        },
        onTab: function onTab() {
          return _this4.setState({ dropActive: false });
        },
        onUp: previousSuggestionHandler,
        onDown: nextSuggestionHandler,
        onKeyDown: onKeyDown
      },
      React.createElement(StyledTextInput, _extends({
        ref: function ref(_ref) {
          _this4.componentRef = _ref;
        },
        autoComplete: 'off'
      }, rest, {
        defaultValue: renderLabel(defaultValue),
        value: renderLabel(value),
        onInput: function onInput(event) {
          var onDOMChange = _this4.props.onDOMChange;


          _this4.onInputChange();

          if (onDOMChange) {
            onDOMChange(event);
          }
        }
      }))
    );
  };

  return TextInput;
}(Component);

if (process.env.NODE_ENV !== 'production') {
  doc(TextInput);
}

export default compose(withFocus, withTheme)(TextInput);