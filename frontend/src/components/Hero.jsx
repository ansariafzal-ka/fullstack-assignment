import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <section className="w-full h-[300px] bg-gray-300 flex flex-col justify-center items-center gap-8">
      <h1 className="text-6xl text-center font-medium">How can we help?</h1>
      <div className="sm:w-[600px] bg-white px-3 flex justify-center items-center gap-2 border border-stone-600 shadow-md rounded">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleSearchChange}
          className="w-full py-2 bg-transparent border-none outline-none"
        />
        <FaArrowRightLong />
      </div>
    </section>
  );
};

export default Hero;
