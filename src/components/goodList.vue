<template>
  <!-- 子组件 -->
  <div name="show">
    <ul class="goodList">
      <!-- 循环 -->
      <li v-for="good in list">
        <img v-bind:src="good.img" />
        <p>{{ good.goodName }}</p>
      </li>
    </ul>
  </div>
</template>

<style lang="less">
// 商品展示样式
.goodList li {
  width: 200px;
}
</style>

<script>
export default {
  name: "show",
  // 初始
  data() {
    // 父子间传递事件
    var obj = this;
    var url=""
    if (obj.goodId == 1) {
      url = "json/bjb.json";
    } else if (obj.goodId == 2) {
      url = "json/shouji.json";
    }else{
          url="json/bjb.json";
      }
    this.$http.get(url).then(function (res) {
      // 给list赋值
      obj.list = res.data;
    });
    return {
      list: [],
    };
  },
  // 父子组件之间的传值
  props: {
    // 接收的参数名
    goodId: Number,
  },
  // 监听父组件到子组件传值的参数
  watch: {
    goodId() {
      var obj = this;
      var url = "";
      if (obj.goodId == 1) {
        url = "json/bjb.json";
      } else if (obj.goodId == 2) {
        url = "json/shouji.json";
      }else{
          url="json/bjb.json";
      }
      this.$http.get(url).then(function (res) {
        // 给list赋值
        obj.list = res.data;
      });
      return {
        list: [],
      };
    },
  },
};
</script>