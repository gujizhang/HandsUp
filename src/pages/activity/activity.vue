<template>
  <div class="contain">
    你好我是你要的活动页面
    <button class="btn" @click="clickTab">登录</button>
  </div>
</template>

<script>
  export default {
    name: "",
    beforeMount(){
       wx.showTabBar({
         animation: false,
         success: (result) => {
           
         },
         fail: () => {},
         complete: () => {}
       });
    },
    methods: {
      clickTab() {
          wx.getUserProfile({
            lang: "en",
            desc: '测试一下获取用户信息',
            success: function (res) {
              console.log(res, '成功回调')
            },
            fail(res) {
              console.log(res, '错误回调')
            },
            complete(res) {
              console.log(res, '结束回调')
            }
          })
        }

    }
    
  }
</script>

<style scoped>
.contain {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: aliceblue;
  background-color: black;
}
</style>