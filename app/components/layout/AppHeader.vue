<script lang="ts" setup></script>

<template>
  <header class="app-header">
    <div class="app-header_container">
        <NuxtLink to:="/">
            <img class="logo" src="/images/menu.jpg" width="45" height="45" alt="">
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
