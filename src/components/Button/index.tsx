import React from "react";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[31px]",
} as const;
const variants = {
  outline: {
    white_A700: "border-white-A700 border-2 border-solid text-white-A700",
    blue_gray_400: "border-blue_gray-400 border-2 border-solid text-black-900",
    gray_600_04: "border-gray-600_04 border-2 border-solid text-black-900",
    gray_500_02: "border-gray-500_02 border-2 border-solid text-black-900",
    gray_600_05: "border-gray-600_05 border-2 border-solid text-gray-900_01",
  },
  fill: {
    white_A700: "bg-white-A700",
    red_600: "bg-red-600",
    blue_gray_100: "bg-blue_gray-100 text-gray-500_04",
    indigo_A400: "bg-indigo-A400 text-white-A700",
    blue_gray_800: "bg-blue_gray-800 text-white-A700",
  },
} as const;
const sizes = {
  "2xl": "h-[63px]",
  "4xl": "h-[90px] px-[35px] text-2xl",
  xs: "h-[26px] px-1",
  sm: "h-[35px]",
  md: "h-[44px] px-2.5 text-sm",
  "3xl": "h-[77px] px-[35px] text-[15px]",
  lg: "h-[58px] pl-7 pr-[35px] text-xl",
  xl: "h-[63px] px-[35px] text-[15px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xl",
  color = "gray_600_05",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
