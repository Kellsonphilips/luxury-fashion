//creating middleware
export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
// logs to watch middleware actions
//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

  next(action);

//   console.log("next state: ", store.getState());
};
