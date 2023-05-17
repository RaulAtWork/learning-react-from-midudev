import React, { useEffect, useState } from "react";
import "./styles/index.css";
import Product from "./components/Product";
import useProductsFilter from "./hooks/useProductsFilter";

function App() {
  const [productList, updateFilters, categories] = useProductsFilter({
    category: "",
  });

  return (
    <>
      <h1>Wellcome to the shop</h1>
      <Filters categories={categories} updateFilters={updateFilters} />
      <main>
        <Products productList={productList} />
      </main>
    </>
  );
}

function Filters({ categories, updateFilters }) {
  const [filters, setFilters] = useState({ category: "", priceRange: 1000 });

  useEffect(() => {
    updateFilters(filters);
  }, [filters]);

  function handleCategoryChange(event) {
    setFilters((prev) => ({ ...prev, category: event.target.value }));
  }

  function handlePriceRangeChange(event) {
    setFilters((prev) => ({ ...prev, priceRange: event.target.value }));
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

function Products({ productList }) {
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
          />
        ))}
      </div>
    </>
  );
}

export default App;
