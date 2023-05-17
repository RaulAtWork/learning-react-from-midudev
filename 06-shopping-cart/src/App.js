import React from "react";
import "./styles/index.css";
import Product from "./components/Product";

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
  return (
    <>
      <h2>Product List</h2>

      <div className="grid-resposive">
        <Product
          category="Category"
          price="152$"
          title="this is a title"
          image="https://placehold.co/400"
        />
        <Product
          category="Category"
          price="152$"
          title="this is a title"
          image="https://placehold.co/400"
        />
        <Product
          category="Category"
          price="152$"
          title="this is a title"
          image="https://placehold.co/400"
        />
        <Product
          category="Category"
          price="152$"
          title="this is a title"
          image="https://placehold.co/400"
        />
      </div>
    </>
  );
}

export default App;
