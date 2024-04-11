import React from "react";
import bagimage from "../assets/bagimage.png";
import Vector from "../assets/vector.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import TimeStamp from "./TimeStamp";
const ProductCard = () => {
  return (
    <div className=" w-[330px] h-[161px] gap-[5px] flex flex-col">
      {/* product main section  */}
      <div className=" border bg-gradient-linear_2  w-[250px] h-[141px] rounded-[20px] p-[10px] gap-[10px] flex flex-col">
        <div className=" h-[71px] w-[230px] rounded-[10px] py-[10px] px-[15px] gap-[11px] flex bg-mainwhite ">
          {/* product image  */}
          <div className=" rounded-[5px]">
            <img
              className=" w-[70px] h-[50px] object-fill"
              src={bagimage}
              alt="bag"
            />
          </div>

          {/* product description  */}
          <div className=" flex flex-col gap-[7px] h-[51px] ">
            {/* product name */}

            <div className=" flex justify-between gap-[5px]">
              <span className="  w-fit text-[13px] leading-[19.5px] font-normal text-mainblack">
                Bags on Timpu
              </span>
              {/* Vector  */}
              <img
                src={Vector}
                alt="vector"
                width={"14.41px"}
                height={"15px"}
                className=" object-contain"
              />
            </div>

            {/* number of products */}

            <div className=" items-center flex justify-between">
              <p className=" text-[12px] leading-[18px] text-mainslategray">
                1123 products
              </p>
              <div className=" w-[24px] h-[24px] flex items-center justify-center">
                <MdKeyboardArrowRight
                  className=" text-mainslategray"
                  size={22}
                />
              </div>
            </div>
          </div>
        </div>

        {/* paragraph */}

        <span className=" w-[230px] text-[13px] leading-[19.5px] text-mainblack h-[40px] font-normal">
          Or set filter and help us choose the best bag for you.
        </span>
      </div>
      <TimeStamp value={"4:48 PM"} />
    </div>
  );
};

export default ProductCard;
