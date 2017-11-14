'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

exports.default = function (Clock) {
  var DocumentedClock = (0, _reactDesc.describe)(Clock).availableAt((0, _utils.getAvailableAtBadge)('Clock')).description('A clock with timezone awareness.').usage('import { Clock } from \'grommet\';\n<Clock />');

  DocumentedClock.propTypes = {
    date: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.object, _reactDesc.PropTypes.string]).description('Date to be used in the Clock.'),
    night: _reactDesc.PropTypes.bool.description('Whether to force night or day mode for the Clock.'),
    seconds: _reactDesc.PropTypes.bool.description('Whether to show seconds hand in the Clock.'),
    size: _reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'huge']).description('Clock size').defaultValue('medium'),
    timezone: _reactDesc.PropTypes.string.description('IANA timezone to use in the Clock (e.g. America/Sao_Paulo).').defaultValue('America/Los_Angeles')
  };

  return DocumentedClock;
};