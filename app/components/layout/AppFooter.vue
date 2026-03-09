<script lang="ts" setup>
import { ref } from "vue";

const navItems = ref([
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
  {
    to: "/menu",
    label: "Меню",
    name: "streamline-freehand:book-read-list",
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
    label: "Контакт",
    name: "streamline-freehand:mail-send-email",
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

<style lang="scss" scoped>
.app-footer_container {
  width: 100%;
  max-width: 100%;
  padding-inline: 0.8rem;
}
</style>
