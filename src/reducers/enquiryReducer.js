import { ADD_ENQUIRY_SUCCESS, FETCH_ENQUIRIES_SUCCESS } from '../actions/courseActions';

const initialState = {
  enquiries: [],
};

const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ENQUIRY_SUCCESS:
      return {
        ...state,
        enquiries: [...state.enquiries, action.payload],
      };
    case FETCH_ENQUIRIES_SUCCESS:
      return {
        ...state,
        enquiries: action.payload,
      };
    default:
      return state;
  }
};

export default enquiryReducer;