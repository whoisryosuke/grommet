'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _grommetIcons = require('grommet-icons');

var _Box = require('../Box/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Grommet = require('../Grommet/Grommet');

var _Grommet2 = _interopRequireDefault(_Grommet);

var _Select = require('../Select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Text = require('../Text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_OPTIONS = ['one', 'two', 'three'];

var SearchSelect = function (_Component) {
  _inherits(SearchSelect, _Component);

  function SearchSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, SearchSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { options: DEFAULT_OPTIONS }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SearchSelect.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state,
        options = _state.options,
        value = _state.value;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(_Select2.default, {
        size: 'medium',
        placeholder: 'Select',
        value: value,
        options: options,
        onChange: function onChange(_ref) {
          var option = _ref.option;
          return _this2.setState({ value: option });
        },
        onSearch: function onSearch(text) {
          var exp = new RegExp(text, 'i');
          _this2.setState({ options: DEFAULT_OPTIONS.filter(function (o) {
              return exp.test(o);
            }) });
        }
      })
    );
  };

  return SearchSelect;
}(_react.Component);

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var SeasonsSelect = function (_Component2) {
  _inherits(SeasonsSelect, _Component2);

  function SeasonsSelect() {
    var _temp2, _this3, _ret2;

    _classCallCheck(this, SeasonsSelect);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this3), _this3.state = {
      selectedSeasons: []
    }, _this3.onRemoveSeason = function (season) {
      var selectedSeasons = _this3.state.selectedSeasons;

      var newSeasons = [].concat(selectedSeasons);
      newSeasons.splice(selectedSeasons.indexOf(season), 1);
      _this3.setState({
        selectedSeasons: newSeasons
      });
    }, _this3.renderSeason = function (season) {
      return _react2.default.createElement(
        _Button2.default,
        {
          key: 'season_tag_' + season,
          href: '#',
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();
            _this3.onRemoveSeason(season);
          },
          onFocus: function onFocus(event) {
            return event.stopPropagation();
          }
        },
        _react2.default.createElement(
          _Box2.default,
          {
            align: 'center',
            direction: 'row',
            gap: 'xsmall',
            pad: { vertical: 'xsmall', horizontal: 'small' },
            margin: 'xsmall',
            background: 'accent-1',
            round: 'large'
          },
          _react2.default.createElement(
            _Text2.default,
            { size: 'small', color: 'white' },
            season
          ),
          _react2.default.createElement(
            _Box2.default,
            { background: 'white', round: 'full', margin: { left: 'xsmall' } },
            _react2.default.createElement(_grommetIcons.FormClose, {
              color: 'accent-1',
              size: 'small',
              style: { width: '12px', height: '12px' }
            })
          )
        )
      );
    }, _this3.renderOption = function (option) {
      return _react2.default.createElement(
        _Box2.default,
        {
          pad: 'small',
          background: _this3.state.selectedSeasons.indexOf(option) >= 0 ? 'active' : undefined
        },
        option
      );
    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
  }

  SeasonsSelect.prototype.render = function render() {
    var _this4 = this;

    var selectedSeasons = this.state.selectedSeasons;

    return _react2.default.createElement(
      _Grommet2.default,
      null,
      _react2.default.createElement(
        _Box2.default,
        { direction: 'row' },
        _react2.default.createElement(
          _Box2.default,
          { align: 'start', basis: 'medium', direction: 'row' },
          _react2.default.createElement(
            _Select2.default,
            {
              size: 'medium',
              placeholder: 'Select Season',
              multiple: true,
              value: selectedSeasons && selectedSeasons.length ? _react2.default.createElement(
                _Box2.default,
                { wrap: true, direction: 'row', style: { width: '208px' } },
                selectedSeasons.map(this.renderSeason)
              ) : undefined,
              options: allSeasons,
              onChange: function onChange(_ref2) {
                var option = _ref2.option;

                var newSelectedSeasons = [].concat(_this4.state.selectedSeasons);
                var seasonIndex = newSelectedSeasons.indexOf(option);
                if (seasonIndex >= 0) {
                  newSelectedSeasons.splice(seasonIndex, 1);
                } else {
                  newSelectedSeasons.push(option);
                }
                _this4.setState({ selectedSeasons: newSelectedSeasons.sort() });
              }
            },
            this.renderOption
          )
        )
      )
    );
  };

  return SeasonsSelect;
}(_react.Component);

(0, _react3.storiesOf)('Select', module).add('Search Select', function () {
  return _react2.default.createElement(SearchSelect, null);
}).add('Seasons Select', function () {
  return _react2.default.createElement(SeasonsSelect, null);
});