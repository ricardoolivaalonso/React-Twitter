import parse from 'html-react-parser'
import { CardSubtitleElement } from '../04-elements/CardSubtitleElement'
import { UserNameElement } from '../04-elements/UserNameElement'

const NewsCardComponent = ({id, topic, title, number, img, card}) => {
    return(
        card ? (
        <article className="news__item" key={id}>
            <div className="news__info">
                <CardSubtitleElement>{topic}</CardSubtitleElement>
                <UserNameElement mod="news__title">{title}</UserNameElement>
                <CardSubtitleElement>{parse(`${number}`)}</CardSubtitleElement>
            </div>
            <div className="news__avatar">
                <img className="news__photo" src={img} alt="This is my placeholder" />
            </div>
        </article>
        )
        : null
        
    )
}

export { NewsCardComponent }