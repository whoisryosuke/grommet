'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Grommet) {
  return (0, _reactDesc.schema)(Grommet, {
    description: 'This is the primary Grommet container outer.',
    usage: 'import { Grommet } from \'grommet\';\n  <Grommet centered={true}>...</Grommet>',
    props: {
      centered: [_reactDesc.PropTypes.bool, 'Whether to centralize or not the content inside the container.', {
        defaultProp: true
      }],
      inline: [_reactDesc.PropTypes.bool, 'Whether to render the app relative to the container (inline) or to the browser window.'],
      theme: [_reactDesc.PropTypes.object, 'Custom styles for Grommet app component.']
    }
  });
};