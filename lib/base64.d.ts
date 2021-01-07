declare class Base64 {
    private privateKey;
    constructor();
    /**
     * @Description: 定义一个密码加密的方法
     * @param {String}
     * @return:
     */
    encode(input: string): string;
    /**
     * @Description: 定义解密的方法
     * @param {type}
     * @return:
     */
    decode(input: string): string;
    /**
     * @Description: 加密时候转码方法
     * @param {type}
     * @return:
     */
    utf8_encode(params: string): string;
    /**
     * @Description: 解密的转码方法
     * @param {type}
     * @return:
     */
    utf8_decode(utftext: string): string;
}
declare const _default: Base64;
export default _default;
