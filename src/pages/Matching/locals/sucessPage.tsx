import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Img } from "components";

const SuccessScreen: React.FC = ()  => {
  
  const onGroupButtonClick = useCallback(() => {
    // Please sync "Personal information" to the project
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[65.5px] leading-[normal] tracking-[normal] mq450:gap-[16px] mq975:gap-[33px]">
        <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700">
      <div className="container mx-auto flex  justify-between items-center">
      <NavLink to="/">
      <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-4 " />
      </NavLink>  

      
    <div className=" flex flex-row  items-center">
  
  
  </div>
      </div>
    </nav>
      
    
      <section className="w-full h-screen flex flex-row items-center text-center justify-center ">
        <div className="h-full  flex flex-col items-center justify-center gap-[29px] w-full">
        <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="56" cy="56" r="54.5" fill="#03A927" stroke="#7AEC93" stroke-width="3"/>
      <path d="M35 53.8333L50.3084 69L77 43" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

        <p className=" !font-kumbhsans !text-blue_gray-700_01 text-xl">
                             <>
                              
                             Successful!
                             </>
                </p>

                <label className="  font-normal  text-black text-sm ">
                Linked Origins system will use your preferences to find compatible matches
                 </label>     
          <div className="w-full h-[77px] flex flex-row items-center justify-center  box-border">
          <NavLink to={`/`}>
            <button
              className="self-stretch w-[146px] cursor-pointer"
            
            >
             Back to home
            </button>       
           </NavLink> 
           
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default SuccessScreen;
