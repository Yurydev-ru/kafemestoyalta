<script lang="ts" setup></script>

<template>
  <div class="grid-feature">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.grid-feature {
  display: flex;
  flex-direction: column;
}
</style>
