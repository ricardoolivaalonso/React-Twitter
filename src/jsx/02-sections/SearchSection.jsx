import { useState } from "react"

const SearchSection = ({mod, placeholder = 'Buscar en Twitter'}) => {
    const [isVisible, setIsVisible ] = useState(false)
    const [input, setInput] = useState('')
    
    const getSearch = (e) => {
        setInput(e.target.value)
        setIsVisible(true)
    } 
    const resetSearch = () => {
        setInput('')
        setIsVisible(false)
    }
    const hideSearch = () => {
        let hide 
        input.length === 0 ? hide = false : hide = true 
        setIsVisible(hide) 
    }
    
    return (
        <section className={`search ${mod ? mod : ''}`}>
            <div className="search__row">
                <input className="search__input" type="text" placeholder={placeholder} 
                    value={input}
                    onChange = {(e)=>getSearch(e)}
                    onKeyUp = { hideSearch }
                />
                <span className="search__icon">
                    <svg className="search__svg" viewBox="0 0 24 24">
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                    </svg>
                </span>
                <a href="#placeholder" 
                    className={`search__icon search__icon--search ${isVisible ? 'is-search-visible' : '' }`} 
                    onClick={resetSearch}
                >
                    <svg className="search__svg" viewBox="0 0 15 15">
                        <path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z" />
                    </svg>
                </a>
                
            </div>
        </section>
    )
}

export { SearchSection }