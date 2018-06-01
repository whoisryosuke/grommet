function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import { FormClose } from 'grommet-icons';

import Box from '../Box/Box';
import Button from '../Button/Button';
import Grommet from '../Grommet/Grommet';
import Select from '../Select/Select';
import Text from '../Text/Text';

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var SeasonsSelect = function (_Component) {
  _inherits(SeasonsSelect, _Component);

  function SeasonsSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, SeasonsSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selectedSeasons: []
    }, _this.onRemoveSeason = function (season) {
      var selectedSeasons = _this.state.selectedSeasons;

      var newSeasons = [].concat(selectedSeasons);
      newSeasons.splice(selectedSeasons.indexOf(season), 1);
      _this.setState({
        selectedSeasons: newSeasons
      });
    }, _this.renderSeason = function (season) {
      return React.createElement(
        Button,
        {
          key: 'season_tag_' + season,
          href: '#',
          onClick: function onClick(event) {
            event.preventDefault();
            event.stopPropagation();
            _this.onRemoveSeason(season);
          },
          onFocus: function onFocus(event) {
            return event.stopPropagation();
          }
        },
        React.createElement(
          Box,
          {
            align: 'center',
            direction: 'row',
            gap: 'xsmall',
            pad: { vertical: 'xsmall', horizontal: 'small' },
            margin: 'xsmall',
            background: 'accent-1',
            round: 'large'
          },
          React.createElement(
            Text,
            { size: 'small', color: 'white' },
            season
          ),
          React.createElement(
            Box,
            { background: 'white', round: 'full', margin: { left: 'xsmall' } },
            React.createElement(FormClose, {
              color: 'accent-1',
              size: 'small',
              style: { width: '12px', height: '12px' }
            })
          )
        )
      );
    }, _this.renderOption = function (option) {
      return React.createElement(
        Box,
        {
          pad: 'small',
          background: _this.state.selectedSeasons.indexOf(option) >= 0 ? 'active' : undefined
        },
        option
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  SeasonsSelect.prototype.render = function render() {
    var _this2 = this;

    var selectedSeasons = this.state.selectedSeasons;

    return React.createElement(
      Grommet,
      null,
      React.createElement(
        Box,
        { direction: 'row' },
        React.createElement(
          Box,
          { align: 'start', basis: 'medium', direction: 'row' },
          React.createElement(
            Select,
            {
              size: 'medium',
              placeholder: 'Select Season',
              multiple: true,
              value: selectedSeasons && selectedSeasons.length ? React.createElement(
                Box,
                { wrap: true, direction: 'row', style: { width: '208px' } },
                selectedSeasons.map(this.renderSeason)
              ) : undefined,
              options: allSeasons,
              onChange: function onChange(_ref) {
                var option = _ref.option;

                var newSelectedSeasons = [].concat(_this2.state.selectedSeasons);
                var seasonIndex = newSelectedSeasons.indexOf(option);
                if (seasonIndex >= 0) {
                  newSelectedSeasons.splice(seasonIndex, 1);
                } else {
                  newSelectedSeasons.push(option);
                }
                _this2.setState({ selectedSeasons: newSelectedSeasons.sort() });
              }
            },
            this.renderOption
          )
        )
      )
    );
  };

  return SeasonsSelect;
}(Component);

storiesOf('Select', module).add('Seasons Select', function () {
  return React.createElement(SeasonsSelect, null);
});