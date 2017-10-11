import { describe, PropTypes } from 'react-desc';

export default (function (Markdown) {
  var DocumentedMarkdown = describe(Markdown).description('Markdown formatting using Grommet components.').usage('import { Markdown } from \'grommet\';\n    <Markdown/>');

  DocumentedMarkdown.propTypes = {
    content: PropTypes.string.description('The markdown text to render.')
  };

  return DocumentedMarkdown;
});