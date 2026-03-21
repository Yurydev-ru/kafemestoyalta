<script lang="ts" setup></script>

<template>
  <header class="app-header">
    <div class="app-header_container">
      <NuxtLink to="/" class="logo">
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

<style lang="scss" scoped>
.app-header_container {
  width: 100%;
  max-width: 100%;
  padding-inline: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-icon {
  color: var(--color-primary);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-primary-hover);
  }
}

.app-header_user-phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.app-header_phone {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.2px;
  color: var(--color-primary);
  font-weight: 400;
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.logo {
  display: flex;
  align-items: center;
  color: var(--color-primary);
  text-decoration: none;

  @media (min-width: 768px) {
    justify-content: center;
  }
  &:hover {
    color: var(--color-primary-hover);
  }
}
</style>
