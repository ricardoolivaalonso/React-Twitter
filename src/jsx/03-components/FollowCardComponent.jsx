import { UserElement } from "../04-elements/UserElement"
import { UserNameElement } from "../04-elements/UserNameElement"
import { UserAvatarElement } from "../04-elements/UserAvatarElement"
import { CardButtonElement } from "../04-elements/CardButtonElement";


const FollowCardComponent = ({id, name, avatar}) => {
    return(
        <article className="follow__item">
            <UserAvatarElement avatar={avatar}/>
            <div className="follow__info">
                <UserNameElement>{name}</UserNameElement>
                <UserElement>{id}</UserElement>
            </div>
            <CardButtonElement>seguir</CardButtonElement>
        </article>
    )
}

export { FollowCardComponent }