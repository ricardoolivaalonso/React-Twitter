import { UI } from "../../redux/initialState"
import { FollowCardComponent } from "../03-components/FollowCardComponent"
import { MainTitleElement } from "../04-elements/MainTitleElement"
import { ShowLinkElement } from "../04-elements/ShowLinkElement"

const FollowSection = ({title = "A quién seguir", mod = ''}) => {
    return(
        <section className={`follow ${mod}`}>
            <MainTitleElement mod='news__main-title'>{title}</MainTitleElement>
            <div className="follow__list">
                {
                    UI.follow.map( f => (
                        <FollowCardComponent 
                            key = { f.id }
                            id = { f.id }
                            name = { f.name }
                            avatar = { f.avatar }
                        />
                    ))
                }
                <ShowLinkElement>Mostrar más</ShowLinkElement>
            </div>
        </section>
    )
}

export { FollowSection }