<script lang="ts" setup></script>

<template>
  <header class="app-header">
    <div class="app-header_container">
      <NuxtLink class="logo" to="/">
        <h1 class="logo">Место</h1>
      </NuxtLink>
      <NuxtLink class="app-header_user-phone" to="tel:+79785144228">
        <Icon
          class="nav-icon"
          name="streamline-freehand:phone-retro-1"
          size="24"
        />
        <span class="app-header_phone">Заказать</span>
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
