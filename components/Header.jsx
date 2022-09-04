import React from "react";
import { HiViewGrid } from "react-icons/hi";
import Image from "next/image";



export default function Header() {
  return (
    <header className="flex w-full justify-between text-sm  lg:text-lg p-2 px-10">
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link ">Images</p>
        <HiViewGrid clasName="mr-4 text-[5rem]" />
        <Image
          className="rounded-full "
          src="https://coaching.papareact.com/ai9"
          height="50"
          width="50"
          loading="lazy"
        ></Image>
      </div>
    </header>
  );
}
