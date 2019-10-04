import { ReactotronCore } from "reactotron-core-client";
import Reactotron from "reactotron-react-native";
import { reactotronRedux as reduxPlugin } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import Immutable from "seamless-immutable";
import { Config } from ".";
declare global {
    interface Console {
        tron: any;
    }
}
if (Config.IS_DEBUG) {
    const reactotron: ReactotronCore = Reactotron.configure({
        name: "Kikker",
    })
        .useReactNative({})
        .use(reduxPlugin({ onRestore: Immutable }))
        .use(sagaPlugin({}))
        .connect();
    // Let's clear Reactotron on every time we load the app
    if (reactotron) {
        reactotron.clear;
        console.tron = reactotron;
    }
}
