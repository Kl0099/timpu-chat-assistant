import React from "react";

const TimeStamp = ({ value = "4:45 PM" }) => {
  return (
    <span className="  px-[15px] h-[15px] leading-[15px] text-[10px] font-normal text-mainblack">
      {value}
    </span>
  );
};

export default TimeStamp;
