import getProductImages from "@/actions/get-product-images";
import getProducts from "@/actions/get-products";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { TProductListProps } from "@/types/global.types";

export default async function Home() {
  const [products, productImages] = await Promise.all([
    getProducts(),
    getProductImages(),
  ]);

  const findProductImages = (id: string) => {
    return productImages?.find((item) => item.id.includes(id))?.image || null;
  };

  const mapProductImagesToProduct: TProductListProps = products.map((item) => ({
    ...item,
    image: findProductImages(item.id),
  }));

  return (
    <div className="flex flex-col gap-5 px-4 h-full">
      <Hero />
      <ProductList products={mapProductImagesToProduct || []} />
    </div>
  );
}
