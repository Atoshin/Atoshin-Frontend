import classes from '../../styles/HomePage/HomePage.module.scss'
//TODO change all <img/> elements with next <Image/>
import ArtistsSlider from "./ArtistsSlider";
import HomeSlider from "./HomeSlider";
import GallerySection from "./GallerySection";
import {useEffect} from "react";

export default function HomePage({artists, gallery, assets}) {

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        // style.backgroundColor = 'initial';
        // style.backgroundImage = ' url("/backgrounds/left.svg"), url("/backgrounds/right.svg")';
        style.backgroundRepeat = 'no-repeat, no-repeat';
        style.backgroundPosition = 'left top, right top';
        style.backgroundSize = '60%, 30%';
        //endregion
    }, [])

    return <>
        <div className={classes.main}>
            <HomeSlider assets={assets}/>
            <GallerySection gallery={gallery}/>
            <ArtistsSlider artists={artists}/>
        </div>
    </>
}