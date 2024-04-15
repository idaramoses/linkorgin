import React from "react";
import { Img } from "./..";

interface Props {
  className?: string;
}

export default function HomeScreenRowcloseOne({ ...props }: Props) {
  return (
    <div {...props}>
      <Img src="images/img_close.svg" alt="close_one" className="h-[35px] w-[35px]" />
      <Img src="images/img_airplane.svg" alt="airplane_one" className="h-[29px]" />
      <Img src="images/img_close_black_900.svg" alt="close_three" className="h-[35px] w-[35px]" />
      <Img src="images/img_settings_white_a700_35x30.svg" alt="settings_three" className="h-[35px]" />
      <Img src="images/img_link.svg" alt="link_one" className="h-[35px] w-[35px]" />
    </div>
  );
}
