/* eslint-disable no-unused-vars */
'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [ 'graphql' ];
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.cors = {
    origin: 'Access-Control-Allow-Origin',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // change to your own sequelize configurations
  config.sequelize = {
    dialect: 'mysql',
    host: process.env.EGG_MYSQL_HOST || '127.0.0.1',
    port: process.env.EGG_MYSQL_PORT || '3306',
    username: process.env.EGG_MYSQL_USERNAME || 'root',
    password: process.env.EGG_MYSQL_PASSWORD || '123456',
    database: 'practice',
    define: {
      freezeTableName: true,
      underscored: true,
    },
  };
  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    // graphQL 路由前的拦截器
    onPreGraphQL(ctx) {
    },
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    onPreGraphiQL(ctx) {
    },
  };

  return config;
};
