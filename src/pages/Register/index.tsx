import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Input, Text, CheckBox, Img } from "../../components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Step1 from "./component/step1";
import Step2 from "./component/step2";
import Step3 from "./component/step3";
import Step4 from "./component/step4";
import Step5 from "./component/step5";
import Step6 from "./component/step6";
import Step7 from "./component/step7";
import StepComponent from "./component/sideicons";
import AuthService from "services/authService";
import { Alert, Box, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import { toast, Bounce, ToastContainer } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns'; // Adapter for date-fns
import LocalizationProvider from '@mui/lab/LocalizationProvider'; // Provides localization to DatePicker
import flatpickr from 'flatpickr';


interface TableRow {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}

export default function MacBookPro14SixPage() {

  const [tableRows, setTableRows] = useState<TableRow[]>([
    { id: 1, title: 'Listening', option1: '', option2: '', option3: '', option4: '', option5: '' },
    { id: 2,title: 'Reading', option1: '', option2: '', option3: '', option4: '', option5: '' },
    { id: 3,title: 'Speaking', option1: '', option2: '', option3: '', option4: '', option5: '' },
    { id: 4,title: 'Writing', option1: '', option2: '', option3: '', option4: '', option5: '' },
]);

const handleOptionChange = (rowId: number, optionName: string, value: string) => {
    setTableRows(prevRows =>
        prevRows.map(row =>
            row.id === rowId ? { ...row, [optionName]: value } : row
        )
    );
};

useEffect(() => {
  // Init flatpickr
   flatpickr('.form-datepicker', {
    mode: 'single',
    static: true,
    monthSelectorType: 'static',
    dateFormat: 'Y-m-d',
    prevArrow:
      '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow:
      '<svg className="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  });

  
}, []);




  const [firstname, setFirstNmae] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [dateOfBirth, setdateOfBirth] = useState('');
  const [ gender, setgender] = useState('');
  const [ phone, setphone] = useState('');
  const [ countryOfOrigin, setcountryOfOrigin] = useState('');
  const [ currentImmigrationStatus, setcurrentImmigrationStatus] = useState('');
  const [ dateOfImmigration,setdateOfImmigration] = useState('');
  const [ visaType,setvisaType] = useState('');
  const [ typeOfStatus,settypeOfStatus]  = useState('');
  const [ nativeLanguage,setnativeLanguage]  = useState('');
  const [ highestLevelOfEducation,sethighestLevelOfEducation]  = useState('');
  const [ previousWorkExperience,setpreviousWorkExperience]  = useState('');
  const [ aspirations,setaspirations]  = useState('');
  const [ currentHousingSituation,setacurrentHousingSituation]  = useState('');
  const [ housingPreference,setahousingPreference]  = useState('');
  const [ numOfFamilyMembers,setnumOfFamilyMembers]  = useState('');
  const [ relationship, setrelationship]  = useState('');
  const [ interestsAndHobbies, setinterestsAndHobbies]  = useState('');
  const [ preferredSocialActivities, setpreferredSocialActivities]  = useState('');
  const [ ethos, setethos] = useState('');
  const [error, setError] = useState<string | null>(null);
 const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate()
  const [sector, setSector] = useState('');
  const [subSector, setSubSector] = useState('');
  const [category, setCategory] = useState('');
  const [role, setRole] = useState('');



  // Function to handle changes in dropdowns

  const handlefirsNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstNmae(e.target.value);
  };
  const handlelastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdateOfBirth(e.target.value); // Update selected date state
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleConfirmChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };
  const handleGenderChange = (event) => {
    setgender(event.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setphone(e.target.value);
  };
  // stet2
  const handleCountryofOriginChange = (event) => {
    setcountryOfOrigin(event.target.value);
  };
  const handlelCurrentImigratStatusChange = (event) => {
    setcurrentImmigrationStatus(event.target.value);
  };

  const handleImigrationDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setdateOfImmigration(e.target.value);
  };
  
  const handleVisaTypeChange = (event) => {
    setvisaType(event.target.value);
  };

  // stet3
  const handleNativeLanguageChange = (event) => {
    setnativeLanguage(event.target.value);
  };

    // stet4
  const handlleHighetEducation = (event) => {
    sethighestLevelOfEducation(event.target.value);
  };

  const handlePreviousWorkExperienceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setpreviousWorkExperience(e.target.value);
  };

  const handleGoalAndAspirationhange = (e: ChangeEvent<HTMLInputElement>) => {
    setaspirations(e.target.value);
  };

  const handleTypeOfStatusChange = (event) => {
    settypeOfStatus(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const isPasswordValid = (password: string) => {
    // Define regular expressions for each required character type
    const hasCapital = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
  
    // Check if all required character types are present
    return hasCapital && hasLowercase && hasSpecial && password.length >= 6;
    };
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
  useEffect(() => {
    // Check local storage for user data
    const userData = localStorage.getItem('userData');
    if (userData) {
      // If user data is found, consider the user logged in
      setLoggedIn(true);
    }
  }, []);
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };
  
 
 


  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = (): void => {
    if(currentStep===1){
      if (!firstname || !lastname || !email|| !gender || !phone  || !password || !confirmpassword ) {
        setError('Please fill in all required fields.');
        return;
      }
    }
    if(currentStep===2){
      if (!countryOfOrigin || !currentImmigrationStatus || !dateOfImmigration|| !visaType || !typeOfStatus   ) {
        setError('Please fill in all required fields.');
        return;
      }
    }
    if(currentStep===3){
      if (! nativeLanguage  ) {
        setError('Please fill in all required fields.');
        return;
      }
    }
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
  });
    setError('');
    setCurrentStep((prevStep) => prevStep + 1);

  };

  const handlePrev = (): void => {
   
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
  });

    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (): JSX.Element | null => {
    switch (currentStep) {
      case 1:
        return <Step1/>;
      case 2:
        return <Step2/>;
      case 3:
        return <Step3/>;
      case 4:
          return <Step4/>;
      case 5:
          return <Step5/>;
      case 6:
          return <Step6/>;
      case 7:
         return <Step7/>;
      default:
         return null;
    }
  };
  const renderProgress = (): JSX.Element => {
    return (
      <div className=" w-full flex flex-col items-center justify-center">
   
     <div className="flex items-center">
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 1 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
          1
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 1 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 2 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           2
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 2 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 3 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           3
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 3 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
          
          <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >=4 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           4
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 4 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>

<span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 5 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           5
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 5 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
            <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 6 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           6
        </span>
        <div className={`w-8 h-1 ${
            currentStep >= 6 ? 'bg-[#4E5567] ' : 'bg-gray-400'
          }`}></div>
            <span
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep === 7 ? 'bg-[#4E5567] text-white-A700' : 'bg-gray-400'
          }`}
        >
           7
        </span>
       
      </div>
      </div>
    );
  };
  const userData = {
  firstName: firstname,
  lastName:  lastname,
  dateOfBirth: dateOfBirth,
  gender: gender,
  email: email,
  password: password,
  phone:phone,
  countryOfOrigin: countryOfOrigin,
  currentImmigrationStatus: countryOfOrigin,
  dateOfImmigration: dateOfImmigration,
  visaType: visaType,
  typeOfStatus: typeOfStatus,
  nativeLanguage: nativeLanguage,
  highestLevelOfEducation: "phd",
  previousWorkExperience:"accountant",
  aspirations:"to become the world's richest man",
  currentHousingSituation:"searching",
  housingPreference:"2-bedroom",
  numOfFamilyMembers: "4",
  relationship:"nuclear family",
  interestsAndHobbies:"i don't have any",
  preferredSocialActivities:"i have none too",
  ethos:"what does that even mean?"
 }



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if any required fields are empty
    if (!firstname || !lastname || !email || !password ) {
      setError('Please fill in all required fields.');
      return;
    }
  

    // Check password complexity
    if (!isPasswordValid(password)) {
      setError('Password must contain at least one capital letter, one lowercase letter,  one special character and t must not be less than 6 characters in length');
      return;
    }
  
  
  
    // Set loading to true when submitting the form
    setLoading(true);
    setError('');
  
    const { success, error } = await AuthService.register(userData);
  
    // Reset loading state after login attempt
    setLoading(false);
  
    if (success) {
      setError('');
      navigate(`/auth/login`);
    } else {
      if (error !== undefined) {
        setError(error);
      }
    }
  };
  return (
    <>
      <Helmet>
        <title>orgin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col pb-20 bg-white">
      <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700" ref={navbarRef}>
      <div className="container mx-auto flex  justify-between items-center">
      <NavLink to="/">
      <svg width="82" height="33" viewBox="0 0 82 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0531 26.4C22.8643 26.4 27.5753 21.6393 27.5753 15.7667C27.5753 9.89404 22.8643 5.13333 17.0531 5.13333C11.2419 5.13333 6.53101 9.89404 6.53101 15.7667C6.53101 21.6393 11.2419 26.4 17.0531 26.4Z" fill="#A46C6C"/>
<path d="M55.8761 5.13333H52.2478V12.4667H55.8761V5.13333Z" fill="#A46C6C"/>
<path d="M55.8761 16.1333H52.2478V24.2H55.8761V16.1333Z" fill="#A46C6C"/>
<path d="M77.646 16.1333H74.0177V24.2H77.646V16.1333Z" fill="#A46C6C"/>
<path d="M65.9323 9.71231C66.3838 9.23451 66.9296 8.86019 67.5336 8.61421C68.1376 8.36824 68.786 8.25623 69.4357 8.28562C70.8514 8.28562 71.9509 8.72573 72.7773 9.61329C73.4644 10.4072 73.8761 11.41 73.9487 12.4667H77.6461C77.567 10.2001 76.9514 8.43355 75.7992 7.16701C74.5559 5.8149 72.9067 5.13762 70.8514 5.13517C69.4866 5.10329 68.1434 5.48627 66.9923 6.23545C65.876 6.98307 65.0393 8.09299 64.6172 9.3859V5.43225H60.9558V12.4667H64.725C64.8429 11.4444 65.2641 10.4833 65.9323 9.71231Z" fill="#A46C6C"/>
<path d="M64.5841 16.1333H60.9558V24.2H64.5841V16.1333Z" fill="#A46C6C"/>
<path d="M82 12.4667H77.646C77.646 12.6342 77.646 12.798 77.646 12.9692V16.1333H81.9747L82 12.4667Z" fill="#A46C6C"/>
<path d="M47.8687 12.5865V5.37345H44.2195V9.67573C43.7704 8.33863 42.9301 7.18538 41.8189 6.38132C40.6107 5.52669 39.1782 5.09137 37.7225 5.13652C36.2794 5.10548 34.8563 5.49605 33.6118 6.26474C32.3849 7.05271 31.4009 8.19679 30.7783 9.55914C30.0665 11.1342 29.7161 12.8628 29.7551 14.606C29.7212 16.2763 30.0376 17.9339 30.6817 19.4612C30.6433 19.778 30.623 20.097 30.6209 20.4164V25.0233C30.7891 28.0657 31.9661 29.9122 33.483 31.1458C35 32.3793 37.007 32.996 39.4827 32.996C41.0446 33.0441 42.5904 32.6547 43.962 31.8678C45.1933 31.1329 46.1979 30.0416 46.8563 28.7238C47.5478 27.3042 47.8945 25.7267 47.8652 24.132V16.3736H52.2478V12.5865H47.8687ZM34.957 10.1308C35.4588 9.58325 36.0658 9.15447 36.7376 8.87303C37.4094 8.59158 38.1306 8.46394 38.8531 8.49862C39.8182 8.48122 40.7695 8.7413 41.6043 9.25076C42.4169 9.76972 43.075 10.5175 43.504 11.4094C43.6909 11.7847 43.8408 12.1791 43.9512 12.5865H38.0839C36.4275 12.5873 34.8191 13.1712 33.5152 14.245C33.5761 12.5188 34.0519 11.1462 34.957 10.1308ZM44.0371 16.3736C43.9223 16.8876 43.743 17.3834 43.504 17.8478C43.066 18.7345 42.4005 19.4745 41.5828 19.9839C40.7487 20.495 39.7969 20.7552 38.8316 20.736C38.1103 20.7696 37.3905 20.6415 36.72 20.3601C36.0495 20.0786 35.4436 19.6504 34.9427 19.1039C34.8247 18.9685 34.7102 18.8256 34.585 18.6789C34.9003 17.9856 35.3967 17.4007 36.0162 16.9925C36.6357 16.5844 37.3528 16.3697 38.0839 16.3736H44.0371ZM44.2195 24.1057C44.2195 25.9008 43.7497 27.2684 42.8099 28.2086C42.3319 28.6809 41.7697 29.049 41.1556 29.2917C40.5416 29.5344 39.8879 29.6469 39.2323 29.6227C38.0803 29.6725 36.9414 29.3495 35.9695 28.6975C35.118 28.0808 34.2379 26.2342 34.2415 25.2151V23.3347C35.3316 23.8754 36.5245 24.148 37.7297 24.132C39.1854 24.1771 40.6179 23.7418 41.8261 22.8872C42.9325 22.083 43.7699 20.933 44.2195 19.6003V24.1057Z" fill="#A46C6C"/>
<path d="M54.062 3.66667C55.0639 3.66667 55.8761 2.84585 55.8761 1.83333C55.8761 0.820811 55.0639 0 54.062 0C53.06 0 52.2478 0.820811 52.2478 1.83333C52.2478 2.84585 53.06 3.66667 54.062 3.66667Z" fill="#A46C6C"/>
</svg>            </NavLink>  

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
            <div className="my-auto text-neutral-400">Login</div>

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
          <div className="h-[19px] w-px bg-gray-500_01 md:h-px md:w-[19px]" />
          <div className="my-auto text-neutral-400">Login</div>
        </div>
        </div>
        <div className="md:hidden  flex flex-row  items-center">
  
  
  </div>
      </div>
    </nav>
     <div className="w-full relative">
      <div className=" md:hidden absolute top-36 left-10">
      <Text size="8xl" as="p" className="font-bold !text-blue_gray-700">
                  Sign Up
                </Text>
      </div>
      <StepComponent currentStep={currentStep} />
     


     <div className="w-full absolute flex flex-col items-center justify-center md:px-5">
   
     <div className="mt-40  md:w-full ">
      {renderProgress()}

      </div>
      <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>

      <div className=" w-[40%] md:w-full   ">
      <>

            {currentStep === 1 ? (
               <div className="self-end mt-10 w-full flex items-center justify-center">
                  <div className="flex flex-col w-full md:ml-0 md:w-full">
                  <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                              <Text size="6xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                                <>
                                 
                                  Personal information
                                </>
                              </Text>
                             
                            </div>
                  <div className="flex sm:flex-col self-stretch gap-[9px]">
              
                          <div className="flex flex-col items-start w-full sm:w-full gap-1.5">
                          <div className="mb-4 w-full" >
                          <label className="mb-2.5 block font-medium  text-black ">
                            First Name
                          </label>
                          <TextField
      placeholder="First Name"
      type="text"
      className='w-full self-stretch flex'
      onChange={handlefirsNameChange}
      value={firstname}
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
                          </div>
                         
                          <div className="flex flex-col items-start w-full sm:w-full gap-1.5">
                          <div className="mb-4 w-full" >
                          <label className="mb-2.5 block font-medium  text-black ">
                            Last Name
                          </label>
                          <TextField
      placeholder="Last Name"
      type="text"
      className='w-full self-stretch flex'
      onChange={handlelastNameChange}
      value={lastname}
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
                          </div>
                        </div>
                     
                        <div className="mb-4 w-full" >
                          <label className="mb-2.5 block font-medium  text-black ">
                            Date Of Birthn
                          </label>
                          <div className="relative w-full rounded border-[1.5px] border-[#E0E0E0] bg-[#E0E0E0] px-5 py-4">
        <input
          className="form-datepicker  font-normal outline-none transition focus:border-primary active:border-primary "
          placeholder="mm/dd/yyyy"
          data-class="flatpickr-right"
          onChange={handleDateChange}
          value={dateOfBirth}
        />

        <div className="pointer-events-none absolute inset-0 left-auto right-5 flex items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.0002 12.8249C8.83145 12.8249 8.69082 12.7687 8.5502 12.6562L2.08145 6.2999C1.82832 6.04678 1.82832 5.65303 2.08145 5.3999C2.33457 5.14678 2.72832 5.14678 2.98145 5.3999L9.0002 11.278L15.0189 5.34365C15.2721 5.09053 15.6658 5.09053 15.9189 5.34365C16.1721 5.59678 16.1721 5.99053 15.9189 6.24365L9.45019 12.5999C9.30957 12.7405 9.16895 12.8249 9.0002 12.8249Z"
              fill="#64748B"
            />
          </svg>
        </div>
      </div>
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
                <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                 Gender
                </label>
                <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
    <select  value={gender} onChange={handleGenderChange} className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
      <option value="">Select gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Others">others</option>
    </select>
  </div>
              </div>
                        <div className="mb-6 w-full">
                          <label className="mb-2.5 block font-medium  text-black ">
                            Phone 
                          </label>
                          <TextField
      placeholder="Phone number"
      type="text"
      className='w-full self-stretch flex'
      onChange={handlePhoneChange}
      value={phone}
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
               
             
                </div>
                <div className="mb-6 w-full">
                  <label className="mb-2.5 block font-medium  text-black ">
                   Confirm Password 
                  </label>
                  <TextField
            placeholder="Confirm Password"
            type={showPassword ? 'text' : 'password'} // Show/hide password based on state
            value={confirmpassword}
            onChange={handleConfirmChange}
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
               
             
                </div>
                {error &&  <Alert severity="error">{error}</Alert>}
   
                  </div>
              </div>
            ) : currentStep === 2 ? (
              <div className="self-end mt-10 w-full flex items-center justify-center">
              <div className="flex flex-col w-full">
              <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                          <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                            <>
                              Basic Immigration Details
                            </>
                          </Text>
                         
                        </div>
            
                 
                    <div className="mb-4 w-full" >
                      <label className="mb-2.5 block font-medium  text-black ">
                        Country of origin
                      </label>
                      <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
          <select value={countryOfOrigin} onChange={handleCountryofOriginChange}  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Select country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Ghana">Ghana</option>
          </select>
        </div>
                    </div>
                    <div className="mb-4 w-full" >
                      <label className="mb-2.5 block font-medium  text-black ">
                        Current immigaration status
                      </label>
                      <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
          <select value={currentImmigrationStatus} onChange={handlelCurrentImigratStatusChange}   className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Select status</option>
            <option value="Permanent Resident">Permanent Resident</option>
            <option value="Temporary Resident holder">Temporary Resident Permit Holder</option>
            <option value="None">Prefer not to say</option>
          </select>
        </div>
                    </div>
                    <div className="mb-6 w-full">
                      <label className="mb-2.5 block font-medium  text-black ">
                        Date of immigration 
                      </label>
                      <input
          className="form-datepicker  font-normal outline-none transition focus:border-primary active:border-primary "
          placeholder="mm/dd/yyyy"
          data-class="flatpickr-right"
          onChange={handleImigrationDateChange}
          value={dateOfImmigration}
        />
             
                    </div>
                    <div className="mb-4 w-full" >
                      <label className="mb-2.5 block font-medium  text-black ">
                       Visa type
                      </label>
                      <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
          <select  value={visaType} onChange={handleVisaTypeChange}  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Select visa type</option>
            <option value="WorkPermit">Work Permit</option>
            <option value="StudyPermit">Study Permit</option>
            <option value="Other">others</option>
            <option value="None">Prefer not to say</option>
          </select>
        </div>
                    </div>
                    <div className="mb-4 w-full" >
                      <label className="mb-2.5 block font-medium  text-black ">
                       Type of status
                      </label>
                      <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
          <select  value={typeOfStatus} onChange={handleTypeOfStatusChange}  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Select Status</option>
            <option value="Skilled Worker">Skilled Worker</option>
            <option value="familySponsorship">Family Sponsorship</option>
            <option value="Other">others</option>
            <option value="None">Prefer not to say</option>
          </select>
        </div>
                    </div>
                    {error &&  <Alert severity="error">{error}</Alert>}
              </div>
            
          </div>
            ) : currentStep === 3 ? (
              <div className="self-end mt-10 w-full flex items-center justify-center">
              <div className="flex flex-col w-full md:ml-0 md:w-full">
              <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                          <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                            <>
                            Language Proficiency
                            </>
                          </Text>
                         
                        </div>
            
                 
                    <div className="mb-4 w-full" >
                      <label className="mb-2.5 block font-medium  text-black ">
                        Native Langauge
                      </label>
                      <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
          <select value={nativeLanguage} onChange={handleNativeLanguageChange}  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Select Language</option>
            <option value="English">English</option>
            
          </select>
        </div>
                    </div>
               
                    <table className=" mt-2  border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                  <thead>
                      <tr>
                          <th className="min-w-[20px]  px-2 py-2 font-medium border border-gray-500"></th>
                          <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">1</th>
                          <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">2</th>
                          <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">3</th>
                          <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">4</th>
                          <th className="min-w-[10px]  px-2 py-2 font-medium border border-gray-500 text-base">5</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableRows.map(row => (
                          <tr key={row.id}>
                              <td className="border border-gray-500 text-base" style={{ textAlign: 'center' }}>{row.title}</td>
                              <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option1" onChange={(e) => handleOptionChange(row.id, 'option1', e.target.value)} /></td>
                              <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option2" onChange={(e) => handleOptionChange(row.id, 'option2', e.target.value)} /></td>
                              <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option3" onChange={(e) => handleOptionChange(row.id, 'option3', e.target.value)} /></td>
                              <td className="border border-gray-500 px-2 py-2" style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option4" onChange={(e) => handleOptionChange(row.id, 'option4', e.target.value)} /></td>
                              <td className="border border-gray-500 px-2 py-2 " style={{ textAlign: 'center' }}><input type="radio" name={`row${row.id}`} value="option5" onChange={(e) => handleOptionChange(row.id, 'option5', e.target.value)} /></td>
                          </tr>
                      ))}
                  </tbody>
              </table>
                    <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                            <>
                            1 - Elementary Proficiency
                            </>
                          </Text>
                          <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                            <>
                            2 - Limited Working Proficiency
                            </>
                          </Text>
                          <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                            <>
                            3 - Professional Working Proficiency
                            </>
                          </Text>
                          <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01">
                            <>
                            4 - Full Professional Proficiency
                            </>
                          </Text>
                          <Text  as="p" className="w-full !font-kumbhsans font-normal text-base !text-blue_gray-700_01 mb-5">
                            <>
                            5 - Bilingual Proficiency
                            </>
                         </Text>
                {error &&  <Alert severity="error">{error}</Alert>}

              </div>
          </div>
              
           ): currentStep === 4 ? (
            <div className="self-end mt-10 w-full flex items-center justify-center">
            <div className="flex flex-col w-full md:ml-0 md:w-full">
            <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                        <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                          <>
                          Education & Employment Background
                          </>
                        </Text>
                       
                      </div>
          
               
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Highest level of education completed
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
        <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
          <option value="">Select education complete</option>
          <option value="railway">No formal education</option>
          <option value="road">Secondary School Diploma (or equivalent) obtained outside of Canada</option>
          <option value="aviation">Post-Secondary Certificate (non-university) obtained outside of Canada</option>
          <option value="marine">Diploma (University or College) obtained outside of Canada</option>
    
          <option value="road">Bachelor's Degree obtained outside of Canada</option>
          <option value="aviation">Master's Degree obtained outside of Canada</option>
          <option value="marine">Doctorate (Ph.D.) obtained outside of Canada</option>
    
          <option value="aviation">Other (specify their highest level of education, including education obtained outside of Canada)</option>
          <option value="marine">Prefer not to say</option>
        </select>
      </div>
                  </div>
             
              
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                     Previous work experience
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
          <select  value={previousWorkExperience}   className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
            <option value="">Select vWork expoerice</option>
            <option value="Agriculture">Agriculture, Forestry, Fishing & Hunting</option>
            <option value="Mining">Mining, Quarrying, and Oil & Gas Extraction</option>
            <option value="Utilities">Utilities (Electricity, Gas, Water)</option>
            <option value="construction">Construction</option>

            <option value="Manufacturing">Manufacturing</option>
            <option value="Wholesale Trade">Wholesale Trade</option>
            <option value="Retail Trade">Retail Trade</option>
            <option value="Transportation & Warehousing">Transportation & Warehousing</option>

            <option value="ICT">Information & Communication Technology (ICT)</option>
            <option value="Finance & Insurance">Finance & Insurance</option>
            <option value="Real Estate & Rental & Leasing">Real Estate & Rental & Leasing</option>
            <option value="Professional, Scientific & Technical Services">Professional, Scientific & Technical Services</option>

            <option value="Administrative">Administrative & Support Services, Waste Management & Remediation Service</option>
            <option value="Educational Services">Educational Services</option>
            <option value="Healthcare & Social Assistance">Healthcare & Social Assistance</option>
            <option value="Arts, Entertainment & Recreation">Arts, Entertainment & Recreation</option>

            <option value="Accommodation & Food Service">Accommodation & Food Service</option>
            <option value="Other Services">Other Services (e.g., Personal & Laundry Services, Repair & Maintenance)</option>
          </select>
        </div>
                    </div>
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                     Employment goal and aspiration
                    </label>
                    <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                    <textarea
                                  placeholder="Type here..."
                                  className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#E0E0E0] font-hanken focus:outline-none text-[#858585] text-start"
                                />
                    </div>
                    
                  </div>
            </div>
        </div>
           ):currentStep === 5 ? (
            <div className="self-end mt-10 w-full flex items-center justify-center">
            <div className="flex flex-col w-full md:ml-0 md:w-full">
            <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                        <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                          <>
                          Current housing situatuion
                          </>
                        </Text>
                       
                      </div>
          
               
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Highest housing situatuion
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select housing situatuion</option>
                      <option value="railway">Renting an Apartment/Condo</option>
                      <option value="road">Live with Family/Friends</option>
                      <option value="aviation">Student Residence </option>
                      <option value="marine">Other (specify other housing situation, including temporary housing options)</option>
                      <option value="marine">Prefer not to say</option>
                    </select>
                  </div>
                  </div>
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Housing Preference
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select housing preference</option>
                      <option value="railway">Renting an Apartment/Condo</option>
                      <option value="road">Shared Accommodation</option>
                      <option value="aviation">Student Residence </option>
                      <option value="marine">Open to all options</option>
                      <option value="marine">Not looking to move</option>
                      <option value="marine">Prefer not to say</option>
                    </select>
                  </div>
                  </div>
               
                  <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                        <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                          <>
                          Family Information
                          </>
                        </Text>
                       
                      </div>
          
               
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Number of family members immigrating with the user
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select number</option>
                      <option value="one">1</option>
                      <option value="two">2</option>
                      <option value="three">3 </option>
                      <option value="four">4</option>
                      <option value="five">5</option>
                      <option value="six">6</option>
                      <option value="seven">7</option>
                      <option value="eight">8 </option>
                      <option value="ning">9</option>
                      <option value="ten">10</option>
                    </select>
                  </div>
                  </div>
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                   Relationship to family
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select relationship</option>
                      <option value="railway">Father</option>
                      <option value="road">Mother</option>
                      <option value="aviation">Son </option>
                      <option value="marine">Daughter</option>
                      <option value="marine">Prefer not to say</option>
                    </select>
                  </div>
                  </div>
            </div>
        </div>
           ):currentStep === 6 ? (
            <div className="self-end mt-10 w-full flex items-center justify-center">
            <div className="flex flex-col w-full md:ml-0 md:w-full">
            <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                        <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                          <>
                          Social integration
                          </>
                        </Text>
                       
                      </div>
          
               
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Interest and hobbies
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select hobbies</option>
                      <option value="railway">Hiking & Camping</option>
                      <option value="road">Biking & Cycling</option>
                      <option value="aviation">Swimming & Water Sports </option>
                      <option value="road">Picnics & Barbecues</option>
                    </select>
                  </div>
                  </div>
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                     Preferred activities for socializing and meeting new people
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select socializing new people</option>
                      <option value=">Board Games">Board Games & Game Nights</option>
                      <option value=">Cultural Events">Cultural Events & Festivals</option>
                      <option value="Sports & Fitness Activities">Sports & Fitness Activities (Running, Hiking, etc.)</option>
                      <option value="Volunteering">Volunteering </option>
                      <option value="Book Clubs & Movie Nights">Book Clubs & Movie Nights </option>
                      <option value="Language Exchange">Language Exchange </option>

                  </select>
                  </div>
                  </div>
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Any specific cultural or religious considerations
                    </label>
                    <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#E0E0E0] mb-5 gap-2  rounded-md w-full">
                    <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
                      <option value="">Select specific cultural or religious considerations</option>
              

                  </select>
                  </div>
                  </div>
             
            </div>
        </div>
           ):currentStep === 7 ? (
            <div className="self-end mt-10 w-full flex items-center justify-center">
            <div className="flex flex-col w-full md:ml-0 md:w-full">
            <div className="flex w-[58%] my-5 items-center gap-[11px] md:w-full">
                        <Text size="6xl" as="p" className="w-full !font-kumbhsans !text-blue_gray-700_01">
                          <>
                          Social needs
                          </>
                        </Text>
                       
                      </div>
          
               
                      <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Specific challenges or concerns related to immigration and settlement
                    </label>
                    <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                    <textarea
                                  placeholder="Type here..."
                                  className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#E0E0E0] font-hanken focus:outline-none text-[#858585] text-start"
                                />
                    </div>
                  </div>
                  <div className="mb-4 w-full" >
                    <label className="mb-2.5 block font-medium  text-black ">
                    Support services or resources
                    </label>
                    <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#E0E0E0] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                    <textarea
                                  placeholder="Type here..."
                                  className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#E0E0E0] font-hanken focus:outline-none text-[#858585] text-start"
                                />
                    </div>
                  </div>
            </div>
        </div>
           ) : (
                <></>
            )}
        </>
      </div>
      <div className="my-10 w-[40%] md:w-full flex justify-between ">
      {currentStep  === 1 && <button className="" ></button>}
      {currentStep !== 1 && <button   onClick={(e) => { e.preventDefault(); handlePrev();}} >Previous</button>}
      {currentStep !== 7 ? (
          <button  onClick={(e) => { e.preventDefault(); handleNext();}}  className="justify-center self-end px-11 py-5 mt-10 text-base font-semibold text-black whitespace-nowrap border-2 border-solid border-neutral-500 rounded-[31.5px] md:px-5">
                Next
              </button>
         
      ) : (
        <>
        {loading ? (
          <button   className="justify-center self-end px-11 py-5 mt-10 text-base font-semibold text-black whitespace-nowrap border-2 border-solid border-neutral-500 rounded-[31.5px] md:px-5" disabled={loading}>
         <CgSpinner className=" animate-spin text-lg items-center " />
          </button>
         ) : (
           <button type="submit"   className="justify-center self-end px-11 py-5 mt-10 text-base font-semibold text-black whitespace-nowrap border-2 border-solid border-neutral-500 rounded-[31.5px] md:px-5" disabled={loading}>
                Finish
                 </button>
         )}
     
       </>
      )}
      </div>
      </form>


     </div>
     
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


