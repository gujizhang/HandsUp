<template>

  <div class="indexContainer" >
    <div class="hands">
      <i class="iconfont icon-jushoux" style="top: -30vh;transform: rotate(180deg);"></i>
      <i class="iconfont icon-jushoux" style="top: -30vh;color: chartreuse;left: 50px;transform: rotate(180deg);"></i>
      <i class="iconfont icon-jushoux" style="top: -30vh;color: burlywood;left: 100px;transform: rotate(180deg);"></i>
    </div>
    <div class="chinese">
      <div class="con"><p class="caiNumber">Hands</p>
        <div class="caiNumber" > -up</div>
        &nbsp;
        <p class="tells">&nbsp; {{info.name}}  在这里快速发现或发布各种步伐类体育 活动。看到喜欢的活动，举手报名，一起来玩。</p></div>
    </div>
    <div class="hands">
      <i class="iconfont icon-jushoux"></i>
      <i class="iconfont icon-jushoux" style="color: #C45606;left: 100px"></i>
      <i class="iconfont icon-jushoux" style="color: #4F1C85;left: 150px"></i>
    </div>
    <Button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1" style="color: darkgrey;">开启你的handsup</Button>
  </div>


</template>



<script>
import store from '../../store'

  export default {
    data () {
      return {
        info: {}
      }

    },
    beforeMount(){
       wx.hideTabBar();

    },
    mounted(){
      this.getSetting()
      console.log('----mouted-----');

    },
    methods: {
      getSetting(){
       
        console.log(this.name);
        wx.getSetting({
          success: (res) =>{
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: (res) => {
                  console.log(res.userInfo)
                  //用户已经授权过
                  console.log('用户已经授权过');
                  console.log(res.userInfo.nickName);
                  this.info.name = res.userInfo.nickName;
                  this.$forceUpdate();
                }
              })
            }else{
              console.log('用户还未授权过')
            }
          }
        })

      },
      getUserInfo1(){

        console.log('click事件首先触发')
        // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
        // console.log(wx.canIUse('button.open-type.getUserInfo'))
      wx.getUserProfile({
            lang: "en",
            desc: '测试一下获取用户信息',
            success: function (res) {
              console.log(res, '成功回调')
              store.dispatch("setIsAuthenticated", true);
              store.dispatch("setUser", res.userInfo);
            },
            fail(res) {
              console.log(res, '错误回调')
            },
            complete(res) {
              console.log(res, '结束回调')
          wx.switchTab({url: '/pages/list/main'})
            }
      })
        
        if(wx.canIUse('button.open-type.getUserInfo')){
          // 用户版本可用

        }else{
          console.log('请升级微信版本')
        }

      },
      bindGetUserInfo(e) {
        console.log(e);
        if (e.mp.detail.rawData){
          //用户按了允许授权按钮
          console.log('用户按了允许授权按钮')
          this.getSetting();
        } else {
          //用户按了拒绝按钮
          console.log('用户按了拒绝按钮')
        }
      }
    }
  }
</script>

<style scoped>

  @import '../../../static/icon/icon.css';

  .indexContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    height: 100vh;
  background-color: black;
  }
  .chinese{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .hands{
    position: relative;
  }
  i{
    position: absolute;
    font-size: 30vh;
    color: darkorange;
    display:inline-block;

  }
  .con{
    width: 170px
  }
  .caiNumber {
    font-family: "sansCN",serif;
    font-weight: bolder;
    font-size: 10vh;
  }
  .tells{
    display: flex;
    color: #cccccc;
    font-weight: lighter;
    font-size: small;
  }
</style>