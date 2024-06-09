import React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TypeOptionsType = {
  className?: string;
  newcomer?: string;
  selectThisIfYouAreNewToCa?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const TypeOptions: FunctionComponent<TypeOptionsType> = ({
  className = "",
  newcomer,
  selectThisIfYouAreNewToCa,
  propDisplay,
  propMinWidth,
}) => {
  const newcomerStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    
    <div
      className={`flex-1 rounded-6xs box-border flex flex-col items-start justify-start pt-[47px] pb-12 pr-5 pl-[27px] gap-[8px] min-w-[258px] max-w-full text-left text-5xl text-black font-poppins border-[2px] border-solid border-darkgray-200 cursor-pointer ${className}`}
    >
      <div className="w-[397px] h-[197px] relative rounded-6xs box-border hidden max-w-full border-[2px] border-solid border-darkgray-200" />
      <h3
        className="m-0 relative text-inherit font-medium font-inherit z-[1] text-base"
        style={newcomerStyle}
      >
        {newcomer}
      </h3>
      <p className="m-0 self-stretch relative text-sm z-[1]">
        {selectThisIfYouAreNewToCa}
      </p>
    </div>
  );
};

export default TypeOptions;
