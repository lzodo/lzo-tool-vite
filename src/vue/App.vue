<template>
  <div class="page">
    <div class="menu">
      <div
        class="item"
        v-for="item in menus"
        :key="item.path"
        @click="routerjump(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "./router";

const menus = ref([
  {
    name: "首页",
    path: "/home",
  },
  {
    name: "响应式数据",
    path: "/activeOrRef",
  },
  {
    name: "生命周期",
    path: "/life",
  },
  {
    name: "ref获取dom",
    path: "/domRef",
  },
]);

const routerjump = (path) => {
  router.push(path);
};
</script>
<style lang="scss" scoped>
.page {
  width: 100vh;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}

.menu {
  display: flex;
  & > div {
    margin: 10px;
    cursor: pointer;
  }
}
</style>
