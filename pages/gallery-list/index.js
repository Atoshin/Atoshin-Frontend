import classes from '../../styles/GalleryList/galleryList.module.scss'
import {useTheme} from "@mui/material/styles";
import {useMediaQuery} from "@mui/material";
import axios from "axios";
import shortenWords from "../../functions/shortenWords";
import Link from 'next/link';

export default function galleryList({galleries}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


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
                    {galleries.map(gallery => {
                        return <Link href={`/art-center/${gallery.id}`}>
                            <div className={classes.item}>
                                <div className={classes.img}
                                     style={{backgroundImage: `url("${gallery.medias.find(media => media.galleryLargePicture === 1).url}")`, backgroundPosition: "center", backgroundSize: "cover"}}/>
                                <div className={classes.imgTitle}>{gallery.name}</div>
                                <div className={classes.itemText}>
                                    {shortenWords(gallery.summary, 60)}
                                    <span className={classes.more}> more</span>
                                </div>
                            </div>
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