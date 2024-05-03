import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import { Alert, Box, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import { toast, Bounce, ToastContainer } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import Header from "components/Header";
import AuthService from 'services/authService';
import { UserData } from 'services/authService';

export default function ProfilePage() {

  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const userDataFromStorage = AuthService.getUserDataFromLocalStorage();
    console.log('userData:', userDataFromStorage); // Add this line for debugging
    setUserData(userDataFromStorage);
  }, []);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate()

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading to true when submitting the form
    setLoading(true);
    setError('');
    const { success, error } = await AuthService.login(email, password);

    // Reset loading state after login attempt
    setLoading(false);

    if (success) {
      setError('');
      navigate("/dashboard/welcome");
    
    }else{
      setError(error);
     
    }
  };
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
         <div className="flex  flex-row w-full justify-center items-center px-4">
       
         <div className="flex flex-col md:w-full items-center justify-center mt-10  w-[75%] px-10 bg-white-A700 ">
         <div className="flex w-[70%] md:w-full my-5 items-center gap-[11px] ">
                      <Text size="6xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                        <>
                         
                         Edit Profile
                        </>
                      </Text>
                     
                    </div>
                    {userData && userData.firstName && (
          <div className="flex flex-col items-center py-5 justify-center w-[50%] md:ml-0 md:w-full">
          <Img
                src="/images/img_ellipse_29.png"
                alt="circleimage"
                className=" h-24 w-24 rounded-[50%] -mt-10 mb-10"
              />
          <div className="flex sm:flex-col self-stretch gap-[9px]">
      
                  <div className="flex flex-col items-start w-full sm:w-full gap-1.5">
                  <div className="mb-4 w-full" >
                  <label className="mb-2.5 block font-medium  text-black ">
                    First Name
                  </label>
                  <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none  ">
                   <p className=" text-base md:text-sm !font-kumbhsans !text-blue_gray-700_01">
                        <>
                         
                        {userData.firstName}
                        </>
                      </p>
                
                  </div>
                </div>
                  </div>
                 
                  <div className="flex flex-col items-start w-full sm:w-full gap-1.5">
                  <div className="mb-4 w-full" >
                  <label className="mb-2.5 block font-medium  text-black ">
                    Last Name
                  </label>
                  <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none  ">
                   <p className=" text-base md:text-sm  !font-kumbhsans !text-blue_gray-700_01">
                        <>
                         
                        {userData.lastName}
                        </>
                      </p>
                
                  </div>
                </div>
                  </div>
                </div>
             
                <div className="mb-4 w-full" >
                  <label className="mb-2.5 block font-medium  text-black ">
                  Email
                  </label>
                  <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   "
>
                     <p className=" text-base md:text-sm  !font-kumbhsans !text-blue_gray-700_01">
                        <>
                         
                        {userData.email}
                        </>
                      </p>  
                  

                
                  </div>
                </div>
                <div className="mb-4 w-full" >
                  <label className="mb-2.5 block font-medium  text-black ">
                    Country
                  </label>
                  <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   "
>
                     <p className=" text-base md:text-sm  !font-kumbhsans !text-blue_gray-700_01">
                        <>
                         
                       Canada
                        </>
                      </p>  
                  

                
                  </div>
                </div>
                <div className="mb-6 w-full">
                  <label className="mb-2.5 block font-medium  text-black ">
                    Phone 
                  </label>
                  <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   "
>
                     <p className=" text-base md:text-sm  !font-kumbhsans !text-blue_gray-700_01">
                        <>
                         
                        {userData.phone}
                        </>
                      </p>  
                  

                
                  </div>
                </div>
                
          </div>
      )}
       

    

        </div>
    
          </div>           
       


      </div>
  </>
  );
}
