'use strict';
module.exports = {
  Cursor: require('./scalars/cursor'), // eslint-disable-line
  PageInfo: {
    hasNextPage(root) {
      if (typeof root.hasNextPage === 'function') return root.hasNextPage();
      return root.hasNextPage;
    },
    hasPreviousPage(root) {
      if (typeof root.hasPreviousPage === 'function') return root.hasPreviousPage();
      return root.hasPreviousPage;
    },
  },
};
