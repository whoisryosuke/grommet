'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleDrop = function (_Component) {
  _inherits(SimpleDrop, _Component);

  function SimpleDrop() {
    _classCallCheck(this, SimpleDrop);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SimpleDrop.prototype.componentDidMount = function componentDidMount() {
    this.forceUpdate();
  };

  SimpleDrop.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _.Grommet,
      null,
      _react2.default.createElement(
        _.Box,
        { align: 'start' },
        _react2.default.createElement(
          _.Box,
          {
            background: 'dark-4',
            pad: 'medium',
            align: 'center',
            justify: 'start',
            ref: function ref(_ref) {
              _this2.targetRef = _ref;
            }
          },
          'Target'
        ),
        _react2.default.createElement(
          _.Drop,
          {
            align: { top: 'bottom', left: 'left' },
            target: this.targetRef
          },
          _react2.default.createElement(
            _.Box,
            { pad: 'large' },
            'Drop Contents'
          )
        )
      )
    );
  };

  return SimpleDrop;
}(_react.Component);

(0, _react3.storiesOf)('Drop', module).add('Default', function () {
  return _react2.default.createElement(SimpleDrop, null);
});