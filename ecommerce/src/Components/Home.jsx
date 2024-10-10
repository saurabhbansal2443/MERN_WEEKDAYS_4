import React from "react";

import { useState , useEffect  } from "react";

import Card from "./Card";
import Skeletron from "./Skeletron";

const Home = () => {

  console.log( " home component ")
  const [allProducts, setAllProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);
  const [query, setQuery] = useState("");


  let getApiData =async ()=>{
    let apiData = await fetch('https://dummyjson.com/products');
    let jsonData = await apiData.json();
    console.log(jsonData)
    setAllProducts(jsonData.products);
    setShowProducts(jsonData.products)
  }


  useEffect(()=>{
    console.log( " use effect called ")
    getApiData();
  },[])



  const handleTopRated = () => {
    let filteredProducts = allProducts.filter(
      (productData) => productData.rating >= 4
    );

    setShowProducts(filteredProducts);
  };

  const handleCategory = (productCategory) => {
    let filteredProducts = allProducts.filter(
      (productData) => productData.category == productCategory
    );

    setShowProducts(filteredProducts);
  };

  const handleSearch = () => {
    let filteredProducts = allProducts.filter((productData) =>
      productData.title.toLowerCase().includes(query.toLowerCase().trim())
    );

    setShowProducts(filteredProducts);
    setQuery("");
  };

  // useEffect(()=>{
  //   console.log("use effect with empty array ")
  // },[])

  // useEffect(()=>{
  //   console.log("use effect with query as dependency  ")
  // },[query])

  // useEffect(()=>{
  //   console.log("use effect with no array  ")
// })


if ( allProducts.length == 0 ){
  return (
    <Skeletron></Skeletron>
  )
}

  return (
    
    <>
     {console.log( " retrurn part  ")}
     
      <div className=" bg-slate-100 w-full h-screen ">
        <div className="options flex justify-around py-2 ">
          <button
            className="btn btn-active btn-primary"
            onClick={handleTopRated}
          >
            Top Rated
          </button>

          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              handleCategory("groceries");
            }}
          >
            Grocery{" "}
          </button>

          <div className="searchBar flex ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <button
              className="btn btn-active btn-primary mx-1 "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              handleCategory("furniture");
            }}
          >
            Furniture{" "}
          </button>
          <button
            className="btn btn-active btn-primary"
            onClick={() => {
              handleCategory("beauty");
            }}
          >
            Beauty{" "}
          </button>
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
