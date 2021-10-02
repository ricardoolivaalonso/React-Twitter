import parse from 'html-react-parser'
import { useSelector, useDispatch } from 'react-redux'
import {
    OPEN_MODAL_ACTION,
} from '../../redux/actions'
import { TweetStatsComponent } from '../03-components/TweetStatsComponent'
import { TweetHashtagElement } from '../04-elements/TweetHashtagElement'
import { TweetOptionsElement } from '../04-elements/TweetOptionsElement'
import { TweetTagElement } from '../04-elements/TweetTagElement'

import { UserAvatarElement } from "../04-elements/UserAvatarElement"
import { UserElement } from "../04-elements/UserElement"
import { UserNameElement } from "../04-elements/UserNameElement"

const ModalSection = ({current}) => {
    const dispatch = useDispatch()
    const User = useSelector(state => state.tweetReducer)

    return(
        <div className="modal">
            <a href="#placeholder" className="modal__close" onClick={()=>dispatch(OPEN_MODAL_ACTION())}>
                <svg viewBox="0 0 24 24" className="g-svg">
                    <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z" />
                </svg>
            </a>

            <div className="modal__attachment">
                <img className="modal__attachment-picture" src={User.modal[0].tweet.attachment[0]} alt="This is my placeholder" />
            </div>

            <div className="modal__content">

                <div className="modal__profile">
                    <UserAvatarElement avatar={User.modal[0].user.avatar}></UserAvatarElement>
                    <UserNameElement mod='modal__profile-name'>{User.modal[0].user.name}</UserNameElement>
                    <UserElement mod='modal__profile-id'>{User.modal[0].user.id}</UserElement>
                    <TweetOptionsElement className='modal__profile-settings' current={current} id={User.modal[0].id} user={User.id}/>
                </div>

                <div className="tweet__info">
                    <p className="tweet__description">
                        {parse(`${User.modal[0].tweet.description}`)}
                        { User.modal[0].tweet.tags.map( (t, index) => <TweetTagElement key={index}>{t}</TweetTagElement>) }
                        { User.modal[0].tweet.hashtags.map( (t, index) => <TweetHashtagElement key={index}>{t}</TweetHashtagElement>) }
                    </p>
                    <TweetStatsComponent stats={User.modal[0].tweet.stats} id={User.modal[0].id} current={current}/>
                </div>
            </div>
        </div>
    )
}

export { ModalSection }