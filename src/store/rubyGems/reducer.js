import { GET_RUBY_GEMS } from './types';

//Initial State
const initialRubyGems = [];

//Reducer
export const rubyGems = (state = initialRubyGems, action) => {
    switch (action.type) {
        case GET_RUBY_GEMS:
            return action.gems
        default:
            return state
    }
}