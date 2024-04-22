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
        <svg width="113" height="45" viewBox="0 0 113 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 36C31.5081 36 38 29.5081 38 21.5C38 13.4919 31.5081 7 23.5 7C15.4919 7 9 13.4919 9 21.5C9 29.5081 15.4919 36 23.5 36Z" fill="white"/>
<path d="M77 7H72V17H77V7Z" fill="white"/>
<path d="M77 22H72V33H77V22Z" fill="white"/>
<path d="M107 22H102V33H107V22Z" fill="white"/>
<path d="M90.8579 13.2441C91.48 12.5925 92.2322 12.0821 93.0645 11.7467C93.8969 11.4112 94.7904 11.2585 95.6857 11.2986C97.6366 11.2986 99.1518 11.8987 100.291 13.109C101.237 14.1916 101.805 15.5591 101.905 17H107C106.891 13.9092 106.043 11.5003 104.455 9.7732C102.742 7.92941 100.469 7.00584 97.6366 7.00251C95.7559 6.95903 93.9048 7.48128 92.3186 8.50288C90.7803 9.52237 89.6272 11.0359 89.0456 12.799V7.40761H84V17H89.1942C89.3565 15.6059 89.9371 14.2954 90.8579 13.2441Z" fill="white"/>
<path d="M89 22H84V33H89V22Z" fill="white"/>
<path d="M113 17H107C107 17.2284 107 17.4518 107 17.6852V22H112.965L113 17Z" fill="white"/>
<path d="M65.9655 17.1635V7.32743H60.9367V13.1942C60.3178 11.3709 59.1597 9.79825 57.6286 8.70181C55.9636 7.53639 53.9895 6.94278 51.9835 7.00435C49.9948 6.96202 48.0338 7.49461 46.3188 8.54283C44.628 9.61734 43.272 11.1774 42.4141 13.0352C41.4332 15.183 40.9503 17.5402 41.004 19.9173C40.9573 22.195 41.3933 24.4553 42.281 26.5379C42.228 26.97 42.2 27.405 42.1971 27.8405V34.1227C42.4289 38.2714 44.0509 40.7894 46.1413 42.4715C48.2317 44.1536 50.9975 44.9946 54.4092 44.9946C56.5614 45.0601 58.6917 44.5291 60.5817 43.4561C62.2786 42.4539 63.663 40.9659 64.5702 39.1689C65.5233 37.233 66.0009 35.0818 65.9605 32.9073V22.3276H72V17.1635H65.9655ZM48.1725 13.8147C48.8639 13.0681 49.7004 12.4834 50.6262 12.0996C51.552 11.7158 52.5459 11.5417 53.5415 11.589C54.8714 11.5653 56.1824 11.92 57.3328 12.6147C58.4525 13.3224 59.3594 14.3421 59.9507 15.5583C60.2083 16.0701 60.4148 16.6079 60.5669 17.1635H52.4815C50.1989 17.1645 47.9824 17.9607 46.1856 19.425C46.2695 17.0711 46.9252 15.1993 48.1725 13.8147ZM60.6853 22.3276C60.5271 23.0286 60.2801 23.7046 59.9507 24.3379C59.3471 25.5471 58.4299 26.5561 57.3032 27.2508C56.1537 27.9477 54.8421 28.3025 53.5119 28.2764C52.5179 28.3222 51.526 28.1475 50.602 27.7637C49.678 27.38 48.8431 26.7961 48.1528 26.0508C47.9901 25.8661 47.8323 25.6713 47.6598 25.4713C48.0944 24.5258 48.7784 23.7282 49.6321 23.1716C50.4857 22.6151 51.474 22.3223 52.4815 22.3276H60.6853ZM60.9367 32.8714C60.9367 35.3193 60.2892 37.1842 58.9942 38.4663C58.3355 39.1103 57.5607 39.6123 56.7145 39.9432C55.8683 40.2741 54.9675 40.4275 54.0641 40.3945C52.4765 40.4624 50.9071 40.0221 49.5677 39.133C48.3944 38.2919 47.1815 35.774 47.1865 34.3842V31.8201C48.6887 32.5573 50.3325 32.9291 51.9934 32.9073C53.9993 32.9688 55.9735 32.3752 57.6384 31.2098C59.1631 30.1132 60.3171 28.545 60.9367 26.7277V32.8714Z" fill="white"/>
<path d="M74.5 5C75.8807 5 77 3.88071 77 2.5C77 1.11929 75.8807 0 74.5 0C73.1193 0 72 1.11929 72 2.5C72 3.88071 73.1193 5 74.5 5Z" fill="white"/>
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
