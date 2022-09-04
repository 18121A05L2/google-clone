import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { RiVideoFill } from "react-icons/ri";
import { SiGooglemaps } from "react-icons/si";
import { FaNewspaper, FaImages } from "react-icons/fa";
import HeaderOption from "./HeaderOption";
import { BsThreeDotsVertical } from "react-icons/bs";

function HeaderOptions() {
  return (
    <div className="flex lg:gap-12 gap-2 lg:px-4">
      <div className="flex gap-2">
        <HeaderOption Icon={BiSearchAlt2} title="All" selected></HeaderOption>
        <HeaderOption Icon={FaImages} title="Images"></HeaderOption>
        <HeaderOption Icon={RiVideoFill} title="Videos"></HeaderOption>
        <HeaderOption Icon={FaNewspaper} title="News"></HeaderOption>
        <HeaderOption Icon={SiGooglemaps} title="Maps"></HeaderOption>
        <HeaderOption Icon={BsThreeDotsVertical} title="More"></HeaderOption>
      </div>
      <div className="flex gap-2 items-center">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
