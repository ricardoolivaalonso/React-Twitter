import { UI } from "../../redux/initialState"
import {
    CREATE_TWEET_ACTION,
} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react"
import Picker from 'emoji-picker-react';
// 
import { StatsIconElement } from "../04-elements/StatsIconElement"
import { UserAvatarElement } from "../04-elements/UserAvatarElement"
import { StatsIconEmojiElement } from "../04-elements/StatsIconEmojiElement"

const BoxSection = () => {
    const dispatch = useDispatch()
    const User = useSelector(state => state.tweetReducer)

    let [box, setBox] = useState('')
    const [button, setButton] = useState(true)
    const [chosenEmoji, setChosenEmoji] = useState('');
    const [isVisible, setIsVisible] = useState(false)

    // -------------------
    const heightPost = (e) => {
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }
    const getBox = (e) => {
        let disabled

        if (e.target.value.trim() !== '') disabled = false
        else disabled = true

        setBox(e.target.value)
        setButton(disabled)
        setChosenEmoji('')
    }
    const sendForm = (e) => {
        e.preventDefault()
        dispatch(CREATE_TWEET_ACTION(box.replace(/\n\r?/g, '<br />')))

        setBox('')
        setButton(true)
        setIsVisible(false)
        e.target.children[1].children[0].style.height = 'auto'
    }
   
    const onEmojiClick = (e, emojiObject) => {
        setBox(box += emojiObject.emoji)
        setChosenEmoji(emojiObject.emoji)
    }

    return (
        <form className="box" onSubmit={(e) => sendForm(e)}>
            <UserAvatarElement avatar={User.avatar} mod='box__avatar' />
            <div className="box__inputs">
                <textarea className="box__input" placeholder="¿Qué está pasando?" rows={1}
                    value={ box }
                    onChange={(e) => getBox(e)}
                    onKeyUp={(e) => heightPost(e)}
                />
                {!button && <span className="box__description">Cualquier persona puede responder</span>}
            </div>
            <div className="box__stats">
                <div className="box__stats-list">
                    {
                        UI.stats.map(t => (
                            <StatsIconElement
                                key={t.id}
                                svg={t.svg}
                                href={t.href}
                            />
                        ))
                    }
                    <StatsIconEmojiElement onMyClick={() => setIsVisible(!isVisible)} />
                </div>
                <button className="box__button" disabled={button}>Twittear</button>
                {
                    isVisible && (
                        <div className="emojibox">
                            <Picker onEmojiClick={onEmojiClick} onClick={onEmojiClick} />
                        </div>
                    )
                }
            </div>
        </form>
    )
}

export { BoxSection }