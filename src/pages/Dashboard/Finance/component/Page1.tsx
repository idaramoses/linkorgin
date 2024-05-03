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

function Page1({ togglePage }: Page1Props){
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
      { image: "/images/img_istockphoto_113.png", wherecani: "Where can i find healthcare facilities?" },
      { image: "/images/img_istockphoto_171.png", wherecani: "What are government policies in healthcare?" },
      { image: "/images/img_istockphoto_143.png", wherecani: "What are government policies in healthcare?" },
      { image: "/images/img_istockphoto_148.png", wherecani: "What are government policies in healthcare?" },
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
                <div className="mb-7  pt-20 md:pt-16 flex w-[70%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10 md:px-0 px-20 border-r border-gray-300 md:border-none">
                  {/* questions list section */}
                  <div className="flex w-full flex-col self-end md:w-full">
                  <div className=" flex w-full md:h-auto md:my-5 h-14 md:m-auto items-center justify-center gap-2 md:ml-0 md:w-full sm:flex-col">
                     <div className="flex md:flex-col flex-row h-14 w-[60%] md:w-full gap-2">
                     <div className="flex  flex-row w-[40%] h-full items-center justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                      <Img src="/images/img_settings_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
                      <h1  className="text-base md:text-sm !font-kumbhsans md:ml-0 text-white-A700">
                        Finance
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
    
                    {/* healthcare questions section */}
                    <div className="flex flex-col md:flex-col-reverse">
                    <div className="mt-20 flex gap-5 md:flex-col">
                      {data.map((d, index) => (
                        <div key={"listwherecani" + index} className="flex w-full flex-col items-center">
                          <div className="self-stretch rounded-[12px] bg-blue_gray-100">
                            <Img
                              src={d.image}
                              alt="image"
                              className="h-52 w-full rounded-[12px] object-cover md:h-52"
                            />
                          </div>
                          <div className="relative mt-[-19px] flex w-[90%] justify-center p-1 md:rounded-b-md rounded-md bg-white-A700 md:w-full">
                            <p  className="text-xs self-start">
                              {d.wherecani}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
    
                    {/* search section */}
                    <div className="mt-64 md:mt-10 flex flex-col items-end gap-[3px] mb-20 ">
                    <div className="mr-7 flex w-[27%] flex-wrap justify-end gap-5 md:mr-0 md:w-full">
                          <Heading   className="cursor-pointer !text-gray-800 text-base md:text-sm border-b-2  border-red-500 ">
                            Ask Mon-Ami
                          </Heading>
                          <Heading  onClick={togglePage}  className="cursor-pointer !text-gray-800 text-base md:text-sm  ">
                              Search
                          </Heading>
                        </div>
                       <div className="flex  flex-col items-end gap-2.5 self-stretch">
                        <div className="self-stretch rounded-[21px] border border-solid border-blue_gray-100_01 bg-white-A700 p-[9px]">
                          <div className="flex flex-col gap-[27px]">
                            <div className="flex items-start justify-between gap-5">
                              <input  className="mt-[7px] text-base md:text-sm outline-none border-none focus:outline-none" placeholder=" Ask me anything"/>
                               
                              
                             
                              <Img src="/images/img_menu.svg" alt="menu_one" className="h-[20px]" />
                            </div>
                            <div className="flex items-center justify-between gap-5">
                              <Img src="/images/img_clock.svg" alt="clock_one" className="h-[19px] self-start" />
                              <Img
                                src="/images/img_settings_gray_500_01.svg"
                                alt="settings_one"
                                className="h-[17px] w-[17px] self-end"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Page1;
