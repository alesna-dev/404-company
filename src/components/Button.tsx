import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: ReactNode;
  variant?: "contained" | "outlined";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  color?: "primary" | "secondary";
}

const style = {
  contained_primary:
    "bg-primary text-slate-200 hover:bg-transparent hover:border border-primary",
  outlined_primary:
    "bg-transparent border border-primary text-slate-200 hover:bg-primary",
};

const Button = ({
  onClick,
  disabled,
  type,
  children,
  variant = "contained",
  rightIcon,
  leftIcon,
  color = "primary",
}: IButton) => {
  return (
    <button
      className={`${
        style[`${variant}_${color}` as keyof typeof style]
      } rounded-lg px-4 h-11 font-bold  flex items-center gap-1`}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex-1">{leftIcon && leftIcon}</div>
      <div>{children}</div>
      <div className="flex-1">{rightIcon && rightIcon}</div>
    </button>
  );
};

export default Button;
