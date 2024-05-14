import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../../components";

interface Page2Props {
  togglePage: () => void;
}

function Page2({ togglePage }: Page2Props) {
  
  return (
    <>
    <Helmet>
      <title>Origin</title>
      <meta name="description" content="Web site created using create-react-app" />
    </Helmet>
    <div className='h-screen w-full relative bg-white-A700' >

    <Img
            src="images/landing_bg.svg"
            alt="image_two"
            className=" bottom-0 left-0 fixed"
          />
            
  <div className="absolute flex w-full mb-10 flex-col gap-5  ">
     
      <div className="flex w-full mt-20 flex-col items-center justify-center gap-[45px]  md:p-5">
      <div className="mt-20 md:mt-10 flex  items-center justify-between gap-2 rounded-[15px] bg-gray-100_89 p-[5px] ">
                          <Button
                            onClick={togglePage}
                            size="lg"
                            variant="fill"
                            className=" rounded-[10px] font-inter font-semibold "
                          >
                            Tour
                          </Button>
                          <Button
                            color="blue_gray_800"
                            size="lg"
                            variant="fill"
                            className=" rounded-[10px] font-inter font-semibold "
                            
                          >
                            <Heading
                              size="md"
                              as="h1"
                              className="text-center !font-inter !font-semibold !text-white-A700 "
                            >
                              Mon-Ami
                          </Heading>
                          </Button>
                          
 </div>
     
 
  
      </div>
    </div>
    </div>

  </>
  );
}

export default Page2;
