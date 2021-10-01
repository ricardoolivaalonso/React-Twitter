const TrendingHeroComponent = ({hero, topic, news}) => {
    return(
        <div className="trending__hero">
            <img className="trending__bg" src={hero} alt="This is my placeholder" />
            <div className="trending__info">
                <span className="trending__topic">{topic}</span>
                <span className="trending__title">{news}</span>
            </div>
        </div>
    )
}

export { TrendingHeroComponent }