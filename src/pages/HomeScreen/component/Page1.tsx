import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Text, Heading, Button } from "../../../components";
import { NavLink } from "react-router-dom";

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
    
    return (
      <>
        <Helmet>
          <title>Origin</title>
          <meta name="description" content="Let’s help you figure things out" />
        </Helmet>
        <div className="w-full bg-white-A700">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center self-stretch">
            <div className="h-screen   relative  bg-[url(/public/images/img_mask_group_829x1512.png)] bg-cover bg-no-repeat w-full md:pb-5 rounded-bl-[50px] rounded-br-[50px]">
              <div className="absolute h-full w-full inset-0 bg-black-900 opacity-30 rounded-bl-[50px] rounded-br-[50px]"></div>
                      <div className="flex absolute h-full w-full flex-col items-center">
                      <nav className="flex self-stretch justify-between items-center  w-full z-10 gap-5 p-10 md:p-4  bg-blue_gray-200_b2 rounded-bl-[50px] rounded-br-[50px]" ref={navbarRef}>
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
            <div className="hidden md:block m-auto items-center  justify-center  absolute top-14 right-0 left-0  bg-blue_gray-200_b2 w-full h-auto shadow p-4">
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
  
          <div className="md:hidden  flex flex-row  items-center">
    
          <div className="flex gap-5 justify-between mt-3.5 md:flex-wrap">
            <div className="flex gap-5 justify-between self-start text-black md:flex-wrap md:w-full">
              <div>About Us</div>
              <div>Our Services</div>
              <div>Blog</div>
              <div>Contact Us</div>
            </div>
            <div className="h-[19px] w-px  text-white-A700 md:h-px md:w-[19px]" />
            <div className="my-auto text-white-A700">Login</div>
          </div>
          </div>
          <div className="md:hidden  flex flex-row items-center">
    
    <div className="flex flex-row gap-4 items-center justify-center ">
                                 <Img src="images/img_mobile.svg" alt="mobile_one" className="h-[19px] w-[19px]" />
                                  <Img
                                    src="images/img_globe.svg"
                                    alt="globe_one"
                                    className=" h-[21px] w-[20px] "
                                  />
                                     <svg width="77" height="40" viewBox="0 0 77 63" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M47.97 38.33C47.97 38.69 47.89 39.06 47.72 39.42C47.55 39.78 47.33 40.12 47.04 40.44C46.55 40.98 46.01 41.37 45.4 41.62C44.8 41.87 44.15 42 43.45 42C42.43 42 41.34 41.76 40.19 41.27C39.04 40.78 37.89 40.12 36.75 39.29C35.6 38.45 34.51 37.52 33.47 36.49C32.44 35.45 31.51 34.36 30.68 33.22C29.86 32.08 29.2 30.94 28.72 29.81C28.24 28.67 28 27.58 28 26.54C28 25.86 28.12 25.21 28.36 24.61C28.6 24 28.98 23.44 29.51 22.94C30.15 22.31 30.85 22 31.59 22C31.87 22 32.15 22.06 32.4 22.18C32.66 22.3 32.89 22.48 33.07 22.74L35.39 26.01C35.57 26.26 35.7 26.49 35.79 26.71C35.88 26.92 35.93 27.13 35.93 27.32C35.93 27.56 35.86 27.8 35.72 28.03C35.59 28.26 35.4 28.5 35.16 28.74L34.4 29.53C34.29 29.64 34.24 29.77 34.24 29.93C34.24 30.01 34.25 30.08 34.27 30.16C34.3 30.24 34.33 30.3 34.35 30.36C34.53 30.69 34.84 31.12 35.28 31.64C35.73 32.16 36.21 32.69 36.73 33.22C37.27 33.75 37.79 34.24 38.32 34.69C38.84 35.13 39.27 35.43 39.61 35.61C39.66 35.63 39.72 35.66 39.79 35.69C39.87 35.72 39.95 35.73 40.04 35.73C40.21 35.73 40.34 35.67 40.45 35.56L41.21 34.81C41.46 34.56 41.7 34.37 41.93 34.25C42.16 34.11 42.39 34.04 42.64 34.04C42.83 34.04 43.03 34.08 43.25 34.17C43.47 34.26 43.7 34.39 43.95 34.56L47.26 36.91C47.52 37.09 47.7 37.3 47.81 37.55C47.91 37.8 47.97 38.05 47.97 38.33Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10"/>
  <rect x="1" y="1" width="75" height="61" rx="30.5" stroke="white" stroke-width="2"/>
                                  </svg>
    </div>
    </div>
        </div>
      </nav>
                      
                        <div className="mt-20 flex ] items-center justify-between gap-2 rounded-[15px] bg-gray-100_89 p-[5px] ">
                          <Button
                            color="blue_gray_800"
                            size="lg"
                            variant="fill"
                            className=" rounded-[10px] font-inter font-semibold "
                          >
                            Tour
                          </Button>
                          <Button
                            size="lg"
                            variant="fill"
                            className=" rounded-[10px] font-inter font-semibold "
                            onClick={togglePage}
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
                        <Heading  className="mt-16 text-7xl md:text-5xl sm:text-5xl text-center !text-white-A700">
                          New in Canada?
                        </Heading>
                        <Text  as="p" className=" mt-2 text-center text-4xl md:text-3xl sm:text-2xl !text-white-A700">
                          Let’s help you figure things out
                        </Text>
                        <NavLink to="/auth/register">
                        <Button
                            color="white_A700"
                            size="3xl"
                            className="mt-[63px] min-w-[145px] rounded-[38px] font-inter font-semibold sm:px-5"
                          >
                            Signup
                          </Button>
         </NavLink>
                       
                      </div>
                    </div>
              <Img
                src="images/img_polygon_1.svg"
                alt="polygonone_one"
                className="relative z-[1] mt-[-84px] h-[148px] w-[148px] rounded-[32px]"
              />
            </div>
            <div className="relative mt-28 h-[142px] w-[36%] md:h-auto">
              <div className="ml-[45px] mt-11 h-[21px] w-[38%] rounded-[10px] bg-orange-200 md:ml-0" />
              <Heading
                size="2xl"
                as="h2"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full text-center !text-black-900"
              >
                <>
                  Finding all you need in <br />
                  one place!
                </>
              </Heading>
            </div>
            <div className="relative mx-auto mt-[69px] h-[604px] w-full max-w-[1393px] md:p-5">
              <Img
                src="images/img_rectangle_34.svg"
                alt="image_one"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[604px] w-[76%] rounded-[285px]"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-between gap-5 pb-4 pr-4 md:relative md:flex-col">
                <div className="relative mb-7 h-[415px] w-[23%] md:w-full">
                  <Img
                    src="images/img_istockphoto_147.png"
                    alt="istockphoto147"
                    className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[374px] w-[94%] rounded-[27px] object-cover"
                  />
                  <div className="absolute left-[0.00px] top-[0.00px] m-auto flex h-[79px] w-[61%] items-start justify-center bg-[url(/public/images/img_group_36.svg)] bg-cover bg-no-repeat p-[15px] md:h-auto">
                    <Text size="s" as="p" className="mb-[9px] w-[90%] !text-white-A700">
                      <>
                        Need help with finding <br />
                        restaurants?
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex w-[22%] flex-col items-end md:w-full">
                  <Img
                    src="images/img_ad2c4726_c034_4.png"
                    alt="ad2c4726c034fou"
                    className="h-[374px] w-full rounded-[27px] object-cover md:h-auto"
                  />
                  <div className="relative mr-[29px] mt-[-32px] flex h-[81px] items-end bg-[url(/public/images/img_group_37.svg)] bg-cover bg-no-repeat p-[13px] md:mr-0 md:h-auto">
                    <Text size="s" as="p" className="mb-2.5 mt-[25px]">
                      Find grocery stores nearby
                    </Text>
                  </div>
                </div>
                <div className="mb-[69px] flex w-[22%] flex-col items-center md:w-full">
                  <div className="relative z-[2] flex h-[79px] w-[65%] items-start justify-center bg-[url(/public/images/img_group_36.svg)] bg-cover bg-no-repeat p-4 md:h-auto md:w-full">
                    <Text size="s" as="p" className="mb-[7px] w-[88%] !text-white-A700">
                      <>
                        Discover the night life <br />
                        around your vicinity
                      </>
                    </Text>
                  </div>
                  <Img
                    src="images/img_istockphoto_127.png"
                    alt="istockphoto127"
                    className="relative mt-[-19px] h-[374px] w-full rounded-[27px] object-cover md:h-auto"
                  />
                </div>
                <div className="mt-10 flex w-[22%] flex-col items-center md:w-full">
                  <Img
                    src="images/img_cbebb5b3_6d27_4.png"
                    alt="cbebb5b36d27fou"
                    className="h-[374px] w-full rounded-[27px] object-cover md:h-auto"
                  />
                  <div className="relative mt-[-34px] flex h-[68px] w-[55%] items-end justify-center bg-[url(/public/images/img_group_37.svg)] bg-cover bg-no-repeat p-[9px] md:h-auto md:w-full">
                    <Text size="s" as="p" className="mt-[9px] w-[98%]">
                      <>
                        Recreational activities
                        <br />
                        tailored for you
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button color="blue_gray_400" size="4xl" className="mt-14 min-w-[377px] rounded-[45px] font-medium sm:px-5">
              Say hello to Mon -Ami
            </Button>
            <Text size="6xl" as="p" className="mt-[81px] w-[40%] text-center !font-inter md:w-full md:p-5">
              <span className="font-poppins font-normal text-gray_800_06">Sign up and get access to</span>
              <span className="font-poppins font-semibold text-gray_800_06">&nbsp;</span>
              <span className="font-poppins font-semibold text-gray-900_02">Mon - Ami</span>
              <span className="font-poppins font-semibold text-gray_800_06">
                <>
                  , <br />
                </>
              </span>
              <span className="font-poppins font-normal text-gray_800_06">
                your help and guide to easy settlement in Canada
              </span>
            </Text>
            <div className="mx-auto mt-[99px] h-px w-full max-w-[1388px] bg-black-900 md:p-5" />
            <div className="ml-[62px] mt-3 flex w-[14%] items-center gap-[23px] self-start md:ml-0 md:w-full md:p-5">
              <Img src="images/img_star_1.svg" alt="image_two" className="h-[38px] w-[38px]" />
              <Text size="6xl" as="p" className="self-end">
                What we do
              </Text>
            </div>
            <Heading size="5xl" as="h2" className="ml-[173px] mt-[81px] self-start !text-blue_gray-900 md:ml-0">
              Sign up to access our services
            </Heading>
            <Text
              size="5xl"
              as="p"
              className="ml-[173px] w-[67%] self-start leading-[41px] !text-gray-800_01 md:ml-0 md:w-full md:p-5"
            >
              <>
                we are dedicated to helping individuals and families achieve their settlement <br />
                goals in Canada.
              </>
            </Text>
            <div className="relative mx-auto mt-[35px] h-[804px] w-full max-w-[1124px] md:p-5">
              <Button
                color="blue_gray_400"
                shape="round"
                className="absolute left-[0.00px] top-[0.00px] m-auto min-w-[190px] font-inter font-semibold sm:px-5"
              >
                Signup
              </Button>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[777px] w-[97%] rounded-[285px] bg-[url(/public/images/img_group_92.svg)] bg-cover bg-no-repeat p-4 md:h-auto">
                <div className="flex w-[66%] flex-col items-start gap-7">
                  <div className="flex flex-col gap-7 self-stretch">
                    <div className="flex flex-1 justify-between gap-5 md:flex-col">
                      <div className="flex w-[46%] flex-col items-center gap-[11px] rounded-[15px] bg-red-400_01 p-9 md:w-full sm:p-5">
                        <Img src="images/img_home.svg" alt="government_one" className="h-[40px]" />
                        <Heading size="xl" as="h2" className="mb-[11px] !font-inter !text-white-A700">
                          Government
                        </Heading>
                      </div>
                      <div className="flex w-[46%] flex-col items-center gap-[15px] rounded-[15px] bg-red-400 p-[38px] md:w-full sm:p-5">
                        <Img src="images/img_settings.svg" alt="community_one" className="h-[36px] w-[35px]" />
                        <Heading size="xl" as="h3" className="mb-[7px] !font-inter !text-white-A700">
                          Community
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-between gap-5 md:flex-col">
                      <div className="flex w-[46%] flex-col items-center gap-[18px] rounded-[15px] bg-red-400 p-[38px] md:w-full sm:p-5">
                        <Img src="images/img_group_55.svg" alt="image" className="h-[30px] w-[30px]" />
                        <Heading size="xl" as="h4" className="mb-2.5 !font-inter !text-white-A700">
                          Healthcare
                        </Heading>
                      </div>
                      <div className="flex w-[46%] flex-col items-center justify-center gap-3.5 rounded-[15px] bg-red-400 p-7 md:w-full sm:p-5">
                        <Img src="images/img_group_52.svg" alt="image_one" className="mt-[3px] h-[32px] w-[32px]" />
                        <Heading size="xl" as="h5" className="w-[88%] text-center !font-inter !text-white-A700 md:w-full">
                          <>
                            Legal & Immigration <br />
                            service
                          </>
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[46%] flex-col items-center gap-[11px] rounded-[15px] bg-red-400 p-[39px] md:w-full sm:p-5">
                    <Img src="images/img_settings_white_a700.svg" alt="settings_one" className="h-[35px] w-[35px]" />
                    <Heading size="xl" as="h6" className="mb-2.5 !font-inter !text-white-A700">
                      Finance
                    </Heading>
                  </div>
                </div>
                <div className="absolute bottom-[14%] left-0 right-0 m-auto flex w-[31%] flex-col items-center gap-[11px] rounded-[15px] bg-red-400 p-[38px] sm:p-5">
                  <Img src="images/img_group_59.svg" alt="image_three" className="h-[36px] w-[21%]" />
                  <Heading size="xl" as="h4" className="mb-[11px] text-center !font-inter !text-white-A700">
                    Social
                  </Heading>
                </div>
              </div>
              <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[29%] flex-col gap-7">
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col items-center gap-[13px] rounded-[15px] bg-red-400 p-[38px] sm:p-5">
                    <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[35px]" />
                    <Heading size="xl" as="h4" className="mb-2.5 !font-inter !text-white-A700">
                      Educational
                    </Heading>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1.5 rounded-[15px] bg-red-400 p-[30px] sm:p-5">
                    <Img src="images/img_thumbs_up_white_a700.svg" alt="thumbsup_three" className="h-[38px] w-[38px]" />
                    <Heading size="xl" as="h4" className="text-center !font-inter !text-white-A700">
                      <>
                        Cultural & <br />
                        Recreational Activities
                      </>
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[11px] rounded-[15px] bg-red-400 p-[47px] md:p-5">
                  <Img src="images/img_group_57.svg" alt="image_four" className="h-[28px] w-[28px]" />
                  <Heading size="xl" as="h4" className="text-center !font-inter !text-white-A700">
                    Investment
                  </Heading>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-[78px] h-px w-full max-w-[1388px] bg-black-900 md:p-5" />
            <div className="ml-[59px] mt-[15px] flex w-[7%] items-center gap-2 self-start md:ml-0 md:w-full md:p-5">
              <Img src="images/img_star_2.svg" alt="image_five" className="h-[38px] w-[38px]" />
              <Text size="6xl" as="p" className="self-end">
                Blog
              </Text>
            </div>
            <Heading size="4xl" as="h2" className="ml-[169px] mt-36 self-start !text-blue_gray-900 md:ml-0">
              News and immigration tips
            </Heading>
            <Text size="6xl" as="p" className="ml-[173px] mt-[23px] self-start !text-gray-800_09 md:ml-0">
              Latest on immigration
            </Text>
            <div className="mx-auto mt-[35px] flex w-full max-w-[1270px] gap-[54px] md:flex-col md:p-5">
              <div className="flex w-full flex-col gap-2.5">
                <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                  <Img
                    src="images/img_rectangle_62.png"
                    alt="image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                  />
                  <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-[25px] md:h-auto sm:p-5">
                    <Heading size="lg" as="h2" className="mb-[79px] mt-3.5 w-[86%] !font-inter !text-black-900 md:w-full">
                      <>
                        News <br />
                        Release
                      </>
                    </Heading>
                  </div>
                </div>
                <Text size="xs" as="p" className="w-[96%] md:w-full">
                  Post-Graduation Work Permit Challenges: What to Do If You Choose a DLI That Is Not PGWP Eligible
                </Text>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                  <Img
                    src="images/img_rectangle_62_320x277.png"
                    alt="image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                  />
                  <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                    <Heading size="lg" as="h3" className="mb-[75px] mt-5 w-[84%] !font-inter !text-black-900 md:w-full">
                      <>
                        News <br />
                        Release
                      </>
                    </Heading>
                  </div>
                </div>
                <Text size="xs" as="p" className="w-[96%] md:w-full">
                  <>
                    Nova Scotia Immigration Announces Permanent
                    <br />
                    Relaunch and Updates to Entrepreneur Streams
                  </>
                </Text>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                  <Img
                    src="images/img_rectangle_62_1.png"
                    alt="image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                  />
                  <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-[25px] md:h-auto sm:p-5">
                    <Heading
                      size="lg"
                      as="h4"
                      className="mb-[74px] mt-[19px] w-[86%] !font-inter !text-black-900 md:w-full"
                    >
                      <>
                        News <br />
                        Release
                      </>
                    </Heading>
                  </div>
                </div>
                <Text size="xs" as="p" className="w-[96%] md:w-full">
                  Obtaining Job Approval Letter for International Skilled Worker - SINP
                </Text>
              </div>
              <div className="flex w-full flex-col gap-2.5">
                <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                  <Img
                    src="images/img_rectangle_62_2.png"
                    alt="image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                  />
                  <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                  <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                    <Heading size="lg" as="h5" className="mb-[75px] mt-5 w-[84%] !font-inter !text-black-900 md:w-full">
                      <>
                        News <br />
                        Release
                      </>
                    </Heading>
                  </div>
                </div>
                <Text size="xs" as="p" className="w-[96%] md:w-full">
                  Government of Canada launches new campaign to help Canadians upgrade skills and secure rewarding careers
                </Text>
              </div>
            </div>
            <Text size="6xl" as="p" className="ml-[173px] mt-28 self-start !text-gray-800_03 md:ml-0">
              Social Channels
            </Text>
            <div className="mx-auto mt-[25px] flex w-full max-w-[1270px] gap-[54px] md:flex-col md:p-5">
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_21.png"
                  alt="instagram_post"
                  className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_22.png"
                  alt="image"
                  className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_23.png"
                  alt="image"
                  className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_24.png"
                  alt="image"
                  className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
            </div>
            <div className="mt-32 flex flex-col items-start gap-[63px] self-stretch overflow-auto bg-blue_gray-50_01 py-[63px] pl-[63px] md:py-5 md:pl-5 sm:gap-[31px]">
              <Heading size="4xl" as="h2" className="ml-[145px] mt-[21px] !text-blue_gray-900 md:ml-0">
                What Our Partners Say
              </Heading>
              <div className="mb-24 flex w-full gap-[30px] md:flex-col">
                <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                  <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                    <Img src="images/img_ellipse_4.png" alt="segun_ayo_one" className="h-[40px] w-[40px] rounded-[50%]" />
                    <Heading size="xs" as="h3" className="mb-1.5 self-end !text-black-900">
                      Segun Ayo
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                    <>
                      I love how seamless the website is <br />
                      and how informative the AI system
                      <br />
                      is. This helped me get more insight <br />
                      about canada.
                    </>
                  </Text>
                  <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                    24/02/2024
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                  <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                    <Img
                      src="images/img_ellipse_4_40x40.png"
                      alt="circleimage"
                      className="h-[40px] w-[40px] rounded-[50%]"
                    />
                    <Heading size="xs" as="h4" className="mb-1.5 self-end !text-black-900">
                      Segun Ayo
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                    <>
                      I love how seamless the website is <br />
                      and how informative the AI system
                      <br />
                      is. This helped me get more insight <br />
                      about canada.
                    </>
                  </Text>
                  <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                    24/02/2024
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                  <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                    <Img src="images/img_ellipse_4_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                    <Heading size="xs" as="h5" className="mb-1.5 self-end !text-black-900">
                      Segun Ayo
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                    <>
                      I love how seamless the website is <br />
                      and how informative the AI system
                      <br />
                      is. This helped me get more insight <br />
                      about canada.
                    </>
                  </Text>
                  <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                    24/02/2024
                  </Text>
                </div>
                <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                  <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                    <Img src="images/img_ellipse_4_2.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                    <Heading size="xs" as="h6" className="mb-1.5 self-end !text-black-900">
                      Segun Ayo
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                    <>
                      I love how seamless the website is <br />
                      and how informative the AI system
                      <br />
                      is. This helped me get more insight <br />
                      about canada.
                    </>
                  </Text>
                  <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                    24/02/2024
                  </Text>
                </div>
                <div className="flex w-full rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                  <div className="my-1.5 flex w-full flex-col items-start">
                    <div className="flex w-[57%] items-center gap-3 md:w-full">
                      <Img
                        src="images/img_ellipse_4_3.png"
                        alt="circleimage"
                        className="h-[40px] w-[40px] rounded-[50%]"
                      />
                      <Heading size="xs" as="p" className="mb-1.5 self-end !text-black-900">
                        Segun Ayo
                      </Heading>
                    </div>
                    <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                      <>
                        I love how seamless the website is <br />
                        and how informative the AI system
                        <br />
                        is. This helped me get more insight <br />
                        about canada.
                      </>
                    </Text>
                    <Text size="md" as="p" className="mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                      24/02/2024
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[157px] flex flex-col items-center">
              <Heading size="3xl" as="h2" className="!text-blue_gray-900">
                Ready to Start?
              </Heading>
              <Text size="6xl" as="p" className="mt-[9px] !font-normal !text-gray-700_01">
                Powered by AI, Our goal is to create the best settlement experience for you
              </Text>
              <Button color="gray_600_04" shape="round" className="mt-20 min-w-[190px] font-inter font-semibold sm:px-5">
                Get Started
              </Button>
            </div>
            {/* <div className="mx-auto mt-[79px] flex w-full max-w-[1039px] flex-col items-start md:p-5">
              <Img
                src="images/img_group_76.svg"
                alt="image_six"
                className="relative z-[3] ml-[79px] h-[299px] w-[78%] md:ml-0"
              />
              <div className="relative mt-[-169px] flex justify-center self-stretch rounded-[285px] bg-red-400 px-14 py-[209px] md:p-5">
                <div className="mb-64 flex w-[41%] flex-col items-start gap-[23px] md:w-full">
                  <div className="ml-[66px] flex items-start gap-[18px] md:ml-0">
                    <div className="flex items-start gap-[9px] rounded-[15px] border border-solid border-white-A700">
                      <Img
                        src="images/img_mobile_blue_gray_900_01.svg"
                        alt="mobile_three"
                        className="mt-[5px] h-[15px] w-[15px]"
                      />
                      <Button
                        color="white_A700"
                        size="xs"
                        variant="fill"
                        shape="circle"
                        className="w-[26px] !rounded-[13px]"
                      >
                        <Img src="images/img_brightness.svg" />
                      </Button>
                    </div>
                    <Text size="4xl" as="p" className="mt-0.5 !text-white-A700">
                      Light Mode
                    </Text>
                  </div>
                  <a href="#" className="ml-3.5 md:ml-0">
                    <Heading size="3xl" as="h2" className="!text-white-A700">
                      Contact Us
                    </Heading>
                  </a>
                  <div className="self-stretch">
                    <Text size="xl" as="p" className="!text-white-A700">
                      <>
                        Subscribe to our newsletter for immigration <br />
                        insights and travel news!
                      </>
                    </Text>
                    <Input
                      color="gray_200"
                      size="xs"
                      variant="outline"
                      shape="square"
                      type="email"
                      name="email"
                      placeholder={`Email`}
                      suffix={
                        <div className="flex h-[2px] w-[18px] items-center justify-center">
                          <Img src="images/img_vector_5.svg" alt="Vector 5" className="h-[2px] w-[18px]" />
                        </div>
                      }
                      className="mt-[18px] gap-[35px] sm:pr-5"
                    />
                    <HomeScreenRowcloseOne className="mt-[60px] flex items-center justify-between gap-5" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    );
  }

export default Page1;
