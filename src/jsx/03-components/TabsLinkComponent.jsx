
const TabsLinkComponent = ({text, link, index, setTab}) => {
   
    const activeTab = (e,index) => {
        let tabs = [...e.currentTarget.parentElement.children]
        tabs.map( t => t.children[0].classList.remove('tabs__link--active') )
        e.currentTarget.children[0].classList.add('tabs__link--active')

        setTab(index)
    }
    
    return(       
        <li className='tabs__item'  onClick={ (e)=>activeTab(e,index) }>
            <a className={`tabs__link ${index === 0 ? 'tabs__link--active': ''}`} href={link}>{text}</a>
        </li> 
    )
}

export { TabsLinkComponent }