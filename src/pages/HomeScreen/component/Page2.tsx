import React, { useRef, useState } from 'react';
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
      <div>
      <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700" ref={navbarRef}>
      <div className="container mx-auto flex  justify-between items-center">
      <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 " />


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
          <div className="hidden md:block m-auto items-center  justify-center  absolute top-14 right-0 left-0 bg-white-A700 w-full h-auto shadow p-4">
            {/* <button 
              onClick={handleCloseMenu}
              className="text-white absolute top-2 right-0 mr-3 focus:outline-none"
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
            </button> */}
        
        <div className="flex flex-col gap-5">
         <div>About Us</div>
            <div>Our Services</div>
            <div>Blog</div>
            <div>Contact Us</div>
            <NavLink to="/auth/login">
            <div className="my-auto text-neutral-400">Login</div>
            </NavLink>
            

        </div>
          </div>
        )}

        <div className="md:hidden  flex flex-row items-center">
  
        <div className="flex gap-5 justify-between mt-3.5 md:flex-wrap">
          <div className="flex gap-5 justify-between self-start text-black md:flex-wrap md:w-full">
            <div>About Us</div>
            <div>Our Services</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
          <div className="h-[19px] w-px bg-gray-500_01 md:h-px md:w-[19px]" />
          <NavLink to="/auth/login">
            <div className="my-auto text-neutral-400">Login</div>
            </NavLink>        </div>
        </div>
        <div className="md:hidden  flex flex-row  items-center">
  
  
  </div>
      </div>
    </nav>
      </div>
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
              <span className="font-normal text-gray-800">Sign up and get access to&nbsp;</span>
              <span className="font-semibold text-gray-900_02">Mon - Ami</span>
              <span className="font-semibold text-gray-800">
                <>
                  , <br />
                </>
              </span>
              <span className="font-normal text-gray-800">your help and guide to easy settlement in Canada</span>
            </Text>
            <NavLink to="/auth/register">
            <Button
                color="gray_500_02"
                size="3xl"
                className="min-w-[146px] rounded-[38px] font-inter font-medium sm:px-5"
              >
                Signup
              </Button>
         </NavLink>
           
          </div> 
        <div className="flex flex-row md:flex-col gap-5 justify-center items-center mb-10 md:w-full  w-[70%]">
                
             <YouTubeVideo videoUrl="https://youtu.be/1QFTSafMxBQ?si=FF-U8Li22aC2TiUL" />
             <YouTubeVideo videoUrl="https://youtu.be/Ek1f2MIe34s?si=6Tu0RXehm4xq4IcG" />
             <YouTubeVideo videoUrl="https://www.youtube.com/embed/zpXXvx1gCpU" />
               
        </div>
      </div>
    </div>
    </div>

  </>
  );
}

export default Page2;
