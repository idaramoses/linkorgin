import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import React from "react";

export type InputFieldsType = {
  className?: string;
};

const InputFields: FunctionComponent<InputFieldsType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end max-w-full text-left text-xs text-darkslategray-100 font-poppins ${className}`}
    >
      <div className="w-[1010px] flex flex-col items-start justify-start gap-[15px] max-w-full">
        <div className="self-stretch flex flex-row items-end justify-start gap-[578px] max-w-full mq450:gap-[72px] mq825:gap-[144px] mq1425:flex-wrap mq1425:gap-[289px]">
          <div className="w-[506px] flex flex-col items-start justify-start gap-[15px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <div className="w-[325px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
                  <b className="relative font-semibold inline-block min-w-[65px]">
                    First name
                  </b>
                  <b className="relative font-semibold inline-block min-w-[64px]">
                    Last name
                  </b>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px] mq450:flex-wrap">
                <TextField
                  className="[border:none] bg-[transparent] h-[46px] flex-1 relative min-w-[161px]"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#858585" },
                    "& .MuiInputBase-root": {
                      height: "46px",
                      borderRadius: "6px",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent] h-[46px] flex-1 relative min-w-[161px]"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#858585" },
                    "& .MuiInputBase-root": {
                      height: "46px",
                      borderRadius: "6px",
                    },
                  }}
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <b className="relative font-semibold inline-block min-w-[87px]">
                Email address
              </b>
              <input
                className="[outline:none] bg-[transparent] self-stretch h-[46px] relative rounded-md box-border min-w-[250px] border-[1px] border-solid border-gray"
                type="text"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
              <b className="relative font-semibold inline-block min-w-[90px]">
                Phone number
              </b>
              <div className="self-stretch rounded-md box-border flex flex-row items-end justify-start pt-[5px] px-[11px] pb-1.5 gap-[7.5px] max-w-full border-[1px] border-solid border-gray">
                <div className="h-[46px] w-[506px] relative rounded-md box-border hidden max-w-full border-[1px] border-solid border-gray" />
                <div className="w-[75px] flex flex-col items-start justify-end pt-0 px-0 pb-[4.5px] box-border">
                  <div className="self-stretch flex flex-row items-start justify-start">
                    <input
                      className="w-[75px] [border:none] [outline:none] font-poppins text-xs bg-[transparent] h-[19px] relative text-gray whitespace-pre-wrap text-left inline-block p-0 z-[1]"
                      placeholder="🇦🇹          +234"
                      type="text"
                    />
                    <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0 ml-[-58px]">
                      <img
                        className="w-2.5 h-[5px] relative object-contain z-[2]"
                        alt=""
                        src="/vector.svg"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="h-[31.5px] w-px relative z-[1]"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[397px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border max-w-full shrink-0 text-5xl text-black">
            <div className="self-stretch rounded-6xs box-border flex flex-col items-start justify-start pt-[47px] pb-12 pr-5 pl-[27px] gap-[8px] shrink-0 [debug_commit:bf4bc93] max-w-full border-[2px] border-solid border-darkgray-200">
              <div className="w-[397px] h-[197px] relative rounded-6xs box-border hidden max-w-full border-[2px] border-solid border-darkgray-200" />
              <h1 className="m-0 w-[63px] h-9 relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-lgi">
                Local
              </h1>
              <p className="m-0 self-stretch h-[52px] relative text-mid inline-block z-[1]">
                Select this if you are a resident of Canada and want to help
                newcomers
              </p>
            </div>
          </div>
        </div>
        <div className="w-[527px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px] max-w-full">
          <b className="relative font-semibold inline-block min-w-[90px]">
            Phone number
          </b>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full text-black">
            <div className="self-stretch rounded-md box-border flex flex-row items-end justify-start pt-[5px] px-[7px] pb-1 gap-[14px] max-w-full border-[1px] border-solid border-gray mq825:flex-wrap">
              <div className="h-[46px] w-[507px] relative rounded-md box-border hidden max-w-full border-[1px] border-solid border-gray" />
              <div className="rounded bg-ghostwhite flex flex-row items-start justify-start pt-[7px] pb-2 pr-[9px] pl-3 gap-[6px] z-[1]">
                <div className="h-[33px] w-[77px] relative rounded bg-ghostwhite hidden" />
                <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[42px] z-[2]">
                  English
                </a>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <img
                    className="w-[7.2px] h-[7.2px] relative z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
              </div>
              <div className="w-[352px] flex flex-col items-start justify-start max-w-full">
                <div className="rounded bg-ghostwhite flex flex-row items-start justify-start pt-[7px] px-[9px] pb-2 gap-[6px] z-[1]">
                  <div className="h-[33px] w-20 relative rounded bg-ghostwhite hidden" />
                  <div className="relative inline-block min-w-[48px] z-[2]">
                    Spanish
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                    <img
                      className="w-[7.2px] h-[7.2px] relative z-[2]"
                      loading="lazy"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                <img
                  className="w-[18px] h-[18px] relative object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/vuesaxlineararrowleft@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch rounded-10xs flex flex-col items-start justify-start pt-2.5 px-0 pb-2 gap-[10.3px] border-[1px] border-solid border-gainsboro">
              <div className="self-stretch h-[159px] relative rounded-10xs box-border hidden border-[1px] border-solid border-gainsboro" />
              <div className="flex flex-row items-start justify-start py-0 px-[22px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <input
                      className="m-0 w-[17px] h-[17px] relative rounded-sm z-[1]"
                      type="checkbox"
                    />
                  </div>
                  <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[42px] z-[1]">
                    English
                  </a>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-226.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-[22px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <input className="m-0 h-[18px] w-[17px]" type="checkbox" />
                  <div className="relative inline-block min-w-[41px] z-[1]">
                    French
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-226.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-[22px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <input
                      className="m-0 w-[17px] h-[17px] relative rounded-sm z-[1]"
                      type="checkbox"
                    />
                  </div>
                  <div className="relative inline-block min-w-[48px] z-[1]">
                    Spanish
                  </div>
                </div>
              </div>
              <img
                className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/vector-226.svg"
              />
              <div className="flex flex-row items-start justify-start py-0 px-[22px]">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <input className="m-0 h-[18px] w-[17px]" type="checkbox" />
                  <div className="relative inline-block min-w-[40px] z-[1]">
                    Arabic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputFields;
