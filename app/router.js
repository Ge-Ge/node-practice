'use strict';

module.exports = app => {
  const { router } = app;
  router.get('/', ctx => {
    ctx.body = 'hi egg.js';
    ctx.status = 201;
  });
};
