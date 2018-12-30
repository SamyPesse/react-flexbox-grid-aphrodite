'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Row;

var _react = require('react');

var _aphroditeToJss = require('aphrodite-to-jss');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = require('./create-props');

var _createProps2 = _interopRequireDefault(_createProps);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  reverse: _propTypes2.default.bool,
  start: _propTypes2.default.string,
  center: _propTypes2.default.string,
  end: _propTypes2.default.string,
  top: _propTypes2.default.string,
  middle: _propTypes2.default.string,
  bottom: _propTypes2.default.string,
  around: _propTypes2.default.string,
  between: _propTypes2.default.string,
  first: _propTypes2.default.string,
  last: _propTypes2.default.string,
  className: _propTypes2.default.string,
  // aphrodite-to-jss SheetDefinitions
  styles: _propTypes2.default.any,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};
/* eslint-enable */

function getClassNames(props) {
  var modificators = [_style2.default.row];

  // eslint-disable-next-line no-plusplus

  var _loop = function _loop(i) {
    var key = modificatorKeys[i];
    var value = props[key];
    if (value) {
      value.split(',').forEach(function (m) {
        modificators.push(_style2.default[key + '-' + m]);
      });
    }
  };

  for (var i = 0; i < modificatorKeys.length; ++i) {
    _loop(i);
  }

  if (props.reverse) {
    modificators.push(_style2.default.reverse);
  }

  var classes = modificators.filter(function (o) {
    return o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object';
  }).concat([props.styles]);

  return !props.className ? _aphroditeToJss.css.apply(undefined, _toConsumableArray(classes)) : props.className + ' ' + _aphroditeToJss.css.apply(undefined, _toConsumableArray(classes));
}

function Row(props) {
  return (0, _react.createElement)(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, getClassNames(props)));
}

Row.propTypes = propTypes;
module.exports = exports['default'];