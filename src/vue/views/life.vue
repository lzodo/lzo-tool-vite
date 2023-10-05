<template>
  <div></div>
</template>

<script setup>
onBeforeMount(() => {
  console.log("组件挂载之前");
});
onMounted(() => {
  console.log("组件挂载完成执行");
});

onBeforeUpdate(() => {
  console.log("响应式数据变更之前");
});
onUpdated(() => {
  console.log("响应式数据变更");
});

onBeforeUnmount(() => {
  console.log("组件卸载之前");
});
onUnmounted(() => {
  console.log("组件实例被卸载");
});

onActivated(() => {
  console.log("KeepAlive> 的组件激活");
});
onDeactivated(() => {
  console.log("<KeepAlive> 的组件卸载");
});

onErrorCaptured(() => {
  console.log("捕获了后代组件传递的错误时调用"); // 收集子组件的错误
});
onRenderTracked(() => {}); // dev
onRenderTriggered(() => {}); // dev
// onServerPrefetch(() => {
//   console.log("only ssr 组件实例在服务器上被渲染之前调用");
// });
</script>

<style lang="scss" scoped></style>
