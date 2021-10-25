import { UI } from "../../redux/initialState"
// 
import { MenuButtonElement } from "../04-elements/MenuButtonElement"
import { MenuLinkComponent } from "../03-components/MenuLinkComponent"
import { MenuSettingsComponent } from "../03-components/MenuSettingsComponent"
import { MainTitleElement } from "../04-elements/MainTitleElement"

const MenuSection = () => {
    return (
        <nav className="menu">
            <ul className="menu__list">
                {
                    UI.menu.map( (m,index) => (
                        <MenuLinkComponent
                            key={ m.id }
                            id={ m.id }
                            title={ m.title }
                            href={ m.href }
                            svg={ m.svg }
                            mod={ m.mod }
                            idx = {index}
                        />
                    ))
                }

                <li className='menu__item'>
                    <a href="#placeholder" className="menu__link" >
                        <div className="menu__icon menu__icon--active">
                            <svg className="menu__svg g-svg" viewBox="0 0 24 24"><path d="M16.5 10.25c-.965 0-1.75.787-1.75 1.75s.784 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.786-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.966 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75 1.75-.786 1.75-1.75-.784-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75zm-4.5-2.5c-.965 0-1.75.787-1.75 1.75s.785 1.75 1.75 1.75c.964 0 1.75-.786 1.75-1.75s-.787-1.75-1.75-1.75zm0 2.5c-.414 0-.75-.336-.75-.75 0-.413.337-.75.75-.75s.75.336.75.75c0 .413-.336.75-.75.75z" /><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" /></svg>'
                        </div>
                        <MainTitleElement mod='menu__title menu__title--active' >más opciones</MainTitleElement>
                    </a>
                </li>
                <li className="menu__item"><MenuButtonElement description='twittear'/></li>
            </ul>
            <MenuSettingsComponent />
        </nav>
    )
}

export { MenuSection }