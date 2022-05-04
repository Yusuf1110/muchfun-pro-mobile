<template>
  <div class="user-info">
    <div v-if="user" class="not-logged-in">
      <div class="head">
        <img src="../../assets/imgs/login-icon.png" @click="login" />
        <span @click="login">登录 / 注册</span>
      </div>
    </div>
    <div v-else class="logged-in">
      <div class="head">
        <div class="show-info">
          <img src="" alt="" />
          <span>小鱼</span>
          <button class="change-data">编辑资料</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      user: false
    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less">
@import '../../styles/config.less';
.user-info {
  .not-logged-in {
    .head {
      background-color: @theme;
      height: 300px;
      box-shadow: 0 2px 8px rgb(180, 180, 180);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: bold;
      color: rgb(255, 255, 255);
      img {
        height: 200px;
        width: 200px;
        padding-bottom: 10px;
      }
    }
  }
  .logged-in {
    .head {
      background-color: @theme;
      height: 300px;
      box-shadow: 0 2px 8px rgb(180, 180, 180);
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        flex: 1;
      }
      span {
        display: inline-block;
        flex: 1;
      }
    }
  }
}
</style>
