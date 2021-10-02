import { useSelector } from 'react-redux'
// 
import { NewsCardComponent } from "../03-components/NewsCardComponent"
import { TrendingHeroComponent } from "../03-components/TrendingHeroComponent"

const TrendingSection = ({tab}) => {
    const User = useSelector(state => state.tweetReducer)

    return(
        <section className="trending">

            {     
                User.contentExplore.map((explore,index) => {
                    if( index === tab ){
                        return(
                            <TrendingHeroComponent 
                                key = {explore[0].id}
                                hero = {explore[0].hero}
                                topic = {explore[0].mainTopic}
                                news = {explore[0].mainNews}
                            />

                        )
                    }
                })     
            }

            <div className="trending__list">
                {
                   
                User.contentExplore.map((explore,index) => (
                    explore.map( t => {
                        if( index === tab ){
                            return(
                                <NewsCardComponent 
                                    key = {t.id}
                                    id = {t.id}
                                    topic = {t.topic}
                                    title = {t.title}
                                    number = {t.number}
                                    img = {t.img}
                                    card = {t.card}
                                />
                            )
                        }
                        return null
                    })
                ))
                   
                }
            </div>
        </section>
    )
}

export { TrendingSection }