import getProducts from "@/actions/get-products";
import Label from "./Label";
import ProductCard from "./ProductCard";
import getProductImages from "@/actions/get-product-images";

const ProductList = async () => {
  const [products, productImages] = await Promise.all([
    getProducts(),
    getProductImages(),
  ]);

  const findProductImages = (id: string) => {
    return productImages?.find((item) => item.id.includes(id))?.image || null;
  };

  const mapProductImagesToProduct = products.map((item) => ({
    ...item,
    image: findProductImages(item.id),
  }));

  return (
    <section id="products" className="flex flex-col gap-4">
      <Label label="Our Products" />
      <div>
        <h3 className="font-bold text-2xl md:text-5xl">
          Explore Our Bestsellers
        </h3>
        <p className="text-sm text-slate-400 md:text-lg">
          Handpicked Items That Stand Out for Quality and Value.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {mapProductImagesToProduct?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
