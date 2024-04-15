import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>orgin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[101px] bg-white-A700 md:gap-[75px] sm:gap-[50px]">
        <div>
          <header>
            <div className="relative h-[133px] md:h-auto">
              <Img
                src="images/img_group_5.svg"
                alt="image"
                className="absolute right-[19%] top-[16.11px] m-auto h-[4px]"
              />
              <div className="flex w-full items-end justify-between gap-5 bg-white-A700 p-[41px] md:p-5 sm:flex-col">
                <Img
                  src="images/img_settings_gray_600.svg"
                  alt="settings_one"
                  className="ml-5 mt-[18px] h-[33px] w-[8%] md:ml-0 sm:w-full"
                />
                <div className="mr-[431px] flex items-center gap-6 md:mr-0 md:flex-col">
                  <ul className="flex flex-wrap gap-[52px] md:gap-5">
                    <li>
                      <a href="#" className="self-start">
                        <Text size="lg" as="p" className="!font-inter">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="self-start">
                        <Text size="lg" as="p" className="!font-inter">
                          Our Services
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="self-end">
                        <Text size="lg" as="p" className="!font-inter">
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="self-start">
                        <Text size="lg" as="p" className="!font-inter">
                          Contact Us
                        </Text>
                      </a>
                    </li>
                  </ul>
                  <div className="h-[19px] w-px bg-gray-500_01 md:h-px md:w-[19px]" />
                  <a href="Login" target="_blank" rel="noreferrer" className="self-end">
                    <Text size="lg" as="p" className="!font-inter !text-gray-500">
                      Login
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="flex w-[84%] flex-col items-end gap-[45px] md:w-full md:p-5">
          <div className="mr-[346px] flex w-[36%] items-center justify-between gap-5 rounded-[15px] bg-blue_gray-50 p-[5px] md:mr-0 md:w-full">
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Heading
                size="md"
                as="h1"
                className="ml-[27px] text-center !font-inter !font-semibold !text-gray-900_02 md:ml-0"
              >
                Tour
              </Heading>
            </a>
            <Button
              color="blue_gray_800"
              size="lg"
              variant="fill"
              className="min-w-[214px] rounded-[10px] font-inter font-semibold sm:px-5"
            >
              Mon-Ami
            </Button>
          </div>
          <div className="relative h-[675px] self-stretch">
            <div className="absolute bottom-[-0.57px] left-[0.00px] m-auto flex w-[72%] items-center sm:relative sm:flex-col">
              <div className="flex h-[606px] flex-1 items-end justify-end rounded-[285px] bg-[url(/public/images/img_group_29.png)] bg-cover bg-no-repeat py-[92px] pl-14 pr-[92px] md:h-auto md:p-5 sm:self-stretch">
                <div className="relative mr-9 mt-[222px] h-[200px] w-[63%] rounded-[14px] bg-blue_gray-100_02 md:mr-0 md:h-auto">
                  <Img
                    src="images/img_screen_shot_2024_03_29.png"
                    alt="screenshot_one"
                    className="h-[200px] w-full rounded-[14px] object-cover"
                  />
                  <Img
                    src="images/img_user.svg"
                    alt="user_one"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[35px]"
                  />
                </div>
              </div>
              <div className="relative z-[1] mb-[92px] ml-[-83px] h-[200px] w-[31%] self-end rounded-[14px] bg-blue_gray-100_02 md:h-auto sm:ml-0 sm:w-full">
                <Img
                  src="images/img_screen_shot_2024_03_29_200x312.png"
                  alt="screenshot"
                  className="h-[200px] w-full rounded-[14px] object-cover"
                />
                <Button
                  color="red_600"
                  size="sm"
                  variant="fill"
                  shape="square"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto"
                >
                  <Img src="images/img_user.svg" />
                </Button>
              </div>
            </div>
            <div className="absolute right-[17%] top-[13%] m-auto flex w-[47%] flex-col items-center gap-[39px]">
              <Text size="6xl" as="p" className="text-center !text-gray-800">
                <span className="font-normal text-gray-800">Sign up and get access to&nbsp;</span>
                <span className="font-semibold text-gray-900_02">Mon - Ami</span>
                <span className="font-semibold text-gray-800">
                  <>
                    , <br />
                  </>
                </span>
                <span className="font-normal text-gray-800">your help and guide to easy settlement in Canada</span>
              </Text>
              <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                <Button
                  color="gray_500_02"
                  size="3xl"
                  className="min-w-[146px] rounded-[38px] font-inter font-medium sm:px-5"
                >
                  Signup
                </Button>
              </a>
            </div>
            <Heading size="3xl" as="h2" className="absolute right-[24%] top-[0.00px] m-auto !text-blue_gray-900">
              Ready to Start?
            </Heading>
            <Img
              src="images/img_star_1_38x38.svg"
              alt="image_one"
              className="absolute left-[38%] top-[15.57px] m-auto h-[38px] w-[38px]"
            />
            <Img
              src="images/img_star_2_38x38.svg"
              alt="image_two"
              className="absolute right-[18%] top-[15.57px] m-auto h-[38px] w-[38px]"
            />
            <div className="absolute bottom-[14%] right-[0.00px] m-auto h-[200px] w-[25%] rounded-[14px] bg-blue_gray-100_02 md:h-auto">
              <Img
                src="images/img_screen_shot_2024_03_29_1.png"
                alt="screenshot_five"
                className="h-[200px] w-full rounded-[14px] object-cover"
              />
              <Img
                src="images/img_user.svg"
                alt="user_five"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[35px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
