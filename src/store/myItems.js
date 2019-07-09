//Action Types
const GET_ITEMS = 'GET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

//Initial State
const initialItems = [];

//Action Creators
const getItems = items => ({
    type: GET_ITEMS,
    items
})

const addItem = item => ({
    type: ADD_ITEM,
    item
})

const removeItem = id => ({
    type: REMOVE_ITEM,
    id
})

//Thunk Creators

//TODO: Call fetchItems instead of dispatching addItem to sync with localStorage
export const putItem = item =>
    dispatch => {

        if(localStorage.hasOwnProperty('teachableRubyGems')) {
            let storageData = JSON.parse(localStorage.getItem('teachableRubyGems'));
            let { myItems } = storageData.teachableRubyGems

            //TODO: Check if item doesn't already exist, add it
            if(myItems.every(currItem => currItem.sha !== item.sha)) {
                let storageObj = {
                    teachableRubyGems: {
                        myItems: [...myItems]
                    }
                }

                dispatch(addItem(item));
                storageObj.teachableRubyGems.myItems.push(item);
                localStorage.setItem('teachableRubyGems', JSON.stringify(storageObj));
            }
        } else {
            let storageObj = {
                teachableRubyGems: {
                    myItems: [item]
                }
            }
            
            localStorage.setItem('teachableRubyGems', JSON.stringify(storageObj));
        }

    }

export const deleteItem = id =>
    dispatch => {
        let storageData = JSON.parse(localStorage.getItem('teachableRubyGems'));
        let { myItems } = storageData.teachableRubyGems
        myItems = myItems.filter(item => item.sha !== id);

        let storageObj = {
            teachableRubyGems: {
                myItems: [...myItems]
            }
        }

        dispatch(removeItem(id))
        localStorage.setItem('teachableRubyGems', JSON.stringify(storageObj));
    }

export const fetchItems = () =>
    dispatch =>
        localStorage.teachableRubyGems && localStorage.teachableRubyGems.myItems
            ? dispatch(getItems(localStorage.teachableRubyGems.myItems))
            : []

//Reducer
export const myItems = (state = initialItems, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return action.items
        case ADD_ITEM:
            return [
                ...state,
                action.item
            ]
        case REMOVE_ITEM:
            return state.filter(item => item.sha !== action.id)
        default:
            return state
    }
}