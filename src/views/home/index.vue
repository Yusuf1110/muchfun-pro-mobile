<template>
  <div class="home-index">
    <div class="head" @click.self="showSeach = false">
      <em>MUCHFUN</em>
      <input :class="{ seach: showSeach }" type="text" v-model="seach" />
      <span
        class="iconfont icon-sousuo"
        :class="{ showSeach: showSeach }"
        @click="showSeach = !showSeach"
      ></span>
    </div>
    <van-tabs v-model="activeName" sticky offset-top="36.69px" animated>
      <van-tab v-for="item in channels" :title="item.name" :key="item.id">
        <article-list :channel_id="item.id" :timestamp="timeNow"></article-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { getChannles } from '../../api/user'
import ArticleList from './components/ArticleList.vue'
export default {
  components: {
    ArticleList
  },
  data () {
    return {
      channels: [],
      seach: '',
      showSeach: false,
      activeName: 'a',
      timeNow: Date.now()
    }
  },
  created () {
    this.getChannlesInit()
  },
  methods: {
    async getChannlesInit () {
      try {
        const { data } = await getChannles()
        this.channels = data.data.channels
      } catch (err) {
        this.$toast.fail('获取数据失败，稍后再试')
      }
    }
  }
}
</script>
<style lang="less">
@import '../../styles/config.less';
.home-index {
  .head {
    z-index: 5;
    position: sticky;
    top: 0;
    height: 43px;
    width: 100%;
    background-color: @theme;
    text-align: center;
    line-height: 43px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    em {
      color: @f3;
    }

    input {
      opacity: 0;
      transition: all ease-in 0.2s;
      font-size: 12px;
      padding: 4px;
      position: absolute;
      border: none;
      height: 26px;
      width: 26px;
      right: 55px;
      border-radius: 10px;
      background-color: rgb(239, 239, 239);
    }
    .seach {
      opacity: 100%;
      visibility: visible;
      width: 70%;
      transition: all ease-in 0.2s;
    }
    span {
      color: rgb(239, 239, 239);
      display: inline-block;
      z-index: 10;
    }
    .showSeach {
      color: @theme;
    }
  }
  .van-tabs__line {
    background: @theme;
  }
  .van-sticky {
    box-shadow: 0px 5px 5px #ebebeb;
  }
}
</style>
