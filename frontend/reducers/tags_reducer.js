import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/tags';

export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_TAG:
            return Object.assign({}, state, { [action.tag.id]: action.tag,  });
            // [action.tag.name]: action.tag.questions
        case RECEIVE_TAGS:
            const tags = {};
            action.tags.forEach(tag => {
                tags[tag.id] = tag;
            });
            return tags;
        default:
            return state;
        
    }

}