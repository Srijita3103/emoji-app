import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../../assets/images/shoppingCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";

const ProductCart = (props) => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const { id, teaName, price, teaImageCover, slug } = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ productId: id, quantity: 1 }));
  };
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={teaImageCover}
          alt=""
          className="w-full h-80 object-cover object-top drop-shadow-[0_10px_10px_#0005]"
        />
      </Link>
      <h3 className="text-xl py-3 text-center font-medium">{teaName}</h3>
      <div className="flex justify-between items-center">
        <p>
          $<span className="text-xl font-medium ">{price}</span>
        </p>
        <button
          className="bg-gray-300 p-2 rounded-md text-sm flex justify-center items-center hover:bg-gray-400 flex gap-2 "
          onClick={handleAddToCart}
        >
          <img src={shoppingCart} alt="" className="w-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
