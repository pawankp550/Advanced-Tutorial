import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/Types';

it('handles action of type comment', () => {

    const action = {
        type: SAVE_COMMENT,
        payload: 'test comment'
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(['test comment']);


})