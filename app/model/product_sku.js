'use strict';
module.exports = app => {
  const { STRING, INTEGER, DECIMAL } = app.Sequelize;
  const Product = app.model.define('product_sku', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    product_id: {
      type: INTEGER, references: {
        model: 'product',
        key: 'id',
      }, comment: '商品id',
    },
    name: { type: STRING(45), allowNull: false, comment: 'sku名称' },
    img: { type: STRING(255), allowNull: false, comment: '主图' },
    price: { type: DECIMAL(8, 2), allowNull: false, comment: '价格' },
    stock: { type: INTEGER(11), allowNull: false, comment: '库存' },
    code: { type: STRING(255), allowNull: false, comment: '商品编码' },
    barcode: { type: STRING(255), allowNull: false, comment: '商品条形码' },
    data: { type: STRING(255), allowNull: false, comment: 'sku串' },
  }, {
    comment: '商品sku表',
  });

  return Product;
};
