import classes from '../../../styles/Header/Header.module.scss';
import HeaderContent from "./Content";
import {Fade} from "@mui/material";

export default function Header({setDrawerMenu, isScrolled}) {


    return <>
        <div className={classes.mainHeader}>
            <HeaderContent setDrawerMenu={setDrawerMenu}/>
        </div>
        <Fade in={isScrolled}>
            <div className={classes.mainHeaderScrolled}>
                <HeaderContent setDrawerMenu={setDrawerMenu}/>
            </div>
        </Fade>
    </>
}