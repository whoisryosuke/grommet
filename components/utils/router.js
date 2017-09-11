'use strict';

exports.__esModule = true;
exports.ROUTER_PROPS = undefined;

var _reactDesc = require('react-desc');

var ROUTER_PROPS = exports.ROUTER_PROPS = {
  path: [_reactDesc.PropTypes.string, 'Indicates the path to be used for react-router link.', {
    required: true
  }],
  method: [_reactDesc.PropTypes.oneOf(['push', 'replace']), 'Indicates whether the browser history should be appended to or replaced.', {
    defaultProp: 'push'
  }]
};

exports.default = { ROUTER_PROPS: ROUTER_PROPS };