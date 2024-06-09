// SidebarMenu.tsx
import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import { Input, Img, Text, Button, Heading } from "..";
import AuthService from 'services/authService';
import { Skeleton } from '@mui/material';




interface SidebarMenuProps {
  isMenuOpen: boolean;
  handleCloseMenu: () => void;
}


const CategorySidebarMenu: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate()

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  const [browserHistory, setBrowserHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserBrowserHistory = async () => {
      try {
        const historyData = await AuthService.getHistory(); // Call AuthService method to get user's browser history
        setBrowserHistory(historyData || []); // Set browser history to an empty array if historyData is undefined
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching user browser history:', error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchUserBrowserHistory();
  }, []);

  // Function to group browser history by time
  const groupByTime = (history: any[]) => {
    const groupedHistory: any = {
      today: [],
      yesterday: [],
      lastMonth: []
    };

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    const lastMonth = new Date(today);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    history.forEach(item => {
      const timestamp = new Date(item.timestamp);
      if (timestamp.toDateString() === today.toDateString()) {
        groupedHistory.today.push(item);
      } else if (timestamp.toDateString() === yesterday.toDateString()) {
        groupedHistory.yesterday.push(item);
      } else if (timestamp > lastMonth) {
        groupedHistory.lastMonth.push(item);
      }
    });

    return groupedHistory;
  };

  // Group browser history by time
  const groupedHistory = groupByTime(browserHistory);


  return (
    <>
     <div>
     
          <div className=" m-auto items-start  justify-start    bg-gradient3 bg-white-A700 w-32 h-screen border-r border-gray-400 overflow-scroll fixed  z-50">
          
        <div className="flex justify-center items-start  w-full ">
            <div  className="flex flex-col ">
      <div className="h-40 w-full flex items-start justify-start pt-8">

      <NavLink to="/dashboard/category">
      <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 md:h-6  px-4" />
      </NavLink>
      </div>
    


      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        {/* <div className="h-full w-full bg-white-A700 pl-5 gap-2">
          <Text  className="m-auto text-base md:text-sm !text-gray-600">
            Today
          </Text>
            <Text  className="mt-10 text-base md:text-sm">
              What are the government policies around housing
            </Text>

          <Text  className="mt-10 text-base md:text-sm !text-gray-600">
            Yesterday
          </Text>
          <Text  className="m-auto text-base md:text-sm ">
            Can i buy a house in canada
          </Text>
          <Text  className="m-auto text-base md:text-sm">
            How do i join parliament
          </Text>
          <Text  className="m-auto text-base md:text-sm ">
            I need health services nearby
          </Text>

          <Text  className="text-base md:text-sm mt-10 !text-gray-600">
            March
          </Text>
          <Text  className=" text-base md:text-sm ">
            How do i get a government lawyer
          </Text>
          <Text  className="text-base md:text-sm ">
            How do i get insurance
          </Text>
          
          
          
       
        </div> */}
        {loading ? (
            <div className='flex flex-col items-center w-full justify-center p-2 gap-4'>
            <div  className="flex  w-full h-10 flex-col items-center gap-4 rounded-[5px] bg-red-400_01 bg-opacity-20 animate-pulse "  />
            {/* <Skeleton sx={{ bgcolor: "#f9f9f9" }} variant="rectangular" className='w-full my-2 bg-gray-200 rounded-md' height={200}  />
            <Skeleton sx={{ bgcolor: "#f9f9f9" }} variant="rectangular" className='w-full my-2 bg-gray-200 rounded-md' height={200}  /> */}
             <div  className="flex w-full h-10 flex-col items-center gap-4 rounded-[5px] bg-red-400_01 bg-opacity-20 animate-pulse "  />
             <div  className="flex w-full h-10 flex-col items-center gap-4 rounded-[5px] bg-red-400_01 bg-opacity-20 animate-pulse "  />
             <div  className="flex w-full h-10 flex-col items-center gap-4 rounded-[5px] bg-red-400_01 bg-opacity-20 animate-pulse "  />

         </div>
            ) : (
              <div className='flex flex-col gap-4'>
              {groupedHistory.today.length > 0 && (
                <div>
                  <h3>Today</h3>
                  {groupedHistory.today.map((item, index) => (
                    <div key={index} className="history-item">
                     <p className='text-sm'>{item.searchQuery}</p>
                    </div>
                  ))}
                </div>
              )}
              {groupedHistory.yesterday.length > 0 && (
                <div>
                  <h3>Yesterday</h3>
                  {groupedHistory.yesterday.map((item, index) => (
                    <div key={index} className="history-item">
                    <p className='text-sm'>{item.searchQuery}</p>
                    </div>
                  ))}
                </div>
              )}
              {groupedHistory.lastMonth.length > 0 && (
                <div>
                  <h3>Last Month</h3>
                  {groupedHistory.lastMonth.map((item, index) => (
                    <div key={index} className="history-item">
                   <p className='text-sm'>{item.searchQuery}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            )}
        {/* <!-- Sidebar Menu --> */}
      </div>
            </div>
            
          
          </div>
                  
          </div>
          </div>
    </>
  );
};

export default CategorySidebarMenu;
