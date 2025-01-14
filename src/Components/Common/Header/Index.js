import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../../../assets/images/shoppingCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../../../stores/cart";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenCartTab = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
      <div>
        <button className="btn btn-login text-blue-600 font-semibold">
          Login
        </button>
      </div>
      <div>
        <button className="btn btn-signup text-blue-600 font-semibold">
          Sign Up
        </button>
      </div>
      <div
        className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center relative"
        onClick={handleOpenCartTab}
      >
        <img src={shoppingCart} alt="" className="w-6" />
        <span className="absolute top-2/3 left-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex items-center justify-center">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
