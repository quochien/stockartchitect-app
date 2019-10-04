import { createReactNavigationReduxMiddleware, createReduxContainer } from "react-navigation-redux-helpers";
import RootStack from './RootNavigators';
const middleware = createReactNavigationReduxMiddleware((state:any)=>state.nav,"root")
const NavigationWithState = createReduxContainer(RootStack,"root");
export { middleware as NavigationMiddleware, NavigationWithState, RootStack };

