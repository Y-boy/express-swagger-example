# express-swagger-example
Template of express-swagger project.

> Ref：[使用node生成swagger接口文档](https://blog.csdn.net/Govern66/article/details/104792847)

### 0. 搭建 Expressjs 项目
### 1. 安装 `npm i express-swagger-generator`
### 2. 在 app.js 文件中引入 Swagger 配置

注：该代码应该在 `app.use('/', indexRouter);` 等代码之前
```js
const expressSwagger = require('express-swagger-generator')(app);
expressSwagger({
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0'
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: ['application/json', 'application/xml'],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: ''
            }
        }
    },
    route: {
        url: '/swagger',
        docs: '/swagger.json'               //swagger文件 api
    },
    basedir: __dirname,                     //app absolute path
    files: ['./routes/*.js']                //Path to the API handle folder
})
```
```
swaggerDefinition: 描述信息
route: swagger 访问路径
basedir: 文档根路径
files: 目标文件路径，这些文件被转换成 Swagger 格式
```

### 3. 改造原 router 方法 - 添加 Swagger 配置
``` js
// 例：改造 /routes/index.js 文件
/**
 * api for get request
 * @route GET /
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({ result: true, message: 'GET ok' });
});
```

### 4. 启动服务，访问 swagger: https://localhost:3000/swagger
