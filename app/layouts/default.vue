<script lang="ts" setup>
import Container from "@/components/layout/Container.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
import AppHeader from "~/components/layout/AppHeader.vue";
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <main class="app-main">
      <Container>
        <slot />
      </Container>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped></style>
