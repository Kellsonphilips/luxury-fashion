import { createSelector } from "reselect";

// creating memoization for our products 
const selectProdutReducer = (state) => state.products;

// first memoization 
export const selectProducts = createSelector(
  [selectProdutReducer],
  (productsSlice) => productsSlice.products
);

// second memoization if the products array from the first memoization changes. 
// this runs once then only runs again if there's a change in the first memoization
export const selectProdutsMap = createSelector(
  [selectProducts],
  (products) =>  products.reduce((accumulator, product) => {
    const { title, items } = product;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {})
);

export const selectProductsIsLoading = createSelector(
  [selectProdutReducer],
  (productsSlice) => productsSlice.isLoading
);

// without memoization

// export const selectProdutsMap = (state) => {
//   console.log("Selector fired");
//   return state.products.products.reduce((accumulator, product) => {
//     const { title, items } = product;
//     accumulator[title.toLowerCase()] = items;
//     return accumulator;
//   }, {});
// };