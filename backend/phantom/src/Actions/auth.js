import React from 'react';
import axois from 'axios';
import {  USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS,GET_USER, LOGOUT } from './types';
import { setAlert } from './alert';
import Authtoken from '../utilities/Authtoken';
import jwt_decode from "jwt-decode"


//load user 
export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        Authtoken(localStorage.token);
        var data = localStorage.token;
        
        try {
            dispatch({
                type: USER_LOADED,
                payload: data,
            });
            } catch (err) {
            dispatch({
                type: AUTH_ERROR,
            });
        }
      
    }
};
  
//login
export const login =  (name, password) => async dispatch => {
    const config = {
        headers: { "Content-Type": "application/json" }
    };

    const body = JSON.stringify({ name, password });

    try {
        const res = await axois.post("http://localhost:5000/api/LogSignUp/login", body, config);
         
        dispatch(setAlert("Login Successfull", "success")); debugger;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        // dispatch(loadUser())
         
    } catch (error) {
        dispatch(setAlert("Invalid name or password", "danger"));
        dispatch({
            type: LOGIN_FAILED
        });
        
    }
};
//logout
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
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