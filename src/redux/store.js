import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import {combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));