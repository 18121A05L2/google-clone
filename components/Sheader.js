import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MdOutlineClear } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";
import HeaderOptions from "./HeaderOptions";

export default function Sheader() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState();
  function handleButton(e) {
    e.preventDefault();

    if (!searchInput) return;

    router.push(`/search?input=${searchInput}`);
  }
  return (
    <div className="flex flex-col" >
      <div className="flex  items-center  p-4 w-full" >
        <div
          onClick={() => router.push("/")}
          className="relative bg-white h-[2rem] md:h-[4rem] w-[5rem] md:w-[10rem] cursor-pointer flex-shrink-0"
        >
          <Image
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            layout="fill"
          ></Image>
        </div>
        <form className=" mx-6 flex items-center justify-between border  max-w-xl flex-grow border-gray-300 focus:shadow-lg hover:shadow-lg rounded-full ">
          <input
            className="outline-none  w-2/3 p-2 px-3 "
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="text"
            placeholder="...Search"
          ></input>
          <div className="flex gap-1 items-center px-3">
            <MdOutlineClear
              onClick={() => setSearchInput(null)}
              className="text-gray-600 text-[1.7rem] px-1 border-r-2"
            />
            <FaMicrophone className="text-blue-500 hidden md:inline-flex" />
            <BiSearchAlt2 className="text-blue-500 hidden md:inline-flex" />
          </div>

          <button hidden onClick={handleButton}>
            Search
          </button>
        </form>
        <Image
          className="rounded-full"
          src="https://coaching.papareact.com/ai9"
          height="50"
          width="50"
          loading="lazy"
        ></Image>
      </div>

      <HeaderOptions />
    </div>
  );
}
