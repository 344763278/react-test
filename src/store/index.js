import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import bigDataReducer from './bigData'
import userInfoReducer from './userInfo' 

const reducers = combineReducers({
  bigData: bigDataReducer,
  userInfo: userInfoReducer, 
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;