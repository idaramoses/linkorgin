import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../../components";
import Header from "components/Header";
import Settings from "components/Settings";

const data = [
  { image: "/images/img_istockphoto_113.png", wherecani: "Where can i find healthcare facilities?" },
  { image: "/images/img_istockphoto_171.png", wherecani: "What are government policies in healthcare?" },
  { image: "/images/img_istockphoto_143.png", wherecani: "What are government policies in healthcare?" },
  { image: "/images/img_istockphoto_148.png", wherecani: "What are government policies in healthcare?" },
];

export default function ImigrationPage() {
  return (
    <>
      <Helmet>
        <title>Government Services - Assistance with Immigration and More</title>
        <meta
          name="description"
          content="Get help with immigration, employment, healthcare, and legal matters. Access government services and quick links to facilitate your settlement process."
        />
      </Helmet>

      <div className=" bg-[url(/public/images/img_welcome_screen.svg)] bg-center bg-cover bg-no-repeat my-auto flex flex-col items-center">
          {/* header section */}
          <Header/>
          <div className="relative mx-auto flex w-full items-start justify-between gap-5   md:h-auto md:flex-col md:p-5">
          <Settings/>
            {/* introductory section */}
            <div className="mb-7  pt-40 md:pt-16 flex w-[60%] flex-col items-start gap-10 md:w-full md:gap-5 sm:gap-10">
              {/* questions list section */}
              <div className="flex w-[84%] flex-col self-end md:w-full">
                <div className="ml-2 flex  items-start gap-[29px] md:ml-0 md:w-full sm:flex-col">
                  <Heading  className="bg-gradient2 bg-clip-text !text-transparent text-[40px] md:text-base ">
                    Mon - Ami
                  </Heading>
                  <Text  className="mt-1.5  text-base md:text-sm !font-kumbhsans sm:w-full">
                    <>
                      Get help with immigration, employment, <br />
                      healthcare, housing, and legal matters.
                    </>
                  </Text>
                </div>

                {/* healthcare questions section */}
                <div className="flex flex-col md:flex-col-reverse">
                <div className="mt-20 flex gap-5 md:flex-col">
                  {data.map((d, index) => (
                    <div key={"listwherecani" + index} className="flex w-full flex-col items-center">
                      <div className="self-stretch rounded-[12px] bg-blue_gray-100">
                        <Img
                          src={d.image}
                          alt="image"
                          className="h-52 w-full rounded-[12px] object-cover md:h-52"
                        />
                      </div>
                      <div className="relative mt-[-19px] flex w-[90%] justify-center p-1 md:rounded-b-md rounded-md bg-white-A700 md:w-full">
                        <p  className="text-xs self-start">
                          {d.wherecani}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* search section */}
                <div className="mt-64 md:mt-10 flex flex-col items-end gap-[3px] ">
                  <div className="mr-7 flex w-[27%] flex-wrap justify-end gap-5 md:mr-0 md:w-full">
                    <Heading  className="!text-gray-800">
                      Ask Mon-Ami
                    </Heading>
                    <Heading  className="!text-gray-800 text-base md:text-sm">
                        Search
                    </Heading>
                  </div>
                  <div className="flex  flex-col items-end gap-2.5 self-stretch">
                    <div className="mr-[126px] h-[2px] w-[15%] bg-red-900 md:mr-0" />
                    <div className="self-stretch rounded-[21px] border border-solid border-blue_gray-100_01 bg-white-A700 p-[9px]">
                      <div className="flex flex-col gap-[27px]">
                        <div className="flex items-start justify-between gap-5">
                          <input  className="mt-[7px] text-base md:text-sm outline-none border-none focus:outline-none" placeholder=" Ask me anything"/>
                           
                          
                         
                          <Img src="/images/img_menu.svg" alt="menu_one" className="h-[20px]" />
                        </div>
                        <div className="flex items-center justify-between gap-5">
                          <Img src="/images/img_clock.svg" alt="clock_one" className="h-[19px] self-start" />
                          <Img
                            src="/images/img_settings_gray_500_01.svg"
                            alt="settings_one"
                            className="h-[17px] w-[17px] self-end"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
               
              </div>

        
            </div>

            {/* government services section */}
            <div className="flex md:pt-5 pt-40 w-[30%] md:hidden border-l border-gray-300 md:border-none px-5 flex-col gap-[29px] md:w-full">
              <div className="flex flex-col items-start gap-[21px]">
                <div className="flex w-[60%] flex-col items-center justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                  <Img src="/images/img_group_52.svg" alt="home_one" className="h-[23px] self-center" />
                  <h1  className="text-base md:text-sm !font-kumbhsans md:ml-0 text-white-A700">
                  Legal & Immigration service
                  </h1>
                </div>
                <div className="self-stretch rounded-[10px] bg-gray-200 p-[18px]">
                  <p className= "text-base md:text-sm !text-blue_gray-900">
                    Whether you need help navigating immigration applications, finding employment opportunities,
                    accessing healthcare services, securing housing accommodations, or understanding your legal rights,
                    government services are here to help you access public services that support you through the
                    settlement process.
                  </p>
                </div>
              </div>

              {/* quick links section */}
              <div className="flex flex-col gap-3 items-start">
                <Text size="md" as="p" className="!font-hankengrotesk">
                  Quick links
                </Text>
                <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                  Immigration & Citizenship
                </button>
                <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                  Employment Services
                </button>
                <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                  Social Services
                </button>
                 <button  color="light_green_100_2d_blue_50" className="w-full bg-gray-200 h-12 font-hankengrotesk sm:px-5">
                 Healthcare Services
                </button>
             
              </div>
            </div>
          </div>
      


        </div>

   
    </>
  );
}
