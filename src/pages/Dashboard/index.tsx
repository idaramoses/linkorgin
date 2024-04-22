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
      <div className="flex flex-col justify-center bg-white">
      <div className="flex overflow-hidden relative flex-col items-center px-5 pb-20 w-full ">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3cf25fae86459ac8d9ca7532d7276dc91e4b3505f86dcff96e4fa8b739f9739?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
          className="object-cover fixed inset-0 h- size-full"
        />
        <div className="flex relative gap-5 justify-between items-start self-stretch px-16 pt-12 pb-7 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          
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
     </svg>      
     </NavLink>  

          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/81b19035177ff4a748339b39f29d65c983c876b005753f807b7c3c3f8eaeba21?apiKey=40621ed5d4fd4492af4d4dffefbaaa2d&"
            className="shrink-0 w-9 rounded-full aspect-square"
          />
        </div>
        <div className="relative mt-12 text-5xl font-semibold bg-clip-text max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Welcome to Mon-Ami Dashboard
        </div>
        <div className="relative mt-14 text-2xl text-black max-md:mt-10 max-md:max-w-full">
          Hey there! I'm Mon-Ami, your go-to guide for settling into your new
          country.
        </div>

        <div className="mx-auto mt-10 flex w-[90%] md:w-full gap-2 md:flex-col ">
              <div className="flex w-full flex-col gap-2.5">
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
              <div className="flex w-full flex-col gap-2.5">
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
              <div className="flex w-full flex-col gap-2.5">
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
              <div className="flex w-full flex-col gap-2.5">
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
              <div className="flex w-full flex-col gap-2.5">
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
     
       
        <div className="relative mt-10 text-2xl text-black max-md:mt-10 max-md:max-w-full">
          So, let's make settling into your new home easier than usual.
        </div>
        <div className="relative justify-center px-12 py-6 mt-16 mb-11 text-xl text-white-A700 bg-black-900 rounded-[34px] max-md:px-5 max-md:my-10">
          Explore Resource Directory
        </div>
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
    </>
  );
}




