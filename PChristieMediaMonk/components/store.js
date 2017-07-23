'use strict'
import {AsyncStorage} from 'react-native'
import  { createLogger }  from 'redux-logger';
import { compose, createStore, applyMiddleware } from "redux";

import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from "redux-thunk";
import getRootReducer from "./../reducers";

const middleware = () => {
  return applyMiddleware(createLogger())
}

export default function getStore(navReducer) {
    // const store = createStore(
    //     getRootReducer(navReducer),
    //     middleware(),
    //     applyMiddleware(thunk)
    // );

    const store = createStore(
    	getRootReducer(navReducer),
        middleware(),
        applyMiddleware(thunk),
    	autoRehydrate(),
    );


    persistStore(store, { blacklist: ['nav'], storage: AsyncStorage}, () => {
    	console.log('restored')
    });
    
    return store;
}




//  let store = compose(
//     	getRootReducer(navReducer),
//         middleware(),
//         applyMiddleware(thunk),
//     	autoRehydrate(),
//     )(createStore);

//     persistStore(store);

// export default store;