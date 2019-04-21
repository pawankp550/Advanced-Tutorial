import { SAVE_COMMENT } from './Types'
import { FETCH_COMMENT, CHANGE_AUTH } from './Types'
import axios from 'axios';

export function saveComment(comment){
    return{
        type: SAVE_COMMENT,
        payload: comment
    }
}

export function fetchcomment(){

    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        
        dispatch({
            type : FETCH_COMMENT,
            payload : response
        });

 };

}

export function changeAuth(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

