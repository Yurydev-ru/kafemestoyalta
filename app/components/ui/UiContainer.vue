<script lang="ts" setup></script>

<template>
  <div class="ui-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.ui-container {
  position: relative;
  display: grid;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 300px;
    overflow-y: hidden;
  }
}
</style>
