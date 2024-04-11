import React from "react";
import BotImg from "../assets/botimag.png";
import Vector from "../assets/vector.png";
const Header = () => {
  return (
    <div className=" py-[20px] px-[10px] justify-between flex items-center w-full h-[80px] rounded-t-[20px] border bg-headercolor">
      {/* first div for header its image and title div  */}

      <div className=" items-center relative flex gap-[10px] w-[191px] ">
        {/*  here image icon div  */}
        <div className="  border overflow-hidden w-[50px] h-[50px]   rounded-[30px] bg-mainwhite">
          <img
            src={BotImg}
            alt="bot"
            className=" z-0 scale-150 mt-2  border  "
          />
          {/* eclipse */}
          <div className=" top-[40px] left-[38.5px] absolute w-[8px] h-[8px] z-50 border rounded-full bg-maingreen" />
        </div>

        {/* this is title div  */}
        <div className=" flex flex-col   w-[131px] py-[5px] px-[0px] ">
          {/* Timpu  */}
          <div className=" items-center flex gap-[10px] ">
            <h2 className=" font-semibold text-mainblue leading-[27px] text-[18px] ">
              Timpu
            </h2>
            {/* Vector  */}
            <img
              src={Vector}
              alt="vector"
              width={"14.41px"}
              height={"15px"}
              className=" border"
            />
          </div>
          {/* Chat assistant */}
          <p className=" text-[15px] text-mainblue  font-0 leading-[22.5px]">
            Chat assistant
          </p>
        </div>
      </div>

      {/*  second div online */}
      <div className=" flex items-end w-[62px] h-[60px] py-[15px]">
        <div className=" flex gap-[5px]">
          <div className=" top-[40px] left-[38.5px]  w-[8px] h-[8px]  border rounded-full bg-maingreen" />
          <span className=" font-0 leading-[10px] text-[15px] text-mainblue">
            Online
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
