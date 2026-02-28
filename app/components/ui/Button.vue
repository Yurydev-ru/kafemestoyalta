<script lang="ts" setup>
defineProps({
  variant: {
    type: String,
    default: "close",
    secondary: "open",
  },
});
</script>

<template>
  <button class="button" :class="`button--${variant}`">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style lang="scss" scoped></style>
