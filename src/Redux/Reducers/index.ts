import { combineReducers } from "redux";
import { Reducers } from "../../Shared/Core/Adapters/Redux";
const reducers = combineReducers({
  nav: Reducers.NavReducer
});
export default reducers;
