'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLUMNS = exports.COLUMNS = new Array(13).fill(0);

var SIZES = exports.SIZES = ['xs', 'sm', 'md', 'lg'];

var VIEWPORTS = exports.VIEWPORTS = {
  sm: '48em',
  md: '64em',
  lg: '75em'
};

var CONTAINER_SIZES = exports.CONTAINER_SIZES = {
  sm: '49em',
  md: '65em',
  lg: '76em'
};

var FLEX_OPTIONS = exports.FLEX_OPTIONS = {
  start: {
    justifyContent: 'flex-start',
    textAlign: 'start'
  },
  center: {
    justifyContent: 'center',
    textAlign: 'center'
  },
  end: {
    justifyContent: 'flex-end',
    textAlign: 'end'
  },
  top: {
    alignItems: 'flex-start'
  },
  middle: {
    alignItems: 'center'
  },
  bottom: {
    alignItems: 'flex-end'
  },
  around: {
    justifyContent: 'space-around'
  },
  between: {
    justifyContent: 'space-between'
  },
  first: {
    '-webkit-box-ordinal-group': 0,
    '-ms-flex-order': -1,
    order: -1
  },
  last: {
    '-webkit-box-ordinal-group': 2,
    '-ms-flex-order': 1,
    order: 1
  }
};

var DEFAULT_COLUMN_STYLES = exports.DEFAULT_COLUMN_STYLES = {
  boxSizing: 'border-box',
  flex: '0 0 auto',
  paddingRight: '0.5rem',
  paddingLeft: '0.5rem'
};

var MISC_STYLES = exports.MISC_STYLES = {
  row: {
    boxSizing: 'border-box',
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: '-0.5rem',
    marginLeft: '-0.5rem'
  },
  rowReversed: {
    flexDirection: 'row-reverse'
  },
  colReversed: {
    flexDirection: 'row-reverse'
  },
  'container-fluid': {
    paddingRight: '2rem',
    paddingLeft: '2rem',
    marginRight: 'auto',
    marginLeft: 'auto'
  }
};