import axios from 'axios';

export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const ADD_ENQUIRY_SUCCESS = 'ADD_ENQUIRY_SUCCESS';
export const FETCH_ENQUIRIES_SUCCESS = 'FETCH_ENQUIRIES_SUCCESS';

const API_URL = 'http://localhost:5000';

// Fetch courses
export const fetchCourses = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/courses`);
  dispatch({
    type: FETCH_COURSES_SUCCESS,
    payload: response.data,
  });
};

// Add an enquiry
export const addEnquiry = (enquiry) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/enquiries`, enquiry);
  dispatch({
    type: ADD_ENQUIRY_SUCCESS,
    payload: response.data,
  });
};

// Fetch enquiries
export const fetchEnquiries = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/enquiries`);
  dispatch({
    type: FETCH_ENQUIRIES_SUCCESS,
    payload: response.data,
  });
};