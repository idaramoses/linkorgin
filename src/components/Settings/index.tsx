import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Img, Text, Button, Heading } from "../../components";
import SidebarMenu from '../Sidebar/smallSide';
import AuthService from 'services/authService';

const Settings = (props: {}) => {
  const location = useLocation();
  // Destructure specific parts of the location object
  const { pathname, search, hash } = location;
  const navbarRef = useRef(null);
  // Access the firstname and lastname properties directly from the userData object
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAddUserOpen, setAddUserOpen] = useState(false);
  const handleAddUserToggle = () => {
    setAddUserOpen(!isAddUserOpen);
    disableBodyScroll();
  };
  // Access the firstname and lastname properties directly from the userData object
  const handleCloseAddUser = () => {
    setAddUserOpen(false);
    enableBodyScroll();
  };
  const [isAddCertificateOpen, setAddCertificateOpen] = useState(false);
  const handleAddCertificateToggle = () => {
    setAddCertificateOpen(!isAddCertificateOpen);
    disableBodyScroll();
  };
  // Access the firstname and lastname properties directly from the userData object
  const handleCloseAddCertificate = () => {
    setAddCertificateOpen(false);
    enableBodyScroll();
  };
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    disableBodyScroll();
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    enableBodyScroll(); // Re-enable body scrolling
  };

  // Function to disable body scrolling
  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  // Function to enable body scrolling
  const enableBodyScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMenuOpen(false);
        setAddUserOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarRef]);

  return (
    <>
      <button
    // aria-controls="sidebar"
    onClick={handleMenuToggle} 
    className={`z-50 block fixed bottom-5 left-5 rounded-sm bg-white-A700 p-1.5 md:hidden `}
  >
  <Img
                  src="/images/img_television_blue_gray_900_01.svg"
                  alt="television_one"
                  className="h-[20px] w-full"
                />      
    </button>

    {isMenuOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none  bg-black-900 bg-opacity-70 "  >
          <div className="bg-white-A700 p-5 flex flex-col justify-between dialog-inner h-[45%] md:h-[40%] w-[45%] rounded-lg shadow-lg ">
            <div className="flex flex-row w-full  justify-between items-center border-b border-gray-400 py-2 ">
              <h3 className="font-normal text-black ">Settings</h3>
              <button
                onClick={handleCloseMenu}
                className="text-gray-600 hover:text-gray-800 focus:outline-none text-black dark:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-row w-full h-full  justify-between items-center  py-2 ">
            <div className="flex flex-col h-full w-[30%] py-2 px-2 border-r  border-gray-400">
            <button  color="light_green_100_2d_blue_50" className="w-full text-sm bg-gray-200 rounded-md h-10 font-hankengrotesk sm:px-5">
                  General
                </button>
              
              </div>
              <div className="flex flex-col h-full w-[70%]  justify-between items-center  py-2 ">
              
              
            </div>
            </div>
          </div>
        </div>
        )}
    </>
  
  
  );
};

export default Settings;
