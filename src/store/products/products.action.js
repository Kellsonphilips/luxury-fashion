import { createAction } from "../../utility/reducer/reducer.utils";
import { PRODUCTS_ACTION_TYPES } from "./products.types";

export const setProducts = (productsArray) =>
  createAction(PRODUCTS_ACTION_TYPES.SET_PRODUCTS, productsArray);