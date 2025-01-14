import React, { useState, useEffect } from "react";

// const CartItem = ({ list = [] }) => {
//   const [selectedId, setSelectedId] = useState(null); // State for the selected product ID
//   const [detail, setDetail] = useState(null); // State for the product details

//   // Function to select a product ID
//   const handleSelect = (id) => {
//     setSelectedId(id); // Update the selected ID
//   };

//   useEffect(() => {
//     if (selectedId) {
//       // Find the product detail based on the selected ID
//       const findDetail = list.find((item) => item.id === selectedId);
//       setDetail(findDetail); // Update detail state
//     }
//   }, [selectedId, list]); // Re-run the effect when selectedId or list changes

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       {/* <div> */}
//       {/* Render the product list */}
//       {/* {list.map((item) => (
//           <div key={item.id}>
//             <p>{item.title}</p>
//             <button onClick={() => handleSelect(item.id)}>View Details</button>
//           </div>
//         ))}
//       </div> */}

//       {/* Render the selected product detail */}
//       {detail && (
//         <div>
//           <h3>Selected Product</h3>
//           <p>Title: {detail.title}</p>
//           <p>Price: ₹{detail.price}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { products } from "../products";
// import { useDispatch } from "react-redux";
// import { changeQuantity } from "../stores/cart";

// const CartItem = ({ data }) => {
//   const { productId, quantity } = data; // Destructure props for productId and quantity
//   const [detail, setDetail] = useState(null); // Initialize detail as null
//   const dispatch = useDispatch();

//   // Fetch product details based on productId
//   useEffect(() => {
//     const findDetail = products.find((product) => product.id === productId);
//     setDetail(findDetail || {}); // Use an empty object as a fallback
//   }, [productId]);

//   // Handle decrementing quantity
//   const handleMinusQuantity = () => {
//     if (quantity > 1) {
//       dispatch(
//         changeQuantity({
//           productId: productId,
//           quantity: quantity - 1,
//         })
//       );
//     }
//   };

//   // Handle incrementing quantity
//   const handlePlusQuantity = () => {
//     dispatch(
//       changeQuantity({
//         productId: productId,
//         quantity: quantity + 1,
//       })
//     );
//   };

//   return (
//     <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
//       {detail ? (
//         <>
//           <img src={detail.image} alt={detail.name} className="w-12" />
//           <h3>{detail.name}</h3>
//           <p>${(detail.price * quantity).toFixed(2)}</p>
//           <div className="w-20 flex justify-between gap-2">
//             <button
//               className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
//               onClick={handleMinusQuantity}
//               disabled={quantity <= 1}
//             >
//               -
//             </button>
//             <span>{quantity}</span>
//             <button
//               className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
//               onClick={handlePlusQuantity}
//             >
//               +
//             </button>
//           </div>
//         </>
//       ) : (
//         <p>Loading product details...</p>
//       )}
//     </div>
//   );
// };

// export default CartItem;

import { emojiList } from "../../Data/teaCollection";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../stores/cart";

const CartItem = (props) => {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = emojiList.filter(
      (product) => product.id === productId
    )[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handlePlusQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md">
      <img src={detail.teaImageCover} alt="" className="w-12" />
      <h3>{detail.teaName}</h3>
      <p>${detail.price * quantity}</p>
      <div className="w-20 flex justify-between gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handleMinusQuantity}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={handlePlusQuantity}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
