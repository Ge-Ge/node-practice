'use strict';
module.exports = {
  PageInfo: {
    hasNextPage(root) {
      return root.hasNextPage();
    },
    hasPreviousPage(root) {
      return root.hasPreviousPage();
    },
  },
};
