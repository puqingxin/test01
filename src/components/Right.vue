<template>
  <!-- 父组件--右侧内容设置 -->
  <div>
    <div v-if="kk == 1">
      <GoodList :gooodId="1"></GoodList>
    </div>
    <div v-else-if="kk == 2">
      <GoodList :gooodId="2"></GoodList>
    </div>
    <div v-else-if="kk == 3">33333333333333</div>
    <div v-else-if="kk == 4">4444444444444</div>
    <!-- 没有任何选择，默认显示 -->
    <div v-else="kk == 0">
      <GoodList :gooodId="0"></GoodList>
    </div>
  </div>
</template>

<script type="text/javascript">
import Msg from "./msg.js";
import GoodList from "./goodList.vue";
export default {
  data() {
    return {
      kk: 0,
    };
  },
  mounted: function () {
    var _this = this;
    // 用on来接收
    Msg.$on("val", function (m) {
      _this.kk = m;
    });
  },
  components: {
    GoodList,
  },
};
</script>