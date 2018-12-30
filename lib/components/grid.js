'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Grid;

var _react = require('react');

var _aphroditeToJss = require('aphrodite-to-jss');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createProps = require('./create-props');

var _createProps2 = _interopRequireDefault(_createProps);

var _style = require('../components/style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-unused-prop-types */
var propTypes = {
  fluid: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  tagName: _propTypes2.default.string,
  // aphrodite-to-jss SheetDefinitions
  styles: _propTypes2.default.any,
  children: _propTypes2.default.node
};
/* eslint-enable */

function Grid(props) {
  var containerClass = (0, _aphroditeToJss.css)(_style2.default[props.fluid ? 'container-fluid' : 'container'], props.styles);
  var className = [props.className, containerClass].filter(function (o) {
    return o;
  }).join(' ');

  return (0, _react.createElement)(props.tagName || 'div', (0, _createProps2.default)(propTypes, props, className));
}

Grid.propTypes = propTypes;
module.exports = exports['default'];