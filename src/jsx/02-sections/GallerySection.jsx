import { useSelector } from 'react-redux'

const GallerySection = () => {
    const User = useSelector(state => state.tweetReducer)

    return(
        <section className="gallery">
            {
                User.gallery.map( (g,index) => (
                    <a href="#placeholder" className="gallery__item" key={index}>
                        <img key={index} src={g} className="gallery__img" alt="This is my placeholder"/>
                    </a>
                ))
            }
        </section>
    )
}

export { GallerySection }