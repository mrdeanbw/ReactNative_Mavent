import axios from 'axios';
import {
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_RETRYPASSWORD_CHANGED,
  REG_FIRSTNAME_CHANGED,
  REG_LASTNAME_CHANGED,
  REG_GENDER_CHANGED,
  REG_DOB_CHANGED,
  REG_USER,
  REG_USER_SUCCESS,
  REG_USER_FAIL,

} from './types';

const SIGNUP_URL = 'http://ec2-54-169-5-181.ap-southeast-1.compute.amazonaws.com:3000/signup';

export const emailRegChanged = (text) => {
  return {
    type: REG_EMAIL_CHANGED,
    payload: text
  };
};

export const passwordRegChanged = (text) => {
  return {
    type: REG_PASSWORD_CHANGED,
    payload: text
  };
};

export const retrypasswordRegChanged = (text) => {
  return {
    type: REG_RETRYPASSWORD_CHANGED,
    payload: text
  };
};

export const firstnameRegChanged = (text) => {
  return {
    type: REG_FIRSTNAME_CHANGED,
    payload: text
  };
};

export const lastnameRegChanged = (text) => {
  return {
    type: REG_LASTNAME_CHANGED,
    payload: text
  };
};

export const genderRegChanged = (text) => {
  return {
    type: REG_GENDER_CHANGED,
    payload: text
  };
};

export const dobRegChanged = (text) => {
  return {
    type: REG_DOB_CHANGED,
    payload: text
  };
};

export const registerUser = ({ email, password }) => async dispatch => {
  try {
    let { data } = await axios.post(SIGNUP_URL, { email, password });
    if (data) {
      dispatch({ type: REG_USER_SUCCESS, payload: data });
    }
  } catch (e) {
    dispatch({ type: REG_USER_FAIL });
  }
};

export const checkContent = () => {
  return {
    type: REG_USER,
  }
};
