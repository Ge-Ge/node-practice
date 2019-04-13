'use strict';
module.exports = app => {
  const { STRING, INTEGER, JSON } = app.Sequelize;
  const UserInfo = app.model.define('user_info', {
    user_id: { type: INTEGER, references: {
      model: 'user',
      key: 'id',
    } },
    username: { type: STRING(45), allowNull: false, comment: '用户名' },
    avatar: { type: STRING(500), allowNull: false, comment: '密码' },
    wechat: { type: JSON, comment: '微信授权信息' },
    qq: { type: JSON, comment: 'qq授权信息' },
    alipay: { type: JSON, comment: '支付宝授权信息' },
  }, {
    comment: '用户信息表',
  });

  return UserInfo;
};
