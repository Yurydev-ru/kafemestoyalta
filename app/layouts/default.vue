<script lang="ts" setup>
import AppFooter from "~/components/layout/AppFooter.vue";
import AppHeader from "~/components/layout/AppHeader.vue";
import UiContainer from "~/components/ui/UiContainer.vue";
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper_container">
      <AppHeader />
      <main class="app-main">
        <UiContainer>
          <slot />
        </UiContainer>
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
