import MetaTags from 'react-meta-tags'
import { useSelector } from 'react-redux'
import { useState } from "react"
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { BoxSection } from '../02-sections/BoxSection'
import { TweetsSection } from "../02-sections/TweetsSection"
import { SearchSection } from '../02-sections/SearchSection'
import { NewsSection } from "../02-sections/NewsSection"
import { FollowSection } from "../02-sections/FollowSection"
import { MessagesSection } from '../02-sections/MessagesSection'

const HomePage = () => {
    const [tab, setTab] = useState(0)
    const User = useSelector( state => state.tweetReducer )

    return(
        <>
            <MetaTags><title>Inicio / Twitter</title></MetaTags>
            <HeaderSection title="inicio"/>
            <div className="timeline">
                <BoxSection />
                <TweetsSection tweets={User.contentProfile} tab={tab} current='timeline'/>
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

export { HomePage }