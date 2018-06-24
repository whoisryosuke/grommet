function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { createRef, Component } from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';

import { debounce, isNodeAfterScroll, isNodeBeforeScroll, setFocusWithoutScroll } from '../../utils';

import { withTheme } from '../hocs';

import { Box } from '../Box';
import { Button } from '../Button';
import { InfiniteScroll } from '../InfiniteScroll';
import { Keyboard } from '../Keyboard';
import { Text } from '../Text';
import { TextInput } from '../TextInput';

var SelectContainerBox = styled(Box).withConfig({
  displayName: 'SelectContainer__SelectContainerBox'
})(['max-height:', ';scroll-behavior:\'smooth\';'], function (props) {
  return props.theme.select.drop.maxHeight;
});

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
    }, _this.optionsRef = {}, _this.searchRef = createRef(), _this.selectRef = createRef(), _this.onInput = function (event) {
      _this.setState({ search: event.target.value }, function () {
        return _this.onSearch(_this.state.search);
      });
    }, _this.onSearch = debounce(function (search) {
      return _this.props.onSearch(search);
    }, 300), _this.selectOption = function (option, index) {
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
          target: findDOMNode(_this.searchRef.current),
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
      _this.setState({ activeIndex: index }, function () {
        var buttonNode = findDOMNode(_this.optionsRef[index]);
        var selectNode = findDOMNode(_this.selectRef.current);

        if (isNodeAfterScroll(buttonNode, selectNode) && selectNode.scrollBy) {
          selectNode.scrollBy(0, buttonNode.getBoundingClientRect().height);
        }
      });
    }, _this.onPreviousOption = function (event) {
      var activeIndex = _this.state.activeIndex;

      event.preventDefault();
      var index = Math.max(activeIndex - 1, 0);
      _this.setState({ activeIndex: index }, function () {
        var buttonNode = findDOMNode(_this.optionsRef[index]);
        var selectNode = findDOMNode(_this.selectRef.current);

        if (isNodeBeforeScroll(buttonNode, selectNode) && selectNode.scrollBy) {
          selectNode.scrollBy(0, -buttonNode.getBoundingClientRect().height);
        }
      });
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
        var input = findDOMNode(_this2.searchRef.current);
        if (input && input.focus) {
          setFocusWithoutScroll(input);
        }
      } else if (_this2.selectRef) {
        setFocusWithoutScroll(findDOMNode(_this2.selectRef.current));
      }
    }, 0);
  };

  // wait 300ms of idle time before notifying that the search changed
  // 300ms seems like the right amount to wait for after the used stopped typing


  SelectContainer.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        id = _props.id,
        name = _props.name,
        onKeyDown = _props.onKeyDown,
        onSearch = _props.onSearch,
        options = _props.options,
        searchPlaceholder = _props.searchPlaceholder,
        selected = _props.selected,
        theme = _props.theme,
        value = _props.value;
    var _state = this.state,
        activeIndex = _state.activeIndex,
        search = _state.search;


    var customSearchInput = theme.select.searchInput;
    var SelectTextInput = customSearchInput || TextInput;

    return React.createElement(
      Keyboard,
      {
        onEnter: this.onSelectOption,
        onUp: this.onPreviousOption,
        onDown: this.onNextOption,
        onKeyDown: onKeyDown
      },
      React.createElement(
        Box,
        {
          id: id ? id + '__select-drop' : undefined
        },
        onSearch && React.createElement(
          Box,
          { pad: !customSearchInput ? 'xsmall' : undefined, flex: false },
          React.createElement(SelectTextInput, {
            focusIndicator: !customSearchInput,
            size: 'small',
            ref: this.searchRef,
            type: 'search',
            value: search,
            placeholder: searchPlaceholder,
            onInput: this.onInput
          })
        ),
        React.createElement(
          SelectContainerBox,
          {
            flex: true,
            role: 'menubar',
            tabIndex: '-1',
            ref: this.selectRef,
            overflow: 'auto',
            theme: theme
          },
          React.createElement(
            InfiniteScroll,
            { items: options, step: theme.select.step },
            function (option, index) {
              return React.createElement(
                Button,
                {
                  fill: true,
                  role: 'menuitem',
                  ref: function ref(_ref) {
                    _this3.optionsRef[index] = _ref;
                  },
                  active: selected === index || Array.isArray(selected) && selected.indexOf(index) !== -1 || activeIndex === index || option && option === value || option && Array.isArray(value) && value.indexOf(option) !== -1,
                  key: 'option_' + (name || '') + '_' + index,
                  onClick: function onClick() {
                    return _this3.selectOption(option, index);
                  },
                  hoverIndicator: 'background'
                },
                children ? children(option, index, options) : React.createElement(
                  Box,
                  { align: 'start', pad: 'small' },
                  React.createElement(
                    Text,
                    { margin: 'none' },
                    option !== null && option !== undefined ? option.toString() : undefined
                  )
                )
              );
            }
          )
        )
      )
    );
  };

  return SelectContainer;
}(Component);

SelectContainer.defaultProps = {
  value: ''
};


export default withTheme(SelectContainer);