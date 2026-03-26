<script lang="ts" setup>
import type { NavItem } from "@/types/navigation";

defineProps<{
  items: NavItem[];
}>();

const route = useRoute();
const isActive = (item: NavItem) => {
  if (item.exact || item.to === "/") return route.path === item.to;
  return route.path === item.to || route.path.startsWith(item.to + "/");
};
</script>

<template>
  <nav class="app-nav" role="navigation" aria-label="Главная навигация">
    <ul class="app-nav__list nav-list">
      <li v-for="item in items" :key="item.to" class="nav-list__item">
        <NuxtLink
          class="nav-list__link"
          :to="item.to"
          :class="{ 'is-active': isActive(item) }"
          :aria-current="isActive(item) ? 'page' : undefined"
          :aria-label="item.label"
        >
          <Icon class="nav-list__icon" :name="item.name" size="28" />
          <span class="nav-list__label">{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
