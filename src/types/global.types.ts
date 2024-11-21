export type TProductImages = {
  id: string[];
  image: string;
};

export type TProduct = {
  id: string;
  name: string;
};

export type TProductProps = { image: string | null } & TProduct;
export type TProductListProps = TProductProps[];
