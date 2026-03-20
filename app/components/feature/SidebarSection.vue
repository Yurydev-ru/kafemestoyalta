<script lang="ts" setup>
const navItems = ref([
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
  {
    to: "/",
    label: "Home",
    name: "i-tabler:paginate-filter-mail",
    exact: true,
  },
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
  { to: "/", label: "Home", name: "streamline-freehand:home", exact: true },
]);
</script>

<template>
  <aside class="side-bar">
    <div class="container">
      <NavSection :items="navItems" />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
.side-bar {
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
}
</style>
