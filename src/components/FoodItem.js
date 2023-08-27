import React from "react";

const FoodItem = ({
  name,
  price,
  imageId,
  description
}) => {
  return (
    <div className="card w-56 p-2 m-2 bg-pink-50 shadow-lg">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          imageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>Rupees: {price/100}</h3>
      <h4>{description} </h4>
    </div>
  );
};


export default FoodItem