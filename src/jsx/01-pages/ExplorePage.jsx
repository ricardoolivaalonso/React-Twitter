import MetaTags from 'react-meta-tags'
import { useState } from "react"
import { UI } from "../../redux/initialState"
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { TabsSection } from '../02-sections/TabsSection'
import { TrendingSection } from '../02-sections/TrendingSection'
import { FollowSection } from '../02-sections/FollowSection'
import { MessagesSection } from '../02-sections/MessagesSection'

const ExplorePage = () => {
    const [tab, setTab] = useState(0)

    return(
        <>
            <MetaTags><title>Explorar / Twitter</title></MetaTags>
            <HeaderSection title="explorar" />
            <div className="timeline">
                <TabsSection page={UI.tabExplore} setTab={setTab}/>
                <TrendingSection tab={tab}/>
            </div>
            <FollowSection mod="follow--sticky"/>
            <div className="sidebar"></div>
            <MessagesSection />
        </>
    )
}

export { ExplorePage }