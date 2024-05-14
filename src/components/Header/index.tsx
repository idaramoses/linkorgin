import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { Input, Img, Text, Button, Heading } from "../../components";
import SidebarMenu from '../Sidebar/smallSide';
import AuthService from 'services/authService';
import { UserData } from 'services/authService';

const Header = (props: {}) => {

  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataFromStorage = AuthService.getUserDataFromLocalStorage();
    console.log('userData:', userDataFromStorage); // Add this line for debugging
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
  const handleLogout = () => {
    AuthService.logout();
    navigate("/");
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
              pathname === '/dashboard/category' || pathname ==='/profile'  &&
              'invisible'
            }`}
          >
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
         </button>
         <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 md:hidden " />
         
       </div>
       
    
        <div onClick={toggleMenu} className="flex justify-center items-center cursor-pointer">
        {userData && userData.firstName && (
        <div className="flex justify-center items-center h-12 w-12  left-0 bottom-0 right-0 top-0  m-auto  bg-red-400_01 border-red-400_01 border-2 border-solid  rounded-full">
        <div  className="!text-white-A700 !font-hankengrotesk !font-normal">
        {userData.firstName ? userData.firstName.charAt(0) : ''}
        </div>
      </div>
      )}    
       
          
          {isOpen && (
        <ul className="absolute top-20 right-6 w-60 bg-white-A700 shadow-md py-2 px-4 rounded mt-2 border border-gray-400">
         {userData && userData.firstName && (
        <div>
          <p className='text-base'>{userData.firstName} {userData.lastName}</p>
          <p className='text-xs text-gray-400'>{userData.email}</p>
          {/* Render other user data properties as needed */}
        </div>
      )}
          <div className='bg-gray-300 h-[1px] w-full my-1'></div>
          <NavLink to={`/profile`}>
          <li className="cursor-pointer text-base hover:bg-gray-100 flex flex-row items-center gap-5 text-gray-700 "> 
          <svg width="17" height="17" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59147 8C7.53812 7.99237 7.46952 7.99237 7.40855 8C6.06709 7.9542 5 6.85497 5 5.50381C5 4.12213 6.11282 3 7.50001 3C8.87958 3 10 4.12213 10 5.50381C9.99238 6.85497 8.93293 7.9542 7.59147 8Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12.4037C10.0757 13.3968 8.85015 14 7.5 14C6.14985 14 4.92433 13.3968 4 12.4037C4.05193 11.8309 4.3635 11.2704 4.91914 10.8317C6.34199 9.72277 8.6684 9.72277 10.0809 10.8317C10.6365 11.2704 10.9481 11.8309 11 12.4037Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 14C11.0898 14 14 11.0898 14 7.5C14 3.91015 11.0898 1 7.5 1C3.91015 1 1 3.91015 1 7.5C1 11.0898 3.91015 14 7.5 14Z" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Profile</li>
          </NavLink>
          <div className='bg-gray-300 h-[1px] w-full my-1'></div>
          <li className="cursor-pointer text-base hover:bg-gray-100 flex flex-row items-center gap-5 text-gray-700 "> 
          <svg width="17" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.49385 8.41983C5.24339 8.41983 4.22852 7.40496 4.22852 6.15449C4.22852 4.90403 5.24339 3.88916 6.49385 3.88916C7.74431 3.88916 8.75918 4.90403 8.75918 6.15449C8.75918 7.40496 7.74431 8.41983 6.49385 8.41983ZM6.49385 4.79529C5.74478 4.79529 5.13465 5.40542 5.13465 6.15449C5.13465 6.90357 5.74478 7.5137 6.49385 7.5137C7.24292 7.5137 7.85305 6.90357 7.85305 6.15449C7.85305 5.40542 7.24292 4.79529 6.49385 4.79529Z" fill="#292D32"/>
<path d="M8.43309 12.31C8.30623 12.31 8.17937 12.2919 8.05251 12.2617C7.67797 12.159 7.36385 11.9234 7.1645 11.5911L7.09201 11.4703C6.73559 10.8541 6.24628 10.8541 5.88987 11.4703L5.82342 11.5851C5.62407 11.9234 5.30994 12.165 4.93541 12.2617C4.55483 12.3644 4.16217 12.31 3.82993 12.1107L2.79089 11.5126C2.4224 11.3012 2.1566 10.9568 2.04182 10.54C1.93309 10.1232 1.98745 9.69429 2.19888 9.3258C2.37407 9.01771 2.4224 8.73983 2.3197 8.56465C2.21701 8.38946 1.95725 8.28677 1.60084 8.28677C0.718866 8.28677 0 7.5679 0 6.68593V5.62273C0 4.74076 0.718866 4.0219 1.60084 4.0219C1.95725 4.0219 2.21701 3.9192 2.3197 3.74402C2.4224 3.56883 2.38011 3.29095 2.19888 2.98286C1.98745 2.61437 1.93309 2.17942 2.04182 1.76864C2.15056 1.35182 2.41636 1.00749 2.79089 0.796061L3.83597 0.198012C4.51859 -0.206728 5.41868 0.0288672 5.82946 0.72357L5.90195 0.844388C6.25836 1.46056 6.74768 1.46056 7.10409 0.844388L7.17054 0.729611C7.58132 0.0288672 8.48141 -0.206728 9.17007 0.204053L10.2091 0.802101C10.5776 1.01353 10.8434 1.35786 10.9582 1.77469C11.0669 2.19151 11.0125 2.62041 10.8011 2.9889C10.6259 3.29699 10.5776 3.57487 10.6803 3.75006C10.783 3.92524 11.0428 4.02794 11.3992 4.02794C12.2811 4.02794 13 4.7468 13 5.62877V6.69197C13 7.57394 12.2811 8.29281 11.3992 8.29281C11.0428 8.29281 10.783 8.3955 10.6803 8.57069C10.5776 8.74587 10.6199 9.02376 10.8011 9.33184C11.0125 9.70034 11.073 10.1353 10.9582 10.5461C10.8494 10.9629 10.5836 11.3072 10.2091 11.5186L9.16403 12.1167C8.93448 12.2436 8.6868 12.31 8.43309 12.31ZM6.49396 10.0749C7.0316 10.0749 7.53299 10.4132 7.87732 11.0112L7.94377 11.126C8.01626 11.2528 8.13708 11.3435 8.28206 11.3797C8.42704 11.4159 8.57203 11.3978 8.69284 11.3253L9.73792 10.7212C9.89498 10.6306 10.0158 10.4796 10.0641 10.2984C10.1125 10.1172 10.0883 9.92989 9.99768 9.77283C9.65335 9.18082 9.61106 8.57069 9.87686 8.10554C10.1427 7.64039 10.6924 7.37459 11.381 7.37459C11.7677 7.37459 12.0757 7.06651 12.0757 6.67989V5.61669C12.0757 5.23612 11.7677 4.92199 11.381 4.92199C10.6924 4.92199 10.1427 4.65619 9.87686 4.19104C9.61106 3.72589 9.65335 3.11576 9.99768 2.52376C10.0883 2.36669 10.1125 2.17942 10.0641 1.9982C10.0158 1.81697 9.90102 1.67199 9.74396 1.57534L8.69888 0.977287C8.43913 0.820224 8.0948 0.910837 7.93773 1.17664L7.87128 1.29141C7.52695 1.88946 7.02556 2.22775 6.48792 2.22775C5.95028 2.22775 5.44888 1.88946 5.10455 1.29141L5.0381 1.1706C4.88708 0.916878 4.54879 0.826265 4.28903 0.977287L3.24396 1.58138C3.0869 1.67199 2.96608 1.82301 2.91775 2.00424C2.86942 2.18547 2.89359 2.37273 2.9842 2.5298C3.32853 3.1218 3.37082 3.73193 3.10502 4.19708C2.83922 4.66223 2.2895 4.92803 1.60084 4.92803C1.21422 4.92803 0.906134 5.23612 0.906134 5.62273V6.68593C0.906134 7.06651 1.21422 7.38063 1.60084 7.38063C2.2895 7.38063 2.83922 7.64643 3.10502 8.11158C3.37082 8.57673 3.32853 9.18686 2.9842 9.77887C2.89359 9.93593 2.86942 10.1232 2.91775 10.3044C2.96608 10.4857 3.08085 10.6306 3.23792 10.7273L4.28299 11.3253C4.40985 11.4039 4.56087 11.422 4.69981 11.3857C4.8448 11.3495 4.96561 11.2528 5.04415 11.126L5.11059 11.0112C5.45493 10.4192 5.95632 10.0749 6.49396 10.0749Z" fill="#292D32"/>
</svg>

            Setting</li>
          <div className='bg-gray-300 h-[1px] w-full my-1'></div>
          
          <li onClick={handleLogout} className="cursor-pointer text-base hover:bg-gray-100 flex flex-row items-center gap-5 text-gray-700 ">
          <svg width="17" height="17" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.36133 3.66281C4.52414 1.77206 5.49577 1 7.62287 1H7.69115C10.0388 1 10.979 1.94013 10.979 4.28781V7.71219C10.979 10.0599 10.0388 11 7.69115 11H7.62287C5.51153 11 4.5399 10.2384 4.36658 8.3792" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.56478 5.99463H1.58789" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.75945 4.23535L1 5.9948L2.75945 7.75426" stroke="#292D32" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
             Logout</li>
          
        
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
