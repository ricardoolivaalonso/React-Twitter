import parse from 'html-react-parser'

const StatsIconElement = ({svg, href}) => {
    return(
        <div className="box__stats-container tweet__stats-container" >
            <a className="tweet__stats-icon tweet__stats-icon--big" href={href}>{parse(`${svg}`)}</a>
        </div>
    )
}

export { StatsIconElement }