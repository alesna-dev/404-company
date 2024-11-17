"use client";
import { RiArrowRightUpFill, RiMenuFill } from "react-icons/ri";
import Button from "./Button";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeSidebar = () => setOpen(false);
  const openSidebar = () => setOpen(true);

  return (
    <div className="flex items-center p-4 bg-background py-5 container mx-auto sticky top-0 z-10">
      <div className="flex items-center gap-4 flex-1">
        <RiMenuFill className="text-2xl lg:hidden" onClick={openSidebar} />
        <h3 className="font-bold text-2xl text-slate-200">404 Inc.</h3>
      </div>

      <div className="hidden lg:flex items-center mr-4 gap-4">
        <Link href="#">About Us</Link>
        <Link href="#">Our Product</Link>
        <Link href="#">Product</Link>
        <Link href="#">Faq</Link>
      </div>

      <Button
        variant="contained"
        color="primary"
        rightIcon={<RiArrowRightUpFill className="text-slate-200" />}
      >
        Let&apos;s Talk
      </Button>
      <Sidebar isOpen={open} onClose={closeSidebar} />
    </div>
  );
};

export default Header;
