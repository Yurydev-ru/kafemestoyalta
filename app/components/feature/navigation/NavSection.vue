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
  width: 100%;
  gap: 16px;
  grid-template-columns: repeat(4, 1fr);
  
  
  
  @media (min-width: 458px) {
       grid-template-columns: 1fr 1fr;
    }
    
    @media (min-width: 768px) {
         padding: 20px;
         outline: 1px solid var(--color-border-primary);
         justify-content: center;
      
         grid-template-columns: 1fr;
      }
}

.nav-item {
  height: auto;
  
  
}

.nav-link {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
 padding: 10px 0;
  

  &:hover,
  &:focus-visible {
    color: white;
  }

  &.is-active {
    color: #ff3366;
    
  }

  @media (min-width: 458px) {
     padding: 20px;
     outline: 1px solid var(--color-border-primary);
     justify-content: center;
     height: 150px;
  }

  @media (min-width: 768px) {
     padding: 20px;
     outline: 1px solid var(--color-border-primary);
     justify-content: center;
     height: 150px;
  }
}

.nav-icon {
  transition: transform 0.15s;
  color: #e9f0f0;
  display: inline-block;
  margin-bottom: 5px;
}

// .is-active .nav-icon {
//   transform: scale(1.15);
// }

.nav-label {
  font-size: 0.8rem;
  line-height: 1;
  letter-spacing: -0.2px;
  color: #e9f0f0;
  font-weight: 400;
}
</style>
