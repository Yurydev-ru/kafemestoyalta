export interface Category {
  id: number;
  slug: string;
  title: string;
  image: string;
  hasSubcategories?: boolean;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  desc?: string;
}

export type ProductGroup =
  | Product[]
  | {
      all?: Product[];
      cold?: Product[];
      fried?: Product[];
      sets?: Product[];
    };
