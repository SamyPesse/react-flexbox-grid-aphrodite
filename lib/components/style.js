'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _aphroditeToJss = require('aphrodite-to-jss');

var _grid = require('../grid/grid');

var _grid2 = _interopRequireDefault(_grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create the styles and store them in memory so we
// can reference them in the future
exports.default = _aphroditeToJss.StyleSheet.create((0, _grid2.default)());
module.exports = exports['default'];