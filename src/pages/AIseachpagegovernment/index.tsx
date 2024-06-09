import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img } from "../../components";

const data = [
  { image: "images/img_istockphoto_113.png", wherecani: "<>Where can i find <br />healthcare facilities?</>" },
  { image: "images/img_istockphoto_171.png", wherecani: "<>What are government<br />policies in healthcare?</>" },
  { image: "images/img_istockphoto_143.png", wherecani: "<>What are government<br />policies in healthcare?</>" },
  { image: "images/img_istockphoto_148.png", wherecani: "<>What are government<br />policies in healthcare?</>" },
];

export default function AIseachpagegovernmentPage() {
  return (
    <>
      <Helmet>
        <title>Government Services - Assistance with Immigration and More</title>
        <meta
          name="description"
          content="Get help with immigration, employment, healthcare, and legal matters. Access government services and quick links to facilitate your settlement process."
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-white-A700">
        {/* header section */}
        <div className="flex flex-col">
          {/* navigation bar section */}
          <header className="relative z-[1] flex items-end justify-center bg-white-A700_e2 p-[27px] sm:p-5">
            <div className="mx-auto mt-[21px] flex w-full max-w-[1394px] items-start justify-between gap-5">
              <div className="flex w-[14%] items-center justify-between gap-5">
                <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                  <Img src="images/img_megaphone.svg" alt="megaphone_one" className="h-[12px]" />
                </a>
                <Img src="images/img_header_logo.svg" alt="headerlogo_one" className="h-[26px] w-[65%]" />
              </div>
              <Img src="images/img_ellipse_29.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
            </div>
          </header>

          {/* information section */}
          <div className="relative mx-auto mt-[-106px] flex h-[1012px] w-full max-w-[1499px] items-start justify-between gap-5 bg-[url(/public/images/img_group_97.png)] bg-cover bg-no-repeat p-8 md:h-auto md:flex-col md:p-5">
            {/* introductory section */}
            <div className="mb-7 mt-[120px] flex w-[60%] flex-col items-start gap-[81px] md:w-full md:gap-[60px] sm:gap-10">
              {/* questions list section */}
              <div className="flex w-[84%] flex-col self-end md:w-full">
                <div className="ml-2 flex w-[74%] items-start gap-[29px] md:ml-0 md:w-full sm:flex-col">
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

                {/* healthcare questions section */}
                <div className="mt-[26px] flex gap-[34px] md:flex-col">
                  {data.map((d, index) => (
                    <div key={"listwherecani" + index} className="flex w-full flex-col items-center">
                      <div className="self-stretch rounded-[12px] bg-blue_gray-100">
                        <Img
                          src={d.image}
                          alt="image"
                          className="h-[197px] w-full rounded-[12px] object-cover md:h-auto"
                        />
                      </div>
                      <div className="relative mt-[-19px] flex w-[88%] justify-center rounded-sm bg-white-A700 md:w-full">
                        <Text as="p" className="w-[89%] self-start">
                          {d.wherecani}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>

                {/* search section */}
                <div className="mt-[274px] flex flex-col items-end gap-[3px]">
                  <div className="mr-7 flex w-[27%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                    <Heading size="s" as="h2" className="!text-gray-800">
                      Ask Mon-Ami
                    </Heading>
                    <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                      <Heading size="s" as="h3" className="!text-gray-800">
                        Search
                      </Heading>
                    </a>
                  </div>
                  <div className="flex flex-col items-end gap-2.5 self-stretch">
                    <div className="mr-[126px] h-[2px] w-[15%] bg-red-900 md:mr-0" />
                    <div className="self-stretch rounded-md border border-solid border-blue_gray-100_01 bg-white-A700 p-[9px]">
                      <div className="flex flex-col gap-[27px]">
                        <div className="flex items-start justify-between gap-5">
                          <Text size="xl" as="p" className="mt-[7px]">
                            Ask me anything
                          </Text>
                          <Img src="images/img_menu.svg" alt="menu_one" className="h-[20px]" />
                        </div>
                        <div className="flex items-center justify-between gap-5">
                          <Img src="images/img_clock.svg" alt="clock_one" className="h-[19px] self-start" />
                          <Img
                            src="images/img_settings_gray_500_01.svg"
                            alt="settings_one"
                            className="h-[17px] w-[17px] self-end"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* media representation section */}
              <div className="relative h-[20px] w-[2%] md:h-auto">
                <div className="h-[7px] w-[7px] rounded-[3px] bg-blue_gray-900_01" />
                <Img
                  src="images/img_television_blue_gray_900_01.svg"
                  alt="television_one"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[20px] w-full"
                />
              </div>
            </div>

            {/* government services section */}
            <div className="mt-[120px] flex w-[30%] flex-col gap-[29px] md:w-full">
              <div className="flex flex-col items-start gap-[21px]">
                <div className="flex w-[44%] flex-col items-start justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                  <Img src="images/img_home_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
                  <Heading size="xs" as="h4" className="ml-[27px] !font-kumbhsans md:ml-0">
                    Government
                  </Heading>
                </div>
                <div className="self-stretch rounded-[10px] bg-gray-200 p-[18px]">
                  <Text size="2xl" as="p" className="leading-[23px] !text-blue_gray-900">
                    Whether you need help navigating immigration applications, finding employment opportunities,
                    accessing healthcare services, securing housing accommodations, or understanding your legal rights,
                    government services are here to help you access public services that support you through the
                    settlement process.
                  </Text>
                </div>
              </div>

              {/* quick links section */}
              <div className="flex flex-col items-start">
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
        </div>
      </div>
    </>
  );
}
