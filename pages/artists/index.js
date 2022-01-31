import classes from '../../styles/ArtistList/artistList.module.scss'
import {useTheme} from "@mui/material/styles";
import axios from "axios";

export default function Artists({artists}) {

    const theme = useTheme();

    return (
        <>
            <div className={classes.ArtistTitle}>
                Artist
            </div>
            <div className={classes.root}>
                <div className={classes.row}>
                    {artists.map(artist => {
                        return <div className={classes.item}>
                            <div className={classes.img}
                                 style={{backgroundImage: `url("${artist.media.find(media => media.main === 1).url}")`}}/>
                            <div className={classes.imgTitle}>{artist.fullName}</div>
                        </div>
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