<script lang="ts" setup></script>

<template>
  <div class="video-wrapper">
    <picture class="video-wrapper_overlay">
      <source media="(max-width: 767px)" srcset="/images/bg-mob.jpg" />
      <video class="bg-video" autoplay muted loop playsinline preload="auto">
        <source src="/video/bg-video.mp4" type="video/mp4" />
      </video>
    </picture>
    <!-- <img
      v-if="isMobile"
      class="bg-img"
      src="/images/bg-mob.jpg"
      alt="background"
    /> -->
  </div>
</template>

<style lang="scss" scoped>
.video-wrapper {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: -10;
  //   background-color: var(--bg-muted);

  &_overlay {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
}

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
