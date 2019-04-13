'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const productCategory = app.model.define('product_attribute', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    category_id: { type: INTEGER, references: {
      model: 'product_category',
      key: 'id',
    }, comment: '商品类别编号' },
    sort: { type: INTEGER(11), allowNull: false, comment: '排列次序' },
    name: { type: STRING(45), allowNull: false, comment: '类别' },
  }, {
    comment: '商品分类表',
  });

  return productCategory;
};
