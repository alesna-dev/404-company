"use server";

import { TProductImages } from "@/types/global.types";

const getProductImages = async (): Promise<TProductImages[] | []> => {
  const response = await fetch("https://www.giovankov.com/api/image.json");

  const result = await response.json();

  return result?.data || [];
};

export default getProductImages;
