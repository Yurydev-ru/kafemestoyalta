<script lang="ts" setup>
import AppHeader from '~/components/layout/Header.vue';


</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="app-main">
      <slot />
    </main>
  </div>

</template>

<style lang="scss" scoped>
  
</style>
