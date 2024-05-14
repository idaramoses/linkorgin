import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Text, Heading, Button } from "../../../../components";
import { NavLink } from "react-router-dom";
import HomeScreenRowcloseOne from "components/HomeScreenRowcloseOne";
import ImageSlider from "components/ImageSlider";
import Typed, { ReactTyped } from 'react-typed'; // Import react-typed
import Header from "components/Header";
import Settings from "components/Settings";
import AuthService from "services/authService";

interface Page1Props {
  togglePage: () => void;
  
}

function Page1({ togglePage }: Page1Props){
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [isSearched, setisSearched] = useState(false);
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
    const [searchQuery, setSearchQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState<string>('');
    const [searchResult, setSearchResult] = useState<any>(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>): Promise<void> => { event.preventDefault(); 
      setisSearched(true);
      setSubmittedQuery(searchQuery);
      setLoading(true);
    
    
    try {
    
      const chatResults = await AuthService.searchChat(searchQuery,'government');
      setSearchResult(chatResults);
      setSearchQuery('');
      setLoading(false);
      setisSearched(true);
    } catch (error) {
      console.error('Chat search error:', error);
      setLoading(false);
    }
    };

    const handlequicklink = async (quicklinks: string) => {
      setisSearched(true);
      setSubmittedQuery(quicklinks);
      setLoading(true);
    
   
  try {
  
    const chatResults = await AuthService.searchChat(quicklinks,'government');
    setSearchResult(chatResults);
    setSearchQuery('');
    setLoading(false);
    setisSearched(true);
  } catch (error) {
    console.error('Chat search error:', error);
    setLoading(false);
  }
  };
  const handleResponse = (responseData: any): void => {
    // Handle the response from the API here
    console.log(responseData);
    // You can set the response data to state or perform any other actions based on the response
  };
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
                     <Img src="/images/img_thumbs_up_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
                      <h1  className="text-base md:text-sm !font-kumbhsans md:ml-0 text-white-A700">
                      Cultural 
                      </h1>
                    </div>
                      <h1  className="bg-gradient2 bg-clip-text font-bold !text-transparent text-[40px] md:text-base ">
                        Mon - Ami
                      </h1>
                      </div> 
                 
                      <p  className=" w-[40%] md:mt-5 h-14 text-sm md:text-xs md:text-left flex items-center text-center  justify-center !font-kumbhsans sm:w-full">
                        <>
                        Get help with immigration, employment,healthcare, housing, and legal matters.
                        </>
                      </p>
                    </div>
    
                    {/* healthcare questions section */}
                    <div className="flex flex-col md:flex-col-reverse">
                   
                   {!isSearched?(<div className="mt-20 md:mt-05 flex gap-5 md:flex-col">
                      {data.map((d, index) => (
                        <div onClick={() => handlequicklink(d.wherecani)}

                        key={"listwherecani" + index} className="flex w-full flex-col items-center cursor-pointer">
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
                    ):(<div className="mt-20 md:mt-5">
                       <div className="flex flex-row items-center gap-2 mt-5">
                      <div className="flex justify-center items-center text-xs text-center font-medium leading-4 text-black whitespace-nowrap bg-gray-400 rounded-full h-8 w-8">
                        Me
                      </div>
                      <div className="flex flex-col">
                      <h1  className=" font-bold t text-base md:text-sm ">
                        You
                      </h1>
                      {submittedQuery && (
        <div className="text-sm md:text-xs">
          {submittedQuery}
        </div>
      )}
                     
                      </div>
                      
                     </div>
                    {loading?(
                    <div className="flex flex-col gap-4 mt-2">  
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>

                    </div>
                    ):(  

                      <div className="flex flex-col gap-4">  
                         <div className="flex flex-row items-center gap-2 mt-5">
                      <div className="flex justify-center items-center text-xs text-center font-medium leading-4 text-black whitespace-nowrap bg-yellow-300 rounded-full h-8 w-8">
                        M
                      </div>
                      <h1  className="bg-gradient2 bg-clip-text font-bold !text-transparent text-base md:text-sm ">
                        Mon - Ami
                      </h1>
                     </div>
                     <div className="flex flex-row items-center gap-2 mt-5">
                      <div className="invisible flex justify-center items-center text-xs text-center font-medium leading-4 text-black whitespace-nowrap bg-yellow-300 rounded-full h-8 w-8">
                        M
                      </div>
                      <div className="flex flex-col gap-4">
                      {searchResult && (
                    <ReactTyped strings={[searchResult?.response ?? '']} typeSpeed={10} loop={false} />
                   )}
  <div className=" flex flex-row gap-4">
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7.8V10.2C9 12.2 8.2 13 6.2 13H3.8C1.8 13 1 12.2 1 10.2V7.8C1 5.8 1.8 5 3.8 5H6.2C8.2 5 9 5.8 9 7.8Z" stroke="#CACACA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 3.8V6.2C13 8.2 12.2 9 10.2 9H9.57143V7.22857C9.57143 5.22857 8.77143 4.42857 6.77143 4.42857H5V3.8C5 1.8 5.8 1 7.8 1H10.2C12.2 1 13 1.8 13 3.8Z" stroke="#CACACA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.5C12 9.536 9.536 12 6.5 12C3.464 12 1.6105 8.942 1.6105 8.942M1.6105 8.942H4.0965M1.6105 8.942V11.692M1 6.5C1 3.464 3.442 1 6.5 1C10.1685 1 12 4.058 12 4.058M12 4.058V1.308M12 4.058H9.558" stroke="#CACACA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.83681 2.875L7.89931 1.375C7.64931 1.125 7.08681 1 6.71181 1H4.3368C3.5868 1 2.7743 1.5625 2.5868 2.3125L1.0868 6.87499C0.774296 7.74999 1.3368 8.49999 2.2743 8.49999H4.7743C5.1493 8.49999 5.4618 8.81249 5.3993 9.24999L5.0868 11.25C4.9618 11.8125 5.3368 12.4375 5.89931 12.625C6.39931 12.8125 7.02431 12.5625 7.27431 12.1875L9.83681 8.37499" stroke="#CACACA" stroke-miterlimit="10"/>
<path d="M13.0234 2.875V9C13.0234 9.875 12.6484 10.1875 11.7734 10.1875H11.1484C10.2734 10.1875 9.89844 9.875 9.89844 9V2.875C9.89844 2 10.2734 1.6875 11.1484 1.6875H11.7734C12.6484 1.6875 13.0234 2 13.0234 2.875Z" stroke="#CACACA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  </div>

                      </div>
                     </div>
                       </div>
                   
                    )} 
                    </div>)}
    
                    
    <div className="mt-64 md:mt-10 flex flex-col items-end gap-[3px] mb-20 md:mb-5">
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
                            <div className="flex w-full items-start justify-between gap-5">
        <form onSubmit={handleSubmit} className="w-full">
        <input
            type="text"
            placeholder=" Ask me anything"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>): void => {
              if (e.key === 'Enter') {
                handleSubmit(e); // Pass the event to handleSubmit function
              }
            }}
          />
      </form>
                              
                             
                              {/* <Img src="/images/img_menu.svg" alt="menu_one" className="h-[20px]" /> */}
                            </div>
                            {/* <div className="flex items-center justify-between gap-5">
                              <Img src="/images/img_clock.svg" alt="clock_one" className="h-[19px] self-start" />
                              <Img
                                src="/images/img_settings_gray_500_01.svg"
                                alt="settings_one"
                                className="h-[17px] w-[17px] self-end"
                              />
                            </div> */}
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
                      <p className= "text-sm md:text-xs !text-blue_gray-900">
                      Welcome to the fun side of Canada! Discover a vibrant calendar of cultural events, festivals, workshops, and recreational activities designed to promote social integration and cultural exchange.  Mon-Ami can help you find events that match your interests and connect you with people who share your cultural background.  Let's explore Canada together!                     </p>
                                  </div>
                  </div>
    
                  {/* quick links section */}
                  <div className="flex flex-col gap-3 items-start w-full">
                    <Text  as="p" className="text-sm md:text-xs !font-hankengrotesk ">
                    Quick links
                    </Text>
                    <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                    Cultural Festivals and Celebrations 
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                    Community Events and Workshops 
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                    Sports Clubs and Recreation Centers 
                    </button>
                     <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                     Arts and Performance Groups 
                    </button>
                    
                 
                  </div>
                </div>
              </div>
          
    
    
            </div>
    
       
        </>
      );
  }

export default Page1;
