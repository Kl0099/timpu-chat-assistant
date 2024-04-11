import React from "react";
import "../index.css";
import TimeStamp from "./TimeStamp";
import HandbagTags from "./HandbagTags";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
const Hero = () => {
  return (
    <div className="w-full h-[640px]  px-[5px]">
      {/* another div with 5px padding */}
      <div className="  pt-[50px] px-[10px] pb-[10px] flex flex-col gap-[20px]">
        {/* section 1  */}
        <div className=" w-[330px] flex flex-col gap-[5px] h-[100px]">
          {/* here first message assistant */}
          <div className=" flex items-center h-[80px] w-[250px] rounded-[15px]  bg-gradient-linear ">
            <p className="py-[10px]  px-[15px] text-[13px] leading-[19.5px] font-normal text-mainblack ">
              Hi Sam! I am your personal shopping assistant , how can i help you
              today ?
            </p>
          </div>

          {/* time stamp */}

          <TimeStamp />
        </div>

        {/* section 2  */}
        <div className="  items-end w-[330px] flex flex-col gap-[5px] h-[80px]">
          <div className="  bg-mainlightgreen w-[213px] h-[60px] rounded-[15px] border py-[10px] px-[15px]">
            <p className=" font-normal text-[13px] leading-[19.5px] text-mainblack w-[183px] h-[40px]">
              I am looking for a hand bag, with long strap .
            </p>
          </div>
          <TimeStamp value={"4:46 PM"} />
        </div>

        {/* section 3 handbag tags  */}

        <div className=" flex flex-col w-[330px] h-[60px] gap-[10px] ">
          <p className=" leading-[19.5px] text-[13px] font-normal text-mainslategray h-[20px] w-[330px]">
            Popular tags for handbag
          </p>

          {/* here the hading tags  */}
          <HandbagTags />
        </div>

        {/* section 4 */}

        <div className=" w-[330px] h-[259px] gap-[10px] flex flex-col">
          {/* section 4 part one  */}
          {/* here product details given by Timpu */}

          {/* product card  */}
          <ProductCard />

          {/* now here product filter card  */}
          <ProductFilter />
        </div>
      </div>
    </div>
  );
};

export default Hero;
