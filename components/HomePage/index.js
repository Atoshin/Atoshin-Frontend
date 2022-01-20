import classes from '../../styles/HomePage/HomePage.module.scss'
//TODO change all <img/> elements with next <Image/>
import ArtistsSlider from "./ArtistsSlider";
import HomeSlider from "./HomeSlider";
import GallerySection from "./GallerySection";

export default function HomePage({artists, gallery, assets}) {


    return <>
        <div className={classes.main}>
            <HomeSlider assets={assets}/>
            <GallerySection gallery={gallery}/>
            <ArtistsSlider artists={artists}/>
        </div>
    </>
}