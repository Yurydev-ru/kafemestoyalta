<script lang="ts" setup>
import HeroSection from "~/components/feature/HeroSection.vue";
import SidebarSection from "~/components/feature/SidebarSection.vue";

definePageMeta({
  layout: "default",
});
</script>

<template>
  <UiContainer>
    <HeroSection />
    <SidebarSection />
  </UiContainer>
</template>

<style lang="scss" scoped></style>
