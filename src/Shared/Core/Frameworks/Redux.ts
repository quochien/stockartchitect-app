/* eslint-disable @typescript-eslint/no-explicit-any */
import Config from "react-native-config";
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer
} from "redux";
// import { persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { NavigationMiddleware } from "../../../Navigators";
import "./Config";
// import { Rehydration } from "../Services";
import { ReduxPersist } from "./Config";
export const reducers: Reducer<any, any> = combineReducers({});
const create = (rootReducer: any, enhancers: any): any => {
  return Config.IS_DEBUG
    ? createStore(
        rootReducer,
        compose(
          console.tron.createEnhancer(),
          ...enhancers
        )
      )
    : createStore(rootReducer, compose(...enhancers));
};
const configureStore = (
  rootReducer: any,
  rootSaga: any,
  _middleware: any
): { store: any; sagaManager: any; sagaMiddleware: any } => {
  const middleware: any[] = [].concat(_middleware);
  const enhancers: any = [];
  const sagaMonitor = Config.DEBUG ? console.tron.createSagaMonitor() : null;
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));
  const store = create(rootReducer, enhancers);
  if (ReduxPersist.active) {
    // Rehydration.updateReducers(store);
  }
  const sagaManager = sagaMiddleware.run(rootSaga);
  return { store, sagaManager, sagaMiddleware };
};
export default (reducers, sagas): any => {
  let finalReducer = reducers;
  if (ReduxPersist.active) {
    // const persistConfig = ReduxPersist.storeConfig;
    // finalReducer = persistReducer(persistConfig, reducers);
  }
  let { store, sagaManager, sagaMiddleware } = configureStore(
    finalReducer,
    sagas,
    [NavigationMiddleware]
  );
  const _module = module as any;
  if (_module.hot) {
    // _module.hot.accept(() => {
    //     const nextRootReducer = require("./").reducers;
    //     store.replaceReducer(nextRootReducer);
    //     const newYieldedSagas = require("../../adapters/redux/sagas").default;
    //     sagaManager.cancel();
    //     sagaManager.done.then(() => {
    //         sagaManager = sagaMiddleware.run(newYieldedSagas);
    //     });
    // });
  }
  return store;
};
