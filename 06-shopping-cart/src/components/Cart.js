import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { select_cart_all } from "../redux/store";

function Cart() {
  const cartList = useSelector(select_cart_all);
  const [totalAmount, setToalAmount] = useState(0);

  useEffect(() => {
    setToalAmount(
      cartList.reduce(
        (acc, current) => acc + current.price * current.quantity,
        0
      )
    );
  }, [cartList]);

  return (
    <div className="cart">
      <div className="main-cart">
        <h2>This is the cart 🛒</h2>
        {cartList &&
          cartList.map((item) => (
            <CartItem
              title={item.title}
              price={item.price}
              key={item.id}
              id={item.id}
              quantity={item.quantity}
            />
          ))}
      </div>
      <p className="bottom-position">Total amount: {totalAmount} €</p>
    </div>
  );
}

function CartItem({ id, quantity, title, price }) {
  return (
    <div className="product-item">
      <h3>
        {title} ({id})
      </h3>
      <p>
        {quantity} x {price}€
      </p>
    </div>
  );
}

export default Cart;
