<template>
  <div class="user-info">
    <div v-if="!user" class="not-logged-in">
      <div class="head">
        <img src="../../assets/imgs/login-icon.png" @click="login" />
        <span @click="login">登录 / 注册</span>
      </div>
    </div>
    <div v-else class="logged-in">
      <div class="head">
        <div class="mask"></div>
        <div class="show-info">
          <img :src="userInfo.photo" />
          <span>{{ userInfo.name }}</span>
          <button class="change-data">编辑资料</button>
        </div>
        <div class="data-info">
          <div class="data">
            <span class="num">{{ userInfo.art_count }}</span>
            <span>文 章</span>
          </div>
          <div class="data">
            <span class="num">{{ userInfo.follow_count }}</span>
            <span>关 注</span>
          </div>
          <div class="data">
            <span class="num">{{ userInfo.fans_count }}</span>
            <span>粉 丝</span>
          </div>
          <div class="data">
            <span class="num">{{ userInfo.like_count }}</span>
            <span>点 赞</span>
          </div>
        </div>
      </div>
      <van-grid class="van-gird" :column-num="2">
        <van-grid-item>
          <i class="iconfont icon-shoucang"></i>
          <span>收藏</span>
        </van-grid-item>
        <van-grid-item>
          <i class="iconfont icon-xuanzhong"></i>
          <span>历史</span>
        </van-grid-item>
      </van-grid>
      <van-cell title="消息通知" is-link url="/vant/mobile.html" />
      <van-cell title="小智同学" is-link to="index" />
      <van-button @click="logOut" class="log-out" type="primary" block
        >退出登录</van-button
      >
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { getUserInfo } from '../../api/user'
export default {
  name: 'UserInfo',
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    if (this.user) {
      this.loadUserInfo()
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    logOut () {
      this.$dialog
        .confirm({ title: '确认要退出吗？' })
        .then(() => {
          this.$store.commit('setUser', null)
        })
        .catch(() => {})
    },
    async loadUserInfo () {
      try {
        const { data } = await getUserInfo()
        this.userInfo = data.data
      } catch (err) {
        this.$toast('获取数据失败，稍后再试')
      }
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
      .mask {
        background-color: @theme;
        height: 100%;
        width: 100%;
        opacity: 90%;
      }
      z-index: 10;
      background: @theme url('../../assets/imgs/login-icon.png') no-repeat
        center center;
      background-size: 500px 500px;
      height: 300px;
      box-shadow: 0 2px 8px rgb(180, 180, 180);
      position: relative;
      .show-info {
        position: absolute;
        width: 100%;
        bottom: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          border-radius: 50%;
          margin-left: 20px;
          height: 70px;
          width: 70px;
        }
        span {
          color: @f3;
          padding-left: 20px;
          flex: 1;
        }
        button {
          margin-right: 20px;
          background-color: @f3;
          height: 25px;
          width: 75px;
          border-radius: 10px;
          font-size: 12px;
          border: none;
        }
      }
    }
    .data-info {
      position: absolute;
      bottom: 10px;
      width: 100%;
      display: flex;
      color: @f3;
      font-size: 14px;
      .data {
        .num {
          font-size: 20px;
        }
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    .van-gird {
      i {
        margin: 10px;
        font-size: 30px;
        opacity: 40%;
        color: @theme;
      }
    }
    .log-out {
      margin: 10px auto;
      background-color: #fff;
      color: @theme;
      border: none;
      border-top: 1px solid rgb(244, 244, 244);
      border-bottom: 1px solid rgb(244, 244, 244);
      width: 300px;
    }
  }
}
</style>
