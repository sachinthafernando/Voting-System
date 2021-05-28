import React from 'react';
import axois from 'axios';
<<<<<<< Updated upstream
import {  USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS,GET_USER, LOGOUT } from './types';
=======
import {  USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT } from './types';
>>>>>>> Stashed changes
import { setAlert } from './alert';
import Authtoken from '../utilities/Authtoken';
import jwt_decode from "jwt-decode"


<<<<<<< Updated upstream
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
  
=======


>>>>>>> Stashed changes
//login
export const login =  (name, password) => async dispatch => {
  const config = {
      headers: { "Content-Type": "application/json" }
  };

  const body = JSON.stringify({ name, password });

<<<<<<< Updated upstream
    try {
        const res = await axois.post("http://localhost:5000/api/LogSignUp/login", body, config);
         
        dispatch(setAlert("Login Successfull", "success")); debugger;
=======
  try {
      const res = await axois.post("https://localhost:5001/api/LogSignUp/login", body, config);
       
      dispatch(setAlert("Login Successfull", "success"));
      dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
      });
      dispatch(loadUser());//loading user
       
  } catch (error) {
      dispatch(setAlert("Invalid email or password", "danger"));
      dispatch({
          type: LOGIN_FAILED
      });
      
  }
};
//load user for Rank 1,2,3,4 Admins
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) { 
    const user = JSON.parse(atob(localStorage.token.split(".")[1]));
    if (user.role === "Rank1Admin") {
      try {
        const res = await axois.get(
          `https://localhost:5001/api/rank1Admin/${user.id}`
        );
>>>>>>> Stashed changes
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
<<<<<<< Updated upstream
        // dispatch(loadUser())
         
    } catch (error) {
        dispatch(setAlert("Invalid name or password", "danger"));
=======
      } catch (error) {
        console.error(error);
        dispatch({ type: AUTH_ERROR });
      }
    }

    else if (user.role === "Rank2Admin") {
      try {
        const res = await axois.get(
          `https://localhost:5001/api/rank2Admin/${user.id}`
        );
>>>>>>> Stashed changes
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
        dispatch({ type: AUTH_ERROR });
      }
    }
<<<<<<< Updated upstream
=======

    else if (user.role === "Rank3Admin") {
      try {
        const res = await axois.get(
          `https://localhost:5001/api/rank3Admin/${user.id}`
        );
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
        dispatch({ type: AUTH_ERROR });
      }
    }

    else if (user.role === "Rank4Admin") {
      try {
        const res = await axois.get(
          `https://localhost:5001/api/rank4Admin/${user.id}`
        );
        dispatch({
          type: USER_LOADED,
          payload: res.data,
        });
      } catch (error) {
        console.error(error);
        dispatch({ type: AUTH_ERROR });
      }
    }

  }
  else {
    dispatch({ type: AUTH_ERROR })
  }
>>>>>>> Stashed changes
};
//logout
export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
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