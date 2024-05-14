import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../../components";
import { NavLink } from 'react-router-dom';
import {YouTubeVideo} from 'components/VideoPlayer';
interface Page2Props {
  togglePage: () => void;
}

function Page2({ togglePage }: Page2Props) {
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

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
      if (fadeOut) {
        const timeout = setTimeout(() => {
          togglePage();
        }, 50); // Adjust the duration to match your CSS transition duration
        return () => clearTimeout(timeout);
      }
    }, [fadeOut, togglePage]);
  
    const handleToggle = () => {
      setFadeOut(true);
    };
  
  return (
    <>
    <Helmet>
      <title>Origin</title>
      <meta name="description" content="Web site created using create-react-app" />
    </Helmet>
    <div className={`h-screen w-full relative bg-white-A700 transition-opacity ${fadeOut ? 'opacity-0' : ''}`}>

    <Img
            src="images/landing_bg.svg"
            alt="image_two"
            className=" bottom-0 left-0 fixed"
          />
            
 <div className={`absolute w-full h-full flex flex-col items-center justify-center`}>
      <div>
      <nav className="flex self-stretch justify-between items-center  w-full z-10 gap-5 p-10 md:p-4  bg-white-A700 right-3 rounded-bl-[50px] md:rounded-bl-none rounded-br-[50px] md:rounded-br-none" ref={navbarRef}>
        <div className="container mx-auto flex  justify-between items-center">
        <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 md:h-6 " />

          <div className="hidden md:block  ">
            {isMenuOpen ? (
              <button 
                onClick={handleCloseMenu}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            ) : (
              <button 
                onClick={handleMenuToggle}
                className="text-gray-800 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            )}
          </div>
  
          {isMenuOpen && (
            <div className="hidden md:block m-auto items-center  justify-center  absolute top-14 right-0 left-0  bg-white-A700 w-full h-auto shadow p-4">
             
          
          <div className="flex flex-col gap-5">
           <div>About Us</div>
              <div>Our Services</div>
              <div>Contact Us</div>
              <NavLink to="/auth/login">
            <div className="my-auto text-gray-500">Login</div>
            </NavLink>
  
          </div>
            </div>
          )}
  
          <div className="md:hidden  flex flex-row  items-center justify-center">
    
          <div className="flex gap-5 justify-between  md:flex-wrap">
            <div className="flex gap-5 justify-between self-start text-black md:flex-wrap md:w-full">
              <div>About Us</div>
              <div>Our Services</div>
              <div>Contact Us</div>
              <NavLink to="/auth/login">
              <div className="my-auto text-gray-500">Login</div>
             </NavLink>
            </div>
         
           
          </div>
          </div>
          <div className="md:hidden  flex flex-row items-center">
    
    <div className="flex flex-row gap-4 items-center justify-center ">
                                 {/* <Img src="images/img_mobile.svg" alt="mobile_one" className="h-[19px] w-[19px]" />
                                  <Img
                                    src="images/img_globe.svg"
                                    alt="globe_one"
                                    className=" h-[21px] w-[20px] "
                                  /> */}
                                     <svg width="77" height="40" viewBox="0 0 77 63" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M47.97 38.33C47.97 38.69 47.89 39.06 47.72 39.42C47.55 39.78 47.33 40.12 47.04 40.44C46.55 40.98 46.01 41.37 45.4 41.62C44.8 41.87 44.15 42 43.45 42C42.43 42 41.34 41.76 40.19 41.27C39.04 40.78 37.89 40.12 36.75 39.29C35.6 38.45 34.51 37.52 33.47 36.49C32.44 35.45 31.51 34.36 30.68 33.22C29.86 32.08 29.2 30.94 28.72 29.81C28.24 28.67 28 27.58 28 26.54C28 25.86 28.12 25.21 28.36 24.61C28.6 24 28.98 23.44 29.51 22.94C30.15 22.31 30.85 22 31.59 22C31.87 22 32.15 22.06 32.4 22.18C32.66 22.3 32.89 22.48 33.07 22.74L35.39 26.01C35.57 26.26 35.7 26.49 35.79 26.71C35.88 26.92 35.93 27.13 35.93 27.32C35.93 27.56 35.86 27.8 35.72 28.03C35.59 28.26 35.4 28.5 35.16 28.74L34.4 29.53C34.29 29.64 34.24 29.77 34.24 29.93C34.24 30.01 34.25 30.08 34.27 30.16C34.3 30.24 34.33 30.3 34.35 30.36C34.53 30.69 34.84 31.12 35.28 31.64C35.73 32.16 36.21 32.69 36.73 33.22C37.27 33.75 37.79 34.24 38.32 34.69C38.84 35.13 39.27 35.43 39.61 35.61C39.66 35.63 39.72 35.66 39.79 35.69C39.87 35.72 39.95 35.73 40.04 35.73C40.21 35.73 40.34 35.67 40.45 35.56L41.21 34.81C41.46 34.56 41.7 34.37 41.93 34.25C42.16 34.11 42.39 34.04 42.64 34.04C42.83 34.04 43.03 34.08 43.25 34.17C43.47 34.26 43.7 34.39 43.95 34.56L47.26 36.91C47.52 37.09 47.7 37.3 47.81 37.55C47.91 37.8 47.97 38.05 47.97 38.33Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
  <rect x="1" y="1" width="75" height="61" rx="30.5" stroke="white" stroke-width="2"/>
                                  </svg>
    </div>
    </div>
        </div>
      </nav>
      </div>
      <div className="flex w-full mt-20 flex-col items-center justify-center gap-[45px]  md:p-5">
      <div className="mt-20 md:mt-10 flex  items-center justify-between gap-2 rounded-[15px] bg-gray-100_89 p-[5px] ">
                          <Button
                            onClick={handleToggle}
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
     <div className='flex flex-row items-center gap-5'>
        <Img
            src="images/img_star_2_38x38.svg"
            alt="image_two"
            className="  m-auto h-[38px] w-[38px]"
          />
 <Heading size="3xl" as="h2" className=" m-auto !text-blue_gray-900">
            Ready to Start?
          </Heading>
          <Img
            src="images/img_star_1_38x38.svg"
            alt="image_one"
            className=" m-auto h-[38px] w-[38px]"
          /></div>
 
  <div className=" m-auto flex w-[47%] md:w-[80%] flex-col items-center gap-[39px]">
            <Text size="6xl" as="p" className="text-center !text-gray-800">
              <span className="font-normal text-gray-800">Explore&nbsp;</span>
              <span className="font-semibold text-gray-900_02">Mon - Ami</span>
              <span className="font-semibold text-gray-800">
                <>
                  , <br />
                </>
              </span>
              <span className="font-normal text-gray-800">Simplify your settlement journey in Canada with smart searches, clear explanations and concise connections to essential resources with our friendly AI assistant.</span>
            
            </Text>
            <NavLink to="/auth/register">
            <Button
                color="gray_500_02"
              
                className="rounded-[38px] font-inter font-medium sm:px-5"
              >
                Signup
              </Button>
         </NavLink>
           
          </div> 
        <div className="flex flex-row md:flex-col gap-5 justify-center items-center mb-10 md:w-full  w-[70%]">
                
             <YouTubeVideo videoUrl="https://www.youtube.com/embed/1QFTSafMxBQ" />
             <YouTubeVideo videoUrl="https://www.youtube.com/embed/Ek1f2MIe34s" />
             <YouTubeVideo videoUrl="https://www.youtube.com/embed/zpXXvx1gCpU" />
               
        </div>
      </div>
    </div>
    </div>

  </>
  );
}

export default Page2;
