import classes from '../../styles/ArtistList/artistList.module.scss'
import {useTheme} from "@mui/material/styles";
import axios from "axios";
import Link from 'next/link';
import {useEffect} from "react";

export default function Artists({artists}) {
    const theme = useTheme();

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
            <div className={classes.ArtistTitle}>
                Artists
            </div>
            <div className={classes.root}>
                <div className={classes.row}>
                    {artists.map((artist, idx) => {
                        return <Link key={idx} href={`/artists/${artist.fullName.toLowerCase().replace(/ /g, "-")}/${artist.id}`}>
                            <a>
                                <div className={classes.item}>
                                    <div className={classes.img}
                                         style={{
                                             backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,
                                             backgroundSize: "cover",
                                             backgroundPosition: "center",
                                             borderRadius: '3px 3px 0px 0px'
                                         }}/>
                                    <div className={classes.imgTitle}>{artist.fullName}</div>
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

    const {data: {artists}} = await axios.get(`${process.env.BASE_URL}/api/artists`);

    return {
        props: {
            artists
        }
    }
}