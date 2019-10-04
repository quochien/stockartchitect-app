import { createStore } from '../Shared/Core/Frameworks';
import reducers from "./Reducers";
import sagas from "./Sagas";
export default ()=>createStore(reducers,sagas)