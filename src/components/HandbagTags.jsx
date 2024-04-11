import React from "react";
import RightArrow from "../assets/vectorrightarrow.png";
const HandbagTags = () => {
  const tags = ["Clutch", "Fabric lining", "Baggit", "Multi Compartment"];
  return (
    <div className=" w-[330px] h-[30px] flex gap-[5px]">
      <div className=" overflow-scroll scrollbar-hidden min-w-[301px] flex gap-[10px]">
        {tags.map((tag, index) => (
          <div
            className=" font-0 leading-[20px] text-[13px] min-w-fit py-[5px] px-[10px] rounded-[5px] bg-mainlightblue text-mainblue border-mainblue border-[1px]"
            key={index}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className=" flex items-center justify-center w-[24px] h-[30px] gap-x-[10px] ">
        <img
          src={RightArrow}
          width={6}
          height={12}
          alt="rightarrow"
        />
      </div>
    </div>
  );
};

export default HandbagTags;
