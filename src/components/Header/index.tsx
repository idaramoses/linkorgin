import React from "react";
import { Text, Img } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="relative h-[133px] w-full md:h-auto">
        <Img src="images/img_group_5.svg" alt="image" className="absolute right-[19%] top-[15.93px] m-auto h-[4px]" />
        <div className="flex w-full items-end justify-between gap-5 bg-white-A700 p-[41px] md:p-5 sm:flex-col">
          <Img
            src="images/img_settings_gray_600.svg"
            alt="settings_one"
            className="ml-[19px] mt-[18px] h-[33px] w-[8%] md:ml-0 sm:w-full"
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
                <a href="Blog" target="_blank" rel="noreferrer" className="self-end">
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
            <a href="#">
              <div className="flex gap-5">
                <div className="h-full w-px bg-gray-500_01" />
                <Text size="lg" as="p" className="!font-inter !text-gray-500">
                  Login
                </Text>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
