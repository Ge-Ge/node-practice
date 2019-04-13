'use strict';
module.exports = app => {
  const { STRING, INTEGER, DECIMAL, DATE, ENUM } = app.Sequelize;
  const Shop = app.model.define('shop', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {
      type: INTEGER, references: {
        model: 'user',
        key: 'id',
      }, comment: '用户id',
    },
    category_id: {
      type: INTEGER, references: {
        model: 'dictionary_data',
        key: 'id',
      }, comment: '店铺分类id',
    },
    name: { type: STRING(45), allowNull: false, comment: '店铺名' },
    logo: { type: DECIMAL(10, 7), allowNull: false, comment: '门店logo' },
    describ: { type: DECIMAL(10, 7), allowNull: false, comment: '门店简介' },
    lat: { type: DECIMAL(10, 7), allowNull: false, comment: '纬度' },
    lng: { type: DECIMAL(10, 7), allowNull: false, comment: '经度' },
    prov: { type: INTEGER(11), allowNull: false, comment: '省' },
    city: { type: INTEGER(11), allowNull: false, comment: '市' },
    area: { type: INTEGER(11), allowNull: false, comment: '区' },
    address: { type: STRING(255), allowNull: false, comment: '街道地址' },
    examine_time: { type: DATE, comment: '审核时间' },
    examine_status: {
      type: ENUM('-1', '0', '1'),
      allowNull: false,
      defaultValue: '0',
      comment: '审核状态：-1 审核未通过 0未审核 1审核通过',
    },
    examine_message: { type: STRING(255), comment: '审核 成功/失败 消息' },
    status: {
      type: ENUM('0', '1'),
      allowNull: false,
      defaultValue: '0',
      comment: '店铺状态： 0禁用 1启用',
    },
  }, {
    comment: '店铺表',
  });

  return Shop;
};
