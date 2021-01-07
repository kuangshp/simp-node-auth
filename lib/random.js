"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author: 水痕
 * @Date: 2020-02-22 09:42:22
 * @LastEditors: 水痕
 * @Description: 默认是生成长度10位的随机数
 * @param {type}
 * @return:
 */
exports.default = (function () {
    var str = '';
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < 10; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
});
