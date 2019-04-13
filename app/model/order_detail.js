'use strict';
module.exports = app => {
  const { STRING, INTEGER, DECIMAL, ENUM } = app.Sequelize;
  const order = app.model.define('order_detail', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_id: { type: INTEGER, references: { model: 'order', key: 'id' }, comment: '订单编码' },
    product_id: { type: INTEGER, references: { model: 'product', key: 'id' }, comment: '订单编码' },
    product_name: { type: STRING(255), comment: '商品名称' },
    product_price: { type: DECIMAL(12, 4), comment: '商品价格' },
    product_sku: { type: INTEGER, comment: '商品SKU', references: { model: 'product_sku', key: 'id' } },
    product_picture_url: { type: INTEGER, comment: '商品图片' },
    product_mode_desc: { type: INTEGER, comment: '商品型号' },
    discount_rate: { type: INTEGER, comment: '折扣比例' },
    discount_amount: { type: INTEGER, comment: '折扣金额' },
    number: { type: INTEGER, comment: '购买数量' },
    subtotal: { type: DECIMAL(12, 4), comment: '小计金额' },
    remark: { type: STRING(255), comment: '客户商品备注' },
    is_product_exists: { type: ENUM('0', '1'), defaultValue: '1', comment: '商品是否有效 0失效' },
  }, {
    comment: '订单详情表',
  });

  return order;
};
