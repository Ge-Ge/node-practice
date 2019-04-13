'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const productCategory = app.model.define('dictionary', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(45), allowNull: false, comment: '类别' },
  }, {
    comment: '字典分类表',
  });

  return productCategory;
};
