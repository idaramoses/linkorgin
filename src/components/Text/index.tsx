import React from "react";

const sizes = {
  "5xl": "text-[23px] font-normal md:text-[21px]",
  xs: "text-[11px] font-normal",
  lg: "text-[15px] font-normal",
  "6xl": "text-2xl font-medium md:text-[22px]",
  "7xl": "text-[47px] font-medium md:text-[43px] sm:text-[37px]",
  "8xl": "text-7xl font-normal md:text-5xl",
  s: "text-[13px] font-normal",
  "2xl": "text-xl font-medium",
  "3xl": "text-[21px] font-normal",
  "4xl": "text-[22px] font-normal",
  xl: "text-[17px] font-medium",
  md: "text-sm font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "3xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
