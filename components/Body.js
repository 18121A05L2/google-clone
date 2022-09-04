import Image from "next/image";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiMicrophone } from "react-icons/hi";
import { useRouter } from "next/router";

export default function Body() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState();
  function handleButton(e) {
    e.preventDefault();

    if (!searchInput) return;

    router.push(`/search?input=${searchInput}`);
    setSearchInput("")
  }
  return (
    <div className="flex justify-center w-6/7 text-[1rem]">
      <form className="flex flex-col items-center">
        <div className="relative w-[12rem] h-[5rem] lg:w-[25rem] lg:h-[8rem]">
          {" "}
          <Image
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            layout="fill"
          ></Image>
        </div>

        <div className="flex justify-between items-center py-2 px-4 m-2  focus-within:shadow-lg border text-[1.1rem] lg:text-[1.3rem] rounded-full ">
          <BiSearchAlt2 />
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="outline-none w-3/4 md:w-[25rem] xl:w-[30rem] p-1 px-3 flex-grow "
            type="text"
          ></input>
          <HiMicrophone />
        </div>
        <div className="flex flex-col w-1/2 lg:w-[24rem] gap-2 md:flex-row ">
          <button onClick={handleButton} className="btn whitespace-nowrap">
            Google Search
          </button>
          <button onClick={handleButton} className="btn whitespace-nowrap">
            I'm Feelinng Lucky
          </button>
        </div>
      </form>
    </div>
  );
}
