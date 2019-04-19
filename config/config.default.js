'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [];

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

  return config;
};
