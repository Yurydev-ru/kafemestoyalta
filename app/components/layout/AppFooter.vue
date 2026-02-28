<script lang="ts" setup>

const navItems = ref(
    [
        { to:'/', label: 'Home', name: 'streamline-freehand:home', exact: true },
        { to:'/', label: 'Home', name: 'streamline-freehand:paginate-filter-mail', exact: true },
        { to:'/', label: 'Home', name: 'streamline-freehand:home', exact: true },
        { to:'/', label: 'Home', name: 'streamline-freehand:home', exact: true },
    ]
)

</script>

<template>
    <footer class="app-footer">
       <NavSection :items="navItems"/>
    </footer>
</template>

<style lang="scss" scoped>
    
</style>
