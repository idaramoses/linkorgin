import React, { useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../../components";
import { NavLink } from 'react-router-dom';
import VideoPlayer from 'components/VideoPlayer';
import YouTubeVideo from 'components/VideoPlayer';
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
      <svg width="124" height="27" viewBox="0 0 124 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0.256408H8.84341V26.7305H0V0.256408Z" fill="#3864FF"/>
<path d="M17.6868 9.10249H26.5302V26.7305H17.6868V9.10249Z" fill="#3864FF"/>
<path d="M17.6868 0H26.5302V9.10249H17.6868V0Z" fill="#90A8FF"/>
<path d="M44.153 0.256408H52.9964V26.7305H44.153V0.256408Z" fill="#90C6E3"/>
<path d="M79.5266 0.256408H88.37V26.7305H79.5266V0.256408Z" fill="#FFA422"/>
<path d="M26.5302 0.256408L52.9964 26.7305H26.5302V0.256408Z" fill="#B8DDF1"/>
<path d="M79.5266 0.256408L53.0605 26.7305V0.256408H79.5266Z" fill="#F4C37D"/>
<path d="M53.0605 0.256408L79.5266 26.7305H53.0605V0.256408Z" fill="#F5E0C1"/>
<path d="M0 26.7305V17.9486H17.6868V26.7305H0Z" fill="#90A8FF"/>
<path d="M79.5266 0.256408H97.1494V5.44867H79.5266V0.256408Z" fill="#FF5353"/>
<path d="M79.5266 10.8973H97.1494V16.0896H79.5266V10.8973Z" fill="#FF5353"/>
<path d="M79.5266 21.5383H97.1494V26.7305H79.5266V21.5383Z" fill="#FF5353"/>
<path d="M124 13.4935C124 20.8041 118.061 26.7305 110.735 26.7305C103.409 26.7305 97.4698 20.8041 97.4698 13.4935C97.4698 6.18284 103.409 0.256408 110.735 0.256408C118.061 0.256408 124 6.18284 124 13.4935Z" fill="#6FE9A7"/>
<path d="M97.4057 0.256408H110.35V26.7305H97.4057V0.256408Z" fill="#D4FCBC"/>
</svg>

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
