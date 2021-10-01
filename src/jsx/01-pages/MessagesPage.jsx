import MetaTags from 'react-meta-tags'
// 
import { HeaderSection } from "../02-sections/HeaderSection"
import { SearchSection } from '../02-sections/SearchSection'
import { MessagesListSection } from '../02-sections/MessagesListSection'
import { EmptySection } from '../02-sections/EmptySection'
// 
let title = 'No tienes ninún mensaje seleccionado'
let description = 'Elige unos de tus mensajes existentes o comienza de nuevo'

const MessagesPage = () => {
    return(
        <>
            <MetaTags><title>Mensajes / Twitter</title></MetaTags>
            <HeaderSection title="mensajes" /> 
            <div className="timeline">
                <SearchSection mod="search--full" placeholder="Buscar personas y grupos" />
                <MessagesListSection />
            </div>
            <div className="sidebar sidebar--sticky">
                <EmptySection title={title} description={description} active />
            </div>       
        </>
    )
}

export { MessagesPage }