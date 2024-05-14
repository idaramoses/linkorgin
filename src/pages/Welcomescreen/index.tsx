import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Img, Heading } from "../../components";

export default function WelcomescreenPage() {
  return (
    <>
      <Helmet>
        <title>Welcome to Your Personalized Mon-Ami Dashard</title>
        <meta
          name="description"
          content="Discover personalized recommendations and expert guidance tailored to your settlement needs with Mon-Ami. Explore interactive features and dynamic categories for a seamless experience."
        />
      </Helmet>

      {/* main content section */}
      <div className="h-[1012px] w-full bg-white-A700 bg-[url(/public/images/img_welcome_screen.svg)] bg-cover bg-no-repeat pb-[153px] md:h-auto md:pb-5">
        <div className="flex flex-col items-center">
          {/* header section */}
          <header className="flex items-end justify-center self-stretch bg-white-A700 p-[27px] sm:p-5">
            <div className="mx-auto mt-[18px] flex w-full max-w-[1378px] items-start justify-between gap-5">
              <Img src="images/img_header_logo.svg" alt="headerlogo_one" className="h-[26px] w-[9%]" />
              <Img src="images/img_ellipse_29.png" alt="circleimage" className="h-[36px] w-[36px] rounded-[50%]" />
            </div>
          </header>

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
                  <Img src="images/img_television.svg" />
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
                  <Img src="images/img_grid.svg" />
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
                <Img src="images/img_close.svg" alt="close_one" className="h-[39px] w-[39px]" />
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
                <Img src="images/img_close_orange_200.svg" alt="close_one" className="h-[39px] w-[39px]" />
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
                  <Img src="images/img_user.svg" />
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

          {/* closing statement section */}
          <Text size="4xl" as="p" className="mt-[62px] !font-kumbhsans !font-normal">
            So, let&#39;s make settling into your new home easier than usual.
          </Text>
          <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
            {/* resource directory button section */}
            <Button
              color="black_900"
              size="md"
              variant="fill"
              className="mt-[59px] min-w-[364px] rounded-[34px] font-kumbhsans sm:px-5 text-sm"
            >
              Explore Resource Directory
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
