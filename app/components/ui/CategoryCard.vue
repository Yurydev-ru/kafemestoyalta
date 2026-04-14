<script lang="ts" setup>
import type { CategoryCard } from "@/types/menu";

defineProps<{
  category: CategoryCard;
}>();
</script>

<template>
  <div>
    <NuxtLink :to="`/category/${category.slug}`" class="category-card">
      <h3 class="category-card__title">{{ category.title }}</h3>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped></style>
