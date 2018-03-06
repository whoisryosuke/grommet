'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _recompose = require('recompose');

var _Previous = require('grommet-icons/icons/Previous');

var _Previous2 = _interopRequireDefault(_Previous);

var _Next = require('grommet-icons/icons/Next');

var _Next2 = _interopRequireDefault(_Next);

var _Subtract = require('grommet-icons/icons/Subtract');

var _Subtract2 = _interopRequireDefault(_Subtract);

var _Box = require('../Box');

var _Button = require('../Button');

var _Keyboard = require('../Keyboard');

var _Stack = require('../Stack');

var _hocs = require('../hocs');

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _temp, _this, _ret;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { activeIndex: 0 }, _this.play = function () {
      clearInterval(_this.timer);
      _this.timer = setInterval(function () {
        var children = _this.props.children;
        var activeIndex = _this.state.activeIndex;

        var lastIndex = _react.Children.count(children) - 1;
        if (activeIndex < lastIndex) {
          _this.setState({ activeIndex: activeIndex + 1, priorActiveIndex: activeIndex });
        } else {
          _this.setState({ activeIndex: 0, priorActiveIndex: activeIndex });
        }
      }, _this.props.play);
    }, _this.onRight = function () {
      var activeIndex = _this.state.activeIndex;

      clearInterval(_this.timer);
      _this.setState({ activeIndex: activeIndex + 1, priorActiveIndex: activeIndex });
    }, _this.onLeft = function () {
      var activeIndex = _this.state.activeIndex;

      clearInterval(_this.timer);
      _this.setState({ activeIndex: activeIndex - 1, priorActiveIndex: activeIndex });
    }, _this.onSelect = function (index) {
      return function () {
        var activeIndex = _this.state.activeIndex;

        clearInterval(_this.timer);
        _this.setState({ activeIndex: index, priorActiveIndex: activeIndex });
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Carousel.prototype.componentDidMount = function componentDidMount() {
    if (this.props.play) {
      this.play();
    }
  };

  Carousel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.play && !nextProps.play) {
      clearInterval(this.timer);
    } else if (nextProps.play && !this.props.play) {
      this.play();
    }
  };

  Carousel.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.timer);
  };

  Carousel.prototype.render = function render() {
    var _this2 = this;

    var children = this.props.children;
    var _state = this.state,
        activeIndex = _state.activeIndex,
        priorActiveIndex = _state.priorActiveIndex;


    var lastIndex = _react.Children.count(children) - 1;
    var onLeft = activeIndex > 0 ? this.onLeft : undefined;
    var onRight = activeIndex < lastIndex ? this.onRight : undefined;

    var selectors = [];
    var wrappedChildren = _react.Children.map(children, function (child, index) {
      selectors.push(_react2.default.createElement(_Button.Button, {
        key: index,
        icon: _react2.default.createElement(_Subtract2.default, { color: activeIndex === index ? 'brand' : undefined }),
        onClick: _this2.onSelect(index)
      }));

      var animation = void 0;
      if (index === activeIndex) {
        if (priorActiveIndex !== undefined) {
          animation = {
            type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
            size: 'xlarge'
          };
        }
      } else if (index === priorActiveIndex) {
        animation = { type: 'fadeOut' };
      } else {
        animation = { type: 'fadeOut', duration: 0 };
      }

      return _react2.default.createElement(
        _Box.Box,
        { overflow: 'hidden' },
        _react2.default.createElement(
          _Box.Box,
          { animation: animation },
          child
        )
      );
    });

    return _react2.default.createElement(
      _Keyboard.Keyboard,
      { onLeft: onLeft, onRight: onRight },
      _react2.default.createElement(
        _Stack.Stack,
        { guidingChild: activeIndex, tabIndex: '0' },
        wrappedChildren,
        _react2.default.createElement(
          _Box.Box,
          { fill: true, direction: 'row', justify: 'between' },
          _react2.default.createElement(
            _Box.Box,
            { fill: 'vertical' },
            _react2.default.createElement(
              _Button.Button,
              { fill: 'true', onClick: onLeft, hoverIndicator: true },
              _react2.default.createElement(
                _Box.Box,
                { justify: 'center' },
                _react2.default.createElement(_Previous2.default, null)
              )
            )
          ),
          _react2.default.createElement(
            _Box.Box,
            { justify: 'end' },
            _react2.default.createElement(
              _Box.Box,
              { direction: 'row', justify: 'center' },
              selectors
            )
          ),
          _react2.default.createElement(
            _Box.Box,
            { fill: 'vertical' },
            _react2.default.createElement(
              _Button.Button,
              { fill: 'true', onClick: onRight, hoverIndicator: true },
              _react2.default.createElement(
                _Box.Box,
                { justify: 'center' },
                _react2.default.createElement(_Next2.default, null)
              )
            )
          )
        )
      )
    );
  };

  return Carousel;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Carousel);
}

exports.default = (0, _recompose.compose)(_hocs.withTheme)(Carousel);