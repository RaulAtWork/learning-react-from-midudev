import React from "react";
import { useDispatch } from "react-redux";
import { action_cart_add } from "../redux/store";

function Product({ id, image, title, price, category }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(action_cart_add({ id }));
  }

  return (
    <article className="product-item">
      <h3>
        {title} ({id})
      </h3>
      <img src={image} />
      <p>
        {price}€ - {category}
      </p>
      <button onClick={handleClick}>Add to Cart</button>
    </article>
  );
}

export default Product;
