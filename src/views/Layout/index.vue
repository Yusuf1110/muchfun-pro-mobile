<template>
  <div class="layout">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" replace to="/home">
        <template>
          <i slot="icon" class="iconfont icon-zonglan"></i>
          <span>首页</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="question" replace to="/question">
        <template>
          <i slot="icon" class="iconfont icon-sousuo"></i>
          <span>问答</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="video" replace to="/video">
        <template>
          <i slot="icon" class="iconfont icon-play"></i>
          <span>视频</span>
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="userInfo" replace to="/userInfo">
        <template>
          <i slot="icon" class="iconfont icon-wode1"></i>
          <span>我的</span>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>
<style lang="less">
@import '../../styles/config.less';
.layout {
  .van-tabbar {
    box-shadow: 0px 5px 15px rgb(180, 180, 180);
    .van-tabbar-item--active {
      color: @theme;
      background-color: #fff;
    }
  }
}
</style>
