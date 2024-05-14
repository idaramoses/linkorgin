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
  maintainPage: () => void;
}

function Page2({ togglePage,maintainPage }: Page1Props){
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
      { 
       title: "Front End Developer",
       comapany: "The Max Company",
       country: "Canada",
       salary: "100k -200k",
       jobType: "Remote",
       description: "Help back-end developer with codeing and troubleshooting",
       description2: "Collaborate with back-end and designers to improve usability",
       time: "2 day",

     },
     { 
      title: "Back End Developer",
      comapany: "The Max Company",
      country: "Canada",
      salary: "150k -200k",
      jobType: "Remote",
      description: "Help back-end developer with codeing and troubleshooting",
      description2: "Collaborate with back-end and designers to improve usability",
      time: "3 day",

    },
     
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
                  <div className="flex w-full flex-col self-end md:w-full">
                    <div className="ml-20 flex w-[80%] md:h-auto md:my-5 h-14 md:m-auto items-center justify-center gap-2 md:ml-0 md:w-full sm:flex-col">
                     <div className="flex md:flex-col flex-row h-14 w-[60%] md:w-full gap-2">
                     <div className="flex  flex-row w-[40%] h-full items-center justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                      <Img src="/images/img_home_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
                      <h1  className="text-base md:text-sm !font-kumbhsans md:ml-0 text-white-A700">
                        Government
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
      <div className="flex flex-col border-y border-gray-500 my-10 md:my-5">
      <div className="ml-20 md:ml-0  md:flex-col flex flex-row w-[90%] md:w-full items-end justify-end gap-2  ">
        
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
                               <div className= "flex flex-row h-full items-center justify-between gap-2 pl-2 w-[50%]   border-l border-blue_gray-100_01">
                                <div className="flex flex-row gap-2 items-center justify-center">
                                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81271 12.9196C6.97793 12.2908 11 9.82321 11 5.72243C11 2.56202 8.53757 0 5.5 0C2.46244 0 0 2.56202 0 5.72243C0 9.82321 4.02207 12.2908 5.18729 12.9196C5.38591 13.0268 5.61409 13.0268 5.81271 12.9196ZM5.5 8.1749C6.80185 8.1749 7.85714 7.07693 7.85714 5.72243C7.85714 4.36797 6.80185 3.26996 5.5 3.26996C4.19815 3.26996 3.14286 4.36797 3.14286 5.72243C3.14286 7.07693 4.19815 8.1749 5.5 8.1749Z" fill="#222222"/>
                                </svg>
                               <p className="text-gray-500 text-sm">Location</p>
                                </div>
                              
                                <button className= "md:hidden justify-center self-end  w-32 text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-10  rounded-[23px]" > find jobs
                                </button>
                               </div>
                            
                              </div>
                           
                            </div>
                          </div>
        </div>
        <button className= "hidden md:block justify-center md:w-full  w-[15%] text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-14  rounded-[23px]" > Find a job
        </button>
        <button className= "justify-center md:w-full  w-[15%] text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-14  rounded-[23px]" > Post your resume
        </button>
        </div>
        <div className="ml-20 md:ml-0 flex md:flex-col w-[80%] pt-10  flex-rol items-end gap-[3px]  md:w-full">
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
      <option value="">Date Posted</option>
      <option value="railway">Today</option>
      <option value="road">This Week</option>
      <option value="aviation">This Month</option>
      <option value="marine">Marine</option>
    </select>
        </div>    
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Job Type</option>
            <option value="railway">Remote</option>
            <option value="road">Onsite</option>
          </select>
        </div>   
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Location</option>
            <option value="railway">Toronto</option>
            <option value="road">Vancouver</option>
            <option value="railway">Montreal</option>
            <option value="road">Calgary</option>
            <option value="railway">Edmonton</option>
            <option value="road">Quebec City</option>
          </select>
        </div> 
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Company</option>
            <option value="railway">Google</option>
            <option value="road">Faacebook</option>
            <option value="road">IBM</option>
            <option value="road">Twitter</option>

          </select>
        </div>   
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-40">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Job Language</option>
            <option value="railway">Engilsh</option>        
            <option value="railway">French</option>

          </select>
        </div>  
        </div>
      </div>
   
    
                    {/* healthcare questions section */}
                    <div className=" ml-20 md:ml-0 mr-10 md:mr-0 flex flex-col my-10 md:my-5 ">

                    <div className=" flex gap-2 flex-col">
                      {data.map((d, index) => (
                        <div key={"listwherecani" + index} className="flex flex-col w-[60%] md:w-full bg-white-A700 border border-gray-200 p-5 items-center">
                          <p  className="text-xl font-bold self-start">
                           {d.title}
                            </p>
                            <p  className="text-base font-normal self-start">
                           {d.comapany}
                            </p>
                          <p  className="text-xs self-start">
                          {d.country}
                          </p>
                          <div className="flex flex-row md:flex-col w-full gap-5 md:gap-2 items-start my-2 ">
                          <div  className="w-auto p-2 bg-gray-200 h-auto text-xs font-hankengrotesk sm:px-5">
                          {d.salary} per annum
                         </div>
                         <div  className="w-auto p-2 bg-gray-200 h-auto text-xs font-hankengrotesk sm:px-5">
                          {d.jobType}

                         </div>
                       
                          </div>
                          <p  className="text-xs self-start my-2">
                          * {d.description}
                          </p>
                          <p  className="text-xs self-start">
                          * {d.description2}
                          </p>

                          <p  className="text-xs self-start mt-5">
                          {d.time}
                          </p>
                        </div>
                      ))}
                    </div>
    
                  
                    </div>
                   
                  </div>
    
            
                </div>
    
                {/* government services section */}
                <div className="flex md:pt-5 pt-20 w-[30%] px-5  items-center justify-center md:hidden   flex-col gap-[29px] md:w-full">
                  <div className="flex flex-col items-start gap-[21px]">
              
                    <div className="self-stretch rounded-[10px] bg-gray-200 p-[18px]">
                    <p className= "text-sm md:text-xs !text-blue_gray-900">
                      Hi there! I'm Mon-Ami, your friendly AI guide on Linked Origins. Settling in Canada involves navigating government resources. Don't worry, I can help!  Whether you have questions about immigration, healthcare, housing, or anything else, just ask and I'll guide you to the right information. 
                      </p>
                    </div>
                  </div>
    
                  {/* quick links section */}
                  <div className="flex flex-col gap-3 items-start w-full">
                    <Text  className="!font-hankengrotesk text-sm md:text-xs">
                      Quick links
                    </Text>
                    <button  color="light_green_100_2d_blue_50" className="w-full text-sm md:text-xs bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                      Immigration & Citizenship
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="w-full text-sm md:text-xs bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                      Employment Services
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="w-full text-sm md:text-xs bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                      Social Services
                    </button>
                     <button  color="light_green_100_2d_blue_50" className="w-full text-sm md:text-xs bg-gray-200 h-12 font-hankengrotesk sm:px-5">
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
