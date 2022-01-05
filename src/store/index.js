import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { batchedSubscribe } from "redux-batched-subscribe";
import { debounce } from "lodash";
import rootSaga from "./sagas";
import reducers from "./reducers";
import { reduxBatch } from "@manaflair/redux-batch";

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [sagaMiddleware]; // [routeMiddleware];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(reduxBatch, applyMiddleware(...middlewares))
  );
  const logger = createLogger({});

  middlewares.push(logger);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers/index", () => {
      const nextRootReducer = require("./reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
