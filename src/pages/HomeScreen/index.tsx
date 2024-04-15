import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Text, Heading, Button } from "../../components";
import HomeScreenRowcloseOne from "../../components/HomeScreenRowcloseOne";

export default function HomeScreenPage() {
  return (
    <>
      <Helmet>
        <title>orgin</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center self-stretch">
            <div className="h-[829px] self-stretch rounded-bl-[80px] rounded-br-[80px] bg-[url(/public/images/img_mask_group.png)] bg-cover bg-no-repeat md:h-auto">
              <div className="rounded-bl-[80px] rounded-br-[80px] bg-gray-900_99">
                <div className="rounded-bl-[80px] rounded-br-[80px] bg-black-900_2d">
                  <div className="h-[829px] rounded-bl-[80px] rounded-br-[80px] bg-[url(/public/images/img_mask_group_829x1512.png)] bg-cover bg-no-repeat pb-[141px] md:h-auto md:pb-5">
                    <div className="flex flex-col items-center">
                      <header className="flex items-center justify-center self-stretch rounded-bl-[73px] rounded-br-[73px] bg-blue_gray-200_b2 p-[31px] sm:p-5">
                        <div className="mx-auto mt-[21px] flex w-full max-w-[1367px] justify-center">
                          <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                            <Img src="images/img_group_75.svg" alt="image" className="h-[45px] w-[8%] md:w-full" />
                            <div className="flex w-[66%] items-center justify-between gap-5 md:w-full md:flex-col">
                              <div className="flex sm:flex-col">
                                <a href="#" className="self-start">
                                  <Text size="lg" as="p" className="!font-inter">
                                    About Us
                                  </Text>
                                </a>
                                <a href="#" className="ml-[52px] self-start sm:ml-0">
                                  <Text size="lg" as="p" className="!font-inter">
                                    Our Services
                                  </Text>
                                </a>
                                <a href="Blog" target="_blank" rel="noreferrer" className="ml-[52px] self-end sm:ml-0">
                                  <Text size="lg" as="p" className="!font-inter">
                                    Blog
                                  </Text>
                                </a>
                                <a href="#" className="ml-[52px] self-start sm:ml-0">
                                  <Text size="lg" as="p" className="!font-inter">
                                    Contact Us
                                  </Text>
                                </a>
                                <div className="ml-6 h-[19px] w-px bg-gray-400 sm:ml-0 sm:h-px sm:w-[19px]" />
                                <a href="Login" target="_blank" rel="noreferrer" className="ml-5 self-end sm:ml-0">
                                  <Text size="lg" as="p" className="!font-inter !text-white-A700">
                                    Login
                                  </Text>
                                </a>
                              </div>
                              <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
                                <Img src="images/img_mobile.svg" alt="mobile_one" className="h-[19px] w-[19px]" />
                                <Img
                                  src="images/img_globe.svg"
                                  alt="globe_one"
                                  className="mb-[17px] h-[21px] w-[20px] self-end"
                                />
                                <div className="relative h-[63px] w-[42%] md:h-auto">
                                  <Img src="images/img_call.svg" alt="call_one" className="h-[20px] w-[19px]" />
                                  <Button
                                    size="2xl"
                                    shape="square"
                                    className="absolute bottom-0 left-0 right-0 top-0 m-auto"
                                  >
                                    <Img src="images/defaultNoData.png" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </header>
                      <div className="mt-[88px] flex w-[22%] items-center justify-between gap-5 rounded-[15px] bg-gray-100_89 p-[5px] md:w-full">
                        <Button
                          color="blue_gray_800"
                          size="lg"
                          variant="fill"
                          className="min-w-[107px] rounded-[10px] font-inter font-semibold sm:px-5"
                        >
                          Tour
                        </Button>
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                          <Heading
                            size="md"
                            as="h1"
                            className="mr-[62px] text-center !font-inter !font-semibold !text-white-A700 md:mr-0"
                          >
                            Mon-Ami
                          </Heading>
                        </a>
                      </div>
                      <Heading size="6xl" as="h2" className="mt-[66px] text-center !text-white-A700">
                        New in Canada?
                      </Heading>
                      <Text size="7xl" as="p" className="text-center !text-white-A700">
                        Let’s help you figure things out
                      </Text>
                      <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                        <Button
                          color="white_A700"
                          size="3xl"
                          className="mt-[63px] min-w-[145px] rounded-[38px] font-inter font-semibold sm:px-5"
                        >
                          Signup
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              src="images/img_polygon_1.svg"
              alt="polygonone_one"
              className="relative z-[1] mt-[-84px] h-[148px] w-[148px] rounded-[32px]"
            />
          </div>
          <div className="relative mt-28 h-[142px] w-[36%] md:h-auto">
            <div className="ml-[45px] mt-11 h-[21px] w-[38%] rounded-[10px] bg-orange-200 md:ml-0" />
            <Heading
              size="2xl"
              as="h2"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full text-center !text-black-900"
            >
              <>
                Finding all you need in <br />
                one place!
              </>
            </Heading>
          </div>
          <div className="relative mx-auto mt-[69px] h-[604px] w-full max-w-[1393px] md:p-5">
            <Img
              src="images/img_rectangle_34.svg"
              alt="image_one"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[604px] w-[76%] rounded-[285px]"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full items-start justify-between gap-5 pb-4 pr-4 md:relative md:flex-col">
              <div className="relative mb-7 h-[415px] w-[23%] md:w-full">
                <Img
                  src="images/img_istockphoto_147.png"
                  alt="istockphoto147"
                  className="absolute bottom-[0.00px] right-[0.00px] m-auto h-[374px] w-[94%] rounded-[27px] object-cover"
                />
                <div className="absolute left-[0.00px] top-[0.00px] m-auto flex h-[79px] w-[61%] items-start justify-center bg-[url(/public/images/img_group_36.svg)] bg-cover bg-no-repeat p-[15px] md:h-auto">
                  <Text size="s" as="p" className="mb-[9px] w-[90%] !text-white-A700">
                    <>
                      Need help with finding <br />
                      restaurants?
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex w-[22%] flex-col items-end md:w-full">
                <Img
                  src="images/img_ad2c4726_c034_4.png"
                  alt="ad2c4726c034fou"
                  className="h-[374px] w-full rounded-[27px] object-cover md:h-auto"
                />
                <div className="relative mr-[29px] mt-[-32px] flex h-[81px] items-end bg-[url(/public/images/img_group_37.svg)] bg-cover bg-no-repeat p-[13px] md:mr-0 md:h-auto">
                  <Text size="s" as="p" className="mb-2.5 mt-[25px]">
                    Find grocery stores nearby
                  </Text>
                </div>
              </div>
              <div className="mb-[69px] flex w-[22%] flex-col items-center md:w-full">
                <div className="relative z-[2] flex h-[79px] w-[65%] items-start justify-center bg-[url(/public/images/img_group_36.svg)] bg-cover bg-no-repeat p-4 md:h-auto md:w-full">
                  <Text size="s" as="p" className="mb-[7px] w-[88%] !text-white-A700">
                    <>
                      Discover the night life <br />
                      around your vicinity
                    </>
                  </Text>
                </div>
                <Img
                  src="images/img_istockphoto_127.png"
                  alt="istockphoto127"
                  className="relative mt-[-19px] h-[374px] w-full rounded-[27px] object-cover md:h-auto"
                />
              </div>
              <div className="mt-10 flex w-[22%] flex-col items-center md:w-full">
                <Img
                  src="images/img_cbebb5b3_6d27_4.png"
                  alt="cbebb5b36d27fou"
                  className="h-[374px] w-full rounded-[27px] object-cover md:h-auto"
                />
                <div className="relative mt-[-34px] flex h-[68px] w-[55%] items-end justify-center bg-[url(/public/images/img_group_37.svg)] bg-cover bg-no-repeat p-[9px] md:h-auto md:w-full">
                  <Text size="s" as="p" className="mt-[9px] w-[98%]">
                    <>
                      Recreational activities
                      <br />
                      tailored for you
                    </>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Button color="blue_gray_400" size="4xl" className="mt-14 min-w-[377px] rounded-[45px] font-medium sm:px-5">
            Say hello to Mon -Ami
          </Button>
          <Text size="6xl" as="p" className="mt-[81px] w-[40%] text-center !font-inter md:w-full md:p-5">
            <span className="font-poppins font-normal text-gray_800_06">Sign up and get access to</span>
            <span className="font-poppins font-semibold text-gray_800_06">&nbsp;</span>
            <span className="font-poppins font-semibold text-gray-900_02">Mon - Ami</span>
            <span className="font-poppins font-semibold text-gray_800_06">
              <>
                , <br />
              </>
            </span>
            <span className="font-poppins font-normal text-gray_800_06">
              your help and guide to easy settlement in Canada
            </span>
          </Text>
          <div className="mx-auto mt-[99px] h-px w-full max-w-[1388px] bg-black-900 md:p-5" />
          <div className="ml-[62px] mt-3 flex w-[14%] items-center gap-[23px] self-start md:ml-0 md:w-full md:p-5">
            <Img src="images/img_star_1.svg" alt="image_two" className="h-[38px] w-[38px]" />
            <Text size="6xl" as="p" className="self-end">
              What we do
            </Text>
          </div>
          <Heading size="5xl" as="h2" className="ml-[173px] mt-[81px] self-start !text-blue_gray-900 md:ml-0">
            Sign up to access our services
          </Heading>
          <Text
            size="5xl"
            as="p"
            className="ml-[173px] w-[67%] self-start leading-[41px] !text-gray-800_01 md:ml-0 md:w-full md:p-5"
          >
            <>
              we are dedicated to helping individuals and families achieve their settlement <br />
              goals in Canada.
            </>
          </Text>
          <div className="relative mx-auto mt-[35px] h-[804px] w-full max-w-[1124px] md:p-5">
            <Button
              color="blue_gray_400"
              shape="round"
              className="absolute left-[0.00px] top-[0.00px] m-auto min-w-[190px] font-inter font-semibold sm:px-5"
            >
              Signup
            </Button>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[777px] w-[97%] rounded-[285px] bg-[url(/public/images/img_group_92.svg)] bg-cover bg-no-repeat p-4 md:h-auto">
              <div className="flex w-[66%] flex-col items-start gap-7">
                <div className="flex flex-col gap-7 self-stretch">
                  <div className="flex flex-1 justify-between gap-5 md:flex-col">
                    <div className="flex w-[46%] flex-col items-center gap-[11px] rounded-[15px] bg-red-400_01 p-9 md:w-full sm:p-5">
                      <Img src="images/img_home.svg" alt="government_one" className="h-[40px]" />
                      <Heading size="xl" as="h2" className="mb-[11px] !font-inter !text-white-A700">
                        Government
                      </Heading>
                    </div>
                    <div className="flex w-[46%] flex-col items-center gap-[15px] rounded-[15px] bg-red-400 p-[38px] md:w-full sm:p-5">
                      <Img src="images/img_settings.svg" alt="community_one" className="h-[36px] w-[35px]" />
                      <Heading size="xl" as="h3" className="mb-[7px] !font-inter !text-white-A700">
                        Community
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-between gap-5 md:flex-col">
                    <div className="flex w-[46%] flex-col items-center gap-[18px] rounded-[15px] bg-red-400 p-[38px] md:w-full sm:p-5">
                      <Img src="images/img_group_55.svg" alt="image" className="h-[30px] w-[30px]" />
                      <Heading size="xl" as="h4" className="mb-2.5 !font-inter !text-white-A700">
                        Healthcare
                      </Heading>
                    </div>
                    <div className="flex w-[46%] flex-col items-center justify-center gap-3.5 rounded-[15px] bg-red-400 p-7 md:w-full sm:p-5">
                      <Img src="images/img_group_52.svg" alt="image_one" className="mt-[3px] h-[32px] w-[32px]" />
                      <Heading size="xl" as="h5" className="w-[88%] text-center !font-inter !text-white-A700 md:w-full">
                        <>
                          Legal & Immigration <br />
                          service
                        </>
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex w-[46%] flex-col items-center gap-[11px] rounded-[15px] bg-red-400 p-[39px] md:w-full sm:p-5">
                  <Img src="images/img_settings_white_a700.svg" alt="settings_one" className="h-[35px] w-[35px]" />
                  <Heading size="xl" as="h6" className="mb-2.5 !font-inter !text-white-A700">
                    Finance
                  </Heading>
                </div>
              </div>
              <div className="absolute bottom-[14%] left-0 right-0 m-auto flex w-[31%] flex-col items-center gap-[11px] rounded-[15px] bg-red-400 p-[38px] sm:p-5">
                <Img src="images/img_group_59.svg" alt="image_three" className="h-[36px] w-[21%]" />
                <Heading size="xl" as="h4" className="mb-[11px] text-center !font-inter !text-white-A700">
                  Social
                </Heading>
              </div>
            </div>
            <div className="absolute bottom-0 right-[0.00px] top-0 my-auto flex h-max w-[29%] flex-col gap-7">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col items-center gap-[13px] rounded-[15px] bg-red-400 p-[38px] sm:p-5">
                  <Img src="images/img_thumbs_up.svg" alt="thumbsup_one" className="h-[35px]" />
                  <Heading size="xl" as="h4" className="mb-2.5 !font-inter !text-white-A700">
                    Educational
                  </Heading>
                </div>
                <div className="flex flex-col items-center justify-center gap-1.5 rounded-[15px] bg-red-400 p-[30px] sm:p-5">
                  <Img src="images/img_thumbs_up_white_a700.svg" alt="thumbsup_three" className="h-[38px] w-[38px]" />
                  <Heading size="xl" as="h4" className="text-center !font-inter !text-white-A700">
                    <>
                      Cultural & <br />
                      Recreational Activities
                    </>
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-[11px] rounded-[15px] bg-red-400 p-[47px] md:p-5">
                <Img src="images/img_group_57.svg" alt="image_four" className="h-[28px] w-[28px]" />
                <Heading size="xl" as="h4" className="text-center !font-inter !text-white-A700">
                  Investment
                </Heading>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-[78px] h-px w-full max-w-[1388px] bg-black-900 md:p-5" />
          <div className="ml-[59px] mt-[15px] flex w-[7%] items-center gap-2 self-start md:ml-0 md:w-full md:p-5">
            <Img src="images/img_star_2.svg" alt="image_five" className="h-[38px] w-[38px]" />
            <Text size="6xl" as="p" className="self-end">
              Blog
            </Text>
          </div>
          <Heading size="4xl" as="h2" className="ml-[169px] mt-36 self-start !text-blue_gray-900 md:ml-0">
            News and immigration tips
          </Heading>
          <Text size="6xl" as="p" className="ml-[173px] mt-[23px] self-start !text-gray-800_09 md:ml-0">
            Latest on immigration
          </Text>
          <div className="mx-auto mt-[35px] flex w-full max-w-[1270px] gap-[54px] md:flex-col md:p-5">
            <div className="flex w-full flex-col gap-2.5">
              <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                <Img
                  src="images/img_rectangle_62.png"
                  alt="image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-[25px] md:h-auto sm:p-5">
                  <Heading size="lg" as="h2" className="mb-[79px] mt-3.5 w-[86%] !font-inter !text-black-900 md:w-full">
                    <>
                      News <br />
                      Release
                    </>
                  </Heading>
                </div>
              </div>
              <Text size="xs" as="p" className="w-[96%] md:w-full">
                Post-Graduation Work Permit Challenges: What to Do If You Choose a DLI That Is Not PGWP Eligible
              </Text>
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                <Img
                  src="images/img_rectangle_62_320x277.png"
                  alt="image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                  <Heading size="lg" as="h3" className="mb-[75px] mt-5 w-[84%] !font-inter !text-black-900 md:w-full">
                    <>
                      News <br />
                      Release
                    </>
                  </Heading>
                </div>
              </div>
              <Text size="xs" as="p" className="w-[96%] md:w-full">
                <>
                  Nova Scotia Immigration Announces Permanent
                  <br />
                  Relaunch and Updates to Entrepreneur Streams
                </>
              </Text>
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                <Img
                  src="images/img_rectangle_62_1.png"
                  alt="image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-[25px] md:h-auto sm:p-5">
                  <Heading
                    size="lg"
                    as="h4"
                    className="mb-[74px] mt-[19px] w-[86%] !font-inter !text-black-900 md:w-full"
                  >
                    <>
                      News <br />
                      Release
                    </>
                  </Heading>
                </div>
              </div>
              <Text size="xs" as="p" className="w-[96%] md:w-full">
                Obtaining Job Approval Letter for International Skilled Worker - SINP
              </Text>
            </div>
            <div className="flex w-full flex-col gap-2.5">
              <div className="relative h-[320px] rounded-[10px] bg-blue_gray-100_02">
                <Img
                  src="images/img_rectangle_62_2.png"
                  alt="image"
                  className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[320px] w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-[10%] left-[28.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[14.00px] top-[25.00px] m-auto h-[68px] w-[68px] rounded-[34px] bg-blue_gray-200" />
                <div className="absolute right-[0.50px] top-[0.00px] m-auto flex h-[197px] w-[53%] flex-col items-end bg-[url(/public/images/img_group_116.svg)] bg-cover bg-no-repeat p-6 md:h-auto sm:p-5">
                  <Heading size="lg" as="h5" className="mb-[75px] mt-5 w-[84%] !font-inter !text-black-900 md:w-full">
                    <>
                      News <br />
                      Release
                    </>
                  </Heading>
                </div>
              </div>
              <Text size="xs" as="p" className="w-[96%] md:w-full">
                Government of Canada launches new campaign to help Canadians upgrade skills and secure rewarding careers
              </Text>
            </div>
          </div>
          <Text size="6xl" as="p" className="ml-[173px] mt-28 self-start !text-gray-800_03 md:ml-0">
            Social Channels
          </Text>
          <div className="mx-auto mt-[25px] flex w-full max-w-[1270px] gap-[54px] md:flex-col md:p-5">
            <div className="flex w-full flex-col items-start gap-[18px]">
              <Img
                src="images/img_rectangle_21.png"
                alt="instagram_post"
                className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
              />
              <Text size="2xl" as="p">
                instagram post
              </Text>
            </div>
            <div className="flex w-full flex-col items-start gap-[18px]">
              <Img
                src="images/img_rectangle_22.png"
                alt="image"
                className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
              />
              <Text size="2xl" as="p">
                instagram post
              </Text>
            </div>
            <div className="flex w-full flex-col items-start gap-[18px]">
              <Img
                src="images/img_rectangle_23.png"
                alt="image"
                className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
              />
              <Text size="2xl" as="p">
                instagram post
              </Text>
            </div>
            <div className="flex w-full flex-col items-start gap-[18px]">
              <Img
                src="images/img_rectangle_24.png"
                alt="image"
                className="h-[279px] w-full rounded-[10px] object-cover md:h-auto"
              />
              <Text size="2xl" as="p">
                instagram post
              </Text>
            </div>
          </div>
          <div className="mt-32 flex flex-col items-start gap-[63px] self-stretch overflow-auto bg-blue_gray-50_01 py-[63px] pl-[63px] md:py-5 md:pl-5 sm:gap-[31px]">
            <Heading size="4xl" as="h2" className="ml-[145px] mt-[21px] !text-blue_gray-900 md:ml-0">
              What Our Partners Say
            </Heading>
            <div className="mb-24 flex w-full gap-[30px] md:flex-col">
              <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                  <Img src="images/img_ellipse_4.png" alt="segun_ayo_one" className="h-[40px] w-[40px] rounded-[50%]" />
                  <Heading size="xs" as="h3" className="mb-1.5 self-end !text-black-900">
                    Segun Ayo
                  </Heading>
                </div>
                <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                  <>
                    I love how seamless the website is <br />
                    and how informative the AI system
                    <br />
                    is. This helped me get more insight <br />
                    about canada.
                  </>
                </Text>
                <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                  24/02/2024
                </Text>
              </div>
              <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                  <Img
                    src="images/img_ellipse_4_40x40.png"
                    alt="circleimage"
                    className="h-[40px] w-[40px] rounded-[50%]"
                  />
                  <Heading size="xs" as="h4" className="mb-1.5 self-end !text-black-900">
                    Segun Ayo
                  </Heading>
                </div>
                <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                  <>
                    I love how seamless the website is <br />
                    and how informative the AI system
                    <br />
                    is. This helped me get more insight <br />
                    about canada.
                  </>
                </Text>
                <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                  24/02/2024
                </Text>
              </div>
              <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                  <Img src="images/img_ellipse_4_1.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                  <Heading size="xs" as="h5" className="mb-1.5 self-end !text-black-900">
                    Segun Ayo
                  </Heading>
                </div>
                <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                  <>
                    I love how seamless the website is <br />
                    and how informative the AI system
                    <br />
                    is. This helped me get more insight <br />
                    about canada.
                  </>
                </Text>
                <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                  24/02/2024
                </Text>
              </div>
              <div className="flex w-full flex-col items-start justify-center rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                <div className="mt-1.5 flex w-[57%] items-center gap-3 md:w-full">
                  <Img src="images/img_ellipse_4_2.png" alt="circleimage" className="h-[40px] w-[40px] rounded-[50%]" />
                  <Heading size="xs" as="h6" className="mb-1.5 self-end !text-black-900">
                    Segun Ayo
                  </Heading>
                </div>
                <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                  <>
                    I love how seamless the website is <br />
                    and how informative the AI system
                    <br />
                    is. This helped me get more insight <br />
                    about canada.
                  </>
                </Text>
                <Text size="md" as="p" className="mb-1.5 mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                  24/02/2024
                </Text>
              </div>
              <div className="flex w-full rounded-[10px] bg-white-A700 p-[25px] md:p-5">
                <div className="my-1.5 flex w-full flex-col items-start">
                  <div className="flex w-[57%] items-center gap-3 md:w-full">
                    <Img
                      src="images/img_ellipse_4_3.png"
                      alt="circleimage"
                      className="h-[40px] w-[40px] rounded-[50%]"
                    />
                    <Heading size="xs" as="p" className="mb-1.5 self-end !text-black-900">
                      Segun Ayo
                    </Heading>
                  </div>
                  <Text size="s" as="p" className="mt-3.5 !text-gray-700">
                    <>
                      I love how seamless the website is <br />
                      and how informative the AI system
                      <br />
                      is. This helped me get more insight <br />
                      about canada.
                    </>
                  </Text>
                  <Text size="md" as="p" className="mr-[3px] mt-9 self-end !text-gray-900 md:mr-0">
                    24/02/2024
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[157px] flex flex-col items-center">
            <Heading size="3xl" as="h2" className="!text-blue_gray-900">
              Ready to Start?
            </Heading>
            <Text size="6xl" as="p" className="mt-[9px] !font-normal !text-gray-700_01">
              Powered by AI, Our goal is to create the best settlement experience for you
            </Text>
            <Button color="gray_600_04" shape="round" className="mt-20 min-w-[190px] font-inter font-semibold sm:px-5">
              Get Started
            </Button>
          </div>
          <div className="mx-auto mt-[79px] flex w-full max-w-[1039px] flex-col items-start md:p-5">
            <Img
              src="images/img_group_76.svg"
              alt="image_six"
              className="relative z-[3] ml-[79px] h-[299px] w-[78%] md:ml-0"
            />
            <div className="relative mt-[-169px] flex justify-center self-stretch rounded-[285px] bg-red-400 px-14 py-[209px] md:p-5">
              <div className="mb-64 flex w-[41%] flex-col items-start gap-[23px] md:w-full">
                <div className="ml-[66px] flex items-start gap-[18px] md:ml-0">
                  <div className="flex items-start gap-[9px] rounded-[15px] border border-solid border-white-A700">
                    <Img
                      src="images/img_mobile_blue_gray_900_01.svg"
                      alt="mobile_three"
                      className="mt-[5px] h-[15px] w-[15px]"
                    />
                    <Button
                      color="white_A700"
                      size="xs"
                      variant="fill"
                      shape="circle"
                      className="w-[26px] !rounded-[13px]"
                    >
                      <Img src="images/img_brightness.svg" />
                    </Button>
                  </div>
                  <Text size="4xl" as="p" className="mt-0.5 !text-white-A700">
                    Light Mode
                  </Text>
                </div>
                <a href="#" className="ml-3.5 md:ml-0">
                  <Heading size="3xl" as="h2" className="!text-white-A700">
                    Contact Us
                  </Heading>
                </a>
                <div className="self-stretch">
                  <Text size="xl" as="p" className="!text-white-A700">
                    <>
                      Subscribe to our newsletter for immigration <br />
                      insights and travel news!
                    </>
                  </Text>
                  <Input
                    color="gray_200"
                    size="xs"
                    variant="outline"
                    shape="square"
                    type="email"
                    name="email"
                    placeholder={`Email`}
                    suffix={
                      <div className="flex h-[2px] w-[18px] items-center justify-center">
                        <Img src="images/img_vector_5.svg" alt="Vector 5" className="h-[2px] w-[18px]" />
                      </div>
                    }
                    className="mt-[18px] gap-[35px] sm:pr-5"
                  />
                  <HomeScreenRowcloseOne className="mt-[60px] flex items-center justify-between gap-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
