import { TabsLinkComponent } from "../03-components/TabsLinkComponent"

const TabsSection = ({page, setTab}) => {
    return(
        <ul className="tabs">
            <div className="tabs__scroll">
                {
                    page.map( (t, index) => (
                        <TabsLinkComponent 
                            key = {t.id}
                            text = {t.text}
                            link = {t.link}
                            index = {index}
                            setTab = {setTab}
                        />
                    ))
                }
            </div>
        </ul>
    )
}

export { TabsSection }