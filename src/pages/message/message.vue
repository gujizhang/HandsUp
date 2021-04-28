<template>
  <div class="contain">你好我是你要的信息页面</div>
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
    
  }
</script>

<style scoped>
.contain{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: aliceblue;
  background-color: black;
}
</style>