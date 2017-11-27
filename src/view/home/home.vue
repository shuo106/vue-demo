<template>
  <div id="home">
    <top></top>
    <div class="food-nav">
      <mt-swipe :auto="5000" :show-indicators="true">
        <mt-swipe-item class="food-swipe">
          <div v-for="index in 8" class="food-item">
            <router-link to="/#">
              <img src="../../assets/img/foods/1.png">
              <p>特色小吃</p>
            </router-link>
          </div>
        </mt-swipe-item>
        <mt-swipe-item class="food-swipe">
          <div v-for="index in 8" class="food-item">
            <router-link to="#">
              <img src="../../assets/img/foods/1.png">
              <p>特色小吃</p>
            </router-link>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="shop">
      <div class="title">
        <img src="../../assets/img/icon/shop.png" class="icon">
        <span>附近的商家</span>
      </div>
      <div class="shop-list">
        <div class="shop-item" v-for="index in 10">
          <div class="item-left">
            <img src="../../assets/img/foods/shop1.png">
          </div>
          <div class="item-right">
            <div class="shop-title">
              <h4>
                <span class="shop-mark">品牌</span>
                <span class="shop-name">效果展示</span>
              </h4>
              <span class="title-right">保准票</span>
            </div>
            <div class="shop-info">
              <div class="info-left">
                <span class="star" v-for="index in 4">
                  <img src="../../assets/img/icon/star.png" class="icon"></img>
                </span>
                <span class="shop-score">4.4</span>
                <span class="shop-count">
                  月售<span>1000</span>单
                </span>
              </div>
              <div class="info-right">
                <span class="bgblue">蜂鸟转送</span>
                <span>准时达</span>
              </div>
            </div>
            <div class="shop-send">
              <div class="send-left">
                <p>￥20<span>起送</span>/
                  配送费约<span>￥5</span>
                </p>
              </div>
              <div class="send-right">
                1264.9/15小时43分钟
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Top from '../../components/head.vue'
  import { Swipe, SwipeItem } from 'mint-ui'
  export default{
    components: {Top, Swipe, SwipeItem},
    data () {
      return {
        msg: '登录cheng',
        foods: [
          {imgUrl: null, title: null}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  @import url('../../assets/css/common.less');
  .food-nav {
    width: 100%;
    height: 5.33rem;
    border-bottom: 1px solid @grayC;
    padding-top: 0.27rem;
    .food-swipe {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      text-align: center;
      .food-item {
        width: 25%;
        img {
          width: 1.87rem;
          height: 1.87rem;
        }
        p {
          color: @gray6;
        } 
      }
    }
  }
  .shop {
    margin-top: 0.27rem;
    .title {
      height: 0.93rem;
      display: flex;
      align-items: center;
      border-top: 1px solid @grayC;
      border-bottom: 1px solid @grayC;
      .icon {
        width: 0.43rem;
        height: 0.43rem;
        margin: 0 0.13rem 0 0.27rem;
      }
      span {
        font-size: 14px;
        color: @gray6;
      }
    }
    .shop-item {
      height: 2.4rem;
      padding: 0.13rem 0.27rem 0.13rem 0.27rem;
      display: flex;
      // align-items: strech;
      border-bottom: 1px solid @lightC;
      // 店铺图
      .item-left {
        img {
          width: 2.13rem;
          height: 2.13rem;
        }
      }
      // 店铺信息
      .item-right {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .shop-title {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: @font14;
          .shop-mark {
            background-color: @orange;
            font-size: 12px;
          }
          .shop-name {
            font-weight: bolder;
          }
          .title-right {
            text-align: right;
            font-weight: normal;
            color: @gray9;
          }

        }
        .shop-info {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          letter-space: 1px;
          .info-left {
            // display: flex;
            // 评价星
            img {
              width: 10px;
              height: 10px;
            }
          }
          .info-right {
            font-size: 10px;
            span{
              border: 1px solid @blue;
              border-radius: 2px;
            }
            .bgblue {
              background-color: @blue;
              color: #000;
            }
          }
        }
        .shop-send {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>