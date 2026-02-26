<script lang="ts" setup></script>

<template>
  <section class="hero-section">
    <div class="bg-video__wrapper">
      <video class="bg-video" autoplay muted loop playsinline preload="auto">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <source src="/video/bg-video.mp4" type="video/mp4" />
      </video>
    </div>
    <h1 class="title">Welcome to Our Website</h1>
    <p class="subtitle">Discover amazing content and connect with us.</p>
  </section>
</template>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  color: #fff;
  text-align: center;

  .title {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .subtitle {
    font-size: 24px;
  }
}
.bg-video__wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
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
