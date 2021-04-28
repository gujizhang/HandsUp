<template>
  <div class="contain">
    <div class="top">
      <div class="headimage"><open-data type="userAvatarUrl"></open-data></div>
      <p class="name">{{ nick }}</p>

      <div class="position">
        <i class="iconfont icon-zuobiao"> </i
        ><open-data type="userCity" lang="zh_CN"></open-data>
      </div>
    </div>
    <div class="categorycard">
      <div
        @click="goTo(item.url)"
        v-for="(item, index) in categoryData"
        :key="index"
        class="itemcard"
      >
        <img class="cate_image" mode="heightFix" :src="item.image" alt="" />
        <span class="cate_name">{{ item.name }}</span>
      </div>
    </div>
    <div class="centerxuanchuan">
      <img
        class="xuanchuan_image"
        mode="widthFix"
        src="../../../static/images/xuanchuantu.png"
        alt=""
      />
    </div>
    <div class="chosetab">
      <van-tabs  class="vantab" color="white" title-active-color="gray" title-inactive-color="white" sticky @click="onClick" animated nav-class="navbackground">
        <van-tab title="交友帖">
          <div class="list1" v-for="(item,index) in listindex1" :key="index">
            <div class="list1_everyone">
               <img class="list1_image" mode="widthFix" :src="item.image" alt="" >
                <div> 
                  <div class="list1_name">{{item.name}}</div>
                  <div class="list1_content">{{item.content}}</div>
                  <i class="iconfont icon-right"> </i>
                </div>
            </div>
          </div>
          </van-tab>
        <van-tab title="招募帖">          
          <div class="list1" v-for="(item,index) in listindex1" :key="index">
            <div class="list1_everyone">
               <img class="list1_image" mode="widthFix" :src="item.image" alt="" >
                <div> 
                  <div class="list1_name">{{item.name}}</div>
                  <div class="list1_content">{{item.content}}</div>
                  <i class="iconfont icon-right"> </i>
                </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<script>
import store from "../../store";

export default {
  name: "",
  data() {
    return {
      categoryData: [
        {
          name: "夜跑",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "研友",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "志愿服务",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "读书会",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "电竞party",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "学习",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "其他",
          image: "/static/images/testimage.png",
          url: "",
        },
        {
          name: "二手交易",
          image: "/static/images/testimage.png",
          url: "",
        },
      ],
      listindex1: [
        {
          name: "夜跑",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "研友",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "志愿服务",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "读书会",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "电竞party",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "学习",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "其他",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
        {
          name: "二手交易",
          image: "/static/images/testimage.png",
          content:"我们打算出去玩一圈",
          url: "",
        },
      ],
    };
  },
  computed: {
    nick() {
      return store.getters.user.nickName;
    },
    imagehead() {
      return store.getters.user.avatarUrl;
    },
  },


  mounted() {
    console.log("get in ");
    wx.showTabBar({
      animation: false,
      success: (result) => {},
      fail: () => {},
      complete: () => {},
    });
  },
  methods: {
    onClick(event) {
      wx.showToast({
        title: `点击标签 ${event}`,
        icon: "none",
      });
     
    },
  },
};
</script>

<style scoped>
@import "../../../static/icon/icon.css";
@import "./main.css";

.contain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 15px;
  color: aliceblue;
  background-color: black;

}
.name {
  justify-items: right;
  font-size: 15px;
  padding-left: 10px;
  color: burlywood;
}
.top {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;

  padding: 0 30rpx;
  box-sizing: border-box;
  justify-content: center;
}
.headimage {
  width: 10vw;
  border-radius: 5vw;
  overflow: hidden;
}
.position {
  color: blueviolet;
  padding-left: 40vw;
  display: flex;
  flex: right;
}
.categorycard {
  display: flex;
  margin-left: 2%;
  border-radius: 0.1rem;
  border-color: cyan;
  flex-direction: row;
  text-align: center;
  overflow: auto;

  height: 30vh;
}
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;
  height: 0;
}
.itemcard {
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 3%;
  background-color: #23273d;
  border-radius: 0.2rem;
  margin-left: 2%;
  margin-right: 2%;
}
.cate_image {
  height: 70%;
  border-radius: 5vw;
  overflow: hidden;
}
.centerxuanchuan {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xuanchuan_image {
  width: 80vw;
  border-radius: 10vw;
  margin: 2vh 0;
}
.list1{
  background: #000000;
   display: flex;
   justify-content: center;
}
.list1_image{
  margin-left: 30px;
  width: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius:10px ;
}
.list1_name{
  font-weight: bolder;
  font-size: 30px;
}
.list1_everyone{
  display: flex;
  flex-direction: row;
  background-color: rgba(226, 91, 13, 0.918);
  width: 80%;
  margin-top: 10px;
  border-radius:10px ;
}
list1_content{

}
</style>>
  
