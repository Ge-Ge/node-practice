'use strict';
module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const productCategory = app.model.define('product_map_attribute_option', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    sku_id: { type: INTEGER, references: {
      model: 'product_sku',
      key: 'id',
    }, comment: '商品sku id' },
    attribute_id: { type: INTEGER, references: {
      model: 'product_attribute',
      key: 'id' } },
    option_id: { type: INTEGER, references: {
      model: 'product_option',
      key: 'id' } },
    sort: { type: INTEGER(11), allowNull: false, comment: '排列次序' },
  }, {
    comment: '商品分类表',
  });

  return productCategory;
};
