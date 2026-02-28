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
  position: relative;
  width: 100%;
  display: flex;
}

.bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
