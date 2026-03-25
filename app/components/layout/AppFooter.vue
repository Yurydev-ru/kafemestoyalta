<script lang="ts" setup>
import { ref } from "vue";

const navItems = ref([
  { to: "/", label: "Домой", name: "streamline-freehand:home", exact: true },
  {
    to: "/menu",
    label: "Меню",
    name: "streamline-freehand:mobile-shopping-shop-basket",
    exact: true,
  },
  {
    to: "/about",
    label: "О нас",
    name: "streamline-freehand:information-desk",
    exact: true,
  },
  {
    to: "/contact",
    label: "Контакты",
    name: "streamline-freehand:collaboration-team-chat",
    exact: true,
  },
]);
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer_container">
      <AppNav :items="navItems" />
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
