'use strict';
const Service = require('egg').Service;
const Op = require('sequelize').Op;

class UserService extends Service {
  getUser(id) {
    return this.app.model.User.findOne({
      where: { id },
      attributes: [ 'id', 'tel', 'email' ],
    });
  }

  getUsers({ count, after, before, skip }) {
    const where = {
      [Op.and]: [
        after ? { id: { [Op.gt]: after } } : null,
        before ? { id: { [Op.lt]: before } } : null,
      ] };
    const whereSql = this.app.model.queryInterface.QueryGenerator.getWhereConditions(where) || '1=1';
    return this.app.model.query(`SELECT id, tel, email FROM user
      INNER JOIN (SELECT id from user WHERE ${whereSql} LIMIT :skip,:count) AS temp
      USING (id);`,
    { model: this.app.model.User, replacements: { skip: skip || 0, count: count || 0 } });
  }

  find(article_id) {
    return this.app.model.User.findAll({ where: { article_id } });
  }

  create(user) {
    return this.app.model.User.create(user);
  }

  del(id) {
    return this.app.model.User.destroy({ where: { id } })
      .then(() => id);
  }

  update(user) {
    return this.app.model.User.update(user, { where: { id: user.id } })
      .then(() => user.id);
  }
}

module.exports = UserService;
