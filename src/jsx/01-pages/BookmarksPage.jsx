import MetaTags from 'react-meta-tags'
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { EmptySection } from '../02-sections/EmptySection'
import { SearchSection } from '../02-sections/SearchSection'
import { NewsSection } from "../02-sections/NewsSection"
import { FollowSection } from "../02-sections/FollowSection"
import { MessagesSection } from '../02-sections/MessagesSection'
// 
let title = 'Todavía no agregaste ningún Tweet a tus Elementos guardados'
let description = 'cuando lo hagas, aparecerán aquí'

const BookmarksPage = () => {
    return(
        <>
            <MetaTags><title>Notificaciones / Twitter</title></MetaTags>
            <HeaderSection title="guardados" />
            <div className="timeline">
                <EmptySection title={title} description={description} />
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

export { BookmarksPage }