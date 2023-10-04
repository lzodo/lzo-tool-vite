<template>
  <div class="home-page">
    <button @click="add" ref="btn">递增{{ count }}</button>
  </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from "vue";
import { sleep } from "lzo-js-tools";

/** 获取组件实例 */
console.log(this); // undefined
const _this = getCurrentInstance();
console.log(_this, 1);

sleep(3000);

/** 基本用法 */
let count = ref(0);
const add = () => {
  console.log(count.value++);
};
</script>

<style lang="scss" scoped></style>
