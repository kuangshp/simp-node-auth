### 一、`simp-node-auth`主要提供的功能

- 1、密码加密
- 2、校验密码是否正确

### 二、包的使用

- 1、安装

  ```shell
  npm install simp-node-auth
  ```

### 三、使用步骤

- 1、导包

  ```js
  import SimpNodeAuth from 'simp-node-auth';
  // or
  const { SimpNodeAuth } = require('simp-node-auth');
  ```

- 2、实例化对象

  ```js
  class User1Dao extends BaseDao {
    constructor() {
      super();
      this.simpNodeAuth = new SimpNodeAuth();
    }
    ...
  }
  ```

- 3、密码加密的方法`makePassword`

  ```js
  ...
  async createUser(params) {
    try {
      const { name, password } = params;
      return await UserModel.create({
        name,
        password: this.simpNodeAuth.makePassword(password)
      });
    } catch (e) {
      throw e;
    }
  }
  ```

- 4、校验密码的方法`checkPassword`

  ```js
  async login(params) {
    try {
      const { name, password } = params;
      const user = await UserModel.findOne({
        where: {
          name
        }
      });
      // 第一个参数是普通密码,第二个参数是加密后的密码
      if (this.simpNodeAuth.checkPassword(password, user.password)) {
        return user;
      } else {
        throw {
          msg: '登录错误',
          desc: '用户名与密码错误'
        };
      }
    } catch (e) {
      throw {
        msg: '登录错误',
        desc: '用户名与密码错误'
      };
    }
  }
  ```
