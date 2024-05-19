
import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getRestaurant = async () => {
    // const position = await new Promise((resolve, reject) => {
    //   navigator.geolocation.getCurrentPosition(resolve, reject);
    // });
    // const latitude = position.coords.latitude;
    // const longitude = position.coords.longitude;
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0041346&lng=73.1091429&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  console.log(filterRestaurants, "filterRestaurants");
  const isOnline = useOnline();

  if (!isOnline)
    return (
      <h1> 🔴 Looks like you are offline , Check your internet Connectivity</h1>
    );

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-2">
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
          className="p-2 m-2 bg-purple-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            console.log(data, "filter data alankar");
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info.id}
              key={restaurant?.info.id}
            >
              <RestrauntCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
