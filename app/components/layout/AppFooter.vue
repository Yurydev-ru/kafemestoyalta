<script lang="ts" setup>
import NavSection from "~/components/feature/NavSection.vue";
const navItems = ref([
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
  {
    to: "/",
    label: "Home",
    name: "streamline-freehand:paginate-filter-mail",
    exact: true,
  },
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
]);
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__container">
      <NavSection :items="navItems" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer__container {
  width: 100%;
  max-width: 100%;
  padding-inline: 1rem;
}
</style>
