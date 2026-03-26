export interface Category {
  id: number;
  slug: string;
  title: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  desc?: string;
  weight?: number;
}
