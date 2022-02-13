import classes from '../styles/FAQ/FAQ.module.scss'
import {Collapse} from "@mui/material";
import {useState} from "react";

export default function FAQ() {
    const [state, setState] = useState(false)

    return <div>
        <div className={classes.faqTitleSec}>
            <p className={classes.FAQ}>FAQ</p>
            <h1 className={classes.faqTitle}>Frequently Asked Questions</h1>
        </div>

        <div className={classes.QaContainer}>
            <div className={classes.item} onClick={() => setState(!state)}>
                <div className={classes.number}>
                    1
                </div>
                <div className={classes.qMainSection}>
                    <h3 className={classes.question}>What is an NFT?</h3>
                    {state ?
                        <img src={"/icons/arrowDown.svg"} alt="" style={{marginRight: 15}}/>
                        :
                        <img src={"/icons/arrowRight.svg"} alt="" style={{marginRight: 15}}/>
                    }
                </div>
                <Collapse in={state}>
                    <div className={classes.answer}>
                        Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of
                        Iran. He grew up in a great black tent on the top of a mountain, among horses and fields of blue and
                        yellow wild flowers. Reza moved from the study of constellations of light made by moonlight shining
                        through tiny holes in the tent to the study of mathematics in high school, and visual arts in Tehran
                        and the U.S.
                    </div>
                </Collapse>
            </div>

        </div>
    </div>
}