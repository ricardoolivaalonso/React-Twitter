import { User } from "../../redux/initialState"
import { CardButtonElement } from "../04-elements/CardButtonElement"
import { MainTitleElement } from "../04-elements/MainTitleElement"
import { UserElement } from "../04-elements/UserElement"

const BioSection = () => {
    return(
        <section className="bio">
            <img className="bio__background" src={User.gallery[3]} alt="This is my placeholder" />

            <div className="bio__info">
                <div className="bio__avatar">
                    <img className="bio__avatar-img" src={User.avatar} alt="This is my placeholder" />
                </div>

                <CardButtonElement mod="bio__button">Editar perfil</CardButtonElement>

                <div className="bio__row">
                    <MainTitleElement mod="bio__username">{User.name}</MainTitleElement>
                    <UserElement mod="bio__user">{User.id}</UserElement>
                    <UserElement mod="bio__date">Se unió en septiembre de 2019</UserElement>
                    <div className="bio__stats">
                        <UserElement mod="bio__follow"><span>{User.followers}</span> siguiendo</UserElement>
                        <UserElement mod="bio__follow"><span>{User.following}</span> seguidores</UserElement>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export { BioSection }