'use strict';
module.exports = app => {
  const { STRING, INTEGER, ENUM } = app.Sequelize;
  const productCategory = app.model.define('product_brand', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    logo: { type: STRING(255), comment: '品牌logo' },
    name: { type: STRING(25), unique: true, allowNull: false, comment: '品牌名称' },
    status: {
      type: ENUM('0', '1'),
      allowNull: false,
      defaultValue: '1',
      comment: '状态： 0禁用 1启用',
    },
    sort: { type: INTEGER(11), allowNull: false, defaultValue: 1, comment: '排列次序' },
  }, {
    comment: '商品品牌表',
  });

  return productCategory;
};
