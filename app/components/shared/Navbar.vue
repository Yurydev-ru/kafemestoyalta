<script lang="ts" setup>
import { f } from 'vue-router/dist/router-CWoNjPRp.mjs';
const isOpen = defineModel<boolean>({ default: false })
const close = () => {
    isOpen.value = false;
}

const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Contact', href: '/contact' },
]   
</script>

<template>
    <nav class="app-nav">
        <ul>
            <li v-for="item in menuItems" :key="item.href">
                <NuxtLink :to="item.href" @click="close">
                    {{ item.label }}
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
</style>
