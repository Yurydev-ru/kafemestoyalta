<script lang="ts" setup></script>

<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-container {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
</style>
