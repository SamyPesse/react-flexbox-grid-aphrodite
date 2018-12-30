'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (propTypes, props, className) {
  var newProps = {};

  Object.keys(props).filter(function (key) {
    return key === 'children' || !propTypes[key];
  }).forEach(function (key) {
    newProps[key] = props[key];
  });

  return Object.assign({}, newProps, { className: className });
};

module.exports = exports['default'];