import { FunctionComponent } from "react";
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent2 from "./FrameComponent2";
import React from "react";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <form
      className={`m-0 w-[1029px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[15px] max-w-full ${className}`}
    >
      <div className="flex flex-row items-start justify-start pt-0 px-px pb-[5px]">
        <h1 className="m-0 h-[41px] relative text-8xl font-normal font-poppins text-black text-center inline-block mq450:text-3xl">
          Matching Preference
        </h1>
      </div>
      <div className="w-[527px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[4px] max-w-full">
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="relative text-xs font-semibold font-poppins text-darkslategray-100 text-left">
            In which city/province are you located?
          </div>
        </div>
        <input
          className="[outline:none] bg-[transparent] self-stretch h-[46px] relative rounded-md box-border min-w-[250px] border-[1px] border-solid border-gray"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
        <div className="relative text-xs font-semibold font-poppins text-darkslategray-100 text-left">
          How long have you lived in Canada?
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[573px] max-w-full mq450:gap-[72px] mq825:gap-[143px] mq1425:flex-wrap mq1425:gap-[286px]">
          <div className="w-[510px] flex flex-col items-start justify-start gap-[15px] shrink-0 [debug_commit:bf4bc93] max-w-full">
            <div className="self-stretch rounded-md box-border flex flex-row items-start justify-between py-3 pr-[17px] pl-[15px] max-w-full gap-[20px] border-[1px] border-solid border-gray">
              <div className="h-[46px] w-[507px] relative rounded-md box-border hidden max-w-full border-[1px] border-solid border-gray" />
              <div className="relative text-xs font-poppins text-lightgray text-left z-[1]">
                Select
              </div>
              <img
                className="h-[18px] w-[18px] relative object-contain min-h-[18px] z-[1]"
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>
            <FrameComponent2 whatAreYourAreasOfExperti="What are your areas of expertise or experience that could be helpful to newcomers?" />
            <FrameComponent2
              whatAreYourAreasOfExperti="What motivates you to connect with newcomers?"
              propPadding="0px 3px 0px 0px"
            />
          </div>
          <div className="w-[397px] rounded-6xs box-border flex flex-col items-start justify-start pt-[47px] pb-12 pr-5 pl-[27px] gap-[8px] shrink-0 [debug_commit:bf4bc93] max-w-full border-[2px] border-solid border-darkgray-200">
            <div className="w-[397px] h-[197px] relative rounded-6xs box-border hidden max-w-full border-[2px] border-solid border-darkgray-200" />
            <h1 className="m-0 w-[63px] h-9 relative text-5xl font-medium font-poppins text-black text-left inline-block z-[1] mq450:text-lgi">
              Local
            </h1>
            <p className="m-0 self-stretch h-[52px] relative text-mid font-poppins text-black text-left inline-block z-[1]">
              Select this if you are a resident of Canada and want to help
              newcomers
            </p>
          </div>
        </div>
      </div>
      <div className="w-[527px] flex flex-col items-start justify-start pt-0 pb-[9px] pr-5 pl-0 box-border gap-[4px] max-w-full">
        <div className="relative text-xs font-semibold font-poppins text-darkslategray-100 text-left inline-block max-w-full">
          Any specific cultural backgrounds or experiences you'd prefer to
          connect with?
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch h-[46px] font-poppins italic text-xs text-lightgray"
          placeholder="(Optional)"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#858585" },
            "& .MuiInputBase-root": {
              height: "46px",
              borderRadius: "6px",
              fontSize: "12px",
            },
            "& .MuiInputBase-input": { color: "#cacaca" },
          }}
        />
      </div>
      <Button
        className="w-[507px] h-[46px] max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
        disableElevation={true}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "15",
          background: "#3864ff",
          borderRadius: "6px",
          "&:hover": { background: "#3864ff" },
          width: 507,
          height: 46,
        }}
      >
        Next
      </Button>
    </form>
  );
};

export default FrameComponent1;
