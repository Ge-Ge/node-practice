'use strict';
module.exports = app => {
  const { STRING, INTEGER, TINYINT, ENUM } = app.Sequelize;
  const order = app.model.define('order_appraise', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_id: { type: INTEGER, references: {
      model: 'order',
      key: 'id',
    }, comment: '订单编码' },
    info: {
      type: STRING(500),
      defaultValue: '0',
      comment: '评论内容',
    },
    level: {
      type: ENUM('-1', '0', '1'),
      comment: '评论内容',
    },
    desc_star: { type: TINYINT(4), comment: '描述相符 1-5' },
    logistics_star: { type: TINYINT(4), comment: '物流服务 1-5' },
    attitude_star: { type: TINYINT(4), comment: '服务态度 1-5' },
  }, {
    comment: '订单评价表',
  });

  return order;
};
