'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFlexColumns = exports.createContainer = exports.createPositionColumns = exports.createOrderColumn = exports.createOffsetColumn = exports.createColumn = exports.columnExtras = exports.wrapMedia = exports.getMediaPortKey = exports.viewPortKeyIndex = exports.reduceStyles = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('./constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @module grid */

/**
 * Reduces an array of objects into a single object
 * @function
 * @param  {Object} m object thus far
 * @param  {Object} o the next object in the array
 * @return {Object}
 */
var reduceStyles = exports.reduceStyles = function reduceStyles(m, o) {
  return _extends({}, m, o.default || o);
};

var VIEWPORT_KEYS = Object.keys(_constants.VIEWPORTS);

/**
 * Returns the index of a specific media size in the view port keys array
 * @function viewPortKeyIndex
 * @param  {String}         size the size to look up
 * @return {Number}             the index
 */
var viewPortKeyIndex = exports.viewPortKeyIndex = function viewPortKeyIndex(size) {
  return VIEWPORT_KEYS.indexOf(size);
};

/**
 * Creates the media port key for our object
 * @function
 * @param  {String} size  the size to create the media port for
 * @return {String}
 */
var getMediaPortKey = exports.getMediaPortKey = function getMediaPortKey(size) {
  return (
    // create our media key, but because xs doesnt have a media query we will use `default`
    // we will later move everything from default into the main scope of the object
    size !== 'xs' ? '@media only screen and (min-width: ' + _constants.VIEWPORTS[size] + ')' : 'default'
  );
};

/**
 * Will either return the original object or wrap the original object in the media key
 * @function
 * @param  {String} mediaKey the media key
 * @param  {Object} obj      the original object
 * @return {Object}
 */
var wrapMedia = exports.wrapMedia = function wrapMedia(mediaKey, obj) {
  return mediaKey === 'default' ? obj : _defineProperty({}, mediaKey, obj);
};

/**
 * Creates misc data for columns depending on if they are 0 index or not
 * @function
 * @param  {Number} col   the column number
 * @param  {String} width the percent width
 * @return {Object}
 */
var columnExtras = exports.columnExtras = function columnExtras(col, width) {
  return col ? {
    flexBasis: width,
    maxWidth: width
  } : {
    flexGrow: 1,
    flexBasis: 0,
    maxWidth: '100%'
  };
};

/**
 * Creates a regular column for a particular size
 * @function
 * @param  {String} size  the size to create the column for
 * @param  {Number} col   the column number we are creating this for
 * @return {Object}
 */
var createColumn = exports.createColumn = function createColumn(size, col, mediaKey) {
  return _defineProperty({}, col ? 'col-' + size + '-' + col : 'col-' + size, wrapMedia(mediaKey, _extends({}, _constants.DEFAULT_COLUMN_STYLES, columnExtras(col, col / 12 * 100 + '%'))));
};

/**
 * Creates an offset column
 * @function
 * @param  {String} size  the size to create the column for
 * @param  {Number} col   the column number we are creating this for
 * @return {Object}
 */
var createOffsetColumn = exports.createOffsetColumn = function createOffsetColumn(size, col, mediaKey) {
  return _defineProperty({}, 'col-' + size + '-offset-' + col, wrapMedia(mediaKey, _extends({
    marginLeft: col / 12 * 100 + '%'
  }, _constants.DEFAULT_COLUMN_STYLES)));
};

/**
 * Creates a column order
 * @function
 * @param  {String} size  the size to create column order for
 * @param  {String} type  'first' or 'last'
 * @param  {String} mediaKey
 * @return {Object}
 */
var createOrderColumn = exports.createOrderColumn = function createOrderColumn(size, type, mediaKey) {
  return _defineProperty({}, type + '-' + size, wrapMedia(mediaKey, _extends({}, _constants.FLEX_OPTIONS[type])));
};

/**
 * Creates the position columns i.e. start, end, etc. for a particular size
 * @function
 * @param  {String} size  the size to create the columns for
 * @return {Object}
 */
var createPositionColumns = exports.createPositionColumns = function createPositionColumns(size, mediaKey) {
  return Object.keys(_constants.FLEX_OPTIONS).map(function (key) {
    return _defineProperty({}, key + '-' + size, wrapMedia(mediaKey, _constants.FLEX_OPTIONS[key]));
  }).reduce(reduceStyles, {});
};

/**
 * Creates a container style element for a particular size
 * @function
 * @param  {Array<String>} sizes  the sizes to create the container for
 * @return {Object}
 */
var createContainer = exports.createContainer = function createContainer(sizes) {
  return {
    container: sizes.map(function (size) {
      return wrapMedia(getMediaPortKey(size), {
        width: _constants.CONTAINER_SIZES[size] || 'initial',
        marginRight: 'auto',
        marginLeft: 'auto'
      });
    }).reduce(reduceStyles, {})
  };
};

/**
 * Creates a set of columns by size nested by the corresponding viewport
 * @function
 * @param  {String} size  the size to create the columns for
 * @return {Object}
 */
var createFlexColumns = exports.createFlexColumns = function createFlexColumns(size) {
  var mediaKey = getMediaPortKey(size);
  return _constants.COLUMNS.map(function (o, col) {
    return _extends({}, createColumn(size, col, mediaKey), createOffsetColumn(size, col, mediaKey), createPositionColumns(size, mediaKey), createOrderColumn(size, 'first', mediaKey), createOrderColumn(size, 'last', mediaKey));
  }).reduce(reduceStyles, {});
};

exports.default = function () {
  return _constants.SIZES.map(createFlexColumns).concat([createContainer(_constants.SIZES)]).reduce(reduceStyles, _constants.MISC_STYLES);
};