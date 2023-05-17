import React from "react";
import "./styles/index.css";
import Product from "./components/Product";
import { getMockUpProductList } from "./services/Products";

function App() {
  return (
    <>
      <h1>Wellcome to the shop</h1>
      <main>
        <Products />
      </main>
    </>
  );
}

function Products() {
  const productList = getMockUpProductList();
  return (
    <>
      <h2>Product List</h2>

      <div className="grid-resposive">
        {productList.map((item) => (
          <Product
            category={item.category}
            price={item.price}
            title={item.title}
            image={item.image}
            key={item.key}
          />
        ))}
      </div>
    </>
  );
}

export default App;
