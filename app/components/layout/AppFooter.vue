<script lang="ts" setup>
const { navItems } = useNavigation();
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer_container">
      <AppNav :items="navItems" />
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>
