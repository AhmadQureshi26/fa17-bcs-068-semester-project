import uid from "uid";
import { search, searchReset } from "../actions/searchAction.js";
// import { getProducts } from "../actions/getProducts.js";
import hardcoverBook from "../assets/hardcoverBook.jpg";
import businessCards from "../assets/Business Card.jpg";
import foldableBox from "../assets/Crimson Box.jpg";
import poster from "../assets/Poster.jpg";
import shoppingBag from "../assets/Shopping Bag PSD Mock.jpg";
import envelope from "../assets/Wedding Card.jpg";

let defaultState = {
  products: [
    {
      id: uid(),
      name: "Hardcover book",
      src: { src: hardcoverBook },
    },
    {
      id: uid(),
      name: "Business cards",
      src: { src: businessCards },
    },
    {
      id: uid(),
      name: "Foldable box",
      src: { src: foldableBox },
    },
    {
      id: uid(),
      name: "Poster",
      src: { src: poster },
    },
    {
      id: uid(),
      name: "Shopping bag",
      src: { src: shoppingBag },
    },
    {
      id: uid(),
      name: "Envelope",
      src: { src: envelope },
    },
  ],
};

let productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "search":
      return search(action.searchQuery, defaultState);
    case "searchReset":
      return searchReset(defaultState);
    // case "getProducts":
    //   getProducts();
    //   // return getProducts();
    //   return state;
    default:
      return state;
  }
};

export default productReducer;
