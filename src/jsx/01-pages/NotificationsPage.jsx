import MetaTags from 'react-meta-tags'
import { UI } from "../../redux/initialState"
import { useState } from "react"
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { TabsSection } from '../02-sections/TabsSection'
import { MentionsSections } from '../02-sections/MentionsSection'
import { SearchSection } from '../02-sections/SearchSection'
import { NewsSection } from "../02-sections/NewsSection"
import { FollowSection } from "../02-sections/FollowSection"
import { MessagesSection } from '../02-sections/MessagesSection'

const NotificationsPage = () => {
    const [tab, setTab] = useState(0)

    return(
        <>
            <MetaTags><title>Notificaciones / Twitter</title></MetaTags>
            <HeaderSection title="notificaciones"/>
            <div className="timeline">
                <TabsSection page={UI.tabNotifications} setTab={setTab}/>
                <MentionsSections tab={tab}/>
            </div>
            <SearchSection />
            <div className="sidebar">
                <NewsSection />
                <FollowSection />
            </div>
            <MessagesSection />
        </>
    )
}

export { NotificationsPage }