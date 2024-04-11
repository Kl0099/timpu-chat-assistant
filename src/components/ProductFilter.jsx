import React, { useState } from "react";
import Filter from "../assets/filter.png";
import { RxCross1 } from "react-icons/rx";
const ProductFilter = () => {
  const filter = ["Strap-Long", "Colour", "Size", "Brand", "Material"];
  const [isSelected, setIsSelected] = useState(filter[0]);

  return (
    <div className=" w-[330px] h-[88px] gap-[10px] flex flex-col">
      {/* section one select filters */}
      <div className=" flex justify-between">
        <p className=" text-maindarkgrey font-normal text-[13px] leading-[19.5px]">
          Select filters
        </p>
        <div className=" flex">
          <img
            src={Filter}
            alt="filter"
            width={"20px"}
            height={"20px"}
          />
          <p className=" text-maindarkgrey leading-[20px] text-[13px] ">
            Filter
          </p>
        </div>
      </div>

      {/* filters  */}
      <div className=" flex-wrap flex gap-[10px]">
        {filter.map((item, index) => (
          <div
            key={index}
            className={` text-[13px] items-center min-w-fit flex gap-[5px] py-[2px] px-[10px] rounded-[5px] ${
              item === isSelected
                ? " bg-mainlightblue_2 border-mainblue border-[1px] text-mainblue"
                : " bg-maindarkwhite text-maindarkgrey"
            }`}
          >
            <span className=" leading-[20px] font-normal">{item}</span>
            <RxCross1
              size={13}
              className={` ${
                item === isSelected ? " text-mainblue" : " text-maindarkgrey"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
