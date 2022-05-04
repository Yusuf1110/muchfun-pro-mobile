<template>
  <div class="login">
    <van-nav-bar
      class="page-nav-bar"
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-form ref="vanForm" @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="mobile"
        placeholder="请输入手机号"
        :rules="userFormRules.mobile"
        type="number"
        maxlength="11"
      >
        <i slot="left-icon" class="iconfont icon-wode1"></i>
      </van-field>
      <van-field
        v-model="user.code"
        name="code"
        placeholder="请填写验证码"
        :rules="userFormRules.code"
        type="number"
        maxlength="6"
      >
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 60"
            @finish="isCountDownShow = false"
          >
            <template #default="timeData">
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
          <van-button
            v-else
            size="small"
            type="primary"
            native-type="button"
            @click="onSendSms"
            >发送验证码</van-button
          >
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
import { userLogin, sandSms } from '../../api/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      userFormRules: {
        mobile: [
          {
            required: true
          },
          {
            message: '请输入正确的11位手机号',
            pattern: /^1[1-9]{1}\d{9}$/
          }
        ],
        code: [
          {
            required: true
          },
          {
            message: '请填写6位验证码',
            pattern: /^\d{6}$/
          }
        ]
      },
      isCountDownShow: false
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
        const { data } = await userLogin(user)
        this.$store.commit('setUser', data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        this.$toast.fail('手机号或验证码错误！')
      }
    },
    async onSendSms () {
      const user = this.user
      try {
        await this.$refs.vanForm.validate('mobile')
      } catch (err) {
        return console.log(err)
      }
      this.isCountDownShow = true
      try {
        await sandSms(user.mobile)
      } catch (err) {
        if (err.response.state === 429) {
          this.$toast.fail('发送太频繁，稍后再试')
        } else {
          this.$toast.fail('验证码发送失败！')
        }
      }
    },
    onClickLeft () {
      this.$router.back()
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
    margin: 50px 16px;
  }
  .van-button--primary {
    background-color: @f2;
    opacity: 20%;
    border: 0px;
    height: 17px;
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
  .van-field--error .van-field__control,
  .van-field--error .van-field__control::placeholder {
    color: #ff7777;
    -webkit-text-fill-color: currentColor;
  }
  .van-count-down {
    margin-right: 35px;
    .block {
      display: inline-block;
      width: 22px;
      color: @f3;
      font-size: 12px;
      text-align: center;
      background-color: @theme;
      border-radius: 30%;
    }
  }
  .van-nav-bar__text,
  .van-nav-bar .van-icon {
    color: @f3;
  }
}
</style>
