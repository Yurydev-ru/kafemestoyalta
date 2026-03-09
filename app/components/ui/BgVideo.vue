<script lang="ts" setup></script>

<template>
  <div class="video-wrapper">
    <picture class="bg-image">
      <source media="(max-width: 767px)" srcset="/images/bg-mob.jpg" />
      <img src="/images/bg-mob.jpg" alt="" />
    </picture>

    <video class="bg-video" autoplay muted loop playsinline preload="auto">
      <source src="/video/bg-video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
}

.bg-video {
  display: none;
}

@media (min-width: 1024px) {
  .bg-image {
    transform: scale(0);
    transition: 1s ease-in-out;
  }
  .bg-video {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: 1s ease-in-out;
  }
}
</style>
