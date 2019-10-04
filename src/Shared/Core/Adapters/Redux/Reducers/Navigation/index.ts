import { RootStack } from "../../../../../../Navigators/";
const ActionForSignIn = RootStack.router.getActionForPathAndParams(
  "AuthorizationStack"
);
const INITIAL_STATE = RootStack.router.getStateForAction(ActionForSignIn);
const reducer = (state = INITIAL_STATE, action) => {
  const nextState = RootStack.router.getStateForAction(action, state);
  return nextState || state;
};
export default reducer;
