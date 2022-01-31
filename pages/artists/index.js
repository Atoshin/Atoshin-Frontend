import classes from '../../styles/ArtistList/artistList.module.scss'
import {useTheme} from "@mui/material/styles";
import axios from "axios";
import Link from 'next/link';

export default function Artists({artists}) {
    const theme = useTheme();

    return (
        <>
            <div className={classes.ArtistTitle}>
                Artists
            </div>
            <div className={classes.root}>
                <div className={classes.row}>
                    {artists.map(artist => {
                        return <Link href={`/artists/${artist.fullName.toLowerCase().replace(/ /g, "-")}/${artist.id}`}>
                            <div className={classes.item}>
                                <div className={classes.img}
                                     style={{
                                         backgroundImage: `url("${artist.medias.find(media => media.main === 1).url}")`,
                                         backgroundSize: "cover",
                                         backgroundPosition: "center"
                                     }}/>
                                <div className={classes.imgTitle}>{artist.fullName}</div>
                            </div>
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