import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-600 shadow-md mb-2">
        <Link to="/">
          <h1 className="py-2 text-center font-bold text-white text-xl">NFT</h1>
        </Link>
      </div>
    </>
  );
};

export default Header;
