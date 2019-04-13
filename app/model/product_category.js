'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const productCategory = app.model.define('product_category', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    pid: { type: INTEGER, comment: '父分类编号' },
    cover: { type: STRING(255), comment: '封面图' },
    name: { type: STRING(45), allowNull: false, comment: '类别' },
    sort: { type: INTEGER(11), allowNull: false, comment: '排列次序' },
  }, {
    comment: '商品分类表',
  });

  return productCategory;
};
