/**
 * api for get request
 * @route GET /
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
exports.demoGet = function(req, res) {
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
exports.demoPost = function(req, res) {
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.send({ result: true, message: 'POST ok' });
};

/**
 * api for file uploading
 * @route POST /file
 * @group file
 * @param {file} file.formData.required - 选择文件
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
exports.uploadFile = function(req, res) {
    res.setHeader('Content-Type', 'multipart/form-data');
    res.send({ result: true, message: 'POST file ok' });
};