"use client";

import Label from "./Label";
import ProductCard from "./ProductCard";
import { TProductListProps, TProductProps } from "@/types/global.types";
import { useEffect, useState } from "react";
import ImagePreview from "./ImagePreview";

const ProductList = ({ products }: { products: TProductListProps }) => {
  const [selectedProducts, setSelectedProducts] = useState<(string | null)[]>(
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const onSelectProduct = (product: TProductProps) => {
    const newProducts = [...selectedProducts];

    newProducts.push(product.image);

    setSelectedProducts(newProducts);
  };

  const handleClose = () => {
    setSelectedProducts([]);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedProducts.length === 2) {
      setIsOpen(true);
    }
  }, [selectedProducts.length]);

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
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            onClick={() => onSelectProduct(product)}
          />
        ))}
      </div>

      <ImagePreview
        isOpen={isOpen}
        image={selectedProducts}
        onClose={handleClose}
      />
    </section>
  );
};

export default ProductList;
