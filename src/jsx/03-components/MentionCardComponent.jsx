import { UserAvatarElement } from '../04-elements/UserAvatarElement'
import { UserElement } from '../04-elements/UserElement'
import { UserNameElement } from '../04-elements/UserNameElement'
import { TweetStatsComponent } from "../03-components/TweetStatsComponent"
import parse from 'html-react-parser'

const MentionCardComponent = ({name, svg, avatar, description, stats}) => {

    return(
        <a className="mentions__item" href="#placeholder">
            <div className="mentions__bg">{parse(`${svg}`)}</div>
            <div className="mentions__info">
                <div className="mentions__avatars">
                    { avatar.map( (a, index) => <UserAvatarElement key={index} avatar={a} mod="mentions__img" /> ) }
                </div>
                <UserNameElement mod="mentions__user">{parse(`${name}`)}</UserNameElement>
                <UserElement>{description}</UserElement>

                { stats ? <TweetStatsComponent stats={stats} /> : null}
            </div>
        </a>
    )
}

export { MentionCardComponent }