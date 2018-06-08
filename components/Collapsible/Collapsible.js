'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Transition = require('react-transition-group/Transition');

var _Transition2 = _interopRequireDefault(_Transition);

var _hocs = require('../hocs');

var _Box = require('../Box');

var _CollapsibleContext = require('./CollapsibleContext');

var _CollapsibleContext2 = _interopRequireDefault(_CollapsibleContext);

var _doc = require('./doc');

var _doc2 = _interopRequireDefault(_doc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getBaseStyle = function getBaseStyle(props) {
  var _props$theme$collapsi = props.theme.collapsible,
      minSpeed = _props$theme$collapsi.minSpeed,
      baseHeight = _props$theme$collapsi.baseHeight;

  var baseAnimation = {
    transition: 'max-height ' + minSpeed + 'ms, visibility 50ms',
    visibility: 'hidden',
    overflow: 'hidden'
  };

  var baseTransitionStyles = {
    entering: { visibility: 'hidden', overflow: 'hidden' },
    entered: { visibility: 'visible', overflow: 'unset' },
    exiting: { visibility: 'hidden', overflow: 'unset' }
  };

  return {
    animation: _extends({}, baseAnimation),
    transitionStyles: _extends({}, baseTransitionStyles),
    containerHeight: undefined,
    minSpeed: minSpeed,
    baseHeight: baseHeight
  };
};

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible() {
    var _temp, _this, _ret;

    _classCallCheck(this, Collapsible);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {}, _this.reset = function () {
      var containerHeight = _this.state.containerHeight;
      // preserve original height

      _this.setState({ forceClose: true, previousHeight: containerHeight });
    }, _this.onEntering = function () {
      var _this$state = _this.state,
          previousHeight = _this$state.previousHeight,
          baseHeight = _this$state.baseHeight,
          minSpeed = _this$state.minSpeed;


      var height = (0, _reactDom.findDOMNode)(_this.animateContainerRef).clientHeight;
      var speed = Math.max(height / baseHeight * minSpeed, minSpeed);

      var baseStyle = getBaseStyle(_this.props);

      _this.setState({
        containerHeight: height,
        speed: speed,
        animation: _extends({}, baseStyle.animation, {
          transition: 'max-height ' + speed + 'ms, ' + (!previousHeight ? ', visibility 50ms' : ''),
          maxHeight: 0
        }),
        transitionStyles: _extends({}, baseStyle.transitionStyles, {
          entering: _extends({}, baseStyle.transitionStyles.entering, {
            maxHeight: previousHeight || 0
          }),
          entered: _extends({}, baseStyle.transitionStyles.entered, {
            maxHeight: height + 'px'
          }),
          exiting: _extends({}, baseStyle.transitionStyles.exiting, {
            maxHeight: 0
          })
        })
      });
    }, _this.onEnter = function () {
      _this.setState(getBaseStyle(_this.props));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Collapsible.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var _nextProps$theme$coll = nextProps.theme.collapsible,
        minSpeed = _nextProps$theme$coll.minSpeed,
        baseHeight = _nextProps$theme$coll.baseHeight;

    if (minSpeed !== prevState.minSpeed || baseHeight !== prevState.baseHeight) {
      return getBaseStyle(nextProps);
    }
    return null;
  };

  Collapsible.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.forceClose) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ forceClose: undefined });
      /* eslint-enable react/no-did-update-set-state */
    }
  };

  Collapsible.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        open = _props.open;
    var _state = this.state,
        animation = _state.animation,
        forceClose = _state.forceClose,
        previousHeight = _state.previousHeight,
        transitionStyles = _state.transitionStyles,
        speed = _state.speed;


    return _react2.default.createElement(
      _CollapsibleContext2.default.Provider,
      {
        value: {
          reset: this.reset
        }
      },
      _react2.default.createElement(
        _Transition2.default,
        {
          'in': !forceClose && open,
          appear: true,
          timeout: { enter: 0, exit: !previousHeight ? speed : 0 },
          onEnter: this.onEnter,
          onEntering: this.onEntering,
          onEntered: function onEntered() {
            return _this2.setState({ previousHeight: undefined });
          }
        },
        function (state) {
          return _react2.default.createElement(
            _Box.Box,
            {
              flex: false,
              'aria-hidden': !open,
              ref: function ref(_ref) {
                _this2.animateContainerRef = _ref;
              },
              style: _extends({}, animation, transitionStyles[state])
            },
            state !== 'exited' && children
          );
        }
      )
    );
  };

  return Collapsible;
}(_react.Component);

if (process.env.NODE_ENV !== 'production') {
  (0, _doc2.default)(Collapsible);
}

exports.default = (0, _hocs.withTheme)(Collapsible);