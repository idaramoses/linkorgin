import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import { ToastContainer } from "react-toastify";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>orgin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      
      <div className="bg-[url(/public/images/img_welcome_screen.svg)] bg-center bg-cover bg-no-repeat flex  relative flex-col items-center px-5 pb-20 w-full ">
      <div className="h-20 z-50 fixed px-10 flex w-full items-center justify-between gap-5 bg-white-A700">
            <div className="flex flex-row gap-2 items-center justify-center h-full  ">
            <div className=" h-10 w-10 flex-col gap-1 mt-auto hidden">
              <div className="h-[2px] w-[25px] bg-black-900_2d" />
              <div className="h-[2px] w-[25px] bg-black-900_2d" />
              <div className="h-[2px] w-[25px] bg-black-900_2d" />
            </div>
              <Img src="/images/img_header_logo.svg" alt="headerlogo_one" className="h-8 " />
             </div>  
               <Img
                src="/images/img_ellipse_29.png"
                alt="circleimage"
                className=" h-10 w-10 rounded-[50%]"
              />
          </div>
        <div className=" mt-32 text-5xl font-semibold bg-clip-text max-md:mt-10 md:max-w-full md:text-3xl">
          Welcome to Mon-Ami Dashboard
        </div>
        <div className=" mt-14 text-2xl md:text-xl text-black md:mt-10 mmd:w-full">
          Hey there! I'm Mon-Ami, your go-to guide for settling into your new
          country.
        </div>

        <div className="mx-auto mt-10 flex w-[90%] md:w-full gap-2 md:flex-col ">
              <div className="flex w-full flex-col gap-2.5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="relative flex flex-col items-center justify-center h-40  bg-lime-400 rounded-xl">
                <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e7ea984410aaad24cbc660f51cd96d372631a17f6f16e1eb9106d6829a475c1?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
              className="self-center aspect-square w-[39px]"
            />
            <div className="mt-3 text-center text-white-A700">
              Personalised 
              Recommendations
            </div>
                </div>
                
              </div>
              <div className="flex w-full flex-col gap-2.5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="relative flex flex-col items-center justify-center h-40  bg-purple-500 rounded-xl">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d318b5d7feb983bd97eaa5b6dc415bda810a1d700768ce3a9e3d2aa644a5b046?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
              className="self-center aspect-square w-[39px]"
            />
            <div className="mt-3 text-center text-white-A700">
             Dynamic Category
            </div>
                </div>
           
              </div>
              <div className="flex w-full flex-col gap-2.5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="relative flex flex-col items-center justify-center h-40   bg-sky-400 rounded-xl">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c906aac4b1c8116b1078c61430fff6888fe8ebdc7dbc29b04af0216dde78a1cd?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
              className="self-center aspect-square w-[39px]"
            />
            <div className="mt-3 text-center text-white-A700">
              Expert 
              Guide
            </div>
                </div>
           
              </div>
              <div className="flex w-full flex-col gap-2.5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="relative flex flex-col items-center justify-center h-40   bg-indigo-400 rounded-xl">
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c51bcce3766dc7f511a2f79743303d568454960ee8902e8644931760caabb9b2?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
              className="self-center aspect-square w-[39px]"
            />
            <div className="mt-3 text-center text-white-A700">
              Continious 
              Learning
            </div>
                </div>
                
              </div>
              <div className="flex w-full flex-col gap-2.5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
              <div className="relative flex flex-col items-center justify-center h-40  bg-orange-300  rounded-xl">
                <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e7ea984410aaad24cbc660f51cd96d372631a17f6f16e1eb9106d6829a475c1?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
              className="self-center aspect-square w-[39px]"
            />
            <div className="mt-3 text-center text-white-A700">
            Interactive 
              features
            </div>
                </div>
               
              </div>
            </div>
     
       
        <div className="relative mt-10 text-2xl md:text-xl text-black md:mt-10 md:max-w-full">
          So, let's make settling into your new home easier than usual.
        </div>
        <NavLink to="/dashboard/category">
        <div className="cursor-pointer relative justify-center px-12 py-6 mt-16 mb-11 text-xl text-white-A700 bg-black-900 rounded-[34px] max-md:px-5 max-md:my-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
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




