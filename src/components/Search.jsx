import React from "react";
import { BsSearch } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setSearchValue } from "../redux/slices/nftSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((state) => state.nfts);
  return (
    <>
      <label className="relative w-auto">
        <span className="absolute top-2 left-2">
          <BsSearch size={20} color="#ddd" />
        </span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input
          className=" w-[450px] placeholder:italic placeholder:text-slate-400 block bg-whiteborder border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
          value={searchValue}
        />

        {searchValue && (
          <MdClear
            onClick={() => dispatch(setSearchValue(""))}
            size={25}
            className="absolute right-1 top-2 cursor-pointer text-[#ccc] hover:text-black"
          />
        )}
      </label>
    </>
  );
};

export default Search;
