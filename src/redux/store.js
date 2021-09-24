import { combineReducers, createStore } from "redux";
import cart from "./Cart/reducers";

const allReducers = combineReducers({ cart });

export const store = createStore(allReducers);
