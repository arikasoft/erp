export interface Service {
  id: number;

  title: string;

  description: string;

  image: string;

  slug: string;
}

export interface Product {
  id: number;

  name: string;

  description: string;

  image: string;

  slug: string;
}

export interface Blog {
  id: number;

  title: string;

  slug: string;

  image: string;

  created_at: string;
}