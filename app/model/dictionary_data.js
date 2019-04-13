'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const productCategory = app.model.define('dictionary_data', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    type: {
      type: INTEGER, references: {
        model: 'dictionary',
        key: 'id',
      }, comment: '类型id',
    },
    name: { type: STRING(45), allowNull: false, comment: '字典名称' },
    sort: { type: STRING(45), allowNull: false, comment: '排序' },
  }, {
    comment: '字典数据表',
  });

  return productCategory;
};
