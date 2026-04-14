<script lang="ts" setup>
const categories = await import("@/data/categories.json");
</script>

<template>
  <div class="menu">
    <h2 class="menu-title">Меню</h2>
    <ul class="categories-list">
      <li v-for="cat in categories.default" :key="cat.id">
        <UiCategoryCard />
        <!-- <NuxtLink class="card-cat" :to="`/category/${cat.slug}`">
          <h3>{{ cat.title }}</h3>
          <img :src="cat.image" alt="" >
        </NuxtLink> -->
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
    display: block;
    text-transform: uppercase;
    color: var(--color-primary);
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3.5rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
}
.categories-list {
  display: grid;
  //   grid-template-columns: 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem 1rem;
  list-style: none;
}

.categories-list li {
  &:hover {
    transform: scale(1.1);
  }
}

.card-cat {
  color: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  //   padding: 1rem;
}

.card-cat h3 {
  margin-bottom: 1.5rem;
}
</style>
