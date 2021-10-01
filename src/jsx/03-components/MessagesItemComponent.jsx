const MessagesItemComponent = ({name, id, avatar, date, content}) => {
    return(
        <article className="messages__item">
            <img className="messages__avatar" src={avatar} alt="This is my palceholder" />
            <div className="messages__info">
                <span className="messages__name">{name}</span>
                <span className="messages__id">{id}</span>
            </div>
            <small className="messages__date">{date}</small>
            <p className="messages__content">{content}</p>
        </article>
    )
}

export { MessagesItemComponent }