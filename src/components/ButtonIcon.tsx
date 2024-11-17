import { ReactNode } from "react";

const ButtonIcon = ({ children }: { children: ReactNode }) => {
  return (
    <button className="border hover:bg-primary cursor-pointer border-slate-400 rounded-lg h-10 w-10 flex items-center justify-center">
      {children}
    </button>
  );
};

export default ButtonIcon;
