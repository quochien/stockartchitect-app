import { AsyncStorage } from "react-native";
import { persistStore } from "redux-persist";
// import StartupActions from "../adapters/redux/reducer/startup";
// import ReduxPersist from "../Frameworks/Config/ReduxPersist";

const updateReducers = (store: any) => {
    // const reducerVersion = ReduxPersist.reducerVersion;
    // const startup = () => store.dispatch(StartupActions.startup());
    // // Check to ensure latest reducer version
    // return AsyncStorage.getItem("reducerVersion")
    //     .then(localVersion => {
    //         if (localVersion !== reducerVersion) {
    //             // Purge store
    //             persistStore(store, undefined, startup).purge();
    //             AsyncStorage.setItem("reducerVersion", reducerVersion);
    //         } else {
    //             persistStore(store, undefined, startup);
    //         }
    //     })
    //     .catch(() => {
    //         persistStore(store, undefined, startup);
    //         AsyncStorage.setItem("reducerVersion", reducerVersion);
    //     });
};

export default { updateReducers };
