<script lang="ts" setup>
import { B } from 'vue-router/dist/router-CWoNjPRp.mjs';
import BurgerButton from '../ui/BurgerButton.vue';
const isOpen = ref(false);


</script>

<template>
    <header class="app-header">
        <div class="container app-header__inner">
            <NuxtLink class="logo" to="/">
                <img src="/logo/logo-mob.png" height="40" width="50" alt="Логотип кафе Место">
            </NuxtLink>
            <BurgerButton v-model="isOpen" controls="mobile-menu" />
        </div>
        <Modal v-if="isOpen" @close="isOpen = false"/>
    </header>
</template>

<style lang="scss" scoped>
.app-header {
    position: absolute;
    top: 32px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    background-color: var(--color-bg-primary);
    z-index: 100;
    border-radius: 16px;
}

    .app-header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px;
    }
</style>
