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
import ProfileSideMenu from "./component/sideMenu";
interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt }) => (
  <div className="flex overflow-hidden relative flex-col items-start self-end px-16 pt-20 pb-1.5 mt-14 rounded-full border border-blue-300 border-solid aspect-square w-[98px] md:pl-5 md:mt-10">
    <img loading="lazy" src={src} alt={alt} className="object-cover absolute inset-0 size-full" />
    <div className="relative shrink-0 ml-3 w-full bg-blue-300 rounded-full border border-blue-300 border-solid h-[17px] stroke-[1px] md:ml-2.5" />
  </div>
);

interface InputFieldProps {
  label: string;
  value: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, value }) => (
  <div className="flex flex-col flex-1 font-medium text-neutral-500">
    <div>{label}</div>
    <div className="justify-center items-start p-3.5 mt-1.5 rounded border border-teal-100 border-solid text-neutral-400 md:pr-5">
      {value}
    </div>
  </div>
);

interface MyComponentProps {
  profileImageSrc: string;
  profileImageAlt: string;
  genderSelectIcon: string;
}
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

          <div className="flex  flex-row md:w-full  w-[75%] bg-white-A700 mt-10">

          <div className="w-[25%] md:hidden border-r border-gray-200">
          <ProfileSideMenu/>
          
          </div>
       
         <div className="flex flex-col  items-start  mt-10  px-10 bg-white-A700 ">
         <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">My Profile</div>
            <Img
                src="/images/img_ellipse_29.png"
                alt="circleimage"
                className=" h-full w-full rounded-[50%] mt-10 mb-10"
              />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2  grow mt-14 text-xs md:mt-10">
          {userData && userData.firstName && (
        <div>
           <div className="flex  gap-5">
        
              <InputField label="First Name:" value={userData.firstName} />
              <InputField label="Last Name:" value={userData.lastName} />
            </div>
            <InputField label="Email:" value={userData.email} />
        </div>
      )}
         
          </div>
        </div>
      </div>
       
         <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300 py-10">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">Personal Information</div>
       
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2  grow mt-5 text-xs md:mt-10">
           
            <InputField label="Address" value='27 crescent street' />
            <InputField label="Country" value='Canada' />
            <InputField label="Phone Number" value='Canada' />
          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300 py-10">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">Immigration details</div>
       
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2 grow mt-5 text-xs md:mt-10">
           
            <InputField label="Country of origin" value='Canada' />
            <InputField label="Current immigration status" value='' />
            <InputField label="Date of immigration or expected date of arrival" value='20 June 2022' />
            <InputField label="Visa type" value='' />
            <InputField label="Type of status" value='' />

          </div>
        </div>
      </div>

      <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300 py-10">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">Language</div>
       
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2 grow mt-5 text-xs md:mt-10">
           
            <InputField label="Native Language" value='Engliah' />
        

          </div>
        </div>
      </div>

      <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300 py-10">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">Education Status</div>
       
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2 grow mt-5 text-xs md:mt-10">
           
            <InputField label="Highest level of education completed" value='PHD' />
        

          </div>
        </div>
      </div>

      <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300 py-10">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">Housing Situation</div>
       
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2 grow mt-5 text-xs md:mt-10">
           
            <InputField label="Current housing situation" value='Apartment' />
            <InputField label="Housing preference (if applicable)" value='none' />
            <InputField label="Number of family members immigrating with you" value='4' />
            <InputField label="Relationship with family" value='Father' />
        

          </div>
        </div>
      </div>
      <div className="flex w-full gap-5 md:flex-col md:gap-0 border-b border-gray-300 py-10">
        <div className="flex flex-col w-[24%] md:ml-0 md:w-full">
          <div className="flex flex-col grow ">
            <div className="text-xs text-center text-black">Socail Integration</div>
       
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[76%] md:ml-0 md:w-full">
          <div className="flex flex-col gap-2 grow mt-5 text-xs md:mt-10">
           
            <InputField label="Interest & hobbies" value='Hobbies' />
            <InputField label="Preferred activities for socializing and meeting new people" value='none' />
            <InputField label="Any specific cultural or religious considerations" value='' />
        

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



