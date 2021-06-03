let search = (searchQuery, state) => {
  let products = state.products.filter(product => {
    if (product.name.includes(searchQuery)) {
      return true;
    } else {
      return false;
    }
  });
  console.log("in searchAction");

  console.log({ products });

  return { products };
};

let searchAction = (searchQuery, products) => {
  return {
    type: "search",
    searchQuery,
    products
  };
};

let searchResetAction = () => {
  return {
    type: "searchReset"
  };
};

let searchReset = products => {
  return products;
};

export { searchAction, search, searchResetAction, searchReset };
