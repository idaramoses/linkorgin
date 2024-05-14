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
import { SmallYouTubeVideo } from "components/VideoPlayer";

interface Page1Props {
  togglePage: () => void;
 
}

function Page2({ togglePage }: Page1Props){
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

    const datas = [
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
                <div className="mb-7  pt-20 md:pt-16 flex w-[70%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10 border-r border-gray-300 md:border-none">
                  {/* questions list section */}
                  <div className="flex w-full flex-col self-end md:w-full ">
                  <div className=" flex w-full md:h-auto md:my-5 h-14 md:m-auto items-center justify-center gap-2 md:ml-0 md:w-full sm:flex-col  md:px-0 px-20">
                     <div className="flex md:flex-col flex-row h-14 w-[60%] md:w-full gap-2">
                     <div className="flex  flex-row w-[40%] h-full items-center justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                     <Img src="/images/img_group_57.svg" alt="home_one" className="h-[23px] self-center" />
                      <h1  className="text-base md:text-sm !font-kumbhsans md:ml-0 text-white-A700">
                      Local Resources 
                      </h1>
                    </div>
                      <h1  className="bg-gradient2 bg-clip-text font-bold !text-transparent text-[40px] md:text-base ">
                        Mon - Ami
                      </h1>
                      </div> 
                 
                      <p  className=" w-[40%] md:mt-5 h-14 text-sm md:text-xs md:text-left flex items-center text-center  justify-center !font-kumbhsans sm:w-full">
                        <>
                        Get help with immigration, employment, healthcare, housing, and legal matters.
                        </>
                      </p>
                    </div>
    
                    {/* healthcare questions section */}
                    <div className="flex flex-col">
                    <div className="flex flex-col  my-10 md:my-5">
      <div className="ml-20 md:ml-0  md:flex-col flex flex-row w-[90%] md:w-full items-start justify-start gap-2   ">
        
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
                                <div  className="flex items-center text-base h-10 md:text-sm outline-none border-none focus:outline-none border-r border-black-900_2d">
                                <input  placeholder="Search job title,keywords or company"/>
  
                               </div>
                               <div className= "flex flex-row h-full items-center justify-between gap-2 pl-2 w-[50%]    border-blue_gray-100_01">
                                
                              
                               
                               </div>
                            
                              </div>
                           
                            </div>
                          </div>
        </div>
        
        </div>
     
      </div>
   
    
      <div className=" ml-20 md:m-0 flex flex-col md:flex-col-reverse">
      <div className="flex flex-col gap-3" >
      {/* healthcare questions section */}
      {data.map((d, index) => (
    <div  className="flex   flex-row gap-2 items-start justify-center w-[80%]">
     <Img
          src={d.image}
          alt="image"
          className="h-[100px] w-[100px] rounded-[12px] object-cover "
        />
         <p  className="text-base self-start w-[60%]">
          {d.wherecani}
      </p>
      
    </div>
  ))}
      
      </div>
                    {/* search section */}
                   
                    </div>
                   
                    </div>
                   
                  </div>
    
            
                </div>
    
                {/* government services section */}
                <div className="flex md:pt-5 pt-20 w-[30%] px-5  items-center justify-center md:hidden   flex-col gap-[29px] md:w-full">
                  <div className="flex flex-col items-start gap-[21px]">
              
                    <div className="self-stretch rounded-[10px] bg-gray-200 p-[18px]">
                      <p className= "text-sm md:text-xs !text-blue_gray-900">
                      Whether you need help navigating immigration applications, finding employment opportunities, accessing healthcare services, securing housing accommodations, or understanding your legal rights, government services are here to help you access public services that support you through the settlement process.                                      </p>
                                  </div>
                  </div>
    
                  {/* quick links section */}
                  <div className="flex flex-col gap-3 items-start w-full">
                    <Text  as="p" className="text-sm md:text-xs !font-hankengrotesk ">
                    Quick links
                    </Text>
                    <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                    Immigrant Support Groups 
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                    Cultural Associations 
                    </button>
                    <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                    Refugee Assistance Organizations  
                    </button>
                     <button  color="light_green_100_2d_blue_50" className="text-sm md:text-xs w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                     Language and Education Programs 
                    </button>
                    
                 
                  </div>
                </div>
              </div>
          
    
    
            </div>
    
       
        </>
      );
  }

export default Page2;
