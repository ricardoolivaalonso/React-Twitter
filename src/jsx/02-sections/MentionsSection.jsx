import { MentionCardComponent } from "../03-components/MentionCardComponent"
import { useSelector } from 'react-redux'

const MentionsSections = ({tab}) => {
    const User = useSelector( state => state.tweetReducer )

    return(
        <section className="mentions">
            {
                User.contentMentions.map((explore,index) => (
                    explore.map( t => {
                        if( index === tab ){
                            return(
                                <MentionCardComponent 
                                    key = {t.id}
                                    name = {t.name}
                                    svg = {t.svg}
                                    avatar = {t.avatar}
                                    description = {t.description}
                                    stats = {t.stats ? t.stats : null}
                                />
                            )
                        }
                        return null
                    })
                ))
            }
        </section>
    )
}

export { MentionsSections }