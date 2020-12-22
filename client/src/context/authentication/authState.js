import React, { useReducer } from "react";
import AuthContext from "../authentication/authContext";
import AuthReducer from "../authentication/authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  GET_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLOSE_SESSION,
} from "../../types";
import axiosClient from "../../config/axios";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    authenticated: null,
    user: null,
    message: null,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // Functions
  const signUpUser = async (datos) => {
    try {
      const response = await axiosClient.post("api/users", datos);

      dispatch({
        type: REGISTER_ERROR,
      });
      console.group(response);
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_SUCCESS,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authenticated: state.authenticated,
        user: state.user,
        message: state.message,
        signUpUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
