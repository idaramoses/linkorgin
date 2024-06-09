import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Input, Text, CheckBox, Img } from "../../../components";
import { Link, NavLink, useNavigate } from "react-router-dom";

import AuthService from "services/authService";
import { Alert, Box, CircularProgress, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material'; 
import { toast, Bounce, ToastContainer } from "react-toastify";
import { CgSpinner } from "react-icons/cg";
import DatePicker from "react-datepicker";


interface TableRow {
  id: number;
  title: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
}

export default function LocalRegisterPage() {

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
  const [startDate, setStartDate] = useState(new Date());


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

  const userData = {
  firstName: firstname,
  lastName:  lastname,
  email: email,
  phone:phone,
  preferredLanguages:["English"],
  timeSpentInCanada:"2 month",
  areasOfExpertise:["health", "social support"],
  location:"Quebec",
  motivations:["","",""],
  backgrounds:["","",""],
  selfDescription:"",
  hobbies:["skiing","hiking"],
  specificAreasOfNeed:"",


  



 }



  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Set loading to true when submitting the form
    setLoading(true);
    setError('');
  
    const { success, error } = await AuthService.matchlocal(userData);
  
    // Reset loading state after login attempt
    setLoading(false);
  
    if (success) {
      setError('');
      navigate(`/success`);
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
      <nav className="flex self-stretch justify-between items-center fixed w-full z-10 gap-5 p-6 md:p-4  bg-white-A700">
      <div className="container mx-auto flex  justify-between items-center">
      <NavLink to="/">
      <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-4 " />
      </NavLink>  

      
    <div className=" flex flex-row  items-center">
  
  
  </div>
      </div>
    </nav>
    <div className="w-full  flex flex-col items-center justify-center md:px-5">
   
    
   <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center'>

   <div className=" w-full mt-32 md:mt-14 flex items-center justify-center ">
   <>
  
         {currentStep === 1 ? (
            <div className=" w-[50%] md:w-full self-end mt-10  flex items-center justify-center">
               <div className="flex flex-col w-full md:ml-0 md:w-full">
               <div className="flex w-[58%] my-5 items-center gap-[11px]  md:w-full">
                           <Text size="6xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                             <>
                              
                             Select your category
                             </>
                           </Text>
                          
                </div>
               <div  className="w-full flex flex-row md:flex-col  gap-4 justify-between">
               <div onClick={(e) => { e.preventDefault(); handleNext();}} className=" px-3 py-8 gap-4 flex flex-col w-[45%] md:w-full border border-gray-800 rounded-md cursor-pointer" >
               <Text size="2xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                             <>
                              
                             New Commer
                             </>
                </Text>

                <label className="  font-normal  text-black text-sm ">
                Select this if you are new to Canada and seeking assistance
                 </label>
               </div>
               <div onClick={(e) => { e.preventDefault(); handleNext();}} className=" px-3 py-8 gap-4 flex flex-col w-[45%] md:w-full border border-gray-800 rounded-md  cursor-pointer" >
               <Text size="2xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                             <>
                              
                            Local
                             </>
                </Text>

                <label className="  font-normal  text-black text-sm ">
                Select this if you are a resident of Canada and want to help newcomers
                 </label>
               </div>
               </div>
              
               </div>
           </div>
         ) : currentStep === 2 ? (
           <div className=" w-[50%] md:w-full self-end mt-10 flex items-center justify-center">
            <div className="self-end mt-10 w-full flex items-center justify-center">
                  <div className="flex flex-col w-full md:ml-0 md:w-full">
                  <div className="flex my-5 items-center gap-[11px] md:w-full">
                              <Text size="3xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                                <>   
                                Please fill out the following information to create your profile and find your perfect match
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
          backgroundColor: '#FFFFFF', // Set background color
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
          backgroundColor: '#FFFFFF', // Set background color
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
          backgroundColor: '#FFFFFF', // Set background color
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
          backgroundColor: '#FFFFFF', // Set background color
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
                Preferd language
                 </label>
                 <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#FFFFFF] mb-5 gap-2  rounded-md w-full">
     <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
       <option value="">Select</option>
       <option value="railway">English</option>
       <option value="road">French</option>
     
     </select>
   </div>
               </div>
               <button  onClick={(e) => { e.preventDefault(); handleNext();}}  className="justify-center w-full bg-[#3864FF] self-end px-11 py-5 mt-10 text-base font-semibold text-white-A700 whitespace-nowrap rounded-[31.5px] md:px-5">
                Next
              </button>
                  </div>
              </div>
         
       </div>
         ) : currentStep === 3 ? (
          <div className=" w-[50%] md:w-full self-end mt-10 flex items-center justify-center">
          <div className="self-end mt-10 w-full flex items-center justify-center">
                <div className="flex flex-col w-full md:ml-0 md:w-full">
                <div className="flex my-5 items-center gap-[11px] md:w-full">
                            <Text size="3xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                              <>   
                              Matching Prefrence
                              </>
                            </Text>
                           
                          </div>
             
                   
                      
              <div className="mb-4 w-full" >
                <label className="mb-2.5 block font-medium  text-black ">
                In which city/province are you located?
                </label>
                <TextField
    placeholder=""
    type="text"
    className='w-full self-stretch flex'
   
    sx={{
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF', // Set background color
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
                 How long have u live in Canada
                 </label>
                 <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#FFFFFF] mb-5 gap-2  rounded-md w-full">
     <select  className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
       <option value="">Select</option>
       <option value="railway">1</option>
       <option value="road">2</option>
       <option value="aviation">3</option>
       <option value="marine">4</option>
 
       <option value="road">5</option>
       <option value="aviation">6</option>
       <option value="marine">7</option>
 
       <option value="aviation">8</option>
       <option value="marine">9</option>
       <option value="marine">10</option>
     </select>
   </div>
               </div>
                <div className="mb-4 w-full" >
                 <label className="mb-2.5 block font-medium  text-black ">
                 What are your areas of expertise or experience that could be helpful to newcomers?
                 </label>
                 <div className="flex flex-wrap mt-2 p-3 border border-[#E0E0E0] bg-[#FFFFFF] mb-5 gap-2  rounded-md w-full">
       <select    className="h-8   text-gray-600 text-base font-hankengrotesk w-full  ">
         <option value="">Select Previous Work industry</option>
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
                What motivates you to connect with newcomers?
                </label>
                <TextField
    placeholder=""
    type="text"
    className='w-full self-stretch flex'
   
    sx={{
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF', // Set background color
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
                Any specific cultural backgrounds or experiences you'd prefer to connect with?
                </label>
                <TextField
    placeholder=""
    type="text"
    className='w-full self-stretch flex'
   
    sx={{
      '& .MuiOutlinedInput-root': {
        backgroundColor: '#FFFFFF', // Set background color
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
             <button  onClick={(e) => { e.preventDefault(); handleNext();}}  className="justify-center w-full bg-[#3864FF] self-end px-11 py-5 mt-10 text-base font-semibold text-white-A700 whitespace-nowrap rounded-[31.5px] md:px-5">
              Next
            </button>
                </div>
            </div>
       
     </div>
           
        ): currentStep === 4 ? (
          <div className=" w-[50%] md:w-full self-end mt-10 flex items-center justify-center">
          <div className="self-end mt-10 w-full flex items-center justify-center">
                <div className="flex flex-col w-full md:ml-0 md:w-full">
                <div className="flex my-5 items-center gap-[11px] md:w-full">
                            <Text size="3xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                              <>   
                             Aditional Information
                              </>
                            </Text>
                           
                          </div>
             
                          <div className="mb-4 w-full" >
                 <label className="mb-2.5 block font-medium  text-black ">
                 Briefly describe yourself and your interests
                 </label>
                 <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                 <textarea
                               placeholder="Type here..."
                               className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#FFFFFF] font-hanken focus:outline-none text-[#858585] text-start"
                             />
                 </div>
               </div>
                      
                         
             <button  onClick={(e) => { e.preventDefault(); handleNext();}}  className="justify-center w-full bg-[#3864FF] self-end px-11 py-5 mt-10 text-base font-semibold text-white-A700 whitespace-nowrap rounded-[31.5px] md:px-5">
              Next
            </button>
                </div>
            </div>
       
     </div>
        ):currentStep === 5 ? (
          <div className=" w-[50%] md:w-full self-end mt-10 flex items-center justify-center">
          <div className="self-end mt-10 w-full flex items-center justify-center">
                <div className="flex flex-col w-full md:ml-0 md:w-full">
                <div className="flex my-5 items-center gap-[11px] md:w-full">
                            <Text size="3xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                              <>   
                             Hobbies/Activity
                              </>
                            </Text>
                           
                          </div>
             
                          <div className="mb-4 w-full" >
                 <label className="mb-2.5 block font-medium  text-black ">
                 Do you have any hobbies or activities you'd like to share with your match? 
                 </label>
                 <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                 <textarea
                               placeholder="Type here..."
                               className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#FFFFFF] font-hanken focus:outline-none text-[#858585] text-start"
                             />
                 </div>
               </div>
                      
                         
             <button  onClick={(e) => { e.preventDefault(); handleNext();}}  className="justify-center w-full bg-[#3864FF] self-end px-11 py-5 mt-10 text-base font-semibold text-white-A700 whitespace-nowrap rounded-[31.5px] md:px-5">
              Next
            </button>
                </div>
            </div>
       
     </div>
        ):currentStep === 6 ? (
          <div className=" w-[50%] md:w-full self-end mt-10 flex items-center justify-center">
          <div className="self-end mt-10 w-full flex items-center justify-center">
                <div className="flex flex-col w-full md:ml-0 md:w-full">
                <div className="flex my-5 items-center gap-[11px] md:w-full">
                            <Text size="3xl" as="p" className=" !font-kumbhsans !text-blue_gray-700_01">
                              <>   
                           Your Specialty
                              </>
                            </Text>
                           
                          </div>
             
                          <div className="mb-4 w-full" >
                 <label className="mb-2.5 block font-medium  text-black ">
                 Any specific areas you have experience in that you'd like to guide the newcomer in? 
                 </label>
                 <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                 <textarea
                               placeholder="Type here..."
                               className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#FFFFFF] font-hanken focus:outline-none text-[#858585] text-start"
                             />
                 </div>
               </div>
                      
               <>
        {loading ? (
          <button   className="justify-center self-end px-11 py-5 mt-10 text-base font-semibold text-black whitespace-nowrap border-2 border-solid border-neutral-500 rounded-[31.5px] md:px-5" disabled={loading}>
         <CgSpinner className=" animate-spin text-lg items-center " />
          </button>
         ) : (
           
             <button type="submit" className="justify-center w-full bg-[#3864FF] self-end px-11 py-5 mt-10 text-base font-semibold text-white-A700 whitespace-nowrap rounded-[31.5px] md:px-5">
               Next
              </button>
         )}
     
       </>           
             
                </div>
            </div>
       
     </div>
        ):currentStep === 7 ? (
         <div className="self-end  mt-10 w-full flex items-center justify-center">
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
                 <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                 <textarea
                               placeholder="Type here..."
                               className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#FFFFFF] font-hanken focus:outline-none text-[#858585] text-start"
                             />
                 </div>
               </div>
               <div className="mb-4 w-full" >
                 <label className="mb-2.5 block font-medium  text-black ">
                 Do you need any support services or resources
                 </label>
                 <div className="w-full rounded-lg border border-[#E0E0E0] bg-[#FFFFFF] py-4 pl-6 pr-5 text-black outline-none focus:border-[#E0E0E0] focus-visible:shadow-none   ">
                 <textarea
                               placeholder="Type here..."
                               className="w-full h-auto bg-transparent text-[15px] border-[#E0E0E0] bg-[#FFFFFF] font-hanken focus:outline-none text-[#858585] text-start"
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


