import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const MatchingWelcome: React.FC = ()  => {
  
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Personal information" to the project
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[65.5px] leading-[normal] tracking-[normal] mq450:gap-[16px] mq975:gap-[33px]">
      <header className="self-stretch  flex flex-row items-start justify-start py-10 fixed px-[62px]  box-border w-full z-[1] bg-white-A700">
        <div className="h-[133px] w-[1512px] relative bg-white hidden max-w-full" />
        <img
          className="h-[26.7px] w-[124px] relative z-[2]"
          loading="lazy"
          alt=""
          src="/images/group-117.svg"
        />
      </header>
      
      <section className="self-stretch flex flex-row items-start justify-center py-0 mt-40  box-border w-full text-left text-[54px] text-darkslategray-200 font-poppins">
        <div className="flex flex-col items-center justify-center gap-[24px] w-full">
          <div className="flex flex-row items-center justify-center py-0 px-[54px]  w-full">
            <h1 className="m-0 relative text-inherit font-semibold font-inherit text-4xl">
              <span>{`Welcome to `}</span>
              <span className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#182a3e,_#ba3f37_29.44%,_#406ea4_74.99%)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Mon - Ami
              </span>
              <span> Matching</span>
            </h1>
          </div>
          <h3 className="m-0 relative text-base font-normal font-inherit ">
            We connect newcomers to Canada with locals who can offer support and
            guidance.
          </h3>
        </div>
      </section>
      <section className="w-full h-[618px] flex flex-row items-start justify-center ">
        <div className="self-stretch  flex flex-col items-end justify-start gap-[29px] w-full">
          <div className="w-full h-[77px] flex flex-row items-center justify-center  box-border">
          <NavLink to={`/matching/category`}>
            <Button
              className="self-stretch w-[146px] cursor-pointer"
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "17",
                borderColor: "#979797",
                borderRadius: "38.5px",
                "&:hover": { borderColor: "#979797" },
                width: 146,
              }}
              onClick={onGroupButtonClick}
            >
              Signup
            </Button>       
           </NavLink> 
           
          </div>
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden "
            loading="lazy"
            alt=""
            src="/images/group.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default MatchingWelcome;
