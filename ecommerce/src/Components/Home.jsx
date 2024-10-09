import React from "react";
import data from "./Data";

import Card from "./Card";

const Home = () => {
 

  return (
    <>
      <div className=" bg-slate-100 w-full h-screen ">
        <div className="options flex justify-around py-2 ">
          <button className="btn btn-active btn-primary">Top Rated </button>
          <button className="btn btn-active btn-primary">Grocery </button>

          <div className="searchBar flex ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-active btn-primary mx-1 ">
              Search{" "}
            </button>
          </div>

          <button className="btn btn-active btn-primary">Furniture </button>
          <button className="btn btn-active btn-primary">Beauty </button>
        </div>

        <div className="productCards flex flex-wrap justify-between">
        {
             data.map((productData , idx )=> <Card productData={productData}></Card> )
        }
        </div>
      </div>
    </>
  );
};

export default Home;
