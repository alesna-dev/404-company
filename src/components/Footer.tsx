import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" w-full bg-black bg-opacity-40 px-4 py-8 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex">
            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="flex-1 flex">
                <h3 className="font-bold text-3xl text-slate-200">404 Inc.</h3>
              </div>

              <div className="flex gap-4 flex-1">
                <div className="flex flex-1 flex-col gap-2">
                  <h3 className="text-primary font-bold">Link 1</h3>
                  <Link href="#">About Us</Link>
                  <Link href="#">Our Product</Link>
                  <Link href="#">Product</Link>
                  <Link href="#">Faq</Link>
                </div>
                <div className="flex flex-1 flex-col  gap-2">
                  <h3 className="text-primary font-bold">Link 1</h3>
                  <Link href="#">About Us</Link>
                  <Link href="#">Our Product</Link>
                  <Link href="#">Product</Link>
                  <Link href="#">Faq</Link>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-primary font-bold">Follow Us</h3>
                <div className="flex gap-4">
                  <FaInstagram className="h-6 w-6" />
                  <FaTwitter className="h-6 w-6" />
                  <FaFacebook className="h-6 w-6" />
                  <FaYoutube className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
          <span className="text-center text-slate-400">
            © 2024 404! Inc. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
