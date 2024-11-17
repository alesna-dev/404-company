import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { RiCloseFill } from "react-icons/ri";

function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={onClose}
    >
      <DialogBackdrop className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center ">
          <DialogPanel
            transition
            className="w-screen h-screen flex flex-col gap-4  bg-white/5  backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center p-6">
                <h3 className="font-bold text-3xl text-slate-200 flex-1">
                  404 Inc.
                </h3>
                <button type="button" aria-label="close" onClick={onClose}>
                  <RiCloseFill size="28px" className="cursor-pointer" />
                </button>
              </div>
              <div className="flex flex-col flex-1">
                <Link
                  href="#"
                  className="text-2xl border-y border-slate-400 p-4"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-2xl border-b border-slate-400 p-4"
                >
                  Our Product
                </Link>
                <Link
                  href="#"
                  className="text-2xl border-b border-slate-400 p-4"
                >
                  Product
                </Link>
                <Link
                  href="#"
                  className="text-2xl border-b border-slate-400 p-4"
                >
                  Faq
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </DialogBackdrop>
    </Dialog>
  );
}

export default Sidebar;
