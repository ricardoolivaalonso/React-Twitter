import MetaTags from 'react-meta-tags'
import { UI } from "../../redux/initialState"
import { useState } from "react"
import { useSelector } from 'react-redux'
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { BioSection } from '../02-sections/BioSection'
import { TabsSection } from '../02-sections/TabsSection'
import { TweetsSection } from "../02-sections/TweetsSection"
import { SearchSection } from '../02-sections/SearchSection'
import { GallerySection } from '../02-sections/GallerySection'
import { FollowSection } from "../02-sections/FollowSection"
import { NewsSection } from "../02-sections/NewsSection"
import { MessagesSection } from '../02-sections/MessagesSection'

const ProfilePage = () => {
    const [tab, setTab] = useState(0)
    const User = useSelector( state => state.tweetReducer )

    return(
        <>
            <MetaTags><title>Caroline Holman (@carolinehm)</title></MetaTags>
            <HeaderSection title={User.name} />
            <div className="timeline">
                <BioSection />                
                <TabsSection page={UI.tabProfile} setTab={setTab}/>
                <TweetsSection tweets={User.contentProfile} tab={tab} current='contentProfile'/>
            </div>
            <SearchSection />
            <div className="sidebar">
                <GallerySection />
                <FollowSection title='Tal vez te guste'/>
                <NewsSection />
            </div>
            <MessagesSection />
        </>
    )
}

export { ProfilePage }