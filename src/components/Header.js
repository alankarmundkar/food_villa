import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext.js";
import useOnline from "../utils/useOnline.js";
import {useSelector} from 'react-redux'
import foodVillaLogo from './../assets/food-villa.png'
import apiSlice from "../utils/apiSlice.js";


const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src= {foodVillaLogo}
    />
  </a>
);

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const isOnline = useOnline();
  const cartItems = useSelector(store=> store.cart.items)

  // const getTodoFn = apiSlice.usePrefetch('getTodo')
  // useEffect(()=>{
  //   getTodoFn(1)
  // },[])
  
  return (
    <div className="flex justify-between bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-2">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <li className="px-2">
            <Link to={"/cart"}>Cart - {cartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <h1>{isOnline ? "🟢" : "🔴"}</h1>
          </li>
          <li className="px-2">{user.name}</li>
          <li className="px-2">
            <button  onClick={() => setIsLoggedIn(isLoggedIn ? false : true)}>
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
