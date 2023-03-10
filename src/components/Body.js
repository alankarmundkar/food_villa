import { restaurantList } from "../contants";
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {filterData} from '../utils/helper'

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // function filterData(searchInput, allRestaurants) {
  //   const filterData = allRestaurants?.filter((restaurant) =>
  //     (restaurant?.data?.name).toLowerCase().includes(searchInput.toLowerCase())
  //   );
  //   console.log(filterData, "alankar mundkar");
  //   return filterData;
  // }

  const getRestaurant = async () => {
    const repsonse = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0041346&lng=73.1091429&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await repsonse.json();
    console.log(data, "data123");
    console.log(data.data?.cards[2]?.data?.data?.cards, "cards");
    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurants(data?.data?.cards[2]?.data?.data?.cards);
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  const isOnline = useOnline()

  if(!isOnline)
    return <h1> 🔴 Looks like you are offline , Check your internet Connectivity</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            console.log(data, "filter data alankar");
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant?.data?.id} key={restaurant?.data?.id} >
              <RestrauntCard {...restaurant?.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
