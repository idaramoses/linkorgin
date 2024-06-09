import FrameComponent from "components/FrameComponent";
import * as React from "react";

interface CategoryCardProps {
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col grow px-7 py-14 text-black rounded-lg border-2 border-solid border-zinc-400 max-md:px-5 max-md:mt-10">
      <div className="text-2xl font-medium">{title}</div>
      <div className="mt-6 text-lg">{description}</div>
    </div>
  );
};

const Mathcategory: React.FC = () => {
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
    <div className="flex flex-row items-start justify-center py-0 px-5 box-border w-full">
      <h3 className="m-0 relative text-inherit font-medium font-inherit text-3xl my-10">
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

export default Mathcategory;