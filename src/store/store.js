// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)

// const persistConfig = {
//     key: 'root',
//     storage,
//     blacklist: ['user']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const conposeEnhancer = (
//     process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ) || compose; //$ this is for redux extension tool for chrome




// const composedEnhancer = conposeEnhancer(applyMiddleware(...middleWares))

//@ the 3 middlewares which comes with tookit are 1) thunk, 2) serializableCheck, 3) immutability

export const store = configureStore({
    reducer: rootReducer,
    // middleware: middleWares //# redux toolkit already has 3 middleware by default, by specifying our own middleware we are restricting toolkit to use its own
    middleware: (getDefaultMiddleware) =>   //# this function will turn off the serializable check middlware which is default in toolkit and this throws error in console
        // getDefaultMiddleware({ serializableCheck: false, })
        //     .concat(middleWares) //# this will allow us to use our middlewares along with default ones

        getDefaultMiddleware().concat(middleWares) //# by this we will keep this as it is. but to remove the error we will provide the only necessary data to the toolkit in the app.js
})

// export const store = createStore(persistedReducer, undefined, composedEnhancer)

// export const persistor = persistStore(store)