import mockProducts from "../mocks/products.json";
function mapProductList(products) {
  //copy the array to lose references
  const productList = [...products.products].map((item) => {
    return {
      title: item.title,
      price: item.price,
      category: item.category,
      image: item.thumbnail,
      key: item.id,
    };
  });

  return productList;
}

function getMockUpProductList() {
  return mapProductList(mockProducts);
}

/**
 * Expects to be the products already mapped
 * @param {array} products
 */
function getCategoryList(products) {
  const categories = new Set();
  products.forEach(({ category }) => categories.add(category));
  return Array.from(categories);
}

function applyfitlersToProductList(productList, { category, priceRange }) {
  let newList = [...productList];
  //filter by category
  newList = newList.filter((item) => item.category === category || !category);
  //filter by price range
  newList = newList.filter((item) => item.price < priceRange);
  return newList;
}

export { getMockUpProductList, getCategoryList, applyfitlersToProductList };
