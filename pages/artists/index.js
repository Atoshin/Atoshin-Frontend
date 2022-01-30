import classes from '../../styles/ArtistList/artistList.module.scss'
import {useTheme} from "@mui/material/styles";

export default function Artists() {

    const theme = useTheme();

    return (
        <>
            <div className={classes.ArtistTitle}>
                Artist
            </div>
            <div className={classes.root}>
                <div className={classes.row}>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_8.png")`}}/>
                        <div className={classes.imgTitle}>Reza Derakhshani</div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_8.png")`}}/>
                        <div className={classes.imgTitle}>Reza Derakhshani</div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_8.png")`}}/>
                        <div className={classes.imgTitle}>Reza Derakhshani</div>
                    </div>

                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_8.png")`}}/>
                        <div className={classes.imgTitle}>Reza Derakhshani</div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_8.png")`}}/>
                        <div className={classes.imgTitle}>Reza Derakhshani</div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.img} style={{backgroundImage: `url("images/img_8.png")`}}/>
                        <div className={classes.imgTitle}>Reza Derakhshani</div>
                    </div>
                </div>
            </div>
        </>
    )
}

// export async function getServerSideProps(ctx){
//
//     const {data: {}}
//
//     return {
//         props: {}
//     }
// }