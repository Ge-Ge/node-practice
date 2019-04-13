'use strict';
module.exports = app => {
  const { STRING, INTEGER, TINYINT, DECIMAL, DATE, ENUM } = app.Sequelize;
  const order = app.model.define('order', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    order_no: { type: STRING(100), comment: '订单编号' },
    order_sn: { type: STRING(100), comment: '交易号', unique: true },
    buyer_id: { type: INTEGER, comment: '买家id', references: {
      model: 'user',
      key: 'id',
    } },
    shop_id: { type: INTEGER, references: {
      model: 'shop',
      key: 'id',
    }, comment: '店铺id' },
    shop_name: { type: INTEGER, comment: '店铺名称' },
    order_status: {
      type: TINYINT(4),
      allowNull: false,
      defaultValue: '0',
      comment: '订单状态:0未付款,1已付款,2已发货,3已签收,-1退货申请,-2退货中,-3已退货,-4取消交易',
    },
    after_status: {
      type: TINYINT(4),
      allowNull: false,
      defaultValue: '0',
      comment: '用户售后状态 0 未发起售后 1 申请售后 -1 售后已取消 2 处理中 200 处理完毕',
    },
    product_count: {
      type: INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      comment: '商品数量',
    },
    product_amount_total: {
      type: DECIMAL(12, 4),
      allowNull: false,
      comment: '商品总价',
    },
    order_amount_total: {
      type: DECIMAL(12, 4),
      allowNull: false,
      defaultValue: '0.0000',
      comment: '实际付款金额',
    },
    logistics_fee: {
      type: DECIMAL(12, 4),
      allowNull: false,
      defaultValue: '0.0000',
      comment: '运费金额',
    },
    address_id: {
      type: INTEGER,
      comment: '收货地址编码',
      references: {
        model: 'user_address',
        key: 'id',
      },
    },
    pay_channel: {
      type: TINYINT(4),
      comment: '支付渠道 0余额 1微信 2支付宝',
    },
    out_trade_no: {
      type: STRING(255),
      defaultValue: null,
      comment: '订单支付单号',
    },
    escrow_trade_no: {
      type: STRING(255),
      defaultValue: null,
      comment: '第三方支付流水号',
    },
    pay_time: {
      type: DATE,
      comment: '付款时间',
    },
    delivery_time: {
      type: DATE,
      defaultValue: null,
      comment: '发货时间',
    },
    order_settlement_status: {
      type: ENUM('0', '1'),
      comment: '订单结算状态 0未结算 1已结算',
    },
    order_settlement_time: {
      type: DATE,
      defaultValue: null,
      comment: '订单结算时间',
    },
    is_package: {
      type: ENUM('0', '1'),
      defaultValue: '0',
      comment: '是否是套餐',
    },
    is_integral: {
      type: ENUM('0', '1'),
      defaultValue: '0',
      comment: '是否是积分产品',
    },
  }, {
    comment: '订单表',
  });

  return order;
};
