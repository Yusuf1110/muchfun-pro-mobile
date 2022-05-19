<template>
  <div class="article-item">
    <!-- 无图 -->
    <div class="noImg" v-if="noImage">
      <h4 class="title">
        {{ title }}
      </h4>
      <div class="aut">
        <span>{{ aut_name }}</span>
        <span>{{ pubdate }}</span>
      </div>
    </div>
    <!-- 多图 -->
    <div v-else-if="manyImages" class="manyImages">
      <div class="item-right">
        <h4>{{ title }}</h4>
        <div class="imgs">
          <img :src="image[0]" alt="" />
          <img :src="image[1]" alt="" />
          <img :src="image[2]" alt="" />
        </div>
      </div>
      <div class="aut">
        <span>{{ aut_name }}</span>
        <span>{{ pubdate }}</span>
      </div>
    </div>
    <!-- 单图 -->
    <div v-else class="oneImg">
      <div class="item-top">
        <h4>{{ title }}</h4>
        <img class="imgOnly" :src="image[0]" />
      </div>
      <div class="aut">
        <span>{{ aut_name }}</span>
        <span>{{ pubdate }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    images: {
      type: Array,
      default: null
    },
    aut_name: {
      type: String,
      default: '小鱼'
    },
    pubdate: {
      type: String,
      default: '时间'
    }
  },
  data () {
    return {
      image: null,
      noImage: false,
      manyImages: false
    }
  },
  created () {
    this.hasImage()
  },
  methods: {
    hasImage () {
      if (this.images) {
        if (this.images.length === 3) {
          this.manyImages = true
        }
        this.image = this.images
      } else {
        this.noImage = true
      }
    }
  }
}
</script>
<style lang="less">
.article-item {
  overflow: hidden;
  width: auto;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 0 10px rgb(160, 160, 160);
  border-radius: 10px;
  margin: 10px 15px;
  .aut {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    width: 300px;
    color: rgb(152, 152, 152);
    margin: 4px auto;
    span {
      padding-right: 10px;
    }
  }
  h4 {
    word-break: break-all;
    font-size: 16px;
    color: rgb(47, 47, 47);
  }
  //无图的样式
  .noImg {
    text-align: left;
    h4 {
      width: auto;
      padding: 0 15px;
      display: inline-block;
    }
  }
  //单图的样式
  .oneImg {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .item-top {
      width: 340px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h4 {
        margin: 10px 5px;
      }
      .imgOnly {
        margin: 10px;
        height: 90px;
        width: auto;
        border-radius: 10px;
      }
    }
  }
  .manyImages {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .item-right {
      width: 330px;
    }
    .imgs {
      display: flex;
      justify-content: space-around;
      img {
        height: 60px;
        width: auto;
        border-radius: 10px;
      }
    }
  }
}

// .article-item {
//   height: 100px;
//   width: auto;
//   background-color: rgb(255, 255, 255);
//   box-shadow: 0 0 10px rgb(160, 160, 160);
//   border-radius: 10px;
//   margin: 5px 10px;
//   .noImg {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     h4 {
//       margin: 0;
//       white-space: nowrap;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       text-align: center;
//       line-height: 45px;
//     }
//   }
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .imgOnly {
//     margin-left: 10px;
//     height: 80px;
//     width: auto;
//     border-radius: 10px;
//     background-color: black;
//   }
//   .item-left {
//     margin-right: 10px;
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     h4 {
//       color: rgb(95, 95, 95);
//       height: 45px;
//       width: 100%;
//       overflow: hidden;
//       text-overflow: ellipsis;
//       font-size: 16px;
//       margin-top: 10px;
//       margin-left: 10px;
//     }
//     .aut {
//       text-align: right;
//       font-size: 12px;
//       margin-right: 20px;
//       span {
//         margin-left: 10px;
//         color: rgb(151, 151, 151);
//       }
//     }
//   }
//   .imgs {
//     display: none;
//   }
// }
// .noimg {
//   .imgs,
//   .imgOnly {
//     display: none;
//   }
//   h4 {
//     margin: 0;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     text-align: center;
//     line-height: 45px;
//   }
// }
// .manyImage {
//   .imgOnly {
//     display: none;
//   }
//   .imgs {
//     display: none;
//     margin-left: 10px;
//     height: 80px;
//     width: auto;
//     border-radius: 10px;
//     background-color: black;
//   }
// }
</style>
