import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Input, Heading } from "../../components";

export default function AIseachpagegovernmentOnePage() {
  return (
    <>
      <Helmet>
        <title>Government Assistance Services - Immigration & Employment Help</title>
        <meta
          name="description"
          content="Explore comprehensive government assistance for immigration, employment, healthcare, and legal matters. Get the support you need with our easy-to-use search."
        />
      </Helmet>

      {/* welcome section */}
      <div className="relative h-[1306px] w-full bg-white-A700 pb-[294px] md:pb-5">
        <Img
          src="images/img_welcome_screen.svg"
          alt="mesh_one"
          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1012px] w-full"
        />

        {/* header section */}
        <div className="container-xs absolute left-0 right-0 top-[0.00px] my-auto flex flex-col items-end md:p-5">
          <header className="flex items-center gap-[41px] self-stretch md:flex-col">
            <div className="mb-[39px] flex w-[2%] flex-col gap-1 self-end md:w-full">
              <div className="h-[2px] w-[25px] bg-black-900_72" />
              <div className="h-[2px] w-[25px] bg-black-900_72" />
              <div className="h-[2px] w-[25px] bg-black-900_72" />
            </div>
            <div className="flex flex-1 items-center md:self-stretch">
              <Img
                src="images/img_header_logo.svg"
                alt="headerlogo_one"
                className="relative z-[1] mb-[35px] h-[26px] w-[8%] self-end"
              />
              <div className="relative ml-[-114px] flex flex-1 justify-end bg-white-A700_e2 p-[27px] sm:p-5">
                <Img
                  src="images/img_ellipse_29.png"
                  alt="circleimage"
                  className="mr-[52px] mt-[21px] h-[36px] w-[36px] rounded-[50%] md:mr-0"
                />
              </div>
            </div>
          </header>

          {/* intro section */}
          <div className="ml-[150px] mt-[46px] flex w-[79%] items-start justify-between gap-5 self-start md:ml-0 md:w-full md:flex-col">
            <div className="flex w-[51%] items-start justify-center gap-[29px] md:w-full sm:flex-col">
              <Heading size="lg" as="h1" className="bg-gradient2 bg-clip-text !text-transparent">
                Mon - Ami
              </Heading>
              <Text size="lg" as="p" className="mt-1.5 w-[57%] !font-kumbhsans sm:w-full">
                <>
                  Get help with immigration, employment, <br />
                  healthcare, housing, and legal matters.
                </>
              </Text>
            </div>
            <div className="flex w-[18%] flex-col items-start justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
              <Img src="images/img_home_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
              <Heading size="xs" as="h2" className="ml-[27px] !font-kumbhsans md:ml-0">
                Government
              </Heading>
            </div>
          </div>

          {/* search section */}
          <div className="mr-9 mt-5 flex w-[90%] items-start justify-between gap-5 md:mr-0 md:w-full md:flex-col">
            <div className="flex w-[56%] flex-col items-end md:w-full">
              <div className="mr-7 flex w-[27%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Heading size="s" as="h2" className="!text-gray-800">
                    Ask Mon-Ami
                  </Heading>
                </a>
                <Heading size="s" as="h3" className="!text-gray-800">
                  Search
                </Heading>
              </div>
              <div className="mr-[27px] h-[2px] w-[49px] bg-red-900 md:mr-0" />
              <Input
                shape="round"
                name="search"
                placeholder={`Search the web for government related information`}
                className="mt-2.5 sm:px-5"
              />
            </div>
            <div className="flex w-[33%] justify-center rounded-[10px] bg-gray-200 p-[18px] md:w-full">
              <Text size="2xl" as="p" className="leading-[23px] !text-blue_gray-900">
                Whether you need help navigating immigration applications, finding employment opportunities, accessing
                healthcare services, securing housing accommodations, or understanding your legal rights, government
                services are here to help you access public services that support you through the settlement process.
              </Text>
            </div>
          </div>

          {/* content section */}
          <div className="mr-9 flex w-[89%] items-start justify-between gap-5 md:mr-0 md:w-full md:flex-col">
            <div className="flex w-[48%] flex-col gap-[42px] md:w-full">
              <div className="flex flex-1 items-start gap-3.5 md:flex-col">
                <div className="w-[12%] rounded-[10px] bg-blue_gray-100 md:w-full">
                  <Img
                    src="images/img_otrustwaterloo_ceo.png"
                    alt="image"
                    className="h-[73px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                </div>
                <Text size="md" as="p" className="w-[88%] md:w-full">
                  <>
                    The bright headquarters of ApplyBoard effuses the spirit that has long defined <br />
                    Canada’s immigration narrative.
                  </>
                </Text>
              </div>
              <div className="flex flex-1 items-start gap-3.5 md:flex-col">
                <Button
                  color="orange_300"
                  size="lg"
                  variant="fill"
                  shape="round"
                  className="min-w-[73px] !rounded-[10px] sm:px-5"
                >
                  G
                </Button>
                <Text size="md" as="p" className="w-[88%] md:w-full">
                  <>
                    The bright headquarters of ApplyBoard effuses the spirit that has long defined <br />
                    Canada’s immigration narrative.
                  </>
                </Text>
              </div>
              <div className="flex flex-1 items-start gap-3.5 md:flex-col">
                <div className="w-[12%] rounded-[10px] bg-blue_gray-100 md:w-full">
                  <Img
                    src="images/img_istockphoto_105.png"
                    alt="istockphoto105"
                    className="h-[73px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                </div>
                <Text size="md" as="p" className="w-[88%] md:w-full">
                  <>
                    The bright headquarters of ApplyBoard effuses the spirit that has long defined <br />
                    Canada’s immigration narrative.
                  </>
                </Text>
              </div>
              <div className="flex flex-1 items-start gap-3.5 md:flex-col">
                <div className="w-[12%] rounded-[10px] bg-blue_gray-100 md:w-full">
                  <Img
                    src="images/img_istockphoto_142.png"
                    alt="istockphoto142"
                    className="h-[73px] w-full rounded-[10px] object-cover md:h-auto"
                  />
                </div>
                <Text size="md" as="p" className="w-[88%] md:w-full">
                  <>
                    The bright headquarters of ApplyBoard effuses the spirit that has long defined <br />
                    Canada’s immigration narrative.
                  </>
                </Text>
              </div>
            </div>

            {/* quick links section */}
            <div className="mt-7 flex w-[34%] flex-col items-start md:w-full">
              <Text size="md" as="p" className="!font-hankengrotesk">
                Quick links
              </Text>
              <Button shape="round" color="light_green_100_2d_blue_50" className="w-full font-hankengrotesk sm:px-5">
                Immigration & Citizenship
              </Button>
              <Button
                shape="round"
                color="light_green_100_2d_blue_50"
                className="mt-[19px] w-full font-hankengrotesk sm:px-5"
              >
                Employment Services
              </Button>
              <Button
                shape="round"
                color="light_green_100_2d_blue_50"
                className="mt-[19px] w-full font-hankengrotesk sm:px-5"
              >
                Social Services
              </Button>
              <Button
                shape="round"
                color="light_green_100_2d_blue_50"
                className="mt-[19px] w-full font-hankengrotesk sm:px-5"
              >
                Healthcare Services
              </Button>
            </div>
          </div>
        </div>

        {/* footer section */}
        <div className="absolute bottom-[27%] left-[3%] m-auto h-[7px] w-[7px] rounded-[3px] bg-blue_gray-900_01" />
        <Img
          src="images/img_television_blue_gray_900_01.svg"
          alt="television_one"
          className="absolute bottom-[27%] left-[3%] m-auto h-[20px] w-[21px]"
        />
      </div>
    </>
  );
}
