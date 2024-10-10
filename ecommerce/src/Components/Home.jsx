import React from "react";
import data from "./Data";
import { useState } from "react";

import Card from "./Card";

const Home = () => {
   const [allProducts , setAllProducts ] = useState(data);
   const [showProducts , setShowProducts ] = useState(data);

   const handleTopRated = ()=>{
       let filteredProducts = allProducts.filter((productData)=> productData.rating >=4 );

       setShowProducts(filteredProducts);
   }

   const handleCategory = (productCategory)=>{
    let filteredProducts = allProducts.filter((productData)=> productData.category == productCategory );

       setShowProducts(filteredProducts);
   }

  return (
    <>
      <div className=" bg-slate-100 w-full h-screen ">
        <div className="options flex justify-around py-2 ">
          <button className="btn btn-active btn-primary" onClick={handleTopRated}>Top Rated</button>

          <button className="btn btn-active btn-primary" onClick={()=>{handleCategory("groceries")}}>Grocery </button>

          <div className="searchBar flex ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-active btn-primary mx-1 ">Search</button>
          </div>

          <button className="btn btn-active btn-primary"  onClick={()=>{handleCategory("furniture")}}>Furniture </button>
          <button className="btn btn-active btn-primary" onClick={()=>{handleCategory("beauty")}}>Beauty </button>
        </div>

        <div className="productCards flex flex-wrap justify-around ">
          {showProducts.map((productData, idx) => (
            <Card key={productData.id} productData={productData}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
