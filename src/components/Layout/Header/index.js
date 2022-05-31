import classes from '../../../styles/Header/Header.module.scss';
import HeaderContent from "./Content";
import {Slide} from "@mui/material";

export default function Header({setDrawerMenu, isScrolled}) {


    return <>
        <div className={classes.mainHeader}>
            <HeaderContent setDrawerMenu={setDrawerMenu}/>
        </div>
        <Slide direction={"down"} in={isScrolled}>
            <div className={classes.mainHeaderScrolled}>
                <HeaderContent setDrawerMenu={setDrawerMenu}/>
            </div>
        </Slide>
    </>
}