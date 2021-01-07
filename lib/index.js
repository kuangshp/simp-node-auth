"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpNodeAuth = void 0;
var crypto = require("crypto");
var random_1 = require("./random");
var base64_1 = require("./base64");
var SimpNodeAuth = /** @class */ (function () {
    function SimpNodeAuth() {
    }
    /**
     * @param {password} 明文密码
     * @return:
     * @Description: 生成密文的方法
     * @Author: 水痕
     * @LastEditors: 水痕
     * @Date: 2019-07-30 14:31:01
     */
    SimpNodeAuth.prototype.makePassword = function (password) {
        // 1.生成随机数
        var randomStr = random_1.default();
        // 2.对生成的随机数base64加密
        var base64RandomStr = base64_1.default.encode(randomStr);
        return this.md5MakePassword(base64RandomStr, password);
    };
    /**
     * @param {password}: string 没有加密的密码
     * @param {sqlPwd}: string 已经加密的密码
     * @return:
     * @Description: 判断与密文密码是否匹配
     * @Author: 水痕
     * @LastEditors: 水痕
     * @Date: 2019-07-30 15:28:22
     */
    SimpNodeAuth.prototype.checkPassword = function (password, sqlPwd) {
        // 1.从查询出来的密码中截取前面随机数
        var base64RandomStr = sqlPwd.substring(0, 16);
        var lastPwd = this.md5MakePassword(base64RandomStr, password);
        return Object.is(sqlPwd, lastPwd);
    };
    SimpNodeAuth.prototype.md5MakePassword = function (base64RandomStr, password) {
        // 2.将密码与加密的随机数拼接
        var newPwd = base64RandomStr + password;
        // 3.将第二步进行md5加密
        var md5 = crypto.createHash('md5');
        var md5Pwd = md5.update(newPwd).digest('hex');
        // 4.将加密后的md5Pwd继续加密
        var base64Md5 = base64_1.default.encode(md5Pwd);
        // 5.继续将2和4拼接
        var lastPwd = base64RandomStr + base64Md5;
        return lastPwd;
    };
    return SimpNodeAuth;
}());
exports.SimpNodeAuth = SimpNodeAuth;
exports.default = SimpNodeAuth;
