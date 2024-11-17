"use client";

import { RiArrowDownFill } from "react-icons/ri";
import Button from "./Button";
import { useRouter } from "next/navigation";

const CtaSeeProduct = () => {
  const router = useRouter();

  const onClick = () => router.push("/#products");

  return (
    <div>
      <Button
        variant="outlined"
        rightIcon={<RiArrowDownFill className="animate animate-bounce" />}
        onClick={onClick}
      >
        See Product
      </Button>
    </div>
  );
};

export default CtaSeeProduct;
