
import {
  
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGOUT,
} from '../Actions/types';

const initialState = {
    // store the token
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: {}
};

export default function foo(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        // case LOGIN_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                user: JSON.parse(atob(payload.token.split('.')[1])),
                loading: false
            };
       
        case AUTH_ERROR:
            return {...state};
        case LOGIN_FAILED:
            return {...state};
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                loading: false,
				user: null
            };
        default:
            return state;
    }
}