import type { Product, Category } from "../types/menu";
import { ref } from "vue";

export const useMenu = () => {
  const categories = ref<Category[]>([]);
  const products = ref<Product[]>([]);

  return { categories, products };
};
