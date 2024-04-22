import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Text, Heading, Button } from "../../../components";
import { NavLink } from "react-router-dom";
import HomeScreenRowcloseOne from "components/HomeScreenRowcloseOne";
import ImageSlider from "components/ImageSlider";

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
    const items = [
        { id: 1, name: 'Government',icon:'images/img_home.svg' },
        { id: 2, name: 'Community',icon:'images/img_settings.svg'  },
        { id: 3, name: 'Educational' ,icon:'images/img_thumbs_up.svg' },
        { id: 4, name: 'Healthcare',icon:'images/img_group_55.svg'  },
        { id: 5, name: 'Legal & Immigration service' ,icon:'images/img_group_52.svg' },
        { id: 6, name: 'Cultural & Recreational Activities',icon:'images/img_thumbs_up_white_a700.svg'  },
        { id: 7, name: 'Finance',icon:'images/img_settings_white_a700.svg'  },
        { id: 8, name: 'Social',icon:'images/img_group_59.svg'  },
        { id: 9, name: 'Investment' ,icon:'images/img_group_57.svg' },
        
      ];

      const images = [
        'images/img_slider_1.png',
        'images/img_slider_2.png',
        'images/img_slider_3.png',
        'images/img_slider_4.png',
        // 'images/img_slider_4.png',
        // 'images/img_slider_3.png',
        // 'images/img_slider_2.png',
        // 'images/img_slider_1.png',

      ];
    return (
      <>
        <Helmet>
          <title>Origin</title>
          <meta name="description" content="Let’s help you figure things out" />
        </Helmet>
        <div className="w-full bg-white-A700">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center self-stretch">
            <div className="h-screen   relative  bg-[url(/public/images/img_mask_group_829x1512.png)] bg-cover bg-no-repeat w-full md:pb-5 rounded-bl-[50px] md:rounded-bl-none rounded-br-[50px] md:rounded-br-none">
              <div className="absolute h-full w-full inset-0 bg-black-900 opacity-30 rounded-bl-[50px] md:rounded-bl-none rounded-br-[50px] md:rounded-br-none"></div>
                      <div className="flex absolute h-full w-full flex-col items-center">
                      <nav className="flex self-stretch justify-between items-center  w-full z-10 gap-5 p-10 md:p-4  bg-blue_gray-200_b2 right-3 rounded-bl-[50px] md:rounded-bl-none rounded-br-[50px] md:rounded-br-none" ref={navbarRef}>
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
              <NavLink to="/auth/login">
            <div className="my-auto text-white-A700">Login</div>
            </NavLink>
  
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
            <NavLink to="/auth/login">
            <div className="my-auto text-white-A700">Login</div>
            </NavLink>
           
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
                      
                        <div className="mt-20 flex  items-center justify-between gap-2 rounded-[15px] bg-gray-100_89 p-[5px] ">
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
                        <Heading  className="mt-16 text-7xl md:text-5xl sm:text-3xl text-center !text-white-A700 ">
                          New in Canada?
                        </Heading>
                        <Text  as="p" className=" mt-2 text-center text-4xl md:text-xl sm:text-2xl !text-white-A700 md:p-5">
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
                className="md:hidden relative z-[1] mt-[-84px] h-[148px] w-[148px] rounded-[32px]"
              />
            </div>

            <Heading
              
                className="text-7xl md:text-5xl sm:text-3xl mt-10 m-auto h-max w-full text-center !text-black-900 md:p-5"
              >
                <>
                  Finding all you need in <br />
                  one place!
                </>
              </Heading>
              <div className="mt-1 mb-10 h-4  w-32 rounded-[10px] bg-orange-200 md:ml-0" />

             <div className="w-[80%] relative  bg-[url(/public/images/img_bg_slider.svg)] bg-center bg-contain bg-no-repeat py-8 ">  <ImageSlider images={images} /></div>
          
           
            <Button color="blue_gray_400" size="4xl" className="mt-14 text-base md:text-sm w-52 rounded-[45px] font-medium ">
           
              Say hello to Mon -Ami
            </Button>
            <Text  className="mt-[81px] w-[40%] text-center !font-inter md:w-full md:p-5">
              <span className="font-poppins font-normal text-gray_800_06 text-base md:text-sm">Sign up and get access to</span>
              <span className="font-poppins font-semibold text-gray_800_06 text-base md:text-sm ">&nbsp;</span>
              <span className="font-poppins font-semibold text-gray-900_02 text-base md:text-sm">Mon - Ami</span>
              <span className="font-poppins font-semibold text-gray_800_06 text-base md:text-sm">
                <>
                  , <br />
                </>
              </span>
              <span className="font-poppins font-normal text-gray_800_06 text-base md:text-sm">
                your help and guide to easy settlement in Canada
              </span>
            </Text>
            <div className="mt-10 h-[1px] w-full  bg-black-900 " />
            <div className="md:p-5 w-full flex flex-col justify-center  items-center" >
            <div className="ml-20 flex  items-center gap-[23px] self-start md:ml-0 md:w-full  mt-5">
              <Img src="images/img_star_1.svg" alt="image_two" className="h-[38px] w-[38px]" />
              <Text size="6xl" as="p" className="self-end">
                What we do
              </Text>
            </div>
            <Heading  className="text-6xl md:text-4xl sm:text-2xl ml-32 mt-20  mb-2 self-start !text-blue_gray-900 md:ml-0">
              Sign up to access our services
            </Heading>
            <Text
              size="5xl"
              as="p"
              className="text-2xl md:text-xl sm:text-sm ml-32  md:ml-0 self-start leading-[41px] !text-gray-800_01  md:w-full"
            >
              <>
                we are dedicated to helping individuals and families achieve their settlement <br />
                goals in Canada.
              </>
            </Text>
            <Button
                color="blue_gray_400"
                shape="round"
                className="ml-32 md:ml-0 m-auto  my-5 font-inter font-semibold sm:px-5"
              >
                Signup
              </Button>
              <div className="grid  grid-cols-3 md:grid-cols-1 bg-[url(/public/images/img_bg.svg)] bg-contain bg-no-repeat  gap-5 w-[80%] md:w-full ">
      {items.map(item => (
        <div key={item.id} className=" w-full  mb-10   rounded-[15px] bg-red-400_01 flex  flex-col items-center gap-[11px] py-10" >
            
            <Img src={item.icon} alt="government_one" className="h-14" />
                        <Heading  as="h2" className="text-2xl md:text-xl sm:text-base !font-inter !text-white-A700">
                          {item.name}
                        </Heading>
        </div>
      ))}
     </div>
            </div>
            <div className="mt-10 h-[1px] w-full  bg-black-900 " />
            <div className="md:p-5 w-full flex flex-col justify-center  items-center" >
            <div className="ml-20 flex  items-center gap-[23px] self-start md:ml-0 md:w-full  mt-5">
              <Img src="images/img_star_1.svg" alt="image_two" className="h-[38px] w-[38px]" />
              <Text size="6xl" as="p" className="self-end">
              Blog
              </Text>
            </div>
            <Heading  className="text-6xl md:text-4xl sm:text-2xl ml-32 mt-20 self-start !text-blue_gray-900 md:ml-0">
            News and immigration tips
            </Heading>
            <Text
              size="5xl"
              as="p"
              className="text-2xl md:text-xl sm:text-sm ml-32 mb-q md:ml-0 self-start leading-[41px] !text-gray-800_01  md:w-full"
            >
              <>
              Latest on immigration
              </>
            </Text>
            
            <div className="mx-auto mt-10 flex w-[80%] md:w-full gap-[54px] md:flex-col ">
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
            <div className="mx-auto mt-[25px] flex  w-[80%] md:w-full gap-[54px] md:flex-col ">
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_21.png"
                  alt="instagram_post"
                  className="h-72 w-full rounded-[10px] object-cover "
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_22.png"
                  alt="image"
                  className="h-72 w-full rounded-[10px] object-cover "
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_23.png"
                  alt="image"
                  className="h-72 w-full rounded-[10px] object-cover "
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
              <div className="flex w-full flex-col items-start gap-[18px]">
                <Img
                  src="images/img_rectangle_24.png"
                  alt="image"
                  className="h-72 w-full rounded-[10px] object-cover "
                />
                <Text size="2xl" as="p">
                  instagram post
                </Text>
              </div>
            </div>
            </div>
            
          
            <div className="mt-32 flex flex-col items-start gap-[63px] self-stretch overflow-auto bg-blue_gray-50_01 p-5 sm:gap-[31px]">
              <Heading  className= " text-6xl md:text-4xl sm:text-2xl ml-32 mt-[21px] !text-blue_gray-900 md:ml-0">
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
            <div className="mt-20 flex flex-col items-center">

            <Heading  className="text-6xl md:text-4xl sm:text-2xl ml-32 mt-20  !text-blue_gray-900 md:ml-0">
            Ready to Start?
            </Heading>
            <Text
              size="5xl"
              as="p"
              className="text-2xl md:text-xl sm:text-sm ml-32 mb-5 md:ml-0 text-center  leading-[41px] !text-gray-800_01  md:w-full md:p-5"
            >
              <>
              Powered by AI, Our goal is to create the best settlement experience for you
              </>
            </Text>
             
              <Button color="gray_600_04" shape="round" className="min-w-[190px] font-inter font-semibold sm:px-5">
                Get Started
              </Button>
            </div>
            <div className=" mt-[79px] flex w-full  flex-col justify-center items-center md:px-5 md:pt-20">
              <Img
                src="images/img_group_76.svg"
                alt="image_six"
                className="relative z-[3] md:h-32  h-48 w-[78%] md:ml-0"
              />
              <div className=" -mt-20 flex justify-center items-center w-[80%] md:w-full  rounded-t-[285px] md:rounded-t-[50px] bg-red-400 px-14 pt-32 md:px-5 ">
                <div className="mb-10 flex w-[41%] flex-col items-start gap-[23px] md:w-full">
               
                  <a href="#" className="ml-3.5 md:ml-0">
                    <Heading className="text-6xl md:text-4xl sm:text-2x !text-white-A700">
                      Contact Us
                    </Heading>
                  </a>
                  <div className="self-stretch">
                    <Text  className="text-2xl md:text-xl sm:text-sm !text-white-A700">
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
            </div>
          </div>
        </div>
      </>
    );
  }

export default Page1;
