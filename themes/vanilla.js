'use strict';

exports.__esModule = true;

var _polished = require('polished');

var accentColors = ['#00CCEB', '#FF7D28'];
var neutralColors = ['#0A64A0', '#DC2878', '#501EB4', '#49516F'];
var statusColors = {
  critical: '#FF324D',
  error: '#FF324D',
  warning: '#FFD602',
  ok: '#8CC800',
  unknown: '#a8a8a8',
  disabled: '#a8a8a8'
};
var backgroundColor = '#FFFFFF';
var brandColor = '#865CD6';
var textColor = '#333333';
var fontPath = 'https://fonts.gstatic.com/s/worksans/v2';

var baseSpacing = 24;

var borderWidth = 2;

exports.default = {
  brand: {
    centerColumnWidth: baseSpacing * 48 + 'px',
    control: {
      font: {
        weight: 600,
        size: '19px'
      }
    },
    focus: {
      border: {}
    },
    font: {
      family: "'Work Sans', Arial, sans-serif",
      face: '\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 300;\n          src:\n            local(\'Work Sans Light\'),\n            local(\'WorkSans-Light\'),\n            url("' + fontPath + '/FD_Udbezj8EHXbdsqLUplxampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 400;\n          src:\n            local(\'Work Sans\'),\n            local(\'WorkSans-Regular\'),\n            url("' + fontPath + '/ElUAY9q6T0Ayx4zWzW63VJBw1xU1rKptJj_0jans920.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 500;\n          src:\n            local(\'Work Sans Medium\'),\n            local(\'WorkSans-Medium\'),\n            url("' + fontPath + '/Nbre-U_bp6Xktt8cpgwaJBampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 600;\n          src:\n            local(\'Work Sans SemiBold\'),\n            local(\'WorkSans-SemiBold\'),\n            url("' + fontPath + '/z9rX03Xuz9ZNHTMg1_ghGRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n\n        @font-face {\n          font-family: \'Work Sans\';\n          font-style: normal;\n          font-weight: 700;\n          src:\n            local(\'Work Sans Bold\'),\n            local(\'WorkSans-Bold\'),\n            url("' + fontPath + '/4udXuXg54JlPEP5iKO5AmRampu5_7CjHW5spxoeN3Vs.woff2") format(\'woff2\');\n        }\n      ',
      size: '16px'
    },
    hover: {
      backgroundColor: (0, _polished.rgba)('#DDDDDD', 0.5),
      textColor: '#000000'
    },
    lineHeight: '24px',
    spacing: baseSpacing + 'px'
  },
  colors: {
    accent: accentColors,
    activeTextColor: '#FFFFFF',
    background: backgroundColor,
    brand: brandColor,
    hoverTextColor: '#000000',
    neutral: neutralColors,
    status: statusColors,
    text: textColor
  },
  button: {
    border: {
      width: borderWidth + 'px',
      radius: '5px'
    },
    colors: {
      accent: accentColors[0],
      critical: statusColors.critical,
      secondary: neutralColors[1]
    },
    minWidth: baseSpacing * 5 + 'px',
    maxWidth: baseSpacing * 16 + 'px',
    padding: {
      vertical: baseSpacing / 3 - borderWidth + 'px',
      horizontal: baseSpacing - borderWidth + 'px'
    }
  },
  grommet: {}
};