<script lang="ts" setup>
import { B } from 'vue-router/dist/router-CWoNjPRp.mjs';
import Navbar from '../shared/Navbar.vue';


</script>

<template>
    <header class="app-header">
        <div class="container app-header__inner">
            <NuxtLink class="logo" to="/">Кафе Место</NuxtLink>
            <Button class="btn-burger md:hidden" aria-label="Open menu">
                <span></span>
            </Button>   
            <Navbar/>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    
</style>
