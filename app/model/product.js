'use strict';
module.exports = app => {
  const { STRING, INTEGER, ENUM } = app.Sequelize;
  const Product = app.model.define('product', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    shop_id: {
      type: INTEGER, references: {
        model: 'shop',
        key: 'id',
      }, comment: '店铺id',
    },
    category_id: {
      type: INTEGER, references: {
        model: 'product_category',
        key: 'id',
      }, comment: '分类id',
    },
    title: { type: STRING(45), allowNull: false, comment: '商品标题' },
    picture_url: { type: STRING(255), allowNull: false, comment: '封面图' },
    sketch: { type: STRING(255), allowNull: false, comment: '简述' },
    intro: { type: STRING(255), allowNull: false, comment: '商品描述' },
    sort: { type: INTEGER(11), defaultValue: 1, comment: '排序' },
    status: {
      type: ENUM('-1', '0', '1', '2'),
      allowNull: false,
      defaultValue: '0',
      comment: '状态： -1=>下架,1=>上架,2=>预售,0=>未上架',
    },
  }, {
    comment: '产品表',
  });

  return Product;
};
