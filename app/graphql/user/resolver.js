'use strict';
module.exports = {
  Query: {
    user(root, args, ctx) {
      return ctx.connector.user.getUser(args.id);
    },
    users(root, args, ctx) {
      return ctx.connector.user.getUsers(args);
    },
  },
  Mutation: {
    createUser(root, args, ctx) {
      return ctx.connector.user.createUser(args.articleId, args.name);
    },
    delUser(root, args, ctx) {
      return ctx.connector.user.delUser(args.id);
    },
  },
};
