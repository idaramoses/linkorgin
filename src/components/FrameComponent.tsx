import { FunctionComponent } from "react";
import TypeOptions from "./TypeOptions";
import React from "react";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[35px] box-border max-w-full text-left text-5xl text-black font-poppins ${className}`}
    >
      <div className="w-[839px] flex flex-row flex-wrap items-start justify-center gap-[45px] max-w-full mq450:gap-[22px]">
        <TypeOptions
          newcomer="Newcomer"
          selectThisIfYouAreNewToCa="Select this if you are new to Canada and seeking assistance"
        />
        <TypeOptions
          newcomer="Local"
          selectThisIfYouAreNewToCa="Select this if you are a resident of Canada and want to help newcomers"
          propDisplay="inline-block"
          propMinWidth="63px"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
