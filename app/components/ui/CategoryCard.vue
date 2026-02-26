<script lang="ts" setup>
import type { CategoryCardProps } from '@/types/shared/CategoryCard.types';
const props = defineProps<CategoryCardProps>();
</script>

<template>
    <NuxtLink :to="props.link" class="category-card">
        <div class="category-card_content">
            <img :src="props.imageUrl" :alt="props.title" class="category-card_image" />
            <h3 class="category-card_title">{{ props.title }}</h3>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
    
</style>
