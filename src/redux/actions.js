import { 
    LIKE_TWEET,
    UNLIKE_TWEET,
    CREATE_TWEET,
    OPEN_TWEET,
    DELETE_TWEET,
    OPEN_MODAL
} from './types'

const LIKE_TWEET_ACTION = (id) => ({
    type: LIKE_TWEET,
    payload: id
})
const UNLIKE_TWEET_ACTION = (id) => ({
    type: UNLIKE_TWEET,
    payload: id
})
const CREATE_TWEET_ACTION = (tweet) => ({
    type: CREATE_TWEET,
    payload: tweet
})
const OPEN_TWEET_ACTION = () => ({
    type: OPEN_TWEET
})
const DELETE_TWEET_ACTION = (id) => ({
    type: DELETE_TWEET,
    payload: id
})
const OPEN_MODAL_ACTION = (id) => ({
    type: OPEN_MODAL,
    payload: id
})

export {
    LIKE_TWEET_ACTION,
    UNLIKE_TWEET_ACTION,
    CREATE_TWEET_ACTION,
    OPEN_TWEET_ACTION,
    DELETE_TWEET_ACTION,
    OPEN_MODAL_ACTION
}