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
import axios from "axios";

interface Page1Props {
  togglePage: () => void;
}
interface GoogleSearchResult {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail?: { src: string; width: string; height: string }[];
    metatags?: Record<string, string>[];
    cse_image?: { src: string }[];
  };
}
function Page2({ togglePage}: Page1Props){
  const [query, setQuery] = useState<string>('Cultural Festivals and Celebrations in Canada');
  const [results, setResults] = useState<GoogleSearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchGoogleSearchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post<{ results: GoogleSearchResult[] }>(
        'https://linked-origin-server.vercel.app/api/v1/search/google-search',
        {"searchQuery": {"searchQuery":query}},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data && response.data.results) {
        setResults(response.data.results);
      } else {
        setResults([]);
      }
    } catch (err) {
      setError('Failed to fetch Google search results');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGoogleSearchResults();
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
    
          <div className="  bg-center bg-cover bg-no-repeat my-auto flex flex-col items-center">
              {/* header section */}
              <Header/>
              <div className="relative mx-auto flex w-full items-start justify-center gap-5   md:h-auto md:flex-col md:p-5">
              <Settings/>
              <div className="flex flex-col w-full h-full items-center">
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
          <div onClick={togglePage}  className="text-black text-xs cursor-pointer">Ask Mon-Ami</div>
          <div className="justify-center text-xs text-white-A700 px-9 py-2 mt-2 text-white whitespace-nowrap bg-gray-700 rounded-xl md:px-5 cursor-pointer">
            Search
          </div>
        </div>
        <div className="mt-2.5 text-xs leading-4 text-stone-900">
          Toggle to switch between <br />
          Mon-Ami & search
        </div>
      </div>
               </div>
                {/* introductory section */}
                <div className="mb-7   md:pt-4 h-full flex w-full flex-col items-center justify-center gap-10 md:w-full md:gap-5 sm:gap-10e">
                  {/* questions list section */}
                  <div className="flex flex-col w-[70%] md:w-full">
                    <div className="flex flex-col   md:my-5">
      <div className=" md:ml-0  md:flex-col flex flex-row  w-full items-end justify-end gap-2   ">
        
        <div className="pt-10 flex flex-col items-end gap-[3px]  w-full">
                        <div className="mr-7 flex w-[27%] flex-wrap justify-end gap-5 md:mr-0 md:w-full">
                          <Heading onClick={togglePage}  className="cursor-pointer !text-gray-800 text-base md:text-sm ">
                            Ask Mon-Ami
                          </Heading>
                          <Heading   className="cursor-pointer !text-gray-800 text-base md:text-sm border-b-2 border-red-500 ">
                              Search
                          </Heading>
                        </div>
                        <div className="self-stretch rounded-md  bg-white-A700 p-[9px] border border-gray-400">
                        <form onSubmit={handleSearch}>
                            <div className="flex flex-col gap-[27px]">
                        
                              <div className="flex items-center justify-between gap-5 h-10">

                                <div  className="flex items-center text-base h-10 md:text-sm outline-none border-none focus:outline-none border-r border-black-900_2d w-[80%]">
                             
                                  <input
                                      type="text"
                                      placeholder="Search job title,keywords or company"
                                      value={query}
                                      onChange={(e) => setQuery(e.target.value)}
                                  />
            
              
          
                               
  
                               </div>
                               <div className= "flex flex-row h-full items-center justify-between gap-2 pl-2 w-[20%]   border-l border-blue_gray-100_01">
                              
                              
                                <button  type="submit" className= "md:hidden justify-center self-end  w-32 text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-10  rounded-[23px]" > Search
                                </button>
                               </div>
                            
                              </div>
                           
                            </div>
                             <button className= "hidden md:block justify-center md:w-full  w-[15%] text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-14  rounded-[23px]" > Search
                            </button>
                            </form>
                          </div>
        </div>
   
        </div>
    
      </div>
   
    
                    {/* healthcare questions section */}
                    <div className="  md:ml-0  md:mr-0 flex flex-col my-10 md:my-5 ">

                  
                    <div>
         
            {loading && 
             <div className="flex flex-col gap-4 mt-2">  
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>

                    </div>}
            {error && <div>{error}</div>}
            {!loading && !error && results.length > 0 && (
        <div className="grid grid-cols-1  gap-4">
          {results.map((result, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow">
              <h2 className="text-lg font-bold" dangerouslySetInnerHTML={{ __html: result.htmlTitle }}></h2>
              <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: result.htmlSnippet }}></p>
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                Visit Link
              </a>
              {result.pagemap.cse_image && result.pagemap.cse_image[0] && (
                <img
                  src={result.pagemap.cse_image[0].src}
                  alt={result.title}
                  className="w-full h-auto mt-2"
                />
              )}
            </div>
          ))}
        </div>
      )}
         {!loading && !error && results.length === 0 && <div className="flex flex-col"> <div className="w-full text-xl font-semibold bg-clip-text md:max-w-full">
         <div className="w-full text-xl font-semibold bg-clip-text md:max-w-full">
        Mon - Ami
      </div>
      </div>
      <div className="mt-5  text-sm text-black w-full">
      Hey there! Mon-Ami here, your guide to experiencing all the vibrant life Canada has to offer! Looking to get involved or discover fun things to do? Let's explore your options!

</div></div>}
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

export default Page2;
