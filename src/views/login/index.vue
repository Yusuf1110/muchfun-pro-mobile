<template>
  <div class="login">
    <van-nav-bar class="page-nav-bar" title="登录" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      >
        <i slot="left-icon" class="iconfont icon-wode1"></i>
      </van-field>
      <van-field
        v-model="user.code"
        placeholder="请填写验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>

        <i slot="left-icon" class="iconfont icon-mima"></i>
      </van-field>
      <div class="button-submit">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { userLogin } from '../../api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0 // 持续时间永久
      })
      const user = this.user
      try {
        await userLogin(user)
        this.$toast.success('登录成功')
      } catch (err) {
        this.$toast.fail('手机号或验证码错误！')
      }
    }
  }
}
</script>
<style lang="less">
@import '../../styles/config.less';
.login {
  height: 100vh;
  width: 100vw;
  background-color: rgb(237, 237, 237);
  .button-submit {
    margin: 50px 16.7px;
  }
  .van-button--primary {
    background-color: @f3;
    border: 0px;
    height: 22px;
    width: 90px;
  }
  .van-field__left-icon {
    opacity: 50%;
    margin-right: 10px;
  }
  .van-button--info {
    color: @f3;
    background-color: @theme;
    border: 0;
  }
  .van-button {
    border-radius: 2.6vw;
  }
  .van-field__label {
    width: 3.2em;
  }
}
</style>
