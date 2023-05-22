import React from "react";
import { useDispatch } from "react-redux";
import { action_cart_add, action_cart_remove } from "../redux/store";

function Product({ id, image, title, price, category, onCart }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (onCart) {
      dispatch(action_cart_remove({ id }));
    } else {
      dispatch(action_cart_add({ id }));
    }
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
      <button onClick={handleClick}>
        {onCart ? "Remove from cart" : "Add to Cart"}
      </button>
    </article>
  );
}

export default Product;
