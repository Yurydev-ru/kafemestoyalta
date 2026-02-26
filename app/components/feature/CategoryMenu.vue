<script lang="ts" setup>
    const categoriesItems = [
        {
            id: 1,
            title: 'Завтраки',
            description: 'Начните день с вкусного завтрака!',
            imageUrl: '/images/menu.jpg',
        },
        {
            id: 2,
            title: 'Обеды',
            description: 'Сытные обеды для вашего удовольствия.',
            imageUrl: '/images/menu.jpg',
        },
        {
            id: 3,
            title: 'Ужины',
            description: 'Идеальные ужины для завершения дня.',
            imageUrl: '/images/menu.jpg',
        },
        {
            id: 4,
            title: 'Десерты',
            description: 'Сладкие десерты для вашего удовольствия.',
            imageUrl: '/images/menu.jpg',
        },
    ]
</script>

<template>
    <ul class="category-list">
        <li class="category-list_item" v-for="category in categoriesItems" :key="category.id">
            <CategoryCard
                :title="category.title"
                :description="category.description"
                :imageUrl="category.imageUrl"
                :link="`/categories/${category.id}`"
            />
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .category-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0;
        list-style: none;
    }
</style>
