<template>
  <div class="home-page">
    <Teleport to="body"><div>#app外的div</div> </Teleport>
    <button @click="add">递增{{ count }}</button>
    <button @click="homePinia.yearAdd">yearAdd {{ homePinia.age }}</button>
    <div class="pinia">{{ homePinia.dblage }}</div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, watchEffect } from "vue";
import { sleep } from "lzo-js-tools";

// pinia 使用
import useHomePinia from "../pinia/home";
const homePinia = useHomePinia();
console.log(homePinia.name);
console.log(homePinia.dblage);

/** 封装导入使用 */
import useScrollPosition from "../hooks/useScrollPosition";
const { scrollX, scrollY } = useScrollPosition();
watchEffect(() => {
  console.log(scrollY.value, "scrollY");
  console.log(scrollX.value, "scrollX");
});

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
