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

interface Job {
  title: string;
  description: string;
  company: string;
  location: string;
  redirectUrl: string;
  created: string;
}

interface JobData {
  count: number;
  jobs: Job[];
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
      { image: "/images/img_istockphoto_113.png", wherecani: "Where can i find healthcare facilities?",subcategory:"immigration and citizenship", },
      { image: "/images/img_istockphoto_171.png", wherecani: "Where can i find  social services?",subcategory:"social services & benefits", },
      { image: "/images/img_istockphoto_143.png", wherecani: "Where service the best employment services?",subcategory:"employment Services", },
      { image: "/images/img_istockphoto_148.png", wherecani: "Where can i get legal aids?",subcategory:"legal aids", },
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
    
      const chatResults = await AuthService.searchGovtChat(searchQuery,'Cultural Festivals and Celebrations','Community Events and Workshops');
      setSearchResult(chatResults);
      setSearchQuery('');
      setLoading(false);
      setisSearched(true);
    } catch (error) {
      console.error('Chat search error:', error);
      setLoading(false);
    }
    };

    const handlequicklink = async (quicklinks: string, subcategory: string) => {
      setisSearched(true);
      setSubmittedQuery(quicklinks);
      setLoading(true);
    
   
  try {
  
    const chatResults = await AuthService.searchGovtChat(quicklinks,'Cultural Festivals and Celebrations','Community Events and Workshops ');
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
    
          <div className="  my-auto flex flex-col items-center">
              {/* header section */}
              <Header/>
              <div className="relative mx-auto flex w-full items-start justify-center gap-5   md:h-auto md:flex-col md:p-5">
              <Settings/>
              <div className="w-full flex flex-col items-center">
              <div className="flex gap-5 justify-between md:flex-wrap w-full px-10 md:hidden">
      <div className="flex flex-col self-start  pt-2 text-white rounded-lg bg-zinc-500 w-56">
        <div className="text-xs font-medium text-center text-white-A700 px-2">
          Click the dropdown to access other categories
        </div>
        <div className="flex z-10 gap-4 items-center justify-center py-2 mt-1.5  text-base font-semibold whitespace-nowrap bg-red-500 rounded-b-md md:pr-5">
          <div className="flex gap-2">
          <Img src="/images/img_thumbs_up_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
            <div className="my-auto text-white-A700 text-xs">Cultural</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/638602d87b5b93baef726d2e212ad2388a1428c3bcfb7407cac98eba03a21890?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
            className="shrink-0 self-start mt-3 w-3.5 aspect-[1.75]"
          />
        </div>
      </div>
      <div className="flex flex-col px-5 text-center">
        <div className="flex flex-col px-1.5 pt-2 pb-1.5 text-base font-semibold rounded-2xl bg-zinc-100">
        <div className="justify-center text-xs text-white-A700 px-9 py-2 mt-2 text-white whitespace-nowrap bg-gray-700 rounded-xl max-md:px-5 cursor-pointer">
        Ask Mon-Ami 
          </div>
          <div onClick={togglePage}  className="text-black text-xs cursor-pointer"> Search</div>
          
        </div>
        <div className="mt-2.5 text-xs leading-4 text-stone-900">
          Toggle to switch between <br />
          Mon-Ami & search
        </div>
      </div>
               </div>
                <div className="mb-7   md:pt-4 flex w-[80%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10 md:px-0 px-20 ">
                  {/* questions list section */}
                  <div className="flex w-full flex-col self-end md:w-full">
               
    
                    {/* healthcare questions section */}
                    <div className="flex flex-col md:flex-col-reverse">
                   
                   {!isSearched?(<div className="mt-20 md:mt-05 flex gap-5 md:flex-col">
                   <div className="flex flex-col w-full">
                   <p className=" md:text-2xl text-3xl self-start bg-gradient2 bg-clip-text !text-transparent !font-kumbhsans ">
          Mon - Ami
         </p>
      <div className="mt-5 w-[50%]  text-sm text-black md:w-full">
      Hey there! Mon-Ami here, your guide to experiencing all the vibrant life Canada has to offer! Looking to get involved or discover fun things to do? Let's explore your options!
      </div>
      <div className="mt-16 w-full md:mt-10 md:w-full">
        <div className="flex gap-2 md:flex-col max-md:gap-0">
           <div className="flex flex-col w-3/12 max-md:ml-0 md:w-full">
            <div onClick={() => handlequicklink('Do you enjoy music, sports, volunteering, or learning new things?',"")} className="flex flex-col h-40  cursor-pointer items-center grow px-4 py-2 w-full bg-white rounded-xl border border-solid border-zinc-300 md:mt-4">
              
              <div className="mt-9 text-sm text-neutral-700">
              Do you enjoy music, sports, volunteering, or learning new things?
              </div>
            </div>
          </div>
           <div className="flex flex-col ml-5 w-3/12 md:ml-0 md:w-full">
            <div onClick={() => handlequicklink('Curious about unique cultural events or lesser-known community workshops?','Social Services & Benefits')} className="grow px-4 py-2 h-40 flex  cursor-pointer items-center w-full  bg-white rounded-xl text-sm border border-solid border-zinc-300 text-neutral-700 max-md:mt-7">
            Curious about unique cultural events or lesser-known community workshops?
              <br />
            </div>
          </div>
           <div onClick={() => handlequicklink(' Interested in joining a sports club, arts group, or volunteer organization?','Employment Services')}  className="flex flex-col ml-5 w-3/12 md:ml-0 md:w-full">
            <div className="grow px-4 py-2 h-40 flex  cursor-pointer items-center w-full text-sm bg-white rounded-xl border border-solid border-zinc-300 text-neutral-700 max-md:mt-7">
            Interested in joining a sports club, arts group, or volunteer organization?
            </div>
          </div>
          
        </div>
      </div>
    </div>
                    </div> 
                    ):(<div className="mt-10 md:mt-5">
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
    
                    
                    <div className="mt-20 md:mt-10 flex flex-col items-end gap-[3px] mb-20 md:mb-5">
                    <div className="mr-7 flex w-[27%] flex-wrap justify-end gap-5 md:mr-0 md:w-full">
                          <Heading   className="cursor-pointer !text-gray-800 text-base md:text-sm border-b-2  border-red-500 ">
                            Ask Mon-Ami
                          </Heading>
                          <Heading  onClick={togglePage}  className="cursor-pointer !text-gray-800 text-base md:text-sm  ">
                              Search
                          </Heading>
                        </div>
                       <div className="flex  flex-col items-end gap-2.5 self-stretch">
                        <div className="self-stretch rounded-md border border-solid border-blue_gray-100_01 bg-white-A700 p-[9px]">
                          <div className="flex flex-col gap-[27px]">
                            <div className="flex w-full items-start justify-between gap-5">
        <form onSubmit={handleSubmit} className="w-full flex flex-row">
        <input
            type="text"
            placeholder=" Ask me anything"
            value={searchQuery}
            onChange={handleInputChange}
            
          />
            <button  type="submit"  className= "justify-center self-end  w-32 text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-10  rounded-[23px]" > Ask Mon-ami
                                </button>
      </form>
                              
                             
                            </div>
                          
                          </div>
                        </div>
                      </div>
                    </div>
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
