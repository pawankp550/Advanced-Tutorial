import { combineReducers } from 'redux';
import Comments from './comments';
import authReducer from './auth'; 


export default combineReducers({
    Comments,
    auth : authReducer
});