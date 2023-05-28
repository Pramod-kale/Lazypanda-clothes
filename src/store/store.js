import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
//# import thunk from 'redux-thunk'; // either use saga or thunk, not both at once
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)


const middleWares = [
    process.env.NODE_ENV !== 'production' && logger,
    sagaMiddleware
].filter(Boolean)

const conposeEnhancer = (
    process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose; //$ this is for redux extension tool for chrome 




const composedEnhancer = conposeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancer
)


sagaMiddleware.run(rootSaga)
export const persistor = persistStore(store)