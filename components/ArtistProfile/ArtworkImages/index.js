import React, {useEffect, useState} from "react";
import useWindowSize from "./hooks/useWindowSize";
import "../../../styles/ArtistProfile/ArtworkImages.module.scss";
import Grid from "./lib/components/Grid";

export default function ArtworkImages({artworks}) {
    let windowSize = useWindowSize();
    const [images, setImages] = useState([]);


    useEffect(() => {
        const imgs = []
        artworks = artworks.filter(artwork => artwork.main !== 1)
        for (let i = 0; i < artworks.length; i++) {
            const pushImage = {}
                pushImage.src = artworks[i].url
                pushImage.width = artworks[i].size.width * 10;
                pushImage.height = artworks[i].size.height * 10;
            imgs.push(pushImage)
        }
        setImages(imgs)
    }, [])


    return (
        <div className="App">
            <Grid
                images={images}
                rowHeight={200}
                margin={5}
                isLightboxEnabled={true}
                width={Math.floor(windowSize.innerWidth * 0.8)}
            />
        </div>
    );
}