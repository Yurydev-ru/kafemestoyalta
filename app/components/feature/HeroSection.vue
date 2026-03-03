<script lang="ts" setup></script>

<template>
  <section class="hero-sections">
    <VideoBg />
    <div class="hero-sections_content">
      <div class="hero-sections_title">
        <span>кафе</span>
        <span>Место</span>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
        adipisci.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-sections {
  position: relative;
  min-height: 100vh;
  z-index: 1;
  isolation: isolate;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-sections_content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.hero-sections_title {
  color: #ffffff;
  display: flex;
  flex-direction: column;
}

.hero-sections_title span {
  font-size: 18px;
}

.hero-sections_title span + span {
  font-size: 24px;
}
</style>
