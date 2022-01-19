import {omit} from 'lodash';

import {Types} from "@/store/reducers/types";
import {ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE} from "@/store/constants/actionTypes";
import {getLocalStorage} from "@/utils/localStorage";

const initialState = typeof window !== 'undefined' && getLocalStorage('store');

const favoriteReducer = (state: {} = initialState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case ADD_PERSON_TO_FAVORITE:
            return {
                ...state,
                ...action.payload
            }
        case REMOVE_PERSON_FROM_FAVORITE:
            return omit(state, [action.payload])
        default:
            return state;
    }
};

export default favoriteReducer;