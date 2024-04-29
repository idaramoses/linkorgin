import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Navigate, useLocation, useNavigate } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import { Input, Img, Text, Button, Heading } from "../../components";
import AuthService from 'services/authService';


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate()

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  const handleSignOut = () => {

    // Simulate sign-out process

    // Clear stored user data
    localStorage.removeItem('userData');

    // Redirect to the sign-in page
    return <Navigate to="/auth/signin" />;
  };
  return (
    <aside
      ref={sidebar}
      className={`md:absolute static md:left-0 md:top-0 md:z-50 flex h-screen md:w-32 w-28  flex-col overflow-y-hidden bg-white-A700 duration-300 ease-linear  translate-x-0 border border-gray-200 ${
        !sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div 
           
           className={`flex items-center justify-between gap-2 px-6 md:pt-5 md:pb-5 bg-gradient3 ${
            pathname === '/dashboard/question/climate-change'  &&
            'invisible'
          }`}
      >
        <NavLink to="/dashboard/home">
         < div className="flex h-20 items-center w-auto">
         <Img
                  src="/images/img_settings_cyan_900.svg"
                  alt="settings_one"
                  className="h-8"
      />
                  <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="md:block hidden ml-1"
        >
          <svg
            className="fill-current"
            width="16"
            height="16"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
                </div>
        </NavLink>

      
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2 py-2 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>
           

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/dashboard/module"
                  
                  className={`group relative flex flex-col items-center text-sm gap-1 rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/module' || pathname.includes('dashboard/module') &&
                    'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9336 4.8183L12.8916 0.787832C11.2447 -0.312296 8.71676 -0.252289 7.13288 0.917846L1.87763 4.8283C0.828673 5.60839 0 7.20857 0 8.46867V15.3695C0 17.9198 2.17133 20 4.84616 20H16.1538C18.8287 20 21 17.9298 21 15.3795V8.59868C21 7.24858 20.0874 5.58839 18.9336 4.8183ZM11.2867 15.9995C11.2867 16.4096 10.9301 16.7496 10.5 16.7496C10.0699 16.7496 9.71327 16.4096 9.71327 15.9995V12.9992C9.71327 12.5891 10.0699 12.2491 10.5 12.2491C10.9301 12.2491 11.2867 12.5891 11.2867 12.9992V15.9995Z" fill="black"/>
</svg>

                  Home
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              <li>
                <NavLink
                  to="/dashboard/module"
                  
                  className={`group relative flex flex-col items-center gap-1 text-sm rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/question/climate-change'  &&
                    'hidden'
                  }`}
                >
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7.58003V14.42C19 15.54 18.4056 16.58 17.4447 17.15L11.5603 20.58C10.5993 21.14 9.41055 21.14 8.43972 20.58L2.55531 17.15C1.59439 16.59 1 15.55 1 14.42V7.58003C1 6.46003 1.59439 5.41999 2.55531 4.84999L8.43972 1.42C9.40065 0.86 10.5894 0.86 11.5603 1.42L17.4447 4.84999C18.4056 5.41999 19 6.45003 19 7.58003Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.49998 11C10.8808 11 12 9.88066 12 8.49994C12 7.11924 10.8808 6 9.49998 6C8.11928 6 7 7.11924 7 8.49994C7 9.88066 8.11928 11 9.49998 11Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 16C13 14.3436 11.4338 13 9.5 13C7.56625 13 6 14.3436 6 16" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                  User
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/module"
                  
                  className={`group relative flex flex-col items-center gap-1 text-sm rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/question/climate-change'  &&
                    'hidden'
                  }`}
                >
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.84004 21.505C9.17004 21.505 8.48994 21.335 7.88994 20.985L1.94998 17.555C0.74998 16.855 0 15.565 0 14.175V7.33499C0 5.94499 0.74998 4.65499 1.94998 3.95499L7.88994 0.525C9.08994 -0.175 10.58 -0.175 11.79 0.525L17.73 3.95499C18.93 4.65499 19.6799 5.94499 19.6799 7.33499V14.175C19.6799 15.565 18.93 16.855 17.73 17.555L11.79 20.985C11.19 21.335 10.51 21.505 9.84004 21.505ZM9.84004 1.50498C9.43004 1.50498 9.00994 1.61498 8.63994 1.82498L2.69998 5.25498C1.95998 5.68498 1.5 6.47499 1.5 7.33499V14.175C1.5 15.025 1.95998 15.825 2.69998 16.255L8.63994 19.685C9.37994 20.115 10.3 20.115 11.04 19.685L16.98 16.255C17.72 15.825 18.1799 15.035 18.1799 14.175V7.33499C18.1799 6.48499 17.72 5.68498 16.98 5.25498L11.04 1.82498C10.67 1.61498 10.25 1.50498 9.84004 1.50498Z" fill="#292D32"/>
<path d="M8.9281 14.4242C8.5681 14.4242 8.2281 14.3342 7.9181 14.1642C7.22813 13.7642 6.82812 12.9542 6.82812 11.9442V9.54421C6.82812 8.53418 7.22813 7.72421 7.9181 7.32421C8.6081 6.92421 9.5082 6.98419 10.3782 7.49419L12.4581 8.6942C13.3281 9.19421 13.8381 9.94421 13.8381 10.7442C13.8381 11.5442 13.3381 12.2842 12.4581 12.7942L10.3782 13.9942C9.8982 14.2842 9.3981 14.4242 8.9281 14.4242ZM8.9382 8.57421C8.8382 8.57421 8.7481 8.5942 8.6781 8.6342C8.4681 8.7542 8.3381 9.0942 8.3381 9.5542V11.9542C8.3381 12.4042 8.4681 12.7442 8.6781 12.8742C8.8881 12.9942 9.2481 12.9342 9.6381 12.7042L11.7181 11.5042C12.1081 11.2742 12.3381 10.9942 12.3381 10.7542C12.3381 10.5142 12.1081 10.2342 11.7181 10.0042L9.6381 8.8042C9.3781 8.65418 9.1282 8.57421 8.9382 8.57421Z" fill="#292D32"/>
</svg>




                  Media
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/module"
                  
                  className={`group relative flex flex-col items-center gap-1 text-sm rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/question/climate-change'  &&
                    'hidden'
                  }`}
                >
<svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.5 11.5L22.3 15.7L20.7 13.3L17.5 16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 24H25C30 24 32 22 32 17V11C32 6 30 4 25 4H19C14 4 12 6 12 11V17C12 22 14 24 19 24Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  Analysis
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/module"
                  
                  className={`group relative flex flex-col items-center gap-1 text-sm rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/question/climate-change'  &&
                    'hidden'
                  }`}
                >
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11.2H13" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 15.2H10.38" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 5H12C14 5 14 4 14 3C14 1 13 1 12 1H8C7 1 6 1 6 3C6 5 7 5 8 5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3.02002C17.33 3.20002 19 4.43002 19 9V15C19 19 18 21 13 21H7C2 21 1 19 1 15V9C1 4.44002 2.67 3.20002 6 3.02002" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



                  Report
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/module"
                  
                  className={`group relative flex flex-col items-center gap-1 text-sm rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/question/climate-change'  &&
                    'hidden'
                  }`}
                >
<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5H12C14 5 14 4 14 3C14 1 13 1 12 1H8C7 1 6 1 6 3C6 5 7 5 8 5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3.02002C17.33 3.20002 19 4.43002 19 9V15C19 19 18 21 13 21H7C2 21 1 19 1 15V9C1 4.44002 2.67 3.20002 6 3.02002" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



                  Document
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => {
                    AuthService.logout();
                    navigate("/");
                  }}
                  
                  className={`group relative flex flex-col items-center gap-1 text-sm rounded-sm py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-gray-300  ${
                    pathname === '/dashboard/question/climate-change'  &&
                    'hidden'
                  }`}
                >
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6799 11.62L17.2399 9.06L14.6799 6.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 9.06006H17.17" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.99999 17C4.58 17 1 14 1 9C1 4 4.58 1 8.99999 1" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


                  Logout
                </button>
              </li>
            </ul>
          </div>

         
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
