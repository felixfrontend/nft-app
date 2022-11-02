import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NftItem from "../components/NftItem";
import Spinner from "../components/Spinner";
import { fetchNfts } from "../redux/slices/nftSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { assets } = useSelector((state) => state.nfts.nftItems);
  const { status } = useSelector((state) => state.nfts);
  console.log(status);
  useEffect(() => {
    dispatch(fetchNfts());
  }, [dispatch]);

  console.log(assets);
  return (
    <>
      <div className="flex flex-wrap justify-around flex-[23%]">
        {status === "loading" ? (
          <Spinner />
        ) : (
          assets?.map((item) => <NftItem key={item.id} item={item} />)
        )}
      </div>
    </>
  );
};

export default Home;
