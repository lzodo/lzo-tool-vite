<template>
  <div class="post-test">{{ info }}=={{ onlyList }} in prop Test</div>
</template>

<script setup>
let props = defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
  onlyList: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
