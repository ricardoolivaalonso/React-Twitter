import { v4 as uuidv4 } from 'uuid';
import userAvatar from '../img/avatar.jpeg'
import { User } from './initialState'
import { combineReducers } from 'redux'
import { 
    LIKE_TWEET,
    UNLIKE_TWEET,
    CREATE_TWEET,
    OPEN_TWEET,
    DELETE_TWEET,
    OPEN_MODAL
} from './types'


const tweetReducer = (state = User, action) => {
    switch (action.type) {
        case LIKE_TWEET:
            // let currentLike = action.payload.current
            return {
                ...state,
                contentProfile: [
                    ...state.contentProfile.map( tweets => {
                        return (
                            tweets.map( tweet => {
                                if(tweet.id === action.payload.id){
                                    return {
                                        ...tweet,
                                        tweet: {
                                            ...tweet.tweet,
                                            stats: {
                                                ...tweet.tweet.stats,
                                                liked: false,
                                                likes: action.payload.number - 1 
                                            }
                                        }
                                    }
                                }
                                return tweet
                            })
                        )
                    
                    })
                ],
           
            }

        case UNLIKE_TWEET:
            // let currentUnlike = action.payload.current
            return {
                ...state,
                contentProfile: [
                    ...state.contentProfile.map( tweets => {
                        return (
                            tweets.map( tweet => {
                                if(tweet.id === action.payload.id){
                                    return {
                                        ...tweet,
                                        tweet: {
                                            ...tweet.tweet,
                                            stats: {
                                                ...tweet.tweet.stats,
                                                liked: true,
                                                likes: action.payload.number + 1 
                                            }

                                        }
                                        
                                    }
                                }
                                return tweet
                            })
                        )
                    
                    })
                ],
          
            }
            
        case CREATE_TWEET:
            let tweet = {
                id: uuidv4(),
                user: {
                    id: '@carolinehm',
                    name: 'Caroline Holman',
                    avatar: userAvatar,
                    timestamp: 'now',
                },
                tweet: {
                    description: action.payload,
                    tags: [],
                    hashtags: [],
                    attachment: [],
                    type: '',
                    stats: {
                        comments: 0,
                        retweets: 0,
                        likes: 0,
                        liked: false
                    }
                }
            }

            return {
                ...state,
                contentProfile: [
                    ...state.contentProfile.map( (tweets, index) => {
                        if(index===0){
                            return[
                                ...tweets,
                                tweet
                            ]
                        }
                        else{ return tweets }
                    })
                ]
            }
            
        case OPEN_TWEET:
            return {
                ...state,
                menuOpen: !state.menuOpen
            }

        case DELETE_TWEET:
            return {
                ...state,
                contentProfile: [
                    ...state.contentProfile.map( tweets => {
                        return (
                            tweets.filter( tweet => tweet.id !== action.payload.id )
                        )
                    })
                ]
            }

        case OPEN_MODAL:
            let modal = state.contentProfile.map( tweets => 
                    tweets.filter( tweet => tweet.id === action.payload )
                ).flat()

            return {
                ...state,
                modalOpen: !state.modalOpen,
                modal: modal
            }

        default: 
            return state;
    }
}

const rootReducers = combineReducers({
    tweetReducer
})

export { rootReducers }