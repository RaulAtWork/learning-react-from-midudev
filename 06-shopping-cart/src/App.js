import React from "react";
import "./styles/index.css";
import Product from "./components/Product";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import {
  action_products_updateFilters,
  select_products_categories,
  select_products_filtered,
  select_products_filters,
} from "./redux/store";

function App() {
  return (
    <div className="main-container">
      <div className="main-content">
        <h1>Wellcome to the shop</h1>
        <Filters />
        <main>
          <Products />
        </main>
      </div>
      <div className="sidebar-right">
        <Cart />
      </div>
    </div>
  );
}

function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(select_products_filters);
  const categories = useSelector(select_products_categories);

  function handleCategoryChange(event) {
    dispatch(
      action_products_updateFilters({
        ...filters,
        category: event.target.value,
      })
    );
  }

  function handlePriceRangeChange(event) {
    dispatch(
      action_products_updateFilters({
        ...filters,
        priceRange: Number(event.target.value),
      })
    );
  }

  return (
    <>
      <h2>Filters</h2>
      <div className="filters-container">
        <label>
          <span>Select category</span>
          <select
            name="category"
            onChange={handleCategoryChange}
            placeholder="category"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Select max price</span>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={filters.priceRange}
            onChange={handlePriceRangeChange}
          />
          {filters.priceRange}€
        </label>
      </div>
    </>
  );
}

function Products() {
  const productList = useSelector(select_products_filtered);

  return (
    <>
      <h2>Product List</h2>
      <p> Total results: {productList.length} </p>
      <br />
      {productList.length === 0 && <p>No results</p>}
      <div className="grid-resposive">
        {productList.map((item) => (
          <Product
            category={item.category}
            price={item.price}
            title={item.title}
            image={item.image}
            key={item.key}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
