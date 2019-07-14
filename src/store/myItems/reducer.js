import { GET_ITEMS } from './types';

//Initial State
const initialItems = [];

//Reducer
export const myItems = (state = initialItems, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return action.items
        default:
            return state
    }
}