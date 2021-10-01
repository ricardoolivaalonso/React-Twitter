import { User } from "../../redux/initialState"

const GallerySection = () => {
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