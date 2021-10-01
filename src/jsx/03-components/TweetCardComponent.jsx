import parse from 'html-react-parser'
// 
import { UserAvatarElement } from "../04-elements/UserAvatarElement"
import { UserElement } from "../04-elements/UserElement"
import { UserNameElement } from "../04-elements/UserNameElement"
import { TweetHashtagElement } from "../04-elements/TweetHashtagElement"
import { TweetTagElement } from "../04-elements/TweetTagElement"
import { TweetStatsComponent } from "./TweetStatsComponent"
import { TweetOptionsElement } from '../04-elements/TweetOptionsElement'

const TweetCardComponent = ({id, user, tweet, current}) => {

    return (
        <article className="tweet__item" key={id}>
            <UserAvatarElement avatar={user.avatar} />

            <div className="tweet__body">
                <div className="tweet__profile">
                    <UserNameElement mod='tweet__profile-name'>{user.name}</UserNameElement>
                    <UserElement mod='tweet__profile-id'>{user.id}</UserElement>
                    <span className="tweet__profile-time">{user.timestamp}</span>

                    <TweetOptionsElement current={current} id={id} user={user.id}/>
                </div>

                <div className="tweet__info">
                    <p className="tweet__description">
                        {parse(`${tweet.description}`)}
                        { tweet.tags.map( (t, index) => <TweetTagElement key={index}>{tweet.tags[index]}</TweetTagElement>) }
                    </p>
                    { tweet.hashtags.map( (t, index) => <TweetHashtagElement key={index}>{tweet.hashtags[index]}</TweetHashtagElement>) }
                </div>

                <div className={`tweet__attachment ${tweet.type ? tweet.type : ''}`}>
                    { tweet.attachment.map( (t, index) => <img key={index} className="tweet__attachment-picture" src={tweet.attachment[index]} alt="This is a placeholder"/> )}
                </div>

                <TweetStatsComponent stats={tweet.stats} id={id} current={current}/>
            </div>
        </article>
    )
}

export { TweetCardComponent }