import React from "react";
import { HiViewGrid } from "react-icons/hi";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex w-full justify-between text-sm  lg:text-lg p-2 lg:px-10">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="link">Gmail</p>
        <p className="link ">Images</p>
        <HiViewGrid className="text-[1.1rem] lg:text-[1.5rem]  flex-shrink-0" />
        <Image
          className=" rounded-full scale-75 lg:scale:100 "
          src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg"
          height="50"
          width="50"
          loading="lazy"
        ></Image>
      </div>
    </header>
  );
}
