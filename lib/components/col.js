'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = Col;

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

var ModificatorType = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]);

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _propTypes2.default.number,
  smOffset: _propTypes2.default.number,
  mdOffset: _propTypes2.default.number,
  lgOffset: _propTypes2.default.number,
  xsFirst: _propTypes2.default.bool,
  smFirst: _propTypes2.default.bool,
  mdFirst: _propTypes2.default.bool,
  lgFirst: _propTypes2.default.bool,
  xsLast: _propTypes2.default.bool,
  smLast: _propTypes2.default.bool,
  mdLast: _propTypes2.default.bool,
  lgLast: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  // aphrodite-to-jss SheetDefinitions
  styles: _propTypes2.default.any,
  tagName: _propTypes2.default.string,
  children: _propTypes2.default.node
};
/* eslint-enable */

var classMap = {
  xs: 'col-xs',
  sm: 'col-sm',
  md: 'col-md',
  lg: 'col-lg',
  xsOffset: 'col-xs-offset',
  smOffset: 'col-sm-offset',
  mdOffset: 'col-md-offset',
  lgOffset: 'col-lg-offset',
  xsFirst: 'first-xs',
  smFirst: 'first-sm',
  mdFirst: 'first-md',
  lgFirst: 'first-lg',
  xsLast: 'last-xs',
  smLast: 'last-sm',
  mdLast: 'last-md',
  lgLast: 'last-lg'
};

function getClassNames(props) {
  var extraClasses = [];

  if (props.reverse) {
    extraClasses.push(_style2.default.reverse);
  }

  var classes = Object.keys(props).filter(function (key) {
    return classMap[key];
  }).map(function (key) {
    return _style2.default[Number.isInteger(props[key]) ? classMap[key] + '-' + props[key] : classMap[key]];
  }).concat(extraClasses).filter(function (k) {
    return (typeof k === 'undefined' ? 'undefined' : _typeof(k)) === 'object';
  }).concat([props.styles]);

  return !props.className ? _aphroditeToJss.css.apply(undefined, _toConsumableArray(classes)) : props.className + ' ' + _aphroditeToJss.css.apply(undefined, _toConsumableArray(classes));
}

function Col(props) {
  var className = getClassNames(props);

  return (0, _react.createElement)(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Col.propTypes = propTypes;
module.exports = exports['default'];