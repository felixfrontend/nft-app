import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <div className=" bg-blue-600 shadow-md mb-2">
        <Link to="/">
          <div className="flex max-w-[1140px] mx-auto py-2 items-center ">
            <h1 className="py-2 text-center font-bold text-white text-xl mr-20">
              NFT
            </h1>
            <Search />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
