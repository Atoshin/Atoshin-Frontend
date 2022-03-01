import classes from '../../styles/GalleryList/galleryList.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import axios from "axios";
import shortenWords from "../../functions/shortenWords";
import Link from 'next/link';
import {useEffect} from "react";

export default function GalleryList({galleries}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
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
                    {galleries.map((gallery, idx) => {
                        return <Link key={idx} href={`/art-center/${gallery.id}`}>
                            <a>
                                <div className={classes.item}>
                                    <div className={classes.img}
                                         style={{backgroundImage: `url("${gallery.medias.find(media => media.galleryLargePicture === 1).url}")`, backgroundPosition: "center", backgroundSize: "cover"}}/>
                                    <div className={classes.imgTitle}>{gallery.name}</div>
                                    <div className={classes.itemText}>
                                        {shortenWords(gallery.summary, 180)}...
                                        <span className={classes.more}> more</span>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    })}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {

    const {data: {galleries}} = await axios.get(`${process.env.BASE_URL}/api/art-center/list`)


    return {
        props: {
            galleries
        }
    }
}