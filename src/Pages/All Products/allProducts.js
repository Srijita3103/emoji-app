import React from "react";
import { emojiList } from "../../Data/teaCollection.js";
import ProductCart from "../../Components/Product Cart/productCart.js";

const AllProducts = () => {
  return (
    <div>
      <h1 className="text-3xl my-5">All Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {emojiList.map((product, key) => (
          <ProductCart key={key} data={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
