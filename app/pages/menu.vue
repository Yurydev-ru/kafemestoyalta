<script lang="ts" setup>
const categories = await import("@/data/categories.json");
</script>

<template>
  <div class="menu">
    <h2 class="menu-title">Categories</h2>
    <ul class="categories-list">
      <li v-for="cat in categories.default" :key="cat.id">
        <NuxtLink class="card-cat" :to="`/category/${cat.slug}`">
          <h3>{{ cat.title }}</h3>
          <img :src="cat.image" alt="" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  background: var(--bg-muted);

  height: calc(100vh - 120px);
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  //   align-items: center;
  //   justify-content: center;
  flex-direction: column;

  .menu-title {
    color: var(--color-primary);
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
.categories-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  list-style: none;
}

.card-cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}
</style>
