'use strict';

exports.__esModule = true;
exports.AccordionPanel = exports.Accordion = undefined;

var _Accordion = require('./Accordion');

Object.defineProperty(exports, 'Accordion', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Accordion).default;
  }
});

var _AccordionPanel = require('./AccordionPanel');

Object.defineProperty(exports, 'AccordionPanel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AccordionPanel).default;
  }
});

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Accordion2.default;