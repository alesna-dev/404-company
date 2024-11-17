import Image from "next/image";

const ProductShowCase = ({ images }: { images: string[] | [] }) => {
  return (
    <div className="hidden lg:flex flex-wrap items-center justify-center h-fit gap-4  max-w-md">
      {images?.map((item) => (
        <Image
          src={item}
          alt={item}
          height={150}
          width={150}
          key={item}
          className={`bg-cover border border-slate-400 rounded-lg animate-slow-bounce`}
        />
      ))}
    </div>
  );
};

export default ProductShowCase;
