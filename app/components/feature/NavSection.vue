<script lang="ts" setup>
const props = defineProps<{
  items: Array<{
    to: string;
    label: string;
    name: string;
    exact?: boolean;
  }>;
}>();

const route = useRoute();

const isActive = (item: (typeof props.items)[number]) => {
  if (item.exact) return route.path === item.to;
  return route.path === item.to || route.path.startsWith(item.to + "/");
};
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
          :aria-label="item.label"
        >
          <Icon class="nav-icon" :name="item.name" size="28" />
          <span class="nav-label">{{ item.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigations {
  width: 100%;
}

.navigations ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 4fr));
  //   overflow-x: hidden;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100%;
  }
}

.nav-item {
  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
}

.nav-link {
  padding: 10px;
}

.nav-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e9f0f0;
  margin-bottom: 5px;
}

// .is-active .nav-icon {
//   transform: scale(1.15);
// }

.nav-label {
  font-size: 12px;
  line-height: 1;
  letter-spacing: -0.2px;
  color: #e9f0f0;
  font-weight: 400;
}
</style>
