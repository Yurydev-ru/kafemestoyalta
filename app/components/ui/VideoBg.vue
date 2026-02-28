<script lang="ts" setup></script>

<template>
  <div class="video-wrapper">
    <video class="bg-video" autoplay muted loop playsinline preload="auto">
      <source src="/video/bg-video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-wrapper {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 0;
}

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
