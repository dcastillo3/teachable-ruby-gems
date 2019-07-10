import axios from 'axios';

//Action Types
const GET_RUBY_GEMS = 'GET_RUBY_GEMS';

//Initial State
const initialRubyGems = [];

//Action Creators
const getRubyGems = gems => ({
    type: GET_RUBY_GEMS,
    gems
})

//TODO: Fix proxy to use relative api path
//Thunk Creators
export const fetchRubyGems = query =>
    dispatch =>
        axios.get(`http://localhost:3000/api/v1/search.json?query=${query}`)
            .then(res => {
                const gems = res.data.length ? res.data : ['No items']

                dispatch(getRubyGems(gems));
            })
            .catch(err => console.log(err))

//Reducer
export const rubyGems = (state = initialRubyGems, action) => {
    switch (action.type) {
        case GET_RUBY_GEMS:
            return action.gems
        default:
            return state
    }
}