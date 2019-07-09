import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rubyGems } from './rubyGems';
import { myItems } from './myItems';

const reducer = combineReducers({
    rubyGems,
    myItems
})
const middleware = applyMiddleware(
    thunkMiddleware
);

const store = createStore(reducer, middleware)

export default store;
export * from './rubyGems';
export * from './myItems';