import { GET_ITEMS } from './types';

//Action Creators
const getItems = items => ({
    type: GET_ITEMS,
    items
})

//Thunk Creators
export const putItem = item =>
    dispatch => {
        let storageData = JSON.parse(localStorage.getItem('teachableRubyGems'));

        if (storageData) {
            const { myItems } = storageData.teachableRubyGems

            if (myItems.every(currItem => currItem.sha !== item.sha)) {
                let storageObj = {
                    teachableRubyGems: {
                        myItems: [...myItems, item]
                    }
                }

                localStorage.setItem('teachableRubyGems', JSON.stringify(storageObj))
                dispatch(fetchItems());
            }
        } else {
            let storageObj = {
                teachableRubyGems: {
                    myItems: [item]
                }
            }

            localStorage.setItem('teachableRubyGems', JSON.stringify(storageObj));
            dispatch(fetchItems());
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

        localStorage.setItem('teachableRubyGems', JSON.stringify(storageObj));
        dispatch(fetchItems());
    }

export const fetchItems = () =>
    dispatch => {
        let storageData = JSON.parse(localStorage.getItem('teachableRubyGems'));

        if (storageData) {
            const { myItems } = storageData.teachableRubyGems;

            dispatch(getItems(myItems))
        }
    }