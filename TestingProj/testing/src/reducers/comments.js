import { FETCH_COMMENT } from '../actions/Types';
import { SAVE_COMMENT } from '../actions/Types'

export default function(state = [], action){
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload] 
        
        case FETCH_COMMENT:
            const Comments = action.payload.data.map(comment => {
                return comment.name
            })    

            return [...state, ...Comments];
        default: 
            return state;
    }
}