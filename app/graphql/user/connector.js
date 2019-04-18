'use strict';
class UserConnector {
  constructor(ctx) {
    this.ctx = ctx;
  }
  getUser(id) {
    // TODO 参数校验
    return this.ctx.service.user.getUser(id);
  }
  async getUsers(args) {
    const { first, last, after, before } = args;
    const count = (first || last) + 1;
    const users = await this.ctx.service.user.getUsers({ ...args, count });
    const edges = users.map(item => {
      return { cursor: item.id, node: item };
    });
    if (first && users.length > first) edges.pop();
    else if (last && users.length > last) edges.shift();

    return {
      pageInfo: {
        hasNextPage() {
          if (before) return true;
          return Boolean(first && users.length > first);
        },
        hasPreviousPage() {
          if (after) return true;
          return Boolean(last && users.length > last);
        },
        startCursor: edges[ 0 ] ? edges[ 0 ].cursor : null,
        endCursor: edges[ edges.length - 1 ] ? edges[ edges.length - 1 ].cursor : null,
      },
      edges,
    };

  }
  createUser(id, name) {
    return this.ctx.service.user.createUser(id, name);
  }

  delUser(id) {
    return this.ctx.service.user.delUser(id);
  }
}
module.exports = UserConnector;
