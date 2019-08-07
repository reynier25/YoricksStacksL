import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/tags';

export default (state = {}, action) => {
    Object.freeze

    switch (action.type) {
        case RECEIVE_TAGS:
            const tags = {};
            action.tags.forEach(tag => {
                tags[tag.id] = tag;
            });
            return tags;
        case RECEIVE_TAG:
            Object.assign({}, state, { [action.tag.id]: action.tag });
        default:
            return state;
        
    }

}