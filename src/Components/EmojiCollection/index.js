import React, { useState } from "react";
import "./emojiCollection.css";
import Slider from "react-slick";
import NextArrow from "../Carousel/nextArrow";
import PrevArrow from "../Carousel/prevArrow";
import { addToCart } from "../../stores/cart";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import PopupWindow from "../Pop Up Window";
// import { teaCollection } from "../../../Data/teaCollection";

const settings = {
  className: "custom-slider",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 3,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 768, // Tablet and below
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1024, // Desktop and above
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const EmojiCollection = ({ list }) => {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);
  const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item
  const [showPopup, setShowPopup] = useState(false); // State to toggle popup visibility
  const [selectedSize, setSelectedSize] = useState(null); // State to track selected size
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    console.log("Item", item);
    setSelectedItem(item); // Set the selected item for the popup
    setShowPopup(true); // Show the popup
  };

  // const handleSizeClick = (size) => {
  //   setSelectedSize(size); // Update selected size
  // };

  const handleClosePopup = () => {
    setSelectedItem(null); // Clear the selected item
    setShowPopup(false); // Hide the popup
    setSelectedSize(null);
  };

  // const handleAddToCart = () => {
  //   dispatch(addToCart({ productId: id, quantity: quantity }));
  // };

  const handleAddToCart = () => {
    if (selectedItem && quantity > 0) {
      dispatch(
        addToCart({
          productId: selectedItem.id, // Accessing the id of the selected item
          quantity: quantity, // You can set this based on your logic
        })
      );
      console.log(selectedItem.id);
      console.log(quantity);
    }
  };

  const handleChooseOwnFlavor = () => {
    navigate("/all-products");
  };

  return (
    <div className="mood-wrapper ">
      <div className="emoji mt-3">
        <div className="collecion-title mb-4 pb-4 font-bold text-xl flex items-center justify-center">
          What's your mood?
        </div>
        <Slider {...settings}>
          {list.map((item) => (
            <div
              style={{
                padding: "10px",
                cursor: "pointer",
                background: "#f0f0f0",
                border: "1px solid #ddd",
                borderRadius: "5px",
                textAlign: "center",
              }}
              key={item.id}
            >
              {/* {console.log("item.id", item.id)} */}
              <div
                className="emoji-collection-cover"
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.cover}
                  className="w-48 h-fit object-contain emoji-image cur-po"
                  alt={item.title}
                  // onClick={() => handleItemClick(item)}
                />
                <div>
                  <div
                    className="emoji-title absolute-center cur-po"
                    // onClick={() => handleItemClick(item)}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* <button className="customize-button">Customize</button> */}
      </div>
      {showPopup && selectedItem && (
        <div className="tea-container" key={selectedItem.id}>
          <div className="tea-info">
            <img src={selectedItem.teaImageCover} className="tea-image" />
            <div className="tea-row">
              <div className="tea-name">
                {selectedItem.teaName}
                {selectedItem.rating && (
                  <div className="tea-rating absolute-center">
                    {selectedItem.rating}
                    <i className="fi fi-rr-star absolute-center"></i>
                  </div>
                )}
              </div>
            </div>
            <div className="tea-row">Price</div>
            <div className="tea-row">₹ {selectedItem.price}</div>
            <div></div>
            {/* <div className="tea-row size-title">Size</div>
            <div
              className="tea-row"
              // style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              {selectedItem.sizes.map((size) => (
                <div
                  key={size.size}
                  onClick={() => handleSizeClick(size)}
                  className="box-container cur-po"
                  style={{
                    backgroundColor:
                      selectedSize?.size === size.size
                        ? "chocolate"
                        : "#f0f0f0",
                    color: selectedSize?.size === size.size ? "white" : "black",
                  }}
                >
                  {size.size}
                </div>
              ))}
            </div> */}
            {/* <div className="tea-row">Price</div> */}
            {/* Display selected price */}
            {/* {selectedSize && (
              <div className="price-details-container">
                <h2 className="price-details">
                  Price for {selectedItem.name} ({selectedSize.size}) :
                  {selectedSize.price} /-
                </h2>
                <button
                  className="add-to-cart-button cur-po"
                  data-id="${selectedItem.id}"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            )} */}
            <button
              className="add-to-cart-button cur-po"
              data-id="${selectedItem.id}"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <div className="choose-click">
              Didn't like it?
              <a
                href="all-products"
                className="choose-anchor-tag"
                onClick={handleChooseOwnFlavor}
              >
                Choose your own flavor
              </a>
            </div>
            <button className="close-button cur-po" onClick={handleClosePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmojiCollection;
