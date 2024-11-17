"use client";
import { RiArrowRightFill } from "react-icons/ri";
import ButtonIcon from "./ButtonIcon";
import Image from "next/image";
import ImagePreview from "./ImagePreview";
import { useState } from "react";

export type TProductCard = {
  name: string;
  image: string | null;
  id: string;
};

const ProductCard = ({ name, image, id }: TProductCard) => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  const preview = () => setOpen(true);

  return (
    <>
      <div className="border border-slate-400 rounded-lg flex flex-col gap-16 pb-4 bg-slate-900 bg-opacity-50">
        <div className="relative h-full flex justify-center items-center w-full flex-col gap-2">
          {image ? (
            <button type="button" onClick={preview} className="cursor-pointer">
              <div className="h-full w-full absolute bg-slate-900 bg-opacity-50 rounded-t-lg" />
              <Image
                src={image}
                alt={name || "product"}
                height={350}
                width={300}
                className="object-cover rounded-t-lg w-full"
              />
            </button>
          ) : (
            "No Preview"
          )}
        </div>

        <div className="flex items-center gap-4 h-14 p-4 ">
          <div className="flex-1">
            <span className="text-slate-100 font-semibold line-clamp-2 text-lg">
              {name || `Product ${id}`}
            </span>
            <div className="text-slate-400 text-xs ">Product id {id}</div>
          </div>
          <div>
            <ButtonIcon>
              <RiArrowRightFill className="text-slate-200 hover:animate-ping" />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <ImagePreview isOpen={open} onClose={onClose} image={image} />
    </>
  );
};

export default ProductCard;
