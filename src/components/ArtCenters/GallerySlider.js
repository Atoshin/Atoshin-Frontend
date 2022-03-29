import classes from "../../styles/ArtCenter/artCenter.module.scss";
import {Slide} from "react-slideshow-image";
import Link from "next/link";
import shortenWords from "../../functions/shortenWords";
import extractContent from "../../functions/getHtmlInnerText";
import * as React from "react";


export const GallerySlider = () => {
    return (
        <div className={classes.slider2}>
            <Slide {...properties} ref={relatedSliderRef}>
                <div className={classes.slides} style={{width:'100%'}}>
                    {artCenter.assets.map((asset, idx) => {
                        return (
                            <Link href={`/show-asset/${asset.id}`} key={idx}>
                                <a>
                                    <div key={idx}
                                         className={(matches1 || matches2) ? classes.card2 : classes.card}>
                                        <div
                                            className={(matches1 || matches2) ? classes.relatedImg2 : classes.relatedImg}
                                            style={{
                                                backgroundImage: `url("${asset.medias.find(media => media.main === 1).url}")`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: 3,
                                            }}
                                        >
                                        </div>
                                        <div className={classes.relatedDescription}>

                                            {
                                                (new Date(asset.endDate) > new Date()) ?
                                                    <div className={classes.dateSec}>
                                                        <div
                                                            className={(matches1 || matches2) ? classes.relatedDescTitleMob : classes.relatedDescTitle2}>
                                                            {asset.title}
                                                        </div>
                                                        <div
                                                            className={matches1 || matches2 ? classes.date : classes.date1}>
                                                            Sale ends
                                                            in {monthNames[new Date(asset.endDate).getMonth()]} {new Date(asset.endDate).getDate()}, {new Date(asset.endDate).getFullYear()}
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className={classes.dateSec2}>
                                                        <div
                                                            className={(matches1 || matches2) ? classes.relatedDescTitleMob : classes.relatedDescTitle}>
                                                            {asset.title}
                                                        </div>
                                                    </div>
                                            }
                                            <p className={(matches1 || matches2) ? classes.relatedDescDesc2 : classes.relatedDescDesc}>
                                                {
                                                    (matches1 || matches2) ?
                                                        shortenWords(extractContent(asset.bio), 35) + '...'
                                                        :
                                                        shortenWords(extractContent(asset.bio), 60) + '...'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </Slide>
        </div>
    )

}