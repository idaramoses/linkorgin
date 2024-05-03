import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Text, Heading, Button } from "../../../../components";
import { NavLink } from "react-router-dom";
import HomeScreenRowcloseOne from "components/HomeScreenRowcloseOne";
import ImageSlider from "components/ImageSlider";
import Header from "components/Header";
import Settings from "components/Settings";

interface Page1Props {
  togglePage: () => void;
}

function Page2({ togglePage }: Page1Props){
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loggedIn, setLoggedIn] = useState(false);
    const handleMenuToggle = () => {
      setMenuOpen(!isMenuOpen);
    };
  
    const handleCloseMenu = () => {
      setMenuOpen(false);
    };
    const data = [
      { image: "/images/img_istockphoto_113.png", wherecani: "The bright headquarters of ApplyBoard effuses the spirit that has long defined Canada’s immigration narrative. " },
      { image: "/images/img_istockphoto_171.png", wherecani: "The bright headquarters of ApplyBoard effuses the spirit that has long defined Canada’s immigration narrative. " },
      { image: "/images/img_istockphoto_143.png", wherecani: "What are government policies in healthcare The bright headquarters of ApplyBoard effuses the spirit that has long defined Canada’s immigration narrative." },
    ];
      return (
        <>
          <Helmet>
            <title>Government Services - Assistance with Immigration and More</title>
            <meta
              name="description"
              content="Get help with immigration, employment, healthcare, and legal matters. Access government services and quick links to facilitate your settlement process."
            />
          </Helmet>
    
          <div className=" bg-[url(/public/images/img_welcome_screen.svg)] bg-center bg-cover bg-no-repeat my-auto flex flex-col items-center">
              {/* header section */}
              <Header/>
              <div className="relative mx-auto flex w-full items-start justify-between gap-5   md:h-auto md:flex-col md:p-5">
              <Settings/>
                {/* introductory section */}
                <div className="mb-7  pt-20 md:pt-16 flex w-[70%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10  border-r border-gray-300 md:border-none">
                  {/* questions list section */}
                  <div className="flex w-full flex-col  md:w-full">
                    <div className="ml-20 flex w-[80%] md:h-auto md:my-5 h-14 md:m-auto items-center justify-center gap-2 md:ml-0 md:w-full sm:flex-col">
                     <div className="flex md:flex-col flex-row h-14 w-[60%] md:w-full gap-2">
                     <div className="flex  flex-row w-[40%] h-full items-center justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                     <Img src="/images/img_group_52.svg" alt="home_one" className="h-[23px] self-center" />
                      <h1  className="text-base md:text-sm !font-kumbhsans md:ml-0 text-white-A700">
                       Immigration 
                      </h1>
                    </div>
                      <h1  className="bg-gradient2 bg-clip-text font-bold !text-transparent text-[40px] md:text-base ">
                        Mon - Ami
                      </h1>
                      </div> 
                 
                      <p  className=" w-[40%] md:mt-5 h-14 text-sm md:text-xs md:text-left flex items-center text-center  justify-center !font-kumbhsans sm:w-full">
                        <>
                        Use quick links to search for information on Jobs, housing, healthcare, social services
                        </>
                      </p>
                    </div>
      {/* search section */}
      <div className="flex flex-col items-start my-10 md:my-5 w-full" >
      <div className="ml-20 md:ml-0  md:flex-col flex flex-row w-[90%] md:w-full  gap-2  ">
        
        <div className="pt-10 flex flex-col items-end gap-[3px]  w-[85%] md:w-full">
                        <div className="mr-7 flex w-[27%] flex-wrap justify-end gap-5 md:mr-0 md:w-full">
                          <Heading onClick={togglePage}  className="cursor-pointer !text-gray-800 text-base md:text-sm ">
                            Ask Mon-Ami
                          </Heading>
                          <Heading   className="cursor-pointer !text-gray-800 text-base md:text-sm border-b-2 border-red-500 ">
                              Search
                          </Heading>
                        </div>
                        <div className="self-stretch rounded-[21px]  bg-white-A700 p-[9px]">
                            <div className="flex flex-col gap-[27px]">
                              <div className="flex items-center justify-between gap-5 h-10">
                                <div  className="flex items-center text-base h-10 md:text-sm outline-none border-none focus:outline-none border-r border-black-900_2d w-[50%]">
                                <input  placeholder="Search job title,keywords or company"/>
  
                               </div>
                        
                            
                              </div>
                           
                            </div>
                          </div>
        </div>
       
     
        </div>
      
      </div>
   
      <div className="flex flex-col gap-3" >
      {/* healthcare questions section */}
      {data.map((d, index) => (
    <div  className="flex   flex-row gap-2 items-start justify-center w-[80%]">
     <Img
          src={d.image}
          alt="image"
          className="h-[100px] w-[100px] rounded-[12px] object-cover "
        />
         <p  className="text-base self-start w-[60%]">
          {d.wherecani}
      </p>
      
    </div>
  ))}
      
      </div>
                   
                   
                  </div>
    
            
                </div>
    
                {/* government services section */}
                <div className="flex md:pt-5 pt-20 w-[30%] px-5  items-center justify-center md:hidden   flex-col gap-[29px] md:w-full">
                  <div className="flex flex-col items-start gap-[21px]">
              
                    <div className="self-stretch rounded-[10px] bg-gray-200 p-[18px]">
                      <p className= "text-base md:text-sm !text-blue_gray-900">
                        Whether you need help navigating immigration applications, finding employment opportunities,
                        accessing healthcare services, securing housing accommodations, or understanding your legal rights,
                        government services are here to help you access public services that support you through the
                        settlement process.
                      </p>
                    </div>
                  </div>
    
                  {/* quick links section */}
                  <div className="flex flex-col gap-3 items-start w-full">
                    <Text size="md" as="p" className="!font-hankengrotesk">
                      Quick links
                    </Text>
                    <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                      Immigration & Citizenship
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                      Employment Services
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                      Social Services
                    </button>
                     <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                     Healthcare Services
                    </button>
                 
                  </div>
                </div>
              </div>
          
    
    
            </div>
    
       
        </>
      );
  }

export default Page2;
