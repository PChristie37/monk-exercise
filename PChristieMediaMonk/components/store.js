'use strict'

import  { createLogger }  from 'redux-logger';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getRootReducer from "./../reducers";

const middleware = () => {
  return applyMiddleware(createLogger())
}

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        middleware(),
        applyMiddleware(thunk)
    );

    return store;
}