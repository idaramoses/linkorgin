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
function Page2({ togglePage}: Page1Props){
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
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
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState<string>('software developer');
    const [location, setLocation] = useState<string>('ontario');

    const fetchJobs = async (searchQuery: string, searchLocation: string) => {
        setLoading(true);
        setError(null);

        try {
            const jobData = await AuthService.getJobs(searchQuery, searchLocation);
            // setJobs(jobData);
            console.log(jobData)
        } catch (error) {
            setError('Failed to fetch jobs');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchJobs(query, location);
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
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/048766c4964e2ada59c38cfe787cd23c9adfb6456f3fefabdb7c510ea6c52d1d?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
              className="shrink-0 aspect-[1.27] w-[29px]"
            />
            <div className="my-auto text-white-A700 text-xs">Community</div>
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
                <div className="mb-7   md:pt-4 h-full flex w-[70%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10e">
                  {/* questions list section */}
                  <div className="flex flex-col w-full">
                    <div className="flex flex-col   md:my-5">
      <div className="ml-20 md:ml-0  md:flex-col flex flex-row w-[90%] md:w-full items-end justify-end gap-2   ">
        
        <div className="pt-10 flex flex-col items-end gap-[3px]  w-[85%] md:w-full">
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
                                <div  className="flex items-center text-base h-10 md:text-sm outline-none border-none focus:outline-none border-r border-black-900_2d w-[50%]">
                             
                <input
                    type="text"
                    placeholder="Search job title,keywords or company"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            
              
          
                               
  
                               </div>
                               <div className= "flex flex-row h-full items-center justify-between gap-2 pl-2 w-[50%]   border-l border-blue_gray-100_01">
                                <div className="flex flex-row gap-2 items-center justify-center">
                                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81271 12.9196C6.97793 12.2908 11 9.82321 11 5.72243C11 2.56202 8.53757 0 5.5 0C2.46244 0 0 2.56202 0 5.72243C0 9.82321 4.02207 12.2908 5.18729 12.9196C5.38591 13.0268 5.61409 13.0268 5.81271 12.9196ZM5.5 8.1749C6.80185 8.1749 7.85714 7.07693 7.85714 5.72243C7.85714 4.36797 6.80185 3.26996 5.5 3.26996C4.19815 3.26996 3.14286 4.36797 3.14286 5.72243C3.14286 7.07693 4.19815 8.1749 5.5 8.1749Z" fill="#222222"/>
                                </svg>
                               <p className="text-gray-500 text-sm">Location</p>
                                </div>
                              
                                <button  type="submit" className= "md:hidden justify-center self-end  w-32 text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-10  rounded-[23px]" > find jobs
                                </button>
                               </div>
                            
                              </div>
                           
                            </div>
                            </form>
                          </div>
        </div>
        <button className= "hidden md:block justify-center md:w-full  w-[15%] text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-14  rounded-[23px]" > Find a job
        </button>
        <button className= "invisible  justify-center md:w-full  w-[15%] text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-14  rounded-[23px]" > Post your resume
        </button>
        </div>
        <div className="ml-20 md:ml-0 flex md:flex-col w-[80%] pt-10  flex-rol items-end gap-[3px]  md:w-full">
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
      <option value="">Date Posted</option>
      <option value="railway">Today</option>
      <option value="road">This Week</option>
      <option value="aviation">This Month</option>
      <option value="marine">Marine</option>
    </select>
        </div>    
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Job Type</option>
            <option value="railway">Remote</option>
            <option value="road">Onsite</option>
          </select>
        </div>   
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Location</option>
            <option value="railway">Toronto</option>
            <option value="road">Vancouver</option>
            <option value="railway">Montreal</option>
            <option value="road">Calgary</option>
            <option value="railway">Edmonton</option>
            <option value="road">Quebec City</option>
          </select>
        </div> 
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-32">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Company</option>
            <option value="railway">Google</option>
            <option value="road">Faacebook</option>
            <option value="road">IBM</option>
            <option value="road">Twitter</option>

          </select>
        </div>   
        <div className="flex flex-wrap md:w-full mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-40">
          <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Job Language</option>
            <option value="railway">Engilsh</option>        
            <option value="railway">French</option>

          </select>
        </div>  
        </div>
      </div>
   
    
                    {/* healthcare questions section */}
                    <div className=" ml-20 md:ml-0 mr-10 md:mr-0 flex flex-col my-10 md:my-5 ">

                  
                    <div>
         
            {loading && 
             <div className="flex flex-col gap-4 mt-2">  
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>
                    <div className="flex  w-full h-10 flex-col items-center gap-4 rounded-sm bg-red-400_01 bg-opacity-20 animate-pulse "/>

                    </div>}
            {error && <div>{error}</div>}
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>

<div key={"listwherecani" + index} className="flex flex-col w-[60%] md:w-full bg-white-A700 border border-gray-200 p-5 items-center my-2">
                          <p  className="text-xl font-bold self-start">
                           {job.title}
                            </p>
                            <p  className="text-base font-normal self-start">
                           {job.company}
                            </p>
                          <p  className="text-xs self-start">
                          {job.location}
                          </p>
                          <div className="flex flex-row md:flex-col w-full gap-5 md:gap-2 items-start my-2 ">
                         
                          </div>
                          <p  className="text-xs self-start my-2">
                          * {job.description}
                          </p>
                         

                          <p  className="text-xs self-start my-2"><strong >Posted on:</strong> {new Date(job.created).toLocaleDateString()}</p>

                          <a  className="text-xs self-start my-2" href={job.redirectUrl} target="_blank" rel="noopener noreferrer">View More</a>
                        </div>
                       
                      
                    </li>
                ))}
            </ul>
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
