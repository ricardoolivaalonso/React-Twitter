import { TweetCardComponent } from "../03-components/TweetCardComponent"

const TweetsSection = ({tweets, tab, current}) => {

    return (
        <section className="tweets">
                {
                    tweets.map((tweet,index) => (
                        tweet.slice(0).reverse().map( t => {
                            if (current === 'contentProfile') {
                                if( index === tab ){
                                    return(
                                        <div className="tweets__list" key={t.id} index={index}>
                                            <TweetCardComponent
                                                key = {t.id}
                                                id = {t.id}
                                                user = { t.user }
                                                tweet = { t.tweet }
                                                current = {current}
                                            />
                                        </div>
                                    )
                                }
                            }
                            else{
                                return(
                                    <div className="tweets__list" key={t.id} index={index}>
                                        <TweetCardComponent
                                            key = {t.id}
                                            id = {t.id}
                                            user = { t.user }
                                            tweet = { t.tweet }
                                            current = {current}
                                        />
                                    </div>
                                )
                            }
                        })
                    ))
                }
               
        </section>
    )
}

export { TweetsSection }