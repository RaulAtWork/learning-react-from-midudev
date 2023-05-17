import mockProducts from "../mocks/products.json";
function mapProductList(products) {
  //copy the array to lose references
  const productList = [...products.products].map((item) => {
    return {
      title: item.title,
      price: item.price + "€",
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

export { getMockUpProductList };
