import { UI } from "../../redux/initialState"
// 
import { MainTitleElement } from '../04-elements/MainTitleElement'
import { NewsCardComponent } from "../03-components/NewsCardComponent"
import { ShowLinkElement } from "../04-elements/ShowLinkElement"

const NewsSection = () => {
    return(
        <section className="news">
            <section className="news__trending">
                <MainTitleElement mod='news__main-title'>Qué está pasando</MainTitleElement>
                {
                    UI.news.map( s => (
                        <NewsCardComponent 
                            key = {s.id}
                            id = {s.id}
                            topic = {s.topic}
                            title = {s.title}
                            number = {s.number}
                            img = {s.img}
                            card = {s.card}
                        />
                    ))
                }
                <ShowLinkElement>Mostrar más</ShowLinkElement>
            </section>
        </section>
    )
}

export { NewsSection }