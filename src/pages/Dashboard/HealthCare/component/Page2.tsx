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

interface Province {
  province: string;
  latitude: any;
  longitude: any;
}
interface Location {
  lat: number;
  lng: number;
}

interface Viewport {
  northeast: Location;
  southwest: Location;
}

interface Geometry {
  location: Location;
  viewport: Viewport;
}

interface Photo {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
}

interface Result {
  business_status: string;
  formatted_address: string;
  geometry: Geometry;
  icon: string;
  name: string;
  opening_hours: { open_now: boolean };
  photos: Photo[];
  place_id: string;
  plus_code: { compound_code: string; global_code: string };
  rating: number;
  reference: string;
  types: string[];
  user_ratings_total: number;
}

interface ApiResponse {
  results: Result[];
  length: number;
}

const provinces: Province[] = [
  { province: "Alberta", latitude: 53.9333, longitude: -116.5765 },
  { province: "British Columbia", latitude: 53.7267, longitude: -127.6476 },
  { province: "Manitoba", latitude: 49.8951, longitude: -97.1384 },
  { province: "New Brunswick", latitude: 46.5653, longitude: -66.4619 },
  { province: "Newfoundland and Labrador", latitude: 53.1355, longitude: -57.6604 },
  { province: "Nova Scotia", latitude: 44.6820, longitude: -63.7443 },
  { province: "Ontario", latitude: 51.2538, longitude: -85.3232 },
  { province: "Prince Edward Island", latitude: 46.5107, longitude: -63.4168 },
  { province: "Quebec", latitude: 52.9399, longitude: -73.5491 },
  { province: "Saskatchewan", latitude: 52.9399, longitude: -106.4509 }
];

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


  const [jobs, setJobs] = useState<Job[]>([]);

  const [query, setQuery] = useState<string>('child healthcare');
  const [lat, setLat] = useState<string>('');
  const [long, setLong] = useState<string>('');

  const [clinics, setClinics] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
    
   const fetchJobs = async (searchQuery: string, searchLong: string,searchLat: string,) => {
       setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("token");
        const response = await axios.get<ApiResponse>('https://linked-origin-server.vercel.app/api/v1/search/location-search/', {
          params: {
            "query":searchQuery,
            "lat": searchLat,
            "lng": searchLong
          },
          headers: {
            Authorization: `Bearer ${token}`,
        },
        });
        setClinics(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
   };

   const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        fetchJobs(query, long,lat);
   };

   const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
 
   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const province = provinces.find(p => p.province === event.target.value) || null;
    setSelectedProvince(province);
    setLat(province.latitude);
    setLong(province.longitude);
    
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
          <Img src="/images/img_group_55.svg" alt="home_one" className="h-[23px] self-center" />
            <div className="my-auto text-white-A700 text-xs">Heathcare</div>
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
          <div className="mb-7   md:pt-4 h-full flex w-[80%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10">
         {/* questions list section */}
        <div className="flex flex-col w-full">
        <div className="flex flex-col   md:my-5">
        <div className="ml-20 md:ml-0  md:flex-col flex flex-row w-full items-end justify-end gap-2">
        
        <div className="pt-10 flex flex-col items-end gap-[3px] w-full">
                        <div className="mr-7 flex w-[27%] flex-wrap justify-end gap-5 md:mr-0 md:w-full">
                          <Heading onClick={togglePage}  className="cursor-pointer !text-gray-800 text-base md:text-sm ">
                            Ask Mon-Ami
                          </Heading>
                          <Heading   className="cursor-pointer !text-gray-800 text-base md:text-sm border-b-2 border-red-500 ">
                              Search
                          </Heading>
                        </div>
                        <div className="self-stretch rounded-md  bg-white-A700 p-[9px] border border-gray-400">
                        <select
        onChange={handleChange}
        defaultValue=""
        className="p-2 border border-gray-300 rounded w-full"
      >
        <option value="" disabled>Select a province</option>
        {provinces.map((province, index) => (
          <option key={index} value={province.province}>{province.province}</option>
        ))}
   
      </select>
      <button onClick={handleSearch} className= "justify-center w-full  text-xs     sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF] h-10 mt-4  rounded-md" > Find heathcare
        </button>
         </div>
        </div>
       
        <button className= "invisible  justify-center md:w-full  w-[15%] text-xs   hover:-translate-y-1 hover:scale-110 duration-300   sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-10 mt-4  rounded-[23px]" > Post your resume
        </button>
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
      {!loading && !error && clinics.length > 0 && (
         <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {clinics.map((clinic) => (
            <>
            
            <div key={clinic.place_id} className="flex flex-col  bg-white-A700 border border-gray-200 p-5 items-center my-2">
                          <p  className="text-xl font-bold self-start">
                          {clinic.name}
                            </p>
                            <p  className="text-base font-normal self-start">
                          {clinic.formatted_address}
                            </p>
                            <p className="text-base font-normal self-start">Status: {clinic.business_status}</p>
                            <p className="text-base font-normal self-start">Rating: {clinic.rating} ({clinic.user_ratings_total} reviews)</p>
                          <div className="flex flex-row md:flex-col w-full gap-5 md:gap-2 items-start my-2 ">
                         
                          </div>
                          <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${clinic.photos[0]?.photo_reference}&key=YOUR_API_KEY`}
                alt={clinic.name}
              />
                <p  className="text-xs self-start my-2">Currently Open: {clinic.opening_hours.open_now ? 'Yes' : 'No'}</p>

                          <div>
                <a
                  href={`https://maps.google.com/?q=${clinic.geometry.location.lat},${clinic.geometry.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </div>
                        </div>
            </>
          ))}
        </div>
      )}
      {!loading && !error && clinics.length === 0 && <div className="flex flex-col"> 
      <p className=" md:text-2xl text-3xl self-start bg-gradient2 bg-clip-text !text-transparent !font-kumbhsans ">
          Mon - Ami
         </p>
      <div className="mt-5  text-sm text-black w-full">
      Hey there! Mon-Ami here, your friendly guide to navigating healthcare in Canada. Feeling under the weather or simply want to stay healthy? Let's find the right resources for you!
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
