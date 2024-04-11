import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
const Main = () => {
  return (
    <div className=" font-sans absolute bg-mainwhite top-[110px] left-[780px] w-[360px] h-[800px] rounded-[20px] flex flex-col  border-mainwhite border-[7px]">
      {/* Header component for assistant app */}
      <Header />
      {/* middle section after header */}
      <Hero />
      {/* last section search bar */}
      <SearchBar />
    </div>
  );
};

export default Main;
