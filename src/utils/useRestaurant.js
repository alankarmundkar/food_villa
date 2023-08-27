import { MENU_API } from "../contants";
import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
  
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurantInfo = async () => {
    const data = await fetch(MENU_API + resId);
    const payload = await data.json();
    console.log(payload, "alankar");
    setRestaurant(payload?.data);
  };

  useEffect(() => {
    console.log("use Effect called");
    getRestaurantInfo();
  }, []);

  return restaurant;
};

export default useRestaurant;
