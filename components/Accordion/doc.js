'use strict';

exports.__esModule = true;
exports.accordionPanel = accordionPanel;

var _reactDesc = require('react-desc');

var _utils = require('../../utils');

var _AccordionPanel = require('./AccordionPanel');

var _AccordionPanel2 = _interopRequireDefault(_AccordionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function accordionPanel(Panel) {
  var DocumentedAccordionPanel = (0, _reactDesc.describe)(Panel).description('An Accordion panel.');
  DocumentedAccordionPanel.propTypes = {
    label: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('The panel label.').isRequired,
    header: _reactDesc.PropTypes.node.description('If specified, the entire panel header will be managed by the caller.')
  };
  return DocumentedAccordionPanel;
}

exports.default = function (Accordion) {
  var DocumentedAccordion = (0, _reactDesc.describe)(Accordion).availableAt((0, _utils.getAvailableAtBadge)('Accordion')).description('An accordion containing collapsible panels.').usage('import { Accordion, AccordionPanel } from \'grommet\';\n<Accordion>\n  <AccordionPanel label=\'Panel 1\'>...</AccordionPanel>\n  <AccordionPanel label=\'Panek 2\'>...</AccordionPanel>\n</Accordion>');

  DocumentedAccordion.propTypes = {
    activeIndex: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)]).description('Active panel index. If specified, Accordion will be a controlled component. This means that future\npanel changes will not work unless you subscribe to onActive function and update activeIndex\naccordingly.').defaultValue(0),
    animate: _reactDesc.PropTypes.bool.description('Transition content in & out with a slide down animation.').defaultValue(true),
    children: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.instanceOf(_AccordionPanel2.default)).description('Array of AccordionPanels.').isRequired,
    onActive: _reactDesc.PropTypes.func.description('Function that will be called when the active index changes.\nIt will always send an array with currently active panel indexes.'),
    multiple: _reactDesc.PropTypes.bool.description('Allow multiple panels to be opened at once.').defaultValue(false),
    messages: _reactDesc.PropTypes.shape({
      tabContents: _reactDesc.PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    })
  };

  return DocumentedAccordion;
};