import axios from 'axios';
import { LOAD_USERS } from '../constants/actions-types';

//  GET  user 
export const getUsers = () => async dispatch => {
  try {
    const res = await axios.get('/users');
    dispatch({
      type: LOAD_USERS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
  }
};
// Create user
export const addUser = ({
  name,
  surName,
  birthYear,
  birthPlace
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    name,
    surName,
    birthYear,
    birthPlace
  });
  try {
    const res = await axios.post('/users', body, config);
    dispatch(getUsers());
  } catch (error) {
    console.error(error);
  }
};
// Delete user
export const deleteUser = id => async dispatch => {
  try {
    const res = await axios.delete(`/users/${id}`);
    dispatch(getUsers());
  } catch (error) {
    console.error(error);
  }
};
