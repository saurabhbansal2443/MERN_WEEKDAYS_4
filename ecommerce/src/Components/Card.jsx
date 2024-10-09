import React from "react";

const Card = (props) => {
  let { productData } = props;
  let { title, category, price, rating, thumbnail } = productData;
  return (
    <>
      <div className="card card-compact bg-blue-400 w-96 shadow-xl my-4 w-[30vw] h-[55vh]">
        <figure className="w-full h-2/4">
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body w-full h-1/4  ">
          <h2 className="card-title">{title}</h2>
          <div className="badge badge-secondary">Category : {category}</div>
          <div className="badge badge-secondary">Price : {price}</div>
          <div className="badge badge-secondary">Rating : {rating}</div>
        </div>
        <div className="card-actions justify-end m-1 ">
          <button className="btn btn-primary ">AddToCart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
