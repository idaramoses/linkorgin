import React from "react";
import { Button, Text, Heading, Radio, RadioGroup, Img, SelectBox } from "../../../components";


const Step5 = () => {
   
      return (
        <div className="self-end mt-10 w-full flex items-center justify-center">
        <div className="flex flex-col w-full md:ml-0 md:w-full">
        <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                    <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                      <>
                      Current housing situatuion
                      </>
                    </Text>
                   
                  </div>
      
           
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                Highest housing situatuion
                </label>
                <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                  <option value="">Select housing situatuion</option>
                  <option value="railway">Renting an Apartment/Condo</option>
                  <option value="road">Live with Family/Friends</option>
                  <option value="aviation">Student Residence </option>
                  <option value="marine">Other (specify other housing situation, including temporary housing options)</option>
                  <option value="marine">Prefer not to say</option>
                </select>
              </div>
              </div>
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                Housing Preference
                </label>
                <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                  <option value="">Select housing preference</option>
                  <option value="railway">Renting an Apartment/Condo</option>
                  <option value="road">Shared Accommodation</option>
                  <option value="aviation">Student Residence </option>
                  <option value="marine">Open to all options</option>
                  <option value="marine">Not looking to move</option>
                  <option value="marine">Prefer not to say</option>
                </select>
              </div>
              </div>
           
              <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                    <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                      <>
                      Family Information
                      </>
                    </Text>
                   
                  </div>
      
           
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                Number of family members immigrating with the user
                </label>
                <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                  <option value="">Select number</option>
                  <option value="one">1</option>
                  <option value="two">2</option>
                  <option value="three">3 </option>
                  <option value="four">4</option>
                  <option value="five">5</option>
                  <option value="six">6</option>
                  <option value="seven">7</option>
                  <option value="eight">8 </option>
                  <option value="ning">9</option>
                  <option value="ten">10</option>
                </select>
              </div>
              </div>
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
               Relationship to family
                </label>
                <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                  <option value="">Select relationship</option>
                  <option value="railway">Father</option>
                  <option value="road">Mother</option>
                  <option value="aviation">Son </option>
                  <option value="marine">Daughter</option>
                  <option value="marine">Prefer not to say</option>
                </select>
              </div>
              </div>
        </div>
    </div>
        
      );
    };
    
    export default Step5;