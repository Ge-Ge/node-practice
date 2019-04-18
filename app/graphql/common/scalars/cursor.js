'use strict';
const { GraphQLScalarType, GraphQLError } = require('graphql');
const { Kind } = require('graphql/language');

module.exports = new GraphQLScalarType({
  name: 'Cursor',
  description: 'Cursor 游标数据类型',
  // 校验与解析 variables 的参数
  parseValue(value) {
    return Buffer.from(String(value), 'base64').toString('utf8');
  },
  // 序列化
  serialize(value) {
    return Buffer.from(String(value), 'utf8').toString('base64');
  },
  // 校验与解析 query 的参数
  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING || !ast.value) {
      throw new GraphQLError('Query error: Can only parse strings got a: ' + ast.kind, [ ast ]);
    }
    return Buffer.from(ast.value, 'base64').toString('utf8');
  },
});
