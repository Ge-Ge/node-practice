'use strict';
module.exports = app => {
  const { STRING, INTEGER, ENUM } = app.Sequelize;
  const UserAddress = app.model.define('user_address', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: INTEGER, references: {
      model: 'user',
      key: 'id',
    }, comment: '用户id' },
    username: { type: STRING(255), allowNull: false, comment: '收货人姓名' },
    tel: { type: STRING(255), allowNull: false, comment: '手机号' },
    prov: { type: INTEGER(11), allowNull: false, comment: '省' },
    city: { type: INTEGER(11), allowNull: false, comment: '市' },
    area: { type: INTEGER(11), allowNull: false, comment: '区' },
    address: { type: STRING(255), allowNull: false, comment: '街道地址' },
    postcode: { type: STRING(255), allowNull: false, comment: '邮政编码' },
    default: {
      type: ENUM('0', '1'),
      allowNull: false,
      defaultValue: '1',
      comment: '是否默认收货地址: 1=>默认' },
  }, {
    comment: '用户地址表',
  });

  return UserAddress;
};
