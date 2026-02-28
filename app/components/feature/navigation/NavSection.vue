<script lang="ts" setup>
    const props = defineProps<{
  items: Array<{
    to: string
    label: string
    name: string          
    exact?: boolean
  }>
}>()

const route = useRoute()

const isActive = (item: typeof props.items[number]) => {
  if (item.exact) return route.path === item.to
  return route.path === item.to || route.path.startsWith(item.to + '/')
}
</script>

<template>
    <nav class="navigations" role="navigation" aria-label="Главная навигация">
        <ul>
            <li class="nav-item" v-for="item in items" :key="item.to">
                <NuxtLink 
                class="nav-link" 
                :to="item.to"
                :class="{ 'is-active': isActive(item) }"
                :aria-current="isActive(item) ? 'page' : undefined"
                :aria-label="item.label">
                    <Icon class="nav-icon" :name="item.name" size="24" />
                    <span class="nav-label">{{ item.label }}</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .navigations {
  background: #a7a7b3;
  border-top: 1px solid #222;
  z-index: 900;
}

.navigations ul {
  display: flex;
  justify-content: space-around;
  padding: 8px 0;
  margin: 0;
  list-style: none;
}

.nav-item {
  flex: 1;
  text-align: center;
  max-width: 80px;
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px 0;
  color: #d70e0e;
  text-decoration: none;
  font-size: 12px;
  transition: color 0.2s;

  &:hover,
  &:focus-visible {
    color: white;
  }

  &.is-active {
    color: #ff3366;
    font-weight: 600;
  }
}

.nav-icon {
  transition: transform 0.15s;
}

.is-active .nav-icon {
  transform: scale(1.15);
}

.nav-label {
  font-size: 0.6875rem;
  line-height: 1;
  letter-spacing: -0.2px;
}
</style>
