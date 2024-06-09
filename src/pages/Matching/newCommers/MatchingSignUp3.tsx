import FrameComponent1 from "components/FrameComponent1";
import React from "react";

const MatchingSignUp3: React.FC = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-80 box-border gap-[39px] leading-[normal] tracking-[normal] mq825:gap-[19px]">
      <header className="self-stretch bg-white flex flex-row items-start justify-start pt-[67px] px-[62px] pb-[39.3px] box-border max-w-full z-[1]">
        <div className="h-[133px] w-[1512px] relative bg-white hidden max-w-full" />
        <img
          className="h-[26.7px] w-[124px] relative z-[2]"
          loading="lazy"
          alt=""
          src="/group-117.svg"
        />
      </header>
      <img
        className="w-5 h-[4.5px] relative hidden"
        alt=""
        src="/group-5.svg"
      />
      <div className="w-[1314px] h-[71px] relative [backdrop-filter:blur(21px)] rounded-29xl bg-whitesmoke hidden max-w-full z-[4]" />
      <FrameComponent1 />
    </div>
  );
};

export default MatchingSignUp3;
