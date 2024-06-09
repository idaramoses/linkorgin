import InputFields from "components/InputFields";
import { FunctionComponent } from "react";
import React from "react";

const MatchingSignUp2:React.FC = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[227px] box-border gap-[68px] leading-[normal] tracking-[normal] mq450:gap-[17px] mq825:gap-[34px]">
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
      <section className="w-[1094px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[30px] max-w-full text-center text-8xl text-black font-poppins">
        <h1 className="m-0 w-[656px] relative text-inherit inline-block max-w-full box-border pr-5 font-inherit mq450:text-3xl">
          <p className="m-0">{`Please fill out the following information to `}</p>
          <p className="m-0">
            <span>{`create your profile and find your perfect `}</span>
            <span className="font-semibold font-poppins">match</span>
          </p>
        </h1>
        <InputFields />
      </section>
    </div>
  );
};

export default MatchingSignUp2;
