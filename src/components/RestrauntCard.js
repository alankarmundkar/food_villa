import React from "react";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  costForTwo
}) => {
  return (
    <div data-testid= "resCard" className="card w-56 p-2 m-2 bg-pink-50 shadow-lg">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>Cost: {costForTwo}</h3>
      <h4>{sla?.lastMileTravelString} minutes</h4>
    </div>
  );
};


export default RestrauntCard