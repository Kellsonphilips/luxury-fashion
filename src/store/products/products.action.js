import { createAction } from "../../utility/reducer/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./products.types";
import { getCollectionAndDocuments } from "../../utility/firebase/firebase";

// export const setProducts = (productsArray) =>
//   createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, productsArray);

// how to use redux-thunk

export const fetchProductsStart = () =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START);

export const fetchProductsSuccess = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS, productsArray);

export const fetchProductsFailed = (error) =>
  createAction(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_FAILED, error);

// this is how you create your thunk
// stopped using thunk as we now use saga , this logic is replicated in products.saga.js
// and exporting fetchProductsStart directly to shop component instead of fetchProductsAsync
export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductsStart());

  try {
    const productsArray = await getCollectionAndDocuments("categories");
    dispatch(fetchProductsSuccess(productsArray));
  } catch (error) {
    dispatch(fetchProductsFailed(error));
  }
};
