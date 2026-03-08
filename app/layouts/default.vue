<script lang="ts" setup>
import AppFooter from "~/components/layout/AppFooter.vue";
import AppHeader from "~/components/layout/AppHeader.vue";
import UiContainer from "~/components/ui/UiContainer.vue";
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="app-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped></style>
