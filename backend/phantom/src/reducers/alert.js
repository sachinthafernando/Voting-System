import { SET_ALERT, REMOVE_ALERT } from '../Actions/types';

const initialState = [];

export default function(state = initialState, action) {
    const { type, payload } = action;
    // debugger;

    switch(type)
   {
       case SET_ALERT:
           debugger;
           return [...state, payload];
        //    debugger;
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
   } 
}