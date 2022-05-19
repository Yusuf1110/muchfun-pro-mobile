<template>
  <div class="article-list">
    <article-item
      v-for="item in list"
      :title="item.title"
      :aut_name="item.aut_name"
      :images="item.cover.images"
      :pubdate="item.pubdate"
      :key="item.art_id"
    >
    </article-item>
    <div class="footer">@MUCHFUN</div>
  </div>
</template>
<script>
import ArticleItem from './ArticleItem.vue'
import { getArticles } from '../../../api/user'
export default {
  props: {
    channelId: {
      type: Number,
      default: 0
    },
    timestamp: {
      default: 0
    }
  },
  components: {
    ArticleItem
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      try {
        const { data } = await getArticles(this.channelId, this.timestamp)
        this.list = data.data.results
      } catch (err) {
        this.$toast.fail('获取文章失败')
      }
    }
  }
}
</script>
<style lang="less">
.article-list {
  .footer {
    height: 50px;
    line-height: 50px;
    width: auto;
    text-align: center;
  }
}
</style>
