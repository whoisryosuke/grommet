'use strict';

exports.__esModule = true;

var _reactDesc = require('react-desc');

exports.default = function (Markdown) {
  var DocumentedMarkdown = (0, _reactDesc.describe)(Markdown).description('Markdown formatting using Grommet components.').usage('import { Markdown } from \'grommet\';\n    <Markdown/>');

  DocumentedMarkdown.propTypes = {
    content: _reactDesc.PropTypes.string.description('The markdown text to render.')
  };

  return DocumentedMarkdown;
};