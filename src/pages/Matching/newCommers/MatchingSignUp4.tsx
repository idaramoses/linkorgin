import FrameComponent3 from "components/FrameComponent3";
import React from "react";
import { FunctionComponent } from "react";

const MatchingSignUp4:React.FC = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[74px] box-border gap-[31px] leading-[normal] tracking-[normal] mq825:gap-[15px]">
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
      <main className="w-[1201px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[55px] max-w-full mq825:gap-[27px]">
        <section className="w-[870px] relative text-8xl font-poppins text-black text-center inline-block max-w-full box-border pr-5 mq450:text-3xl">
          We require proof of your immigration status in Canada to ensure a safe
          and secure platform for all users
        </section>
        <FrameComponent3 />
        <footer className="w-[851px] flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full text-left text-smi text-darkgray-100 font-poppins lg:pl-[27px] lg:pr-[27px] lg:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[23px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <img
                className="h-[37px] w-[37px] relative"
                loading="lazy"
                alt=""
                src="/group-4534646.svg"
              />
            </div>
            <div className="self-stretch relative leading-[150.7%]">
              Your document will be securely uploaded and stored using
              industry-standard encryption. We only access the information
              required to verify your immigration status and will never share
              your document or information with any third party without your
              consent. For more details on our data security practices, please
              refer to our Privacy Policy.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MatchingSignUp4;
