import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { setCurrentProduct } from "../redux/slices/nftSlice";
import { useNavigate } from "react-router-dom";

const NftItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, name, image_url } = item;
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  const handleClickNav = () => {
    dispatch(setCurrentProduct(item));
    navigate(`/nft/${id}`);
  };

  return (
    <div className="w-[250px] rounded-lg shadow-md lg:max-w-sm my-6  cursor-pointer hover:bg-black/5 ">
      <img
        className="object-contain w-full h-[200px]"
        src={
          image_url
            ? image_url
            : "https://pbs.twimg.com/media/CzgKyXEVEAAvmSS.jpg"
        }
        alt=""
      />
      <div className="p-4 flex flex-col">
        <h4 className="text-xl font-semibold tracking-tight text-blue-600 my-2">
          {truncateString(name, 17)}
        </h4>
        <button
          onClick={handleClickNav}
          className="px-4 py-2 text-sm text-blue-100  rounded shadow transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default NftItem;
