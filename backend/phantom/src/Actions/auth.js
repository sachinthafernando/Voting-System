import axois from 'axios';

import {  USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from './types';
import { setAlert } from './alert';

export const login =  (name, password) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ name, password });

    try {
        const res = await axois.post("http://localhost:5000/api/LogSignUp/login", body, config);
         
        dispatch(setAlert("Login Successfull", "success"));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
         
    } catch (error) {
        dispatch(setAlert("Invalid email or password", "danger"));
        dispatch({
            type: LOGIN_FAILED
        });
        
    }
    

};


// export const registerAdmin = (name, email, address, Contatct_No, password, ReTypePassword) => async dispatch => {
//     const config = {
//         headers: { "Content-Type": "application/json" }
//     };

//     const body = JSON.stringify({ name, email, address, Contatct_No, password, ReTypePassword });

//     try {
//         const res = await axois.post("https://localhost:5001/api/LogSignUp/signup/admin", body, config);
//         console.log("Success");
//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload: res.data
//         });

//     } catch (error) {
//         const errors = error.response.data.errors;
//         console.log(errors);
//         dispatch(setAlert("Something is wrong at your end", "danger"));
//         dispatch({
//             type: REGISTER_FAIL
//         });
//   }

//};