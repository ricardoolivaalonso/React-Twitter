import parse from 'html-react-parser'
import { NavLink } from 'react-router-dom'
import { MainTitleElement } from '../04-elements/MainTitleElement'
import { useEffect } from 'react'

const MenuLinkComponent = ({title, svg, href, idx}) => {

    const initialQueries = () => {
        document.documentElement.style.setProperty("--center", "minmax(auto, calc(1265px / 2))")
        document.documentElement.style.setProperty("--right", "minmax(290px, calc(1265px / 3.4))")
    }
    const msgQueries = () => {
        document.documentElement.style.setProperty("--center", "minmax(290px, calc(1265px / 3.4))")
        document.documentElement.style.setProperty("--right", "minmax(auto, calc(1265px / 2))")
    }
    // ====================================
    const breakPoints = () => {
        if (window.matchMedia("(min-width: 1000px)").matches) msgQueries()
        else if(window.matchMedia("(max-width: 1000px)").matches) initialQueries()
    }
    
    const defaultQueries = (e) => {
        const link = document.querySelector('.menu__link--active')
        link.id && breakPoints()
    }
    
    const getLinks = (e) => e.currentTarget.id ? breakPoints() : initialQueries() 

    useEffect(() => {
        defaultQueries()
        window.addEventListener('resize', defaultQueries)

        return () =>  window.removeEventListener('resize', defaultQueries())
    },)

    
    return(
        <li className='menu__item'> 
            <NavLink 
                to={href} 
                exact={true} 
                className="menu__link" 
                activeClassName="menu__link--active" 

                id={idx == 4 ? idx : null }  
                onClick={(e)=>getLinks(e)}
            >
                <div className="menu__icon menu__icon--active" >{parse(`${svg}`)}</div>
                { title && <MainTitleElement mod='menu__title menu__title--active' >{title}</MainTitleElement> }
            </NavLink>
        </li>

    )
}

export { MenuLinkComponent }