import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Img, Text, Button, Heading } from "../../components";
import SidebarMenu from '../Sidebar/smallSide';
import AuthService, { UserData } from 'services/authService';

const Header = (props: {}) => {

  const [userData, setUserData] = useState<UserData | null>(null);

;  
  useEffect(() => {
    const userDataFromStorage = AuthService.getUserDataFromLocalStorage();
    setUserData(userDataFromStorage);
  }, []);
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex w-full p-2 bg-white-A700 bg-gradient3 drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
     

        <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-2 items-center justify-center h-full ">
         <button
            // aria-controls="sidebar"
            onClick={handleMenuToggle} 
            className={`z-50 block rounded-sm bg-white-A700 p-1.5  ${
              pathname === '/dashboard/category'  &&
              'invisible'
            }`}
          >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         </button>
         <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 md:hidden " />
       </div>
       
    
        <div onClick={toggleMenu} className="flex justify-center items-center cursor-pointer">
            <Img
                src="/images/img_ellipse_29.png"
                alt="circleimage"
                className=" h-10 w-10 rounded-[50%]"
              />
          {isOpen && (
        <ul className="absolute top-20 right-6 w-40 bg-white-A700 shadow-md py-2 px-4 rounded mt-2">
            {userData && (
        <div>
          <h2>User Data:</h2>
\          <p>Email: {userData.personalInfo.email}</p>
        </div>
      )}
          <li className="cursor-pointer hover:bg-gray-100">Profile</li>
          <li className="cursor-pointer hover:bg-gray-100">Setting</li>
          <li className="cursor-pointer hover:bg-gray-100">Logout</li>
        </ul>
      )}
              </div>
      </div>

     
       
      </div>
    </header>
    
    {isMenuOpen && (
       <SidebarMenu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu}  />
        )}
    </>
  
  );
};

export default Header;
