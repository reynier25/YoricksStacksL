import * as APIUtil from '../utils/tags';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';

const receiveTags = tags => ({
    type: RECEIVE_TAGS,
    tags
})

const receiveTag = tag => ({
    type: RECEIVE_TAG,
    tag
})

export const fetchTags = () => dispatch => (
    APIUtil.fetchTags()
    .then(tags => dispatch(receiveTags(tags)))
)

export const fetchTag = (id) => dispatch => (
    APIUtil.fetchTag(id)
    .then(tag => dispatch(receiveTag(tag)))
)