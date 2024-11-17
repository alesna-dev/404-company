import getProductImages from "@/actions/get-product-images";
import CtaSeeProduct from "./CtaSeeProduct";
import ProductShowCase from "./ProductShowcase";

const description =
  "At 404!, we offer premium products crafted for quality and reliability, delivering exceptional value and service.";

const Hero = async () => {
  const productImages = await getProductImages();

  return (
    <section id="hero" className="flex lg:flex-row h-hero">
      <div className="flex flex-col justify-center gap-8 flex-1">
        <h1 className="text-6xl font-bold">
          The Best Products <br /> Handpicked{" "}
          <span className="text-primary"> Just for You.</span>
        </h1>

        <p className="text-md md:text-lg font-normal text-slate-400">
          {description}
        </p>

        <CtaSeeProduct />
      </div>
      <div className="flex items-center justify-center h-full">
        <ProductShowCase images={productImages?.map((item) => item.image)} />
      </div>
    </section>
  );
};

export default Hero;
