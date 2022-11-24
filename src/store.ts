import { createStore, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
