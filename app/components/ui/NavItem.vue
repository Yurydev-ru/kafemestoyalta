<script lang="ts" setup>
import type { NavItemProps } from '@/types/shared/NavItem.types';
const props = defineProps<NavItemProps>();

</script>

<template>
    <NuxtLink :to="to" class="app-nav__item" :class="[$props.class]" aria-label="Навигация по сайту" @click="$emit('click')">
        {{ label }}
    </NuxtLink>
</template>

<style lang="scss" scoped>
    
</style>
