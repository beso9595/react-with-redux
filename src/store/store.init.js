import {combineReducers, createStore} from "redux";
import {mainReducer} from "./reducers/main";


export default createStore(combineReducers({
	main: mainReducer,
}));
