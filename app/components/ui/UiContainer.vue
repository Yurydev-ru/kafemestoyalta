<script lang="ts" setup></script>

<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-container {
  width: 100%;
  max-width: 1200px;
  border-radius: 12px;
  margin-inline: auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}
</style>
