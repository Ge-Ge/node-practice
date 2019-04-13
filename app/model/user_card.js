'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const UserInfo = app.model.define('user_card', {
    user_id: { type: INTEGER, references: {
      model: 'user',
      key: 'id',
    } },
    card_name: { type: STRING(25), allowNull: false, comment: '持卡人姓名' },
    card_number: { type: STRING(25), allowNull: false, comment: '银行卡号', unique: true },
  }, {
    comment: '用户银行卡表',
  });

  return UserInfo;
};
