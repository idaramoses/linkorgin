import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Button, Heading } from "../../components";

const data = [
  { image: "images/img_istockphoto_113.png", wherecani: "<>Where can i find <br />healthcare facilities?</>" },
  { image: "images/img_istockphoto_171.png", wherecani: "<>What are government<br />policies in healthcare?</>" },
  { image: "images/img_istockphoto_143.png", wherecani: "<>What are government<br />policies in healthcare?</>" },
  { image: "images/img_istockphoto_148.png", wherecani: "<>What are government<br />policies in healthcare?</>" },
];

export default function AIseachpagegovernmentTwoPage() {
  return (
    <>
      <Helmet>
        <title>Understanding Government Healthcare Policies - Your Questions Answered</title>
        <meta
          name="description"
          content="Find answers to your healthcare questions and understand government policies. Access essential services and information to navigate healthcare facilities in Canada."
        />
      </Helmet>

      {/* main content section */}
      <div className="relative h-[1017px] w-full bg-white-A700">
        {/* hero section */}
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col">
          {/* navigation header section */}
          <header className="relative z-[1] flex items-end justify-end bg-white-A700_e2 p-[27px] sm:p-5">
            <Img
              src="images/img_ellipse_29.png"
              alt="circleimage"
              className="mr-[52px] mt-[21px] h-[36px] w-[36px] rounded-[50%]"
            />
          </header>

          {/* information section */}
          <div className="relative mt-[-110px] h-[1012px] w-full max-w-[1503px] bg-[url(/public/images/img_group_97.png)] bg-cover bg-no-repeat p-9 md:p-5">
            {/* services overview section */}
            <div className="absolute bottom-0 right-[2%] top-0 my-auto flex h-max w-[87%] flex-col gap-[29px]">
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[59%] flex-col gap-[27px] md:w-full">
                  <div className="flex w-[74%] items-start gap-[29px] md:w-full sm:flex-col">
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
                  <div className="flex gap-[34px] md:flex-col">
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
                </div>
                <div className="flex w-[35%] flex-col items-start gap-[21px] md:w-full">
                  <div className="flex w-[44%] flex-col items-start justify-center gap-[7px] rounded-[7px] bg-red-400_01 p-6 md:w-full sm:p-5">
                    <Img src="images/img_home_white_a700.svg" alt="home_one" className="h-[23px] self-center" />
                    <Heading size="xs" as="h2" className="ml-[27px] !font-kumbhsans md:ml-0">
                      Government
                    </Heading>
                  </div>
                  <div className="self-stretch rounded-[10px] bg-gray-200 p-[18px]">
                    <Text size="2xl" as="p" className="leading-[23px] !text-blue_gray-900">
                      Whether you need help navigating immigration applications, finding employment opportunities,
                      accessing healthcare services, securing housing accommodations, or understanding your legal
                      rights, government services are here to help you access public services that support you through
                      the settlement process.
                    </Text>
                  </div>
                </div>
              </div>

              {/* search and links section */}
              <div className="flex items-start justify-between gap-5 md:flex-col">
                <div className="flex w-[59%] flex-col items-end gap-2.5 md:w-full">
                  <div className="mr-7 flex w-[27%] flex-col items-start gap-[3px] md:mr-0 md:w-full">
                    <div className="flex flex-wrap justify-between gap-5 self-stretch">
                      <Heading size="s" as="h3" className="!text-gray-800">
                        Ask Mon-Ami
                      </Heading>
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <Heading size="s" as="h4" className="!text-gray-800">
                          Search
                        </Heading>
                      </a>
                    </div>
                    <div className="h-[2px] w-[48%] bg-red-900" />
                  </div>
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

                {/* quick links section */}
                <div className="mb-[61px] flex w-[35%] flex-col items-start md:w-full">
                  <Text size="md" as="p" className="!font-hankengrotesk">
                    Quick links
                  </Text>
                  <Button
                    shape="round"
                    color="light_green_100_2d_blue_50"
                    className="w-full font-hankengrotesk sm:px-5"
                  >
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

            {/* media showcase section */}
            <div className="absolute bottom-[6%] left-[2%] m-auto h-[20px] w-[2%] md:h-auto">
              <div className="h-[7px] w-[7px] rounded-[3px] bg-blue_gray-900_01" />
              <Img
                src="images/img_television_blue_gray_900_01.svg"
                alt="television_one"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[20px] w-full"
              />
            </div>
          </div>
        </div>

        {/* faq section */}
        <div className="absolute bottom-[-111.00px] left-[0.00px] m-auto h-[1017px] w-[12%] bg-white-A700 pl-[23px] shadow-sm md:h-auto sm:pl-5">
          <div className="flex w-full items-start justify-center">
            <Text as="p" className="mt-[54px]">
              What are the government policies around housing
            </Text>
            <div className="relative ml-[-27px] h-[1017px] w-[27px] bg-gradient3" />
          </div>
          <Text as="p" className="absolute left-0 right-0 top-[16%] m-auto w-max">
            Can i buy a house in canada
          </Text>
          <Text as="p" className="absolute left-[23.00px] top-[26%] m-auto">
            How do i join parliament
          </Text>
          <Text as="p" className="absolute left-0 right-0 top-[29%] m-auto w-max">
            I need health services nearby
          </Text>
          <Text as="p" className="absolute left-0 right-0 top-[8%] m-auto w-max">
            How do i get a government lawyer
          </Text>
          <Text as="p" className="absolute left-[23.00px] top-[18%] m-auto">
            How do i get insurance
          </Text>
          <Text as="p" className="absolute left-[23.00px] top-[3%] m-auto !text-gray-600">
            Today
          </Text>
          <Text as="p" className="absolute left-[23.00px] top-[14%] m-auto !text-gray-600">
            Yesterday
          </Text>
          <Text as="p" className="absolute left-[23.00px] top-[24%] m-auto !text-gray-600">
            March
          </Text>
          <div className="absolute left-[22%] top-[5%] m-auto flex w-[74%] items-start gap-[25px]">
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Img src="images/img_close_gray_500.svg" alt="close_one" className="h-[19px]" />
            </a>
            <Img src="images/img_television_light_green_100.svg" alt="television" className="h-[13px] w-[71%]" />
          </div>
        </div>
      </div>
    </>
  );
}
