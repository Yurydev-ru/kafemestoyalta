<script lang="ts" setup>
const emit = defineEmits(['close']);
    const navItems = [
        { to: '/', label: 'Главная' },
        { to: '/menu', label: 'Меню' },
        { to: '/about', label: 'О нас' },
        { to: '/contacts', label: 'Контакты' },
    ];
</script>

<template>
    <nav class="app-nav">
        <div class="app-nav__container">
            <ul class="app-nav__list">
                <li v-for="item in navItems" :key="item.to" class="app-nav__item">
                    <NavItem :to="item.to" :label="item.label" @click="$emit('close')" />
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    
</style>
