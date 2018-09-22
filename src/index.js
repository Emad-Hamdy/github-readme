import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { gitReducer, requestRepos, requestReadme } from './redux/reducers';
import  thunkMiddleware  from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const logger = createLogger();
const rootReducer = combineReducers({ gitReducer, requestRepos, requestReadme })

const persistConfig = {
    key: 'root',
    storage,
  }
  
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware, logger));
let persistor = persistStore(store)




ReactDOM.render(    <Provider store={store} >
                        <PersistGate loading={null} persistor={persistor}>
                            <App/>
                        </PersistGate>
                    </Provider> , document.getElementById('root')
                );

