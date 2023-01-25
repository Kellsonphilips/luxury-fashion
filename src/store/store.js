import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
// import { loggerMiddleware } from "./middleware/logger.middleware";
import { rootReducer } from "./root-reducer";



// root-reducer

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
//use one from logger middleware or created milldleware from loggerMiddleware
const middleWares = [
  process.env.NODE_ENV !== "production" && logger
].filter(Boolean);
// const middleWares = [loggerMiddleware];

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);
