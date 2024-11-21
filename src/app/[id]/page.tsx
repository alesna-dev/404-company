import getProductImages from "@/actions/get-product-images";
import getProducts from "@/actions/get-products";
import Image from "next/image";

type TDetailProductProps = {
  params: { id: string };
};

const DetailProduct = async ({ params }: TDetailProductProps) => {
  const [products, productImages] = await Promise.all([
    getProducts(),
    getProductImages(),
  ]);

  const product = products.find((item) => item.id === params.id);
  const image = productImages.find((item) => item?.id?.includes(params.id));

  return (
    <div className="px-4 flex flex-col items-center">
      {image && image.image && (
        <Image
          src={image?.image}
          height={400}
          width={400}
          alt={product?.name || "product"}
        />
      )}
      {product?.name || "not found"}
    </div>
  );
};

export default DetailProduct;
