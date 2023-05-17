import { useMemo, useState } from "react";
import { getCategoryList, getMockUpProductList } from "../services/Products";

export default function useProductsFilter({ category, priceRange }) {
  const productList = useMemo(() => getMockUpProductList(), []);
  const categoryList = useMemo(
    () => getCategoryList(productList),
    [productList]
  );
  const [filteredList, setFilteredList] = useState(productList);

  function updateFilters({ category, priceRange }) {
    let newList = [...productList];
    //filter by category
    newList = newList.filter((item) => item.category === category || !category);
    //filter by price range
    newList = newList.filter((item) => item.price < priceRange);
    setFilteredList(newList);
  }
  return [filteredList, updateFilters, categoryList];
}
