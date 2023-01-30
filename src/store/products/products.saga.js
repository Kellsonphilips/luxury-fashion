import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCollectionAndDocuments } from "../../utility/firebase/firebase";
import { fetchProductsSuccess, fetchProductsFailed } from "./products.action";
import { PRODUCTS_ACTION_TYPES } from "./products.types";


// export const fetchProductsAsync = () => async (dispatch) => {
//   dispatch(fetchProductsStart());

//   try {
//     const productsArray = await getCollectionAndDocuments("categories");
//     dispatch(fetchProductsSuccess(productsArray));
//   } catch (error) {
//     dispatch(fetchProductsFailed(error));
//   }
// };


// replicating products action from redux-thunk to redux saga 
// things are a bit complicated with saga but this is how to write redux-saga logic
// it works like Async, await and used function generator (function*)

export function* fetchProductsAsync() {

  try {
    const productsArray = yield call(getCollectionAndDocuments, "categories");
    yield put(fetchProductsSuccess(productsArray))
  } catch (error) {
    yield put(fetchProductsFailed(error))
  }
};

export function* onFetchProducts() {
  yield takeLatest(PRODUCTS_ACTION_TYPES.FETCH_PRODUCTS_START, fetchProductsAsync)
};

export function* productsSaga() {
  yield all([call(onFetchProducts)])
};
