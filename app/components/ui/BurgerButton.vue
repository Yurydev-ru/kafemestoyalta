<script lang="ts" setup>
import type { BurgerButtonProps } from "@/types/ui/BurgerButton.types";
import { on } from "node:cluster";

const props = defineProps<BurgerButtonProps>();
const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>();
function toggle() {
    emit('update:modelValue', !props.modelValue);
}

onMounted (() => {
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape' && props.modelValue === false) { 
            emit('update:modelValue', false);
        }
    })
})

</script>

<template>
    <button class="burger" :class="{ 'is-open': modelValue }" type="button" :aria-expanded="modelValue" :aria-controls="controls" aria-label="Toggle menu" @click="toggle"
    >
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
    </button>
</template>

<style lang="scss" scoped>
    
</style>
