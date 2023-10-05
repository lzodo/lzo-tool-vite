<template>
  <div class="ref">{{ info }}=={{ list }}=={{ onlyList }}</div>
  <div class="active">{{ activeInfo }}</div>
  <propTest :info="list" :onlyList="onlyList"></propTest>
  <button @click="changeInfo">按钮</button>
</template>

<script setup>
import { reactive, readonly, ref } from "vue";
import propTest from "../components/propTest.vue";

let list = ref([1, 2, 3, 4]);
let info = ref({
  a: 1,
  b: 2,
});
let activeInfo = reactive({
  a: 1,
  b: 2,
});

// onlyList 可以根据 list 变化而变化，但是无法被修改
let onlyList = readonly(list);
const changeInfo = () => {
  list.value[1] = 100;
  onlyList.value[1] = 999; // 无效，将 readonly包裹的数据传递到子组件，子组件无法修改，可以严格遵守单向数据流原则
  info.value.a = 100;
  activeInfo.a = 100;
};
</script>

<style lang="scss" scoped></style>
