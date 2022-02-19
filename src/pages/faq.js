import classes from '../styles/FAQ/FAQ.module.scss'
import {Collapse} from "@mui/material";
import {useEffect, useState} from "react";

export default function FAQ() {
    const [state, setState] = useState({})


    const qAndAs = [
        {
            question: 'What is an NFT?',
            answer: 'Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses and fields of blue and yellow wild flowers. Reza moved from the study of constellations of light made by moonlight shining through tiny holes in the tent to the study of mathematics in high school, and visual arts in Tehran and the U.S.'
        },{
            question: 'What is an NFT?',
            answer: 'Painter, musician and performance artist Reza Derakshani was born in Sangsar, in the northeast of Iran. He grew up in a great black tent on the top of a mountain, among horses and fields of blue and yellow wild flowers. Reza moved from the study of constellations of light made by moonlight shining through tiny holes in the tent to the study of mathematics in high school, and visual arts in Tehran and the U.S.'
        },
    ]

    useEffect(() => {
        //region change background color for profile page
        const body = document.getElementsByTagName('body')[0];
        const style = body.style
        style.backgroundColor = '#FFFFFF';
        style.backgroundImage = 'none';
        //endregion
    }, [])


    return <div>
        <div className={classes.faqTitleSec}>
            <p className={classes.FAQ}>FAQ</p>
            <h1 className={classes.faqTitle}>Frequently Asked Questions</h1>
        </div>

        <div className={classes.QaContainer}>
            {qAndAs.map((q, idx) => {
                return <div key={idx} className={classes.item} onClick={() => setState({...state, [idx]: !state[idx]})}>
                    <div className={classes.number}>
                        {idx + 1}
                    </div>
                    <div className={classes.qMainSection}>
                        <h3 className={classes.question}>{q.question}</h3>
                        {state ?
                            <img src={"/icons/arrowDown.svg"} alt="" style={{marginRight: 15}}/>
                            :
                            <img src={"/icons/arrowRight.svg"} alt="" style={{marginRight: 15}}/>
                        }
                    </div>
                    <Collapse in={state[idx]}>
                        <div className={classes.answer}>{q.answer}</div>
                    </Collapse>
                </div>
            })}
        </div>
    </div>
}