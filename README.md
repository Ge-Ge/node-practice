# node-practice
> 探索egg.js项目的最佳实践

在这个项目中，我们将应用下面的技术
- sequelize：  
  基于 promise 的 Node.js ORM, 目前支持 Postgres, MySQL, SQLite 和 Microsoft SQL Server. 它具有强大的事务支持, 关联关系, 读取和复制等功能.
- GraphQL：  
  用于 API 的查询语言，是一个使用基于类型系统来执行查询的服务端运行时（类型系统由你的数据定义）。
- docker化项目
- TravisCI持续集成和Coveralls覆盖率测试
## 开始

```bash
# 安装依赖
npm install
# 创建数据库
npx sequelize db:create
# 启动
npm run dev
```
## 参考资料

[eggjs sequelize document](https://eggjs.org/zh-cn/tutorials/mysql.html)  
[egg-sequelize](https://github.com/eggjs/egg-sequelize)  
[sequelize](http://docs.sequelizejs.com)  
[sequelize-cli and migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)  
[factory-girl](https://github.com/aexmachina/factory-girl)  
