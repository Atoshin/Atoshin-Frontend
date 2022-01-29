import classes from '../../styles/GalleryList/galleryList.module.scss'
import dynamic from "next/dynamic";
import {Slide} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css';
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import {useEffect, useRef} from "react";

export default function galleryList() {
    const galleryImages = [
        "images/img_7.png",
        "images/img_7.png",
        "images/img_7.png",
        "images/img_7.png",
        "images/img_7.png",
        "images/img_7.png",
    ]

    const Map = dynamic(() => {
        console.log('hi')
        return import('../../components/ArtCenters/Map')
    }, {ssr: false})
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const gallerySliderRef = useRef()
    const relatedSliderRef = useRef()

    useEffect(() => {
        let marker = document.getElementsByClassName('leaflet-marker-icon')[0];
        console.log(marker)
        // marker.src = marker.src.slice(0, 65)
    }, [])


    return (
        <>
            <div className={classes.sortSec}>
                {/*<div className={classes.sort}> Sort by</div>*/}
                {/*<div className={classes.sortList}>*/}
                {/*    <div className={classes.sortListText}>Newest</div>*/}
                {/*</div>*/}
            </div>

            <div className={classes.root}>
                <div className={classes.row}>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_10.png")`}}></div>
                        <div className={classes.imgTitle}>DD Gallery</div>
                        <div className={classes.itemText}>
                                Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses
                                <span className={classes.more}> more</span>

                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_10.png")`}}></div>
                        <div className={classes.imgTitle}>DD Gallery</div>
                        <div className={classes.itemText}>
                            Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses
                            <span className={classes.more}> more</span>

                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_10.png")`}}></div>
                        <div className={classes.imgTitle}>DD Gallery</div>
                        <div className={classes.itemText}>
                            Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses
                            <span className={classes.more}> more</span>

                        </div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_10.png")`}}></div>
                        <div className={classes.imgTitle}>DD Gallery</div>
                        <div className={classes.itemText}>
                            Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses
                            <span className={classes.more}> more</span>

                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_10.png")`}}></div>
                        <div className={classes.imgTitle}>DD Gallery</div>
                        <div className={classes.itemText}>
                            Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses
                            <span className={classes.more}> more</span>

                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_10.png")`}}></div>
                        <div className={classes.imgTitle}>DD Gallery</div>
                        <div className={classes.itemText}>
                            Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses
                            <span className={classes.more}> more</span>

                        </div>
                    </div>
                </div>
                {/*<div className={classes.row}>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.row}>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={classes.row}>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*    <div className={classes.item}>*/}
                {/*        <div className={classes.img}></div>*/}
                {/*        <div className={classes.imgTitle}>Reza Derakhshani</div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </>
    )
}