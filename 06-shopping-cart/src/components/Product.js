import React from "react";

function Product({ image, title, price, category }) {
  return (
    <article>
      <h3>{title}</h3>
      <img src={image} />
      <p>
        {price} - {category}
      </p>
    </article>
  );
}

export default Product;
