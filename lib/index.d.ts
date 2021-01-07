declare class SimpNodeAuth {
    /**
     * @param {password} 明文密码
     * @return:
     * @Description: 生成密文的方法
     * @Author: 水痕
     * @LastEditors: 水痕
     * @Date: 2019-07-30 14:31:01
     */
    makePassword(password: string): string;
    /**
     * @param {password}: string 没有加密的密码
     * @param {sqlPwd}: string 已经加密的密码
     * @return:
     * @Description: 判断与密文密码是否匹配
     * @Author: 水痕
     * @LastEditors: 水痕
     * @Date: 2019-07-30 15:28:22
     */
    checkPassword(password: string, sqlPwd: string): boolean;
    private md5MakePassword;
}
export default SimpNodeAuth;
export { SimpNodeAuth };
