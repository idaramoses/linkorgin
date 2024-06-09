import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../../components";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "components/Header";
import ReadMoreReact from 'react-read-more-less';
import AuthService, { UserData } from "services/authService";
import { Skeleton } from "@mui/material";

const data = [
  { governmentone: "/images/img_home.svg", governmenttwo: "Government", route: 'government' },
  { governmentone: "/images/img_settings.svg", governmenttwo: "Community" ,route: 'community' },
  { governmentone: "/images/img_thumbs_up.svg", governmenttwo: "Educational" ,route: 'educational'},
  { governmentone: "/images/img_group_55.svg", governmenttwo: "Healthcare" ,route: 'healthcare'},
  { governmentone: "/images/img_group_52.svg", governmenttwo: "Legal & Immigration service",route: 'immigration' },
  {
    governmentone: "/images/img_thumbs_up_white_a700.svg",
    governmenttwo: "Cultural & Recreational Activities"
    ,route: 'cultural'
  },
  { governmentone: "/images/img_settings_white_a700.svg", governmenttwo: "Finance",route: 'finance' },
  { governmentone: "/images/img_group_59.svg", governmenttwo: "Social" ,route: 'social'},
  { governmentone: "/images/img_group_57.svg", governmenttwo: "Local Resource" ,route: 'investment'},
];
const newsdata = [
  { title: "USCIS Announces Open Application Period", contents: "U.S. Citizenship and Immigration Services today announced the application period for the Citizenship and Integration Grant Program, which provides funding for citizenship preparation programs in communities across the country" },
  { title: "USCIS to Open International Field Offices in Qatar and Turkey", contents: "U.S. Citizenship and Immigration Services (USCIS) today announced the upcoming opening of international field offices in Doha, Qatar, and Ankara, Turkey, to increase capacity for refugee processing, strengthen strategic partnerships, and facilitate interagency cooperation." },
  { title: "Cap Reached for Additional Returning Worker H-2B Visas", contents: "U.S. Citizenship and Immigration Services has received enough petitions to reach the cap for the additional 19,000 H-2B visas made available for returning workers for the early second half of fiscal year (FY) 2024 with start dates " },
  { title: "Tools Outage", contents: "USCIS will conduct system maintenance to the Contact Relationship Interface System (CRIS) on Wednesday, April 17, 2024 at 11:50 p.m. through Thursday, April 18, 2024 at 2:00 a.m. Eastern." },
 
];
const NewsItem = ({ title, contents, image }) => {
  const [expanded, setExpanded] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    // Check local storage for user data
    const userData = localStorage.getItem('userData');
    if (userData) {
      // If user data is found, consider the user logged in
      setLoggedIn(true);
    }
  }, []);
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataFromStorage = AuthService.getUserDataFromLocalStorage();
    console.log('userData:', userDataFromStorage); // Add this line for debugging
    setUserData(userDataFromStorage);
  }, []);
  // const shortContents = contents.split(' ').slice(0, 12).join(' ');
  // const fullContents = contents;

  return (
 
         <div
                  
                  className="flex w-full mt-2 flex-col items-center gap-2 rounded-[15px] z-10 cursor-pointer"
                >
                 <Img src={image} alt="government_one" className="h-auto rounded-md" />
                  <p  className="text-sm font-normal text-black-900 text-center">
                    {title}
                  </p>
                  {/* <p  className="text-sm text-gray-600 text-center">
                  {expanded ? fullContents : shortContents}
                  <button className=" ml-2 text-blue-600" onClick={toggleExpanded}>{expanded ? '   Read less' : '  Read more'}</button>
                  </p> */}
                </div> 

  );
};

const NewsList = ({ news }) => {
  return (
    <div  className="flex flex-col gap-4">
      {news.map((item, index) => (
        <NewsItem key={index} title={item.title} contents={item.description} image={item.image} />
      ))}
    </div>
  );
};
export default function CategoryPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataFromStorage = AuthService.getUserDataFromLocalStorage();
    console.log('userData:', userDataFromStorage); // Add this line for debugging
    setUserData(userDataFromStorage);
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsData = await AuthService.getNews(); // Call AuthService method to get news
        setNews(newsData);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Helmet>
        <title>Explore the Comprehensive Resource Directory</title>
        <meta
          name="description"
          content="Navigate essential services and support in your new country with our Resource Directory. Find government, healthcare, legal, and community resources tailored to your needs."
        />
      </Helmet>

     
      <div className=" bg-[url(/public/images/img_welcome_screen.svg)] bg-center bg-cover bg-no-repeat my-auto flex flex-col items-center">
          {/* header section */}
         <Header/>
           <div className="flex md:flex-col-reverse flex-row w-full justify-between items-start px-4">
           <div className="flex flex-col md:w-full  w-[25%] px-5 border-r border-gray-600 md:border-none ">

          <div className="news-feed">
            {loading ? (
            <div className='flex flex-col items-center w-full justify-center p-2 gap-4'>
            <div  className="flex  w-full h-44 flex-col items-center gap-4 rounded-[15px] bg-red-400_01 bg-opacity-20 animate-pulse "  />
            {/* <Skeleton sx={{ bgcolor: "#f9f9f9" }} variant="rectangular" className='w-full my-2 bg-gray-200 rounded-md' height={200}  />
            <Skeleton sx={{ bgcolor: "#f9f9f9" }} variant="rectangular" className='w-full my-2 bg-gray-200 rounded-md' height={200}  /> */}
             <div  className="flex w-full h-44 flex-col items-center gap-4 rounded-[15px] bg-red-400_01 bg-opacity-20 animate-pulse "  />
             <div  className="flex w-full h-44 flex-col items-center gap-4 rounded-[15px] bg-red-400_01 bg-opacity-20 animate-pulse "  />
             <div  className="flex w-full h-44 flex-col items-center gap-4 rounded-[15px] bg-red-400_01 bg-opacity-20 animate-pulse "  />

         </div>
            ) : (
              <> 
                  <Heading
           
                    className="mt-20   md:text-2xl text-3xl self-start bg-gradient2 bg-clip-text !text-transparent !font-kumbhsans "
                  >
                    News Feeds 
                  </Heading>
                 <NewsList news={news} />
                {/* {news.map((item, index) => (
                  <div key={index} className="news-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p>Published at: {new Date(item.publishedAt).toLocaleString()}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </div>
                ))} */}
              </>
            )}
          </div>

          <div className="mt-20 grid justify-center gap-[54px] grid-cols-1">
       
          </div>

          </div>
           <div className="flex flex-col md:w-full  w-[75%] px-10 md:px-4">
    {/* greeting text section */}
    
     {userData && userData.firstName && (
   
         <Heading
           
         className="mt-20   md:text-2xl text-3xl self-start bg-gradient2 bg-clip-text !text-transparent !font-kumbhsans "
       >
         Hello {userData.firstName}
       </Heading>
      )}
          {/* introduction text section */}
          <Text className="mt-14 !font-kumbhsans md:text-sm text-[20px]">
            <>
              Welcome to the Resource Directory, your comprehensive guide to essential services and support in your new
              country.
              Explore the categories below to discover a wealth of resources tailored to your needs:
            </>
          </Text>

          {/* resource categories section */}
          <div className="mt-20 grid grid-cols-3 justify-center gap-[54px] md:grid-cols-2 sm:grid-cols-1">
            {data.map((d, index) => (
                   <NavLink to={`/dashboard/category/${d.route}`}>
                       <div
             key={"category" + index}
             className="flex w-full h-48 flex-col items-center gap-4 rounded-[15px] bg-red-400_01 p-9 sm:p-5 z-10 cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
           >
             <Img src={d.governmentone} alt="government_one" className="h-16" />
             <p  className="text-sm text-white-A700 text-center">
               {d.governmenttwo}
             </p>
           </div>
                </NavLink>  
         
            ))}
          </div>

          </div>
      
            </div>           
         


        </div>
    </>
  );
}
