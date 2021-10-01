import {
    DELETE_TWEET_ACTION,
} from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const TweetOptionsElement = ({current, id, user}) => {

    const dispatch = useDispatch()
    const [ isVisible, setIsVisible ] = useState(false)

    const deleteTweet = (e,id) => {

        setIsVisible(false)
        dispatch(DELETE_TWEET_ACTION({id, current}))
    }
    
    return(
        
        <a className="tweet__profile-actions " href="#placeholder" onClick={()=>setIsVisible(!isVisible)}>
            <svg className="tweet__profile-icon g-svg"  viewBox="0 0 24 24">
                <circle cx={5} cy={12} r={2} />
                <circle cx={12} cy={12} r={2} />
                <circle cx={19} cy={12} r={2} />
            </svg>
            {
                user === '@carolinehm' ?

                <div className={`tweet__profile-delete ${isVisible ? 'is-search-visible':''}`} onClick={ (e)=>deleteTweet(e, id) }>
                    <svg viewBox="0 0 24 24" className="g-svg">
                        <path d="M20.746 5.236h-3.75V4.25c0-1.24-1.01-2.25-2.25-2.25h-5.5c-1.24 0-2.25 1.01-2.25 2.25v.986h-3.75c-.414 0-.75.336-.75.75s.336.75.75.75h.368l1.583 13.262c.216 1.193 1.31 2.027 2.658 2.027h8.282c1.35 0 2.442-.834 2.664-2.072l1.577-13.217h.368c.414 0 .75-.336.75-.75s-.335-.75-.75-.75zM8.496 4.25c0-.413.337-.75.75-.75h5.5c.413 0 .75.337.75.75v.986h-7V4.25zm8.822 15.48c-.1.55-.664.795-1.18.795H7.854c-.517 0-1.083-.246-1.175-.75L5.126 6.735h13.74L17.32 19.732z" />
                        <path d="M10 17.75c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75zm4 0c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75s-.75.336-.75.75v7c0 .414.336.75.75.75z" />
                    </svg>
                    <span>Eliminar</span>
                </div>
            
                :

                <div className={`tweet__profile-hide ${isVisible ? 'is-search-visible':''}`} onClick={ (e)=>deleteTweet(e, id) }>
                    <svg viewBox="0 0 24 24" className="g-svg">
                        <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" />
                        <path d="M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z" />
                    </svg>
                    <span>No me interesa este tweet</span>
                </div>
            }
        </a>
    )
}

export { TweetOptionsElement }