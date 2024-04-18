import React from "react";
import { Button, Text, Heading, Radio, RadioGroup, Img, SelectBox } from "../../../components";


const Step7 = () => {
   
      return (
        <div className="self-end mt-10 w-full flex items-center justify-center">
        <div className="flex flex-col w-full md:ml-0 md:w-full">
        <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                    <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                      <>
                      Social needs
                      </>
                    </Text>
                   
                  </div>
      
           
                  <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                Specific challenges or concerns related to immigration and settlement
                </label>
                <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                <textarea
                              placeholder="Type here..."
                              className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#E0E0E0] font-hanken focus:outline-none text-[#858585] text-start"
                            />
                </div>
              </div>
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                Support services or resources
                </label>
                <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                <textarea
                              placeholder="Type here..."
                              className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#E0E0E0] font-hanken focus:outline-none text-[#858585] text-start"
                            />
                </div>
              </div>
        </div>
    </div>
        
      );
    };
    
    export default Step7;