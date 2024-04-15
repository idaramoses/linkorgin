import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Input, Text, CheckBox, Img } from "../../components";
import { Link } from "react-router-dom";
import Step1 from "./component/step1";
import Step2 from "./component/step2";

export default function MacBookPro14SixPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for user data
    const userData = localStorage.getItem('userData');
    if (userData) {
      // If user data is found, consider the user logged in
      setLoggedIn(true);
    }
  }, []);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
 
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = (): void => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = (): void => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (): JSX.Element | null => {
    switch (currentStep) {
      case 1:
        return <Step1/>;
      case 2:
        return <Step2/>;
      case 3:
        return <Step1/>;
      case 4:
          return <Step1/>;
      case 5:
          return <Step2/>;
      case 6:
          return <Step1/>;
      default:
        return null;
    }
  };
  const renderProgress = (): JSX.Element => {
    const steps: string[] = ['1', '2', '3','4','5','6','7'];
    return (
      <div className=" w-full flex flex-col items-center justify-center">
   
     <div className="flex items-center">
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 1 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
          1
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 1 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 2 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           2
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 2 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 3 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           3
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 3 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
          
          <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >=4 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           4
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 4 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>

<span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 5 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           5
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 5 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
            <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 6 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           6
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 6 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
            <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 7 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           7
        </span>
       
      </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>orgin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col pb-20 bg-white">
      <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700" ref={navbarRef}>
      <div className="container mx-auto flex  justify-between items-center">
      <svg width="82" height="33" viewBox="0 0 82 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0531 26.4C22.8643 26.4 27.5753 21.6393 27.5753 15.7667C27.5753 9.89404 22.8643 5.13333 17.0531 5.13333C11.2419 5.13333 6.53101 9.89404 6.53101 15.7667C6.53101 21.6393 11.2419 26.4 17.0531 26.4Z" fill="#A46C6C"/>
<path d="M55.8761 5.13333H52.2478V12.4667H55.8761V5.13333Z" fill="#A46C6C"/>
<path d="M55.8761 16.1333H52.2478V24.2H55.8761V16.1333Z" fill="#A46C6C"/>
<path d="M77.646 16.1333H74.0177V24.2H77.646V16.1333Z" fill="#A46C6C"/>
<path d="M65.9323 9.71231C66.3838 9.23451 66.9296 8.86019 67.5336 8.61421C68.1376 8.36824 68.786 8.25623 69.4357 8.28562C70.8514 8.28562 71.9509 8.72573 72.7773 9.61329C73.4644 10.4072 73.8761 11.41 73.9487 12.4667H77.6461C77.567 10.2001 76.9514 8.43355 75.7992 7.16701C74.5559 5.8149 72.9067 5.13762 70.8514 5.13517C69.4866 5.10329 68.1434 5.48627 66.9923 6.23545C65.876 6.98307 65.0393 8.09299 64.6172 9.3859V5.43225H60.9558V12.4667H64.725C64.8429 11.4444 65.2641 10.4833 65.9323 9.71231Z" fill="#A46C6C"/>
<path d="M64.5841 16.1333H60.9558V24.2H64.5841V16.1333Z" fill="#A46C6C"/>
<path d="M82 12.4667H77.646C77.646 12.6342 77.646 12.798 77.646 12.9692V16.1333H81.9747L82 12.4667Z" fill="#A46C6C"/>
<path d="M47.8687 12.5865V5.37345H44.2195V9.67573C43.7704 8.33863 42.9301 7.18538 41.8189 6.38132C40.6107 5.52669 39.1782 5.09137 37.7225 5.13652C36.2794 5.10548 34.8563 5.49605 33.6118 6.26474C32.3849 7.05271 31.4009 8.19679 30.7783 9.55914C30.0665 11.1342 29.7161 12.8628 29.7551 14.606C29.7212 16.2763 30.0376 17.9339 30.6817 19.4612C30.6433 19.778 30.623 20.097 30.6209 20.4164V25.0233C30.7891 28.0657 31.9661 29.9122 33.483 31.1458C35 32.3793 37.007 32.996 39.4827 32.996C41.0446 33.0441 42.5904 32.6547 43.962 31.8678C45.1933 31.1329 46.1979 30.0416 46.8563 28.7238C47.5478 27.3042 47.8945 25.7267 47.8652 24.132V16.3736H52.2478V12.5865H47.8687ZM34.957 10.1308C35.4588 9.58325 36.0658 9.15447 36.7376 8.87303C37.4094 8.59158 38.1306 8.46394 38.8531 8.49862C39.8182 8.48122 40.7695 8.7413 41.6043 9.25076C42.4169 9.76972 43.075 10.5175 43.504 11.4094C43.6909 11.7847 43.8408 12.1791 43.9512 12.5865H38.0839C36.4275 12.5873 34.8191 13.1712 33.5152 14.245C33.5761 12.5188 34.0519 11.1462 34.957 10.1308ZM44.0371 16.3736C43.9223 16.8876 43.743 17.3834 43.504 17.8478C43.066 18.7345 42.4005 19.4745 41.5828 19.9839C40.7487 20.495 39.7969 20.7552 38.8316 20.736C38.1103 20.7696 37.3905 20.6415 36.72 20.3601C36.0495 20.0786 35.4436 19.6504 34.9427 19.1039C34.8247 18.9685 34.7102 18.8256 34.585 18.6789C34.9003 17.9856 35.3967 17.4007 36.0162 16.9925C36.6357 16.5844 37.3528 16.3697 38.0839 16.3736H44.0371ZM44.2195 24.1057C44.2195 25.9008 43.7497 27.2684 42.8099 28.2086C42.3319 28.6809 41.7697 29.049 41.1556 29.2917C40.5416 29.5344 39.8879 29.6469 39.2323 29.6227C38.0803 29.6725 36.9414 29.3495 35.9695 28.6975C35.118 28.0808 34.2379 26.2342 34.2415 25.2151V23.3347C35.3316 23.8754 36.5245 24.148 37.7297 24.132C39.1854 24.1771 40.6179 23.7418 41.8261 22.8872C42.9325 22.083 43.7699 20.933 44.2195 19.6003V24.1057Z" fill="#A46C6C"/>
<path d="M54.062 3.66667C55.0639 3.66667 55.8761 2.84585 55.8761 1.83333C55.8761 0.820811 55.0639 0 54.062 0C53.06 0 52.2478 0.820811 52.2478 1.83333C52.2478 2.84585 53.06 3.66667 54.062 3.66667Z" fill="#A46C6C"/>
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
            <div className="my-auto text-neutral-400">Login</div>

        </div>
          </div>
        )}

        <div className="md:hidden  flex flex-row space-x-4 items-center">
  
        <div className="flex gap-5 justify-between mt-3.5 md:flex-wrap">
          <div className="flex gap-5 justify-between self-start text-black md:flex-wrap md:w-full">
            <div>About Us</div>
            <div>Our Services</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
          <div className="h-[19px] w-px bg-gray-500_01 md:h-px md:w-[19px]" />
          <div className="my-auto text-neutral-400">Login</div>
        </div>
        </div>
      </div>
    </nav>
     <div className="w-full relative">
      <div className=" md:hidden absolute top-36 left-10">
      <Text size="8xl" as="p" className="font-bold !text-blue_gray-700">
                  Sign Up
                </Text>
      </div>
     <div className="w-full absolute flex flex-col items-center justify-center md:px-5">
   
     <div className="mt-40  md:w-full ">
      {renderProgress()}

      </div>
      <div className=" w-[50%] md:w-full   ">
      {renderStepContent()}
      </div>
      <div className="my-10 w-[50%] md:w-full flex justify-between ">
      {currentStep  === 1 && <button className="" ></button>}
      {currentStep !== 1 && <button onClick={handlePrev}>Previous</button>}
      {currentStep !== 7 ? (
          <button onClick={handleNext} className="justify-center self-end px-11 py-5 mt-10 text-base font-semibold text-black whitespace-nowrap border-2 border-solid border-neutral-500 rounded-[31.5px] md:px-5">
                Next
              </button>
         
      ) : (
        <button onClick={handleNext} className="justify-center self-end px-11 py-5 mt-10 text-base font-semibold text-black whitespace-nowrap border-2 border-solid border-neutral-500 rounded-[31.5px] md:px-5">
        Finish
      </button>
      )}
      </div>
      
     </div>
     </div>
     
    </div>
   
    </>
  );
}


