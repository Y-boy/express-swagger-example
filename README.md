# express-swagger-example
Template of express-swagger project.

> ref：[使用node生成swagger接口文档](https://blog.csdn.net/Govern66/article/details/104792847)

### 0. 前提：搭建了 Expressjs 项目
### 1. 安装 `npm i express-swagger-generator`
### 2. 在 app.js 文件中引入全局配置

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
    basedir: __dirname,                   //app absolute path
    files: ['./routes/swagger-api/*.js']  //Path to the API handle folder
})
```
```
swaggerDefinition: 描述信息
route: swagger 访问路径
basedir: 文档根路径
files: 目标文件路径
```

### 3. 定义方法 - 对应 swagger 配置中的文件路径 files（“/routes/swagger-api”）
```js
/**
 * api for get request
 * @route GET /
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
exports.doGet = function(req, res) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({ result: true, message: 'GET ok' });
};

/**
 * api for post request
 * @route POST /
 * @param {string} postParam.param.required - 对应传参
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
exports.doPost = function(req, res) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({ result: true, message: 'POST ok' });
};
```
> 这些方法之后要被调用

### 4. 将 router 的请求转发到 Swagger API
例：该代码在 `indexRouter.js` 文件内
```js
const xhrObj = require('./swagger-api/demo');
router.get('/', function(req, res, next) {
    xhrObj.doGet(req, res);
});
```

### 5. 启动服务，访问 swagger: https://localhost:3000/swagger
