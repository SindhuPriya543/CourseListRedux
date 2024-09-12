
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import courseReducer from './reducers/courseReducer';
import enquiryReducer from './reducers/enquiryReducer';

// Combine reducers
const rootReducer = combineReducers({
  courses: courseReducer,
  enquiries: enquiryReducer,
});

// Create store with middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;