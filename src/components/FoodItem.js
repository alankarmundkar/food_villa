import React from "react";
import { IMG_CDN_URL } from "../contants";

const FoodItem = ({
  name,
  price,
  imageId,
  description
}) => {
  return (
    <div className="card w-56 p-2 m-2 bg-pink-50 shadow-lg" data-testid ='food-item'>
      <img src={IMG_CDN_URL+imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>Rupees: {price/100}</h3>
      <h4>{description} </h4>
    </div>
  );
};


export default FoodItem