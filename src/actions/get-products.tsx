"use server";

import { TProduct } from "@/types/global.types";

const getProducts = async (): Promise<TProduct[] | []> => {
  const response = await fetch("https://www.giovankov.com/api/product.json");

  const result = await response.json();

  return result?.data || [];
};

export default getProducts;
