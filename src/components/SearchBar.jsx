import React from "react";
import FileIcon from "../assets/fileicon.png";
import Logo from "../assets/Footerlogo.png";
import { MdKeyboardArrowRight } from "react-icons/md";
const SearchBar = () => {
  return (
    <div className="bg-gradient-linear_3 rounded-bl-[20px] rounded-br-[20px] h-[80px]  w-full items-center  p-[10px] gap-[10px] flex flex-col">
      {/* section one searchbar  */}
      <div className="relative px-[7px]  w-[340px] h-[40px] flex gap-[5px]">
        <div className=" rounded-[10px] h-[40px]  relative  w-[265px]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Type your message"
            className=" rounded-[10px] py-[0px] pr-[10px]  flex pl-[20px] w-[265px] h-full   "
          />
          <img
            className=" absolute top-[10px]  right-[10px]"
            src={FileIcon}
            alt="icon"
            width={20}
            height={20}
          />
        </div>
        <div className=" absolute left-[275px] w-[65px] h-[40px] rounded-[10px] flex items-center justify-center bg-mainblue">
          <MdKeyboardArrowRight
            size={32}
            className=" text-mainwhite"
          />
        </div>
      </div>

      {/* section  2 footer */}
      <div className=" h-[20px] gap-[5px] flex">
        <span className=" font-normal leading-[19.5px] text-[rgba(177,177,177,1)] text-[13px] ">
          Powered by
        </span>
        <span className=" text-[13px] leading-[19.5px] text-[rgba(122,127,140,1)] font-semibold">
          Krunk.ai
        </span>
        <img
          src={Logo}
          alt="logo"
          width={"18px"}
          height={"18px"}
          className=" opacity-50"
        />
      </div>
    </div>
  );
};

export default SearchBar;
