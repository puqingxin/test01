<template>
<!-- 页面布局效果 -->
  <div class="index" id="index" name="index">
    <div class="left">
        <Left></Left>
    </div>
    <div class="right">
      <div class="top">
        <img src="img/cms_1.jpg" />
      </div>
      <div class="buttom"></div>
    </div>
  </div>
</template>

<script>
// 右侧导航栏内容引入
    import Left from "../components/Left.vue"
    export default{
        components:{
            Left
        }
    }
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.index {
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  .left {
    width: 6.25rem;
    margin-right: 0.625rem;
  }
  .right {
    width: 62.5rem;
    background: blue;
    height: 50rem;
    margin-left: 0.625rem;

    .top img {
        width: 100%;
        height: auto;
    }
  }
}
</style>

