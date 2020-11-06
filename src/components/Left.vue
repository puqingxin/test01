<template>
  <!-- 侧边导航栏 -->
  <div>
    <div class="title">热门推荐</div>
    <ul class="menu">
      <li @click="menu1">笔记本电脑</li>
      <li @click="menu2">手机</li>
      <li @click="menu3">服饰</li>
      <li @click="menu4">手表</li>
      <li @click="menu5">书籍</li>
      <li>玩具</li>
      <li>小家电</li>
      <li>学习用品</li>
      <li>办公用品</li>
      <li>旅游必备</li>
      <li>游戏卡通</li>
    </ul>
  </div>
</template>

<script>
import Msg from "./msg.js"
export default {
    methods:{
        menu1:function(){
          // $emit触发msg的on事件
            Msg.$emit("val","1");
        },
        menu2:function(){
            Msg.$emit("val","2");
        },
        menu3:function(){
            Msg.$emit("val","3");
        },
        menu4:function(){
            Msg.$emit("val","4");
        },
        menu5:function(){
            Msg.$emit("val","5");
        }
    }
};
</script>

<style lang="less" scoped>
.title {
  color: red;
  width: 6.25rem;
  height: 3.125rem;
  line-height: 50px;
  background: #f2f2f2;
}
ul {
  padding: 0;
  margin: 0;
}
.menu li {
  list-style: none;
  height: 3.125rem;
  line-height: 50px;
  background: #ffffff;
  cursor: pointer;
}

.menu li:not(:nth-last-child(1)) {
  border-bottom: 2px solid #f2f2f2;
}
</style>