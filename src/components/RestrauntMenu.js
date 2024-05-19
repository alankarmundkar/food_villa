import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestrauntMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
 
  return restaurant ? (
    <div className="flex gap-5">
      <div>
        <h1>Restraunt id: {resId}</h1>{" "}
        <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
        <img
          className="m-auto"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card?.card?.info.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.city}</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.avgRating} stars</h3>
        <h3>{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>

        {restaurant &&
          restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.map(
            (category) => {
              if (category?.card?.card.itemCards) {
                return (
                  <div>
                    <h1>{category?.card?.card.title}</h1>
                    {category?.card?.card.itemCards.map((item) => {
                      return (
                        <li key={item?.card.info?.name}>
                          {item?.card.info?.name} : Rupees:{" "}
                          {item?.card.info?.price / 100}
                          <button
                            className="bg-green-300 m-3"
                            onClick={() => {
                              handleAddItem(item?.card.info);
                            }}
                          >
                            Add Item
                          </button>
                        </li>
                      );
                    })}
                  </div>
                );
              }
            }
          )}
      </div>
    </div>
  ) : (
    <Shimmer></Shimmer>
  );
};

export default RestrauntMenu;
