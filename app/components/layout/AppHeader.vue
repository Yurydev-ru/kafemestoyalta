<script lang="ts" setup>
import NavSection from '../feature/navigation/NavSection.vue';

const navItems = ref(
    [
        { to:'/', label: 'Home', name: 'streamline-freehand:home', exact: true },
        { to:'/', label: 'Home', name: 'streamline-freehand:paginate-filter-mail', exact: true },
        { to:'/', label: 'Home', name: 'streamline-freehand:home', exact: true },
    ]
)
</script>

<template>
    <header class="app-header">
        <NavSection :items="navItems"/>
    </header>
</template>

<style lang="scss" scoped>
    
</style>
