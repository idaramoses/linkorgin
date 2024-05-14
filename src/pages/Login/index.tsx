import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "services/authService";
import { Alert, Box, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import { toast, Bounce, ToastContainer } from "react-toastify";
import { CgSpinner } from "react-icons/cg";


export default function LoginPage() {
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
      <title>Origin</title>
      <meta name="description" content="Web site created using create-react-app" />
    </Helmet>
    <div className='h-screen w-full relative bg-white-A700' >

    <Img
            src="/images/landing_bg.svg"
            alt="image_two"
            className=" bottom-0 left-0 fixed"
          />
            
  <div className="absolute flex w-full mb-10 flex-col gap-5  ">
      <div>
      <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700" ref={navbarRef}>
      <div className="container mx-auto flex  justify-between items-center">
      <NavLink to="/">
      <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 " />

         </NavLink>  


        <div className="hidden md:block  ">
          {isMenuOpen ? (
            <button 
              onClick={handleCloseMenu}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button 
              onClick={handleMenuToggle}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>

        {isMenuOpen && (
          <div className="hidden md:block m-auto items-center  justify-center  absolute top-14 right-0 left-0 bg-white-A700 w-full h-auto shadow p-4">
            {/* <button 
              onClick={handleCloseMenu}
              className="text-white absolute top-2 right-0 mr-3 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
        
        <div className="flex flex-col gap-5">
         <div>About Us</div>
            <div>Our Services</div>
            <div>Blog</div>
            <div>Contact Us</div>

        </div>
          </div>
        )}

        <div className="md:hidden  flex flex-row items-center">
  
        <div className="flex gap-5 justify-between mt-3.5 md:flex-wrap">
          <div className="flex gap-5 justify-between self-start text-black md:flex-wrap md:w-full">
            <div>About Us</div>
            <div>Our Services</div>
            <div>Blog</div>
            <div>Contact Us</div>
          </div>
        </div>
        </div>
        <div className="md:hidden  flex flex-row  items-center">
  
  
  </div>
      </div>
    </nav>
      </div>
      <form onSubmit={handleSubmit} className='w-full'>

      <div className=" self-end mt-20 w-full flex flex-col  items-start justify-center">
      <div className=" ">
      <Text size="8xl" as="p" className="font-bold !text-blue_gray-700 px-10">
      Login
                </Text>
      </div>
          <div className="flex flex-col items-center justify-center w-full ">
       
               <div className="w-[50%] md:w-full md:p-5  ">
               <div className="mt-20 md:mt-10 flex w-72 my-10  mx-auto items-center justify-between gap-2 rounded-[15px] bg-gray-100_89 p-[5px] ">
                         
               <NavLink to="/">
               <button
                          
                           
                            className=" rounded-[10px]  h-14 font-inter font-semibold "
                          >
                            Tour
                          </button>
              </NavLink>
                          
                          <button
                              onClick={(e) => { e.preventDefault();}}

                           
                            className=" bg-gray-800 h-14 w-36 rounded-[10px] text-base font-inter font-semibold "
                            
                          >
                            <Heading
                              size="md"
                              as="h1"
                              className=" text-center !font-inter text-base  !font-semibold !text-white-A700 "
                            >
                              Mon-Ami
                          </Heading>
                          </button>
                          
 </div>
               <div className="mb-4 w-full" >
                  <label className="mb-2.5 block font-medium  text-black ">
                    Email
                  </label>
                  <TextField
      placeholder="Email"
      type="email"
      className='w-full self-stretch flex'
      onChange={handleEmailChange}
      value={email}
      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#E0E0E0', // Set background color
          '& fieldset': {
            borderColor: '#E0E0E0', // Set border color
          },
          '&:hover fieldset': {
            borderColor: '#E0E0E0', // Set border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: '#E0E0E0', // Set border color on focus
          },
        },
       
        '& .MuiInputBase-root': {
          marginTop: 0, // Remove top padding
          marginBottom: 0, // Remove bottom padding
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent', // Remove outline by default
        },
      }}
      fullWidth
      margin="normal"
      variant="outlined"
      required

    />

                </div>
                <div className="mb-6 w-full">
                  <label className="mb-2.5 block font-medium  text-black ">
                    Password 
                  </label>
                  <TextField
            placeholder="Password"
            type={showPassword ? 'text' : 'password'} // Show/hide password based on state
            value={password}
            onChange={handlePasswordChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#E0E0E0', // Set background color
                '& fieldset': {
                  borderColor: '#E0E0E0', // Set border color
                },
                '&:hover fieldset': {
                  borderColor: '#E0E0E0', // Set border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E0E0E0', // Set border color on focus
                },
              },
             
              '& .MuiInputBase-root': {
                marginTop: 0, // Remove top padding
                marginBottom: 0, // Remove bottom padding
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'transparent', // Remove outline by default
              },
            }}
            fullWidth
            margin="normal"
            variant="outlined"
            required

            InputProps={{
              // Show/hide password icon button
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
                <div className="w-full flex items-center justify-end">
                 {loading ? (
         <button  className= "flex items-center justify-center self-end  mb-5 transition ease-in-out delay-150 w-40  md:w-full  hover:-translate-y-1 hover:scale-110 duration-300  mt-11 sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-12 font-semibold  rounded-[23px]" disabled={loading}>
        <CgSpinner className=" animate-spin text-lg items-center " />
         </button>
        ) : (
          <button type="submit"  className= "justify-center self-end mb-5 transition ease-in-out delay-150 w-40  md:w-full  hover:-translate-y-1 hover:scale-110 duration-300  mt-11 sm:px-5 font-hankengrotesk text-white-A700 whitespace-nowrap bg-[#3864FF]  h-12  md:px-5 font-semibold  rounded-[23px]" disabled={loading}>
               Login
                </button>
        )}
                
                </div>
             
                </div>
               </div>
               
                
          </div>
      </div>
      </form>

    </div>
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>

  </>
  );
}
