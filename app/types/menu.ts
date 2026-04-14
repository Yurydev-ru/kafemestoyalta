export interface Category {
  id: number;
  slug: string;
  title: string;
  image: string;
}

export interface CategoryCard {
  id: string | number;
  title: string;
  slug: string;
  image?: string;
}

export interface CategoriesListProps {
  items: Category[];
}

export interface MenuLayoutData {
  categories: Category[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  desc?: string;
  weight?: number;
}
