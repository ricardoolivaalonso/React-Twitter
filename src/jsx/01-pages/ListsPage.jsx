import MetaTags from 'react-meta-tags'
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { EmptySection } from '../02-sections/EmptySection'
import { SearchSection } from '../02-sections/SearchSection'
import { NewsSection } from "../02-sections/NewsSection"
import { FollowSection } from "../02-sections/FollowSection"
import { MessagesSection } from '../02-sections/MessagesSection'
// 
let title = 'Aun no hay nada para ver aquí. Fija tus Listas favoritas para aceeder a ellas rápidamente.'
let description = 'cuando lo hagas, aparecerán aquí'

const ListsPage = () => {
    return(
        <>
            <MetaTags><title>Notificaciones / Twitter</title></MetaTags>
            <HeaderSection title="listas" />
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

export { ListsPage }