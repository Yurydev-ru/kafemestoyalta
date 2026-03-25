<script lang="ts" setup>
const route = useRoute();
const slug = route.params.slug as string;

const productsData = await import("@/data/products.json");
const products =
  productsData.default[slug as keyof typeof productsData.default] || [];
</script>

<template>
  <div>
    <h2 class="category-title">{{ slug }}</h2>

    <div class="grid">
      <div v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="product.image" alt="" >
          <h3 class="card-title">{{ product.title }}</h3>
          <p class="card-price">{{ product.price }}р.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid {
  width: 100%;
  max-width: 100%;
  padding-inline: 0.8rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  display: grid;
  //   grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.card {
  background: var(--bg-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  text-align: center;
  border-radius: 10px;
}

.category-title {
  color: var(--color-primary);
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-title,
.category-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
}

.card-price {
  margin-top: 0;
  margin-bottom: 0;
  color: var(--color-text-primary);
  font-size: 1rem;
}
</style>
