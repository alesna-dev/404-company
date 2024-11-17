import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { RiZoomOutLine, RiZoomInLine, RiCloseFill } from "react-icons/ri";

function Controls({ onClose }: { onClose: () => void }) {
  const { zoomIn, zoomOut } = useControls();

  return (
    <div className="flex items-center gap-5">
      <button type="button" aria-label="zoomin" onClick={() => zoomIn()}>
        <RiZoomInLine size="28px" className="cursor-pointer" />
      </button>
      <button type="button" aria-label="zoomout" onClick={() => zoomOut()}>
        <RiZoomOutLine size="28px" className="cursor-pointer" />
      </button>
      <button type="button" aria-label="close" onClick={onClose}>
        <RiCloseFill size="28px" className="cursor-pointer" />
      </button>
    </div>
  );
}

function ImagePreview({
  isOpen,
  onClose,
  image,
}: {
  isOpen: boolean;
  onClose: () => void;
  image: string | null;
}) {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="relative z-50 focus:outline-none"
      onClose={onClose}
    >
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-screen items-center justify-center ">
          <DialogPanel
            transition
            className="w-screen h-screen flex flex-col gap-4  bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <TransformWrapper centerOnInit>
              {() => (
                <>
                  <div className="flex w-full justify-end">
                    <Controls onClose={onClose} />
                  </div>
                  <div className="flex items-center justify-center w-full h-screen">
                    <TransformComponent>
                      {image ? (
                        <Image
                          src={image}
                          height={800}
                          width={800}
                          alt={"image carousel"}
                          className="max-h-[768px]"
                        />
                      ) : (
                        "Invalid Image"
                      )}
                    </TransformComponent>
                  </div>
                </>
              )}
            </TransformWrapper>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default ImagePreview;
