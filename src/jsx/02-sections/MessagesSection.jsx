import { useSelector, useDispatch } from 'react-redux'
import { 
    OPEN_TWEET_ACTION,
} from '../../redux/actions'
// 
import { MessagesItemComponent } from "../03-components/MessagesItemComponent"
import { MainTitleElement } from "../04-elements/MainTitleElement"

const MessagesSection = () => {
    const User = useSelector( state => state.tweetReducer )
    const dispatch = useDispatch()

    return(
        <section className={`messages ${User.menuOpen ? 'is-messages-open':''}`}>
            <div className="messages__header">
                <MainTitleElement>Mensajes</MainTitleElement>

                <div className="messages__stats">
                    <a href="#placeholder" className="tweet__stats-icon tweet__stats-icon--big">
                        <svg className="tweet__stats-svg tweet__stats-svg--fill" viewBox="0 0 24 24">
                            <path d="M23.25 3.25h-2.425V.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75V3.25H16.9c-.414 0-.75.336-.75.75s.336.75.75.75h2.425v2.425c0 .414.336.75.75.75s.75-.336.75-.75V4.75h2.425c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.175 6.876c-.414 0-.75.336-.75.75v8.078c0 .414-.337.75-.75.75H4.095c-.412 0-.75-.336-.75-.75V8.298l6.778 4.518c.368.246.79.37 1.213.37.422 0 .844-.124 1.212-.37l4.53-3.013c.336-.223.428-.676.204-1.012-.223-.332-.675-.425-1.012-.2l-4.53 3.014c-.246.162-.563.163-.808 0l-7.586-5.06V5.5c0-.414.337-.75.75-.75h9.094c.414 0 .75-.336.75-.75s-.336-.75-.75-.75H4.096c-1.24 0-2.25 1.01-2.25 2.25v13.455c0 1.24 1.01 2.25 2.25 2.25h14.48c1.24 0 2.25-1.01 2.25-2.25v-8.078c0-.415-.337-.75-.75-.75z" />
                        </svg>
                    </a>
                    <a href="#placeholder" className="tweet__stats-icon tweet__stats-icon--big" onClick={ ()=>dispatch( OPEN_TWEET_ACTION() )}>
                        <svg className="tweet__stats-svg tweet__stats-svg--fill" viewBox="0 0 24 24">
                            <path d="M12 4.656l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0L12 4.656z" />
                            <path d="M12 12.465l8.72 8.72c.293.293.768.293 1.06 0s.294-.768 0-1.06l-9.25-9.25c-.292-.294-.767-.294-1.06 0l-9.25 9.25c-.146.145-.22.337-.22.53s.073.383.22.53c.293.292.768.292 1.06 0l8.72-8.72z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="messages__slider">
                <div className="messages__list ">
                    {
                        User.messages.map( m => (
                            <MessagesItemComponent 
                                key = { m.id }
                                id = { m.id}
                                name = { m.name }
                                avatar = { m.avatar }
                                content = { m.content }
                                date = {m.date }
                                setIsvisible
                            />
                        ))
                    }
      
                </div>
            </div>
        </section>
    )
}

export { MessagesSection }