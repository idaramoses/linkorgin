import FrameComponent from "components/FrameComponent";
import { FunctionComponent } from "react";
import React from "react";

const CategoryPage:React.FC = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 box-border  leading-[normal] tracking-[normal] text-left text-8xl text-black font-poppins mq450:gap-[20px] mq750:gap-[41px]">
      <header className="self-stretch bg-white flex flex-row items-start justify-start pt-10 px-[62px] pb-[39.3px] box-border max-w-full z-[1]">
        <div className="w-full h-screen relative bg-white hidden max-w-full" />
        <img
          className="h-[26.7px] w-[124px] relative z-[2]"
          loading="lazy"
          alt=""
          src="/images/group-117.svg"
        />
      </header>
      <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h3 className="m-0 relative text-inherit font-medium font-inherit mq450:text-3xl">
          Select your category
        </h3>
      </div>
      <img
        className="w-5 h-[4.5px] relative hidden"
        alt=""
        src="/images/group-5.svg"
      />
      <div className="w-full relative [backdrop-filter:blur(21px)] rounded-29xl bg-whitesmoke hidden max-w-full z-[5]" />
      <FrameComponent />
    </div>
  );
};

export default CategoryPage;
