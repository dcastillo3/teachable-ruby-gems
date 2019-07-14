import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rubyGems } from './rubyGems/reducer';
import { myItems } from './myItems/reducer';

const reducer = combineReducers({
    rubyGems,
    myItems
})
const middleware = applyMiddleware(
    thunkMiddleware
);

const store = createStore(reducer, middleware)

export default store;
export * from './rubyGems/actions';
export * from './myItems/actions';