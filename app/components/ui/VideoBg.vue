<script lang="ts" setup>
const { isMobile } = useBreakpoints();
</script>

<template>
  <div class="video-wrapper">
    <img
      v-if="isMobile"
      class="bg-img"
      src="/images/bg-mob.jpg"
      alt="background"
    />

    <video v-else class="bg-video" autoplay muted loop playsinline>
      <source src="/video/bg-video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  //   background-color: var(--bg-muted);
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 100%;
  z-index: 10;
  object-fit: cover;
  //   isolation: isolate;
  background: #ffffff;
}

.bg-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  isolation: isolate;
}
</style>
