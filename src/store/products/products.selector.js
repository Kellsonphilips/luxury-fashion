export const selectProdutsMap = (state) => {
  console.log("Selector fired");
  return state.products.products.reduce((accumulator, product) => {
    const { title, items } = product;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {});
};
