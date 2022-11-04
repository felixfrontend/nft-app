import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const { currentProduct } = useSelector((state) => state.nfts);
  const navigate = useNavigate();

  const modifiedDate = (date) => {
    const t = date.indexOf("T");
    const str = date?.substring(0, t);
    return str;
  };
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="ml-4 mt-10 flex">
      <div className="flex flex-col">
        <div className=" w-[250px] h-[300px]  object-contain">
          <img
            className="max-w-full h-full border-2 object-cover  object-center rounded  border-blue-600 "
            src={
              currentProduct.image_url
                ? currentProduct.image_url
                : "https://pbs.twimg.com/media/CzgKyXEVEAAvmSS.jpg"
            }
            alt={`img ${currentProduct.name}`}
          />
        </div>
        <span className="text-sm my-2">
          Добавлено:{" "}
          <b> {modifiedDate(currentProduct.collection.created_date)}</b>
        </span>
        <button
          onClick={goBack}
          className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Назад
        </button>
      </div>
      <div className="ml-10">
        <h2 className="text-xl font-bold text-blue-600 ">
          {currentProduct.name
            ? currentProduct.name
            : currentProduct.collection.name}
        </h2>
        <p className="pr-40">
          {currentProduct.collection.description
            ? currentProduct.collection.description
            : "Без описании"}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
