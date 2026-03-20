<script lang="ts" setup></script>

<template>
  <header class="app-header">
    <div class="app-header_container">
      <NuxtLink to="/" class="logo">
        <h1 class="logo">Logo</h1>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header_container {
  width: 100%;
  max-width: 100%;
  padding-inline: 0.8rem;
}

.logo {
  display: flex;
  align-items: center;
}
</style>
