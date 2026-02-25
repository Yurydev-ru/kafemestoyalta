<script lang="ts" setup>
    defineEmits<{
        (e: 'close'): void
    }>();
</script>

<template>
    <div class="modal-overlay" @click="$emit('close')" aria-label="Закрыть меню">
        <div class="modal-content" @click.stop>
            <AppNav @close="$emit('close')" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
