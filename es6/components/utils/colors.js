
export var colorForName = function colorForName(name, theme) {
  var _name$split = name.split('-'),
      kind = _name$split[0],
      index = _name$split[1];

  var colorSet = theme.global.colors[kind];
  var color = void 0;
  if (Array.isArray(colorSet)) {
    color = theme.global.colors[kind][index - 1];
  } else if (typeof colorSet === 'string') {
    color = colorSet;
  } else {
    color = name;
  }
  return color;
};

export var colorIsDark = function colorIsDark(color) {
  // https://stackoverflow.com/a/42429333
  var _color$match$map = color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  }),
      red = _color$match$map[0],
      green = _color$match$map[1],
      blue = _color$match$map[2];
  // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};

export default { colorForName: colorForName, colorIsDark: colorIsDark };