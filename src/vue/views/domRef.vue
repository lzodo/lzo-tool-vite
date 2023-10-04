<template>
  <div>
    <div ref="domRef">通过ref得到dom元素</div>
    <button @click="getRef">按钮</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const domRef = ref();
const getRef = () => {
  console.log(domRef.value);
};

onMounted(() => {
  console.log(domRef.value, 3);
});
</script>

<style lang="scss" scoped></style>
