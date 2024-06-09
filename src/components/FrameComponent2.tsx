import React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  className?: string;
  whatAreYourAreasOfExperti?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  whatAreYourAreasOfExperti,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-xs text-darkslategray-100 font-poppins ${className}`}
      style={frameDivStyle}
    >
      <div className="relative font-semibold">{whatAreYourAreasOfExperti}</div>
      <div className="self-stretch rounded-md box-border flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] max-w-full gap-[20px] text-lightgray border-[1px] border-solid border-gray">
        <div className="h-[46px] w-[507px] relative rounded-md box-border hidden max-w-full border-[1px] border-solid border-gray" />
        <div className="relative z-[1]">Select</div>
        <img
          className="h-[18px] w-[18px] relative object-contain min-h-[18px] z-[1]"
          alt=""
          src="/vuesaxlineararrowleft@2x.png"
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
