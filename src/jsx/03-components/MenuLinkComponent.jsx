import parse from 'html-react-parser'
import { NavLink } from 'react-router-dom'
import { MainTitleElement } from '../04-elements/MainTitleElement'

const MenuLinkComponent = ({title, svg, href}) => {
    return(
        <li className='menu__item'>
            <NavLink to={href} exact={true} className="menu__link" activeClassName="menu__link--active">
                <div className="menu__icon menu__icon--active" >{parse(`${svg}`)}</div>
                { title && <MainTitleElement mod='menu__title menu__title--active' >{title}</MainTitleElement> }
            </NavLink>
        </li>

    )
}

export { MenuLinkComponent }