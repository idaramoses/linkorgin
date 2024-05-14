import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import { ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService, { UserData } from "services/authService";

export default function Dashboard() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userDataFromStorage = AuthService.getUserDataFromLocalStorage();
    console.log('userData:', userDataFromStorage); // Add this line for debugging
    setUserData(userDataFromStorage);
  }, []);
  return (
    <>
      <Helmet>
        <title>orgin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      
      <div className="bg-[url(/public/images/img_welcome_screen.svg)] bg-center bg-cover bg-no-repeat flex  relative flex-col items-center px-5 pb-20 w-full ">
      <div className="h-20 z-50 fixed px-10 flex w-full items-center justify-between gap-5 bg-white-A700">
            <div className="flex flex-row gap-2 items-center justify-between h-full  ">
            <div className=" h-10 w-10 flex-col gap-1 mt-auto hidden">
              <div className="h-[2px] w-[25px] bg-black-900_2d" />
              <div className="h-[2px] w-[25px] bg-black-900_2d" />
              <div className="h-[2px] w-[25px] bg-black-900_2d" />
            </div>
              <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 " />
             </div>  
            <div className="">
            {userData && userData.firstName && (
        <div className="flex justify-center items-center h-12 w-12  left-0 bottom-0 right-0 top-0  m-auto  bg-red-400_01 border-red-400_01 border-2 border-solid  rounded-full">
        <div  className="!text-white-A700 !font-hankengrotesk !font-normal">
        {userData.firstName ? userData.firstName.charAt(0) : ''}
        </div>
      </div>
      )} 
              </div>  
       
          </div>
        {/* introduction section */}
        <div className="mt-[39px] flex flex-col items-center gap-[38px]">
            <Heading size="xl" as="h1" className="bg-gradient1 bg-clip-text !font-kumbhsans !text-transparent">
              Welcome to Mon-Ami Dashboard
            </Heading>
            <Text size="4xl" as="p" className="!font-kumbhsans !font-normal">
              Hey there! I&#39;m Mon-Ami, your go-to guide for settling into your new country.
            </Text>
          </div>

          {/* features section */}
          <div className="mx-auto mt-[83px] flex w-full max-w-[1301px] gap-[19px] md:flex-col md:p-5">
            <div className="flex w-full flex-col">
              <div className="relative z-[1] flex flex-col items-center gap-1.5 rounded-[11px] bg-lime-700 p-[26px] sm:p-5">
                <Button size="xs" variant="fill" className="mt-[11px] w-[39px] rounded-[19px]">
                  <Img src="/images/img_television.svg" />
                </Button>
                <Text size="4xl" as="p" className="mb-[21px] text-center !font-kumbhsans !text-white-A700">
                  <>
                    Personalised <br />
                    Recommendations
                  </>
                </Text>
              </div>
              <div className="relative mt-[-83px] rounded-[11px] bg-white-A700 p-2">
                <Text size="s" as="p" className="mb-[13px] mt-[87px] !font-kumbhsans">
                  I&#39;ve got some awesome suggestions lined up just for you, based on what I know about your
                  preferences and needs.
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="relative z-[2] flex flex-col items-center gap-1.5 rounded-[11px] bg-deep_purple-A200 p-[37px] sm:p-5">
                <Button color="deep_purple_A100" size="xs" variant="fill" className="w-[39px] rounded-[19px]">
                  <Img src="/images/img_grid.svg" />
                </Button>
                <Text
                  size="4xl"
                  as="p"
                  className="mb-2.5 w-[65%] text-center !font-kumbhsans !text-white-A700 md:w-full"
                >
                  <>
                    Dynamic <br />
                    Categories
                  </>
                </Text>
              </div>
              <div className="relative mt-[-83px] rounded-[11px] bg-white-A700 p-2">
                <Text size="s" as="p" className="mb-[13px] mt-[87px] !font-kumbhsans">
                  Explore different categories that change and adapt as you do. It&#39;s like having a personal
                  assistant tailor-made for you!
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="relative z-[3] flex flex-col items-center gap-1.5 rounded-[11px] bg-blue-400 p-[37px] sm:p-5">
                <Img src="/images/img_close.svg" alt="close_one" className="h-[39px] w-[39px]" />
                <Text
                  size="4xl"
                  as="p"
                  className="mb-2.5 w-[58%] text-center !font-kumbhsans !text-white-A700 md:w-full"
                >
                  <>
                    Expert <br />
                    Guidance
                  </>
                </Text>
              </div>
              <div className="relative mt-[-83px] rounded-[11px] bg-white-A700 p-2">
                <Text size="s" as="p" className="mb-[13px] mt-[87px] !font-kumbhsans">
                  Need a hand navigating the maze of settling into a new country? Don&#39;t worry—I&#39;ve got your back
                  with expert advice and tips every step of the way.
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="relative z-[4] flex flex-col items-center gap-1.5 rounded-[11px] bg-orange-300 p-[37px] sm:p-5">
                <Img src="/images/img_close_orange_200.svg" alt="close_one" className="h-[39px] w-[39px]" />
                <Text
                  size="4xl"
                  as="p"
                  className="mb-2.5 w-[68%] text-center !font-kumbhsans !text-white-A700 md:w-full"
                >
                  <>
                    Interactive <br />
                    features
                  </>
                </Text>
              </div>
              <div className="relative mt-[-83px] rounded-[11px] bg-white-A700 p-2">
                <Text size="s" as="p" className="mb-[13px] mt-[87px] !font-kumbhsans">
                  This isn&#39;t your average dashboard—it&#39;s designed to be interactive and user-friendly. No
                  confusing menus or jargon here!
                </Text>
              </div>
            </div>
            <div className="flex w-full flex-col">
              <div className="relative z-[5] flex flex-col items-center gap-1.5 rounded-[11px] bg-indigo-200 p-[37px] sm:p-5">
                <Button color="indigo_100" size="xs" variant="fill" className="w-[39px] rounded-[19px]">
                  <Img src="/images/img_user.svg" />
                </Button>
                <Text
                  size="4xl"
                  as="p"
                  className="mb-2.5 w-[72%] text-center !font-kumbhsans !text-white-A700 md:w-full"
                >
                  <>
                    Continuous <br />
                    Learning
                  </>
                </Text>
              </div>
              <div className="relative mt-[-83px] rounded-[11px] bg-white-A700 p-2">
                <Text size="s" as="p" className="mb-[13px] mt-[87px] !font-kumbhsans">
                  Together, we&#39;re on a journey of growth and improvement. The more we interact, the better I get at
                  understanding your needs and preferences.
                </Text>
              </div>
            </div>
          </div>
     
       
        <div className="relative mt-10 text-base  md:text-smtext-black md:mt-10 md:max-w-full">
          So, let's make settling into your new home easier than usual.
        </div>
        <NavLink to="/dashboard/category">
        <div className="cursor-pointer relative justify-center px-5 py-4 mt-16 mb-11 text-base  md:text-sm text-white-A700 bg-black-900 rounded-[34px] max-md:px-5 max-md:my-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
          Explore Resource Directory
        </div>
     </NavLink>  

       
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
    </>
  );
}




