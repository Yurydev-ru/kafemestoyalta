<script lang="ts" setup>
    defineEmits<{
        (e: 'close'): void
    }>();
</script>

<template>
    <div class="modal-overlay" @click="$emit('close')">
        <<div class="modal_content">
            <ul>
                <li>34</li>
                <li>34</li>
                <li>34</li>
                <li>34</li>
                <li>34</li>
            </ul>
        </div>>
    </div>
</template>

<style lang="scss" scoped>
    
</style>
