import React from "react";

const sizes = {
  "3xl": "text-[54px] font-semibold md:text-[46px] sm:text-[40px]",
  "2xl": "text-[47px] font-semibold md:text-[43px] sm:text-[37px]",
  xl: "text-2xl font-semibold md:text-[22px]",
  "5xl": "text-[58px] font-semibold md:text-[50px] sm:text-[44px]",
  "4xl": "text-[57px] font-semibold md:text-[49px] sm:text-[43px]",
  s: "text-[15px] font-semibold",
  md: "text-xl font-bold",
  "6xl": "text-[71px] font-semibold md:text-5xl",
  xs: "text-sm font-semibold",
  lg: "text-[22px] font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-600_02 font-hankengrotesk ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
