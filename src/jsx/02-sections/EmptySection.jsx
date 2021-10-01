import { MenuButtonElement } from "../04-elements/MenuButtonElement"

const EmptySection = ({title, description, active}) => {
    return(
        <section className="empty">
            <h2 className="empty__title">{title}</h2>
            <p className="empty__description">{description}</p>
            { active && <MenuButtonElement description='nuevo mensaje'/>}
        </section>
    )
}

export { EmptySection }