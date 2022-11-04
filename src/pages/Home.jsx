import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NftItem from "../components/NftItem";
import Spinner from "../components/Spinner";
import { fetchNfts } from "../redux/slices/nftSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { assets } = useSelector((state) => state.nfts.nftItems);
  const { status, searchValue } = useSelector((state) => state.nfts);
  useEffect(() => {
    dispatch(fetchNfts());
  }, [dispatch]);

  const nftProducts = assets
    ?.filter((item) => {
      if (item.name?.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    })
    .map((item) => <NftItem key={item.id} item={item} />);

  return (
    <>
      <div className="max-w-[1140px] mx-auto flex flex-wrap justify-between ">
        {status === "loading" ? <Spinner /> : nftProducts}
      </div>
    </>
  );
};

export default Home;
