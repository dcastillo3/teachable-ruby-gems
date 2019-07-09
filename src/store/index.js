import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rubyGems } from './rubyGems';

const reducer = combineReducers({
    rubyGems
})
const middleware = applyMiddleware(
    thunkMiddleware
);

const store = createStore(reducer, middleware)

export default store;
export * from './rubyGems';