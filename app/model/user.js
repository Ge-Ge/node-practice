'use strict';
module.exports = app => {
  const { STRING, INTEGER, TINYINT } = app.Sequelize;
  const status = { DELETE: 0, NOT_ACTIVE: 1, NORMAL: 2, DISABLE: 3 };
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    password: { type: STRING(32), allowNull: false, comment: '密码' },
    tel: { type: STRING(20), allowNull: false, comment: '手机号' },
    email: { type: STRING(320), allowNull: false, comment: '邮箱' },
    wechat: { type: STRING(255), unique: true, comment: '微信uid' },
    qq: { type: STRING(255), comment: 'qq授权id' },
    alipay: { type: STRING(255), comment: '支付宝授权id' },
    status: {
      comment: '用户账号状态  0:删除  1:待激活  2:正常  3:禁用',
      type: TINYINT, allowNull: false,
      validate: { isIn: [[ status.DELETE, status.NORMAL, status.NOT_ACTIVE, status.DISABLE ]] },
      defaultValue: 1,
    },
  }, {
    comment: '用户表',
  });

  return User;
};
