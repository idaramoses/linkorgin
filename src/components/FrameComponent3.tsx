import React from "react";
import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-[206px] box-border max-w-full text-left text-8xl text-white font-hanken-grotesk mq825:pb-[134px] mq825:box-border ${className}`}
    >
      <div className="w-[1009px] flex flex-col items-start justify-start gap-[14px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[576px] max-w-full mq450:gap-[72px] mq825:gap-[144px] mq1425:flex-wrap mq1425:gap-[288px]">
          <div className="w-[507px] rounded-md bg-mediumslateblue flex flex-col items-start justify-start pt-[35px] px-11 pb-[52px] box-border gap-[22px] shrink-0 [debug_commit:bf4bc93] max-w-full mq825:pl-[22px] mq825:pr-[22px] mq825:box-border">
            <div className="w-[507px] h-[239px] relative rounded-md bg-mediumslateblue hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[3px] pl-0">
              <img
                className="h-[50px] w-[50px] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-4534648.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[22px]">
                <h1 className="m-0 relative text-inherit leading-[22px] font-semibold font-inherit z-[1] mq450:text-3xl mq450:leading-[18px]">
                  Upload a document
                </h1>
              </div>
              <p className="m-0 self-stretch relative text-smi font-poppins text-center z-[1]">
                Please upload a clear scan or photo of your Permanent Resident
                Card (PR Card) or valid visa document. 
              </p>
            </div>
          </div>
          <div className="w-[397px] flex flex-col items-start justify-end pt-0 px-0 pb-1 box-border max-w-full shrink-0 text-5xl text-black font-poppins">
            <div className="self-stretch rounded-6xs box-border flex flex-col items-start justify-start pt-[47px] pb-12 pr-5 pl-[27px] gap-[8px] shrink-0 [debug_commit:bf4bc93] max-w-full border-[2px] border-solid border-darkgray-200">
              <div className="w-[397px] h-[197px] relative rounded-6xs box-border hidden max-w-full border-[2px] border-solid border-darkgray-200" />
              <h2 className="m-0 w-[63px] h-9 relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-lgi">
                Local
              </h2>
              <p className="m-0 self-stretch h-[52px] relative text-mid inline-block z-[1]">
                Select this if you are a resident of Canada and want to help
                newcomers
              </p>
            </div>
          </div>
        </div>
        <div className="w-[507px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-2xs text-black font-poppins">
          <div className="relative leading-[16px]">
            Supported File Formats: JPG, PNG, PDF 
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
