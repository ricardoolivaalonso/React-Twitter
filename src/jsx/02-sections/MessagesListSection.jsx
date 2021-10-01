import { useSelector } from 'react-redux'
import { MessagesItemComponent } from "../03-components/MessagesItemComponent"

const MessagesListSection = () => {
    const User = useSelector( state => state.tweetReducer )

    return(
        <div className="messages__slider">
            <div className="messages__list">
                {
                    User.messages.map( m => (
                        <MessagesItemComponent 
                            key = { m.id }
                            id = { m.id}
                            name = { m.name }
                            avatar = { m.avatar }
                            content = { m.content }
                            date = {m.date }
                        />
                    ))
                }
                
            </div>
        </div>
    )
}

export { MessagesListSection }