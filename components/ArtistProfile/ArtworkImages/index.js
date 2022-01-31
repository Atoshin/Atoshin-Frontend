import React, {useEffect, useState} from "react";
import useWindowSize from "./hooks/useWindowSize";
import "../../../styles/ArtistProfile/ArtworkImages.module.scss";
import Grid from "./lib/components/Grid";

export default function ArtworkImages({artworks}) {
    let windowSize = useWindowSize();
    // let generatedImages = Array(20)
    //     .fill(1)
    //     .map(() => {
    //         const height = Math.floor(Math.random() * (600 - 300) + 300);
    //         const width = Math.floor(Math.random() * (700 - 200) + 200);
    //         return {
    //             src: `https://via.placeholder.com/${width}x${height}`,
    //             width: width * 10,
    //             height: height * 10
    //         };
    //     });
    const [images, setImages] = useState([]);


    useEffect(() => {
        const imgs = []
        artworks = artworks.filter(artwork => artwork.main !== 1)
        for (let i = 0; i < artworks.length; i++) {
            const pushImage = {}
            // img.onload = function () {
                pushImage.src = artworks[i].url
                pushImage.width = artworks[i].size.width * 10;
                pushImage.height = artworks[i].size.height * 10;
            // }
            //         pushImage.height =  Math.floor(Math.random() * (600 - 300) + 300);
            //         pushImage.width = Math.floor(Math.random() * (700 - 200) + 200);
            // img.src = `/images/ArtistAtrworks/img_${i}.png`
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