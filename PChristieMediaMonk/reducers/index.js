import { combineReducers } from "redux";

import albumReducer from "./albumReducer";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        album: albumReducer,
    });
}