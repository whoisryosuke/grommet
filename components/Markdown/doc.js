'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Markdown) {
  return (0, _reactDesc.schema)(Markdown, {
    description: 'Markdown formatting using Grommet components.',
    usage: 'import { Markdown } from \'grommet\';\n  <Markdown/>',
    props: {
      content: [_reactDesc.PropTypes.string, 'The markdown text to render.']
    }
  });
};