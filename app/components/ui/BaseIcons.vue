<script lang="ts" setup>
const props = defineProps<{
  name: string
  size?: number | string
  class?: string
}>()

const sizeStyle = computed(() => {
  if (!props.size) return {}
  const val = typeof props.size === 'number' ? `${props.size}px` : props.size
  return { width: val, height: val }
})

const spritePath = "/icons/sprite.svg"
</script>

<template>
    

<svg
    class="inline-block shrink-0"
    :class="class"
    :style="sizeStyle"
    aria-hidden="true"
    focusable="false"
  >
    <use :href="`${spritePath}#${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
    svg {
  fill: currentColor;
}
</style>
