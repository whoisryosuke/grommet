'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _InfiniteScroll = require('../InfiniteScroll/InfiniteScroll');

var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = Array(200).fill().map(function (_, i) {
  return 'item ' + (i + 1);
});

var SimpleInfiniteScroll = function SimpleInfiniteScroll(props) {
  return _react2.default.createElement(
    _Grommet2.default,
    null,
    _react2.default.createElement(
      _Box2.default,
      null,
      _react2.default.createElement(
        _InfiniteScroll2.default,
        _extends({ items: items }, props),
        function (item) {
          return _react2.default.createElement(
            _Box2.default,
            { key: item, pad: 'medium', border: { side: 'bottom' }, align: 'center' },
            _react2.default.createElement(
              _Text2.default,
              null,
              item
            )
          );
        }
      )
    )
  );
};

(0, _react3.storiesOf)('InfiniteScroll', module).add('Simple', function () {
  return _react2.default.createElement(SimpleInfiniteScroll, null);
}).add('Show 118th item', function () {
  return _react2.default.createElement(SimpleInfiniteScroll, { show: 117 });
});