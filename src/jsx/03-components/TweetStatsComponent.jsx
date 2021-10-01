import { IconCommentElement } from "../04-elements/IconCommentElement"
import { IconRetweetElement } from "../04-elements/IconRetweetElement"
import { IconLikeElement } from "../04-elements/IconLikeElement"
import { IconShareElement } from "../04-elements/IconShareElement"

const TweetStatsComponent = ({stats, id, current}) => {
    return(
        <div className="tweet__stats">
            <IconCommentElement number={stats.comments}/>
            <IconRetweetElement number={stats.retweets}/>
            <IconLikeElement number={stats.likes} liked={stats.liked} id={id} current={current}/>
            <IconShareElement/>
        </div>
    )
}

export { TweetStatsComponent }